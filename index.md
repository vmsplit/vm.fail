---
layout: default
---

<pre class="ascii-banner">
                  __           _  _
 _  __ _ __ ___  / _| __ _.   (_)| |
\ \/ /| '_ ` _ \| |_ / _` |   | || |
 \  / | | | | | |  _| (_| | _ | || |
  \/  |_| |_| |_|_|  \__,_|(_)|_||_|
</pre>

<p><span class="hi">vm.fail</span> <span class="dim">{low-level systems research}</span></p>

# about

systems security research. hypervisors, rootkits, cache manipulation, shellcode.
arm64 and x86_64. occasionally firmware.

contact: [torsten.oehlenschlager@tutanota.de](mailto:torsten.oehlenschlager@tutanota.de)

# code search

<div class="code-search">
<div class="search-header"><span class="search-icon">&#x2315;</span> search</div>
<div class="search-controls">
<input type="text" id="search-input" placeholder="query..." />
<select id="repo-select">
<option value="">repo</option>
{% for p in site.data.projects.self %}
<option value="{{ p.repo }}">{{ p.name }}</option>
{% endfor %}
{% for p in site.data.projects.wintermute %}
<option value="{{ p.repo }}">{{ p.name }}</option>
{% endfor %}
</select>
<button id="search-btn">&rarr;</button>
</div>
</div>

<div id="search-results"></div>

# projects

<details class="project">
<summary>
<span class="project-name">~ nebula</span>
<span class="project-desc dim">arm64 linux position-independent shellcode framework</span>
</summary>
<div class="project-content">
<p class="project-details">resolves symbols at runtime via /proc/self/maps parsing. djb2 hash for module/symbol lookup. inline syscalls.</p>
<p class="project-link"><a href="https://github.com/vmsplit/nebula">view source &rarr;</a></p>
</div>
</details>

<details class="project">
<summary>
<span class="project-name">~ icekit</span>
<span class="project-desc dim">cache-as-ram + CAT L3 cache line locking on x86_64</span>
</summary>
<div class="project-content">
<pre class="ascii-art">                                   ___           ___           ___                               
                                  /\__\         /\__\         /|  |                           
                     ___         /:/  /        /:/ _/_       |:|  |        ___           ___     
                    /\__\       /:/  /        /:/ /\__\      |:|  |       /\__\         /\__\    
                   /:/__/      /:/  /  ___   /:/ /:/ _/_    _|:|  |      /:/__/        /:/  /    
                  /::\  \     /:/__/  /\__\ /:/_/:/ /\__\ /\ |:|__|____ /::\  \       /:/__/     
                  \/:\  \__  \:\  \ /:/  / \:\/:/ /:/  / \:\/::::/__/ \/:\  \__   /::\  \     
                     \:\/\__\  \:\  /:/  /   \::/_/:/  /   \::/~~/~        \:\/\__\ /:/\:\  \    
                      \::/  /   \:\/:/  /     \:\/:/  /     \:\__\         /:/  /       \:\__\  
                      /:/  /     \::/  /       \::/  /       \:\__\        /:/  /       \:\__\  
                      \/__/       \/__/         \/__/         \/__/        \/__/         \/__/</pre>
<p class="project-details">port of CacheKit to x86_64. evades memory introspection via cache incoherence using AMD l3_cat.</p>
<p class="project-link"><a href="https://github.com/vmsplit/icekit">view source &rarr;</a></p>
</div>
</details>

<details class="project">
<summary>
<span class="project-name">~ checkm8</span>
<span class="project-desc dim">coreboot + tboot measured launch research</span>
</summary>
<div class="project-content">
<pre class="ascii-art">                     __               __             _______ 
               .----|  |--.-----.----|  |--.--------|   _   |
               |  __|     |  -__|  __|    <|        |.  |   |
               |____|__|__|_____|____|__|__|__|__|__|.  _   |
                                                    |:  1   |
                                                    |::.. . |
                                                    `-------'</pre>
<p class="project-details">intel TXT measured launch with coreboot firmware. trusted boot chain experiments.</p>
<p class="project-link"><a href="https://github.com/vmsplit/checkm8">view source &rarr;</a></p>
</div>
</details>

<details class="project">
<summary>
<span class="project-name">~ icevmm</span><span class="tag tag--wip">[wip]</span>
<span class="project-desc dim">minimal arm64 hypervisor</span>
</summary>
<div class="project-content">
<pre class="ascii-art">#################################
 ___ ___ _____   ____  __ __  __ 
|_ _/ __| __\ \ / /  \/  |  \/  |
 | | (__| _| \ V /| |\/| | |\/| |
|___\___|___| \_/ |_|  |_|_|  |_|   
                                         
#################################</pre>
<p class="project-details">baremetal type-1 hypervisor for arm64. EL2 virtualization experiments.</p>
<p class="project-link"><a href="https://github.com/vmsplit/IceVMM">view source &rarr;</a></p>
</div>
</details>

<details class="project">
<summary>
<span class="project-name">~ linebacker</span><span class="tag tag--wip">[wip]</span>
<span class="project-desc dim">kernel-level defense research</span>
</summary>
<div class="project-content">
<pre class="ascii-art"> ____   ___  _____  _____  _____  _____  _____  __ ___ _____  _____ 
/  _/  /___\/  _  \/   __\/  _  \/  _  \/     \|  |  //   __\/  _  \
|  |---|   ||  |  ||   __||  _  <|  _  ||  |--||  _ < |   __||  _  <
\_____\/___/\__|__/\_____\/_____\/__|__/\_____/|__|__\\_____\/__|\__/</pre>
<p class="project-details">kernel-level defense research.</p>
<p class="project-link"><a href="https://github.com/vmsplit/linebacker">view source &rarr;</a></p>
</div>
</details>

<details class="project">
<summary>
<span class="project-name">~ kvmrsk</span>
<span class="project-desc dim">rust rewrite of kvmrk KVM exploitation PoC</span>
</summary>
<div class="project-content">
<p class="project-details">based on Singh's paper on KVM's insecure design on ARM.</p>
<p class="project-link"><a href="https://github.com/vmsplit/kvmrsk">view source &rarr;</a></p>
</div>
</details>

# collaborators

## ~ wintermute

<details class="project">
<summary>
<span class="project-name">kvmrk</span>
<span class="project-desc dim">KVM exploitation PoC for ARM</span>
</summary>
<div class="project-content">
<pre class="ascii-art">.------..------..------..------..------.
|K.--. ||V.--. ||M.--. ||R.--. ||K.--. |
| :/\: || :(): || (\/\) || :(): || :/\: |
| :\/:: || ()() || :\/:: || ()() || :\/:: |
| '--'K|| '--'V|| '--'M|| '--'R|| '--'K|
`------'`------'`------'`------'`------'</pre>
<p class="project-details">original implementation of Singh's KVM ARM security research.</p>
<p class="project-link"><a href="https://github.com/3intermute/kvmrk">view source &rarr;</a></p>
</div>
</details>

<details class="project">
<summary>
<span class="project-name">hvICE</span>
<span class="project-desc dim">hypervisor-based introspection evasion</span>
</summary>
<div class="project-content">
<pre class="ascii-art">         ___         ___         ___
        /\  \       /\  \       /\  \
       _\:\  \     _\:\  \     _\:\  \
      /\/::\__\   /\/::\__\   /\/::\__\
      \::/\/__/   \::/\/__/   \::/\/__/
       \:\__\      \:\__\      \:\__\
        \/__/      \/__/      \/__/\
           /::\        /::\        /::\
          /:/\:\      /:/\:\      /:/\:\
          \:\ \:\     \:\ \:\     \:\ \:\
           \:\/::\     \:\/::\     \:\/::\
            \/__/      \/__/      \/__/\
               /::\        /::\        /::\
              /::\:\      /::\:\      /::\:\
              \:\:\/      \:\:\/      \:\:\/ 
               \:\/        \:\/        \:\/ 
                \/__/       \/__/       \/__/</pre>
<p class="project-details">hypervisor techniques for evading memory introspection.</p>
<p class="project-link"><a href="https://github.com/3intermute/hvICE">view source &rarr;</a></p>
</div>
</details>

<details class="project">
<summary>
<span class="project-name">arm64_silent_syscall_hook</span>
<span class="project-desc dim">silent syscall hooking on arm64</span>
</summary>
<div class="project-content">
<pre class="ascii-art">            _        __    _
  _______ _(_)__    / /__ (_)__  ___ _
 / __/ _ `/ / _ \  /  '_// / _ \/ _ `/
/_/  \_,_/_/_//_/ /_/_\_\/__/\_, /
                               /___/</pre>
<p class="project-details">stealthy syscall interception without modifying syscall table.</p>
<p class="project-link"><a href="https://github.com/3intermute/arm64_silent_syscall_hook">view source &rarr;</a></p>
</div>
</details>

<details class="project">
<summary>
<span class="project-name">ramiel</span>
<span class="project-desc dim">arm64 rootkit research</span>
</summary>
<div class="project-content">
<pre class="ascii-art">                                             #
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
                                            @</pre>
<p class="project-details">kernel-level persistence and evasion techniques for arm64 linux.</p>
<p class="project-link"><a href="https://github.com/3intermute/ramiel">view source &rarr;</a></p>
</div>
</details>

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
        var parts = repo.split('/');
        if (parts.length !== 2) {
          resultsDiv.innerHTML = '<p class="dim">invalid repository format</p>';
          return;
        }
        var owner = parts[0];
        var repoName = parts[1];

        var ul = document.createElement('ul');
        ul.className = 'search-results-list';
        data.items.slice(0, 10).forEach(function(item) {
          var li = document.createElement('li');
          var a = document.createElement('a');
          a.textContent = item.path;
          a.dataset.owner = owner;
          a.dataset.repo = repoName;
          a.dataset.path = item.path;
          a.dataset.url = item.html_url;
          li.appendChild(a);
          ul.appendChild(li);
        });
        resultsDiv.innerHTML = '';
        resultsDiv.appendChild(ul);
      })
      .catch(function(e) {
        resultsDiv.innerHTML = '<p class="dim">error: ' + e.message + '</p>';
      });
  }

  // Event delegation for search result clicks (set up once)
  resultsDiv.onclick = function(e) {
    var target = e.target;
    if (target.tagName === 'A' && target.dataset.path) {
      e.preventDefault();
      e.stopPropagation();
      window.vmfailOpenViewer(
        target.dataset.owner,
        target.dataset.repo,
        target.dataset.path,
        target.dataset.url
      );
    }
  };

  searchBtn.addEventListener('click', searchCode);
  searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') searchCode();
  });
})();
</script>
