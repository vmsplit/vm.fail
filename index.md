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

# icekit

<pre class="ascii-art">
                                   ___           ___           ___                                
                                  /\__\         /\__\         /|  |                           
                     ___         /:/  /        /:/ _/_       |:|  |        ___           ___     
                    /\__\       /:/  /        /:/ /\__\      |:|  |       /\__\         /\__\    
                   /:/__/      /:/  /  ___   /:/ /:/ _/_    _|:|  |      /:/__/        /:/  /    
                  /::\  \     /:/__/  /\__\ /:/_/:/ /\__\ /\ |:|__|____ /::\  \       /:/__/     
                  \/:\  \__  \:\  \ /:/  / \:\/:/ /:/  / \:\/::::/__/ \/:\  \__   /::\  \     
                     \:\/\__\  \:\  /:/  /   \::/_/:/  /   \::/~~/~        \:\/\__\ /:/\:\  \    
                      \::/  /   \:\/:/  /     \:\/:/  /     \:\__\         /:/  /       \:\__\  
                      /:/  /     \::/  /       \::/  /       \:\__\         /:/  /       \:\__\  
                      \/__/       \/__/         \/__/         \/__/         \/__/         \/__/     
</pre>

<p class="dim">cache-as-ram + CAT L3 cache line locking on x86_64. evades memory introspection via cache incoherence.</p>

# checkm8

<pre class="ascii-art">
                     __               __             _______ 
               .----|  |--.-----.----|  |--.--------|   _   |
               |  __|     |  -__|  __|    <|        |.  |   |
               |____|__|__|_____|____|__|__|__|__|__|.  _   |
                                                    |:  1   |
                                                    |::.. . |
                                                    `-------'
</pre>

<p class="dim">coreboot + tboot measured launch research. intel TXT trusted boot chain.</p>

# icevmm

<pre class="ascii-art">
#################################
 ___ ___ _____   ____  __ __  __ 
|_ _/ __| __\ \ / /  \/  |  \/  |
 | | (__| _| \ V /| |\/| | |\/| |
|___\___|___| \_/ |_|  |_|_|  |_|   
                                         
#################################
</pre>

<p class="dim">minimal arm64 type-1 hypervisor. EL2 virtualization experiments.</p>

# linebacker

<pre class="ascii-art">
 ____   ___  _____  _____  _____  _____  _____  __ ___ _____  _____ 
/  _/  /___\/  _  \/   __\/  _  \/  _  \/     \|  |  //   __\/  _  \
|  |---|   ||  |  ||   __||  _  <|  _  ||  |--||  _ < |   __||  _  <
\_____\/___/\__|__/\_____\/_____\/__|__/\_____/_|__|__\_____\/__|\_/
</pre>

<p class="dim">kernel-level defense research.</p>

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

# kvmrk

<pre class="ascii-art">
                                .------..------..------..------..------.
                                |K.--. ||V.--. ||M.--. ||R.--. ||K.--. |
                                | :/\: || :(): || (\/ ) || :(): || :/\: |
                                | :\/\: || ()() || :\/\: || ()() || :\/\: |
                                | '--'K|| '--'V|| '--'M|| '--'R|| '--'K|
                                `------'`------'`------'`------'`------'
</pre>

<p class="dim">KVM exploitation PoC for ARM. based on Singh's research.</p>

# arm64_silent_syscall_hook

<pre class="ascii-art">
            _        __    _
  _______ _(_)__    / /__ (_)__  ___ _
 / __/ _ `/ / _ \  /  '_// / _ \/ _ `/
/_/  \_,_/_/_//_/ /_/_\_\/ _//_/_\_, /
                               /___/
</pre>

<p class="dim">stealthy syscall interception without modifying syscall table.</p>

# ramiel

<pre class="ascii-art">
                                             #
                                         .%%( (
                                      /%%%%%%    *#
                                    ,%%%%%%%%       (
                                 %%%%%%%%%%%%         ,(
                              *%%%%%%%%%%%%%%,           (
                           #&%%%%%%%%%%%%%%%&@@             /
                         #%%%%%%%%%%&@  %%%%  %%%%%%@,        &
                      %%%%%%@.*%%%%%%%%%%%%% (%%%%%%%%%%%%%@     *
                    *%%%%%%%%%%%%%%%%%%%%%%% &&%%%%%%%%%%%%%%%%%%%&*/
                      /@@@@%%%%%%%%%%%%%%%%& %&%%%%%%%%%%%%%%%%%%&,
                        ,#@@@@@@@&%%%%%%%%%&.%&%%%%%%&%%%%%%%%% (
                            @@@@@@@@@@@@%%%& %%%%%%%%%%%%%%%,
                              #@@@@@@@@@@&@% %%%%%%%%%%%%&/
                                 (@@@@@@&@@@ %%%%%%%%%%,
                                   *@@@@@@@@ %%%%%%%//
                                       &@@@@ %%%%%/
                                         /@@*%%*
                                            @
</pre>

<p class="dim">arm64 rootkit research. kernel-level persistence and evasion.</p>
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