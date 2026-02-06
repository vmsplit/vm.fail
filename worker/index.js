export default {
  async fetch(request, env) {
    const corsHeaders = {
      'Access-Control-Allow-Origin': 'https://vm.fail',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405, headers: corsHeaders });
    }

    try {
      const { query } = await request.json();
      if (!query) {
        return new Response(JSON.stringify({ error: 'Missing query' }), {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }

      const res = await fetch(
        `https://api.github.com/search/code?q=${encodeURIComponent(query)}`,
        {
          headers: {
            'Authorization': `Bearer ${env.GITHUB_TOKEN}`,
            'Accept': 'application/vnd.github+json',
            'User-Agent': 'vm-fail-search',
            'X-GitHub-Api-Version': '2022-11-28'
          }
        }
      );

      const data = await res.text();
      return new Response(data, {
        status: res.status,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    } catch (e) {
      return new Response(JSON.stringify({ error: e.message }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      });
    }
  }
};