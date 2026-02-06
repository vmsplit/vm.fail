---
layout: default
---

<pre class="ascii-banner">
            ___       ___
 __ ____ _ / _|__ _(_) |
 \ V / _` ||  _/ _` | | |
  \_/\__,_||_| \__,_|_|_|
</pre>

<p><span class="hi">vm.fail</span> <span class="dim">{low-level systems research}</span></p>

# about

systems security research. hypervisors, rootkits, cache manipulation, shellcode.
arm64 and x86_64. occasionally firmware.

contact: [torsten.oehlenschlager@tutanota.de](mailto:torsten.oehlenschlager@tutanota.de)

# code search

<div class="code-search">
<input type="text" id="search-input" placeholder="search repositories..." />
<select id="repo-select">
<option value="">select repository</option>
{% for p in site.data.projects.self %}
<option value="{{ p.repo }}">{{ p.name }}</option>
{% endfor %}
{% for p in site.data.projects.wintermute %}
<option value="{{ p.repo }}">{{ p.name }}</option>
{% endfor %}
</select>
<button id="search-btn">search</button>
</div>

<div id="search-results"></div>

# projects

{% for p in site.data.projects.self %}
<details class="project">
<summary>
<span class="project-name">~ {{ p.name }}</span>{% if p.wip %}<span class="tag tag--wip">[wip]</span>{% endif %}{% if p.archived %}<span class="tag tag--archived">[archived]</span>{% endif %}
<span class="project-desc dim">{{ p.desc }}</span>
</summary>
<div class="project-content">

<p class="project-details">{{ p.details }}</p>

<p class="project-link"><a href="{{ p.url }}">view source &rarr;</a></p>
</div>
</details>
{% endfor %}

# collaborators

## ~ wintermute

{% for p in site.data.projects.wintermute %}
<details class="project">
<summary>
<span class="project-name">{{ p.name }}</span>{% if p.wip %}<span class="tag tag--wip">[wip]</span>{% endif %}{% if p.archived %}<span class="tag tag--archived">[archived]</span>{% endif %}
<span class="project-desc dim">{{ p.desc }}</span>
</summary>
<div class="project-content">

<p class="project-details">{{ p.details }}</p>

<p class="project-link"><a href="{{ p.url }}">view source &rarr;</a></p>
</div>
</details>
{% endfor %}

# hvICE

<pre class="ascii-art">
         ___         ___         ___
        /\  \       /\  \       /\  \
       _\:\  \     _\:\  \     _\:\  \
      /\/::\__\   /\/::\__\   /\/::\__\
      \::/\/__/   \::/\/__/   \::/\/__/
       \:\__\___   \:\__\___   \:\__\___
        \/__/\  \   \/__/\  \   \/__/\  \
           /::\  \     /::\  \     /::\  \
          /:/\:\__\   /:/\:\__\   /:/\:\__\
          \:\ \/__/   \:\ \/__/   \:\ \/__/
           \:\__\___   \:\__\___   \:\__\___
            \/__/\  \   \/__/\  \   \/__/\  \
               /::\  \     /::\  \     /::\  \
              /::\:\__\   /::\:\__\   /::\:\__\
              \:\:\/  /   \:\:\/  /   \:\:\/  /
               \:\/  /     \:\/  /     \:\/  / 
                \/__/       \/__/       \/__/ 
</pre>

<p class="dim">hypervisor-enforced kernel integrity via EPT write protection. xen + libvmi.</p>

<script>
(function() {
  var WORKER_URL = 'https://vm-fail.torsten-oehlenschlager.workers.dev';
  var searchBtn = document.getElementById('search-btn');
  var searchInput = document.getElementById('search-input');
  var repoSelect = document.getElementById('repo-select');
  var resultsDiv = document.getElementById('search-results');

  function searchCode() {
    var query = searchInput.value.trim();
    var repo = repoSelect.value;
    if (!query || !repo) {
      resultsDiv.innerHTML = '<p class="dim">select a repository and enter a search term</p>';
      return;
    }
    resultsDiv.innerHTML = '<p class="dim">searching...</p>';
    fetch(WORKER_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: query + ' repo:' + repo })
    })
      .then(function(r) { return r.json(); })
      .then(function(data) {
        if (data.error) {
          resultsDiv.innerHTML = '<p class="dim">error: ' + data.error + '</p>';
          return;
        }
        if (!data.items || data.items.length === 0) {
          resultsDiv.innerHTML = '<p class="dim">no results</p>';
          return;
        }
        var html = '<ul class="search-results-list">';
        data.items.slice(0, 10).forEach(function(item) {
          html += '<li><a href="' + item.html_url + '">' + item.path + '</a></li>';
        });
        html += '</ul>';
        resultsDiv.innerHTML = html;
      })
      .catch(function(e) {
        resultsDiv.innerHTML = '<p class="dim">error: ' + e.message + '</p>';
      });
  }

  searchBtn.addEventListener('click', searchCode);
  searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') searchCode();
  });
})();
</script>
