---
layout: default
---

<pre class="ascii-banner">
             ___       ___
 __ ____ _  / _|__ _(_) |
 \ V / _` ||  _/ _` | | |
  \_/\__,_||_| \__,_|_|_|
</pre>

<p><span class="hi">vm.fail</span> <span class="dim">{low-level systems research}</span></p>

# about

systems security research. hypervisors, rootkits, cache manipulation, shellcode.
arm64 and x86_64. occasionally firmware.

# projects

{% for project in site.data.projects.self %}
<details class="project">
<summary>
<span class="project-name">~ {{ project.name }}</span>{% if project.wip %}<span class="tag tag--wip">[wip]</span>{% endif %}{% if project.archived %}<span class="tag tag--archived">[archived]</span>{% endif %}
<span class="project-desc dim">{{ project.desc }}</span>
</summary>
<div class="project-content">
{% if project.details %}
<p class="project-details">{{ project.details }}</p>
{% endif %}
<p class="project-link"><a href="{{ project.url }}">view source →</a></p>
</div>
</details>
{% endfor %}

# collaborators

## ~ wintermute

{% for project in site.data.projects.wintermute %}
<details class="project">
<summary>
<span class="project-name">{{ project.name }}</span>{% if project.wip %}<span class="tag tag--wip">[wip]</span>{% endif %}{% if project.archived %}<span class="tag tag--archived">[archived]</span>{% endif %}
<span class="project-desc dim">{{ project.desc }}</span>
</summary>
<div class="project-content">
{% if project.details %}
<p class="project-details">{{ project.details }}</p>
{% endif %}
<p class="project-link"><a href="{{ project.url }}">view source →</a></p>
</div>
</details>
{% endfor %}

# icekit

<pre class="ascii-art">
                       ___           ___           ___
                       /\__\         /\__\         /|  |
          ___         /:/  /        /:/ _/_       |:|  |        ___           ___
         /\__\       /:/  /        /:/ /\__\      |:|  |       /\__\         /\__\
        /:/__/      /:/  /  ___   /:/ /:/ _/_   __|:|  |      /:/__/        /:/  /
       /::\  \     /:/__/  /\__\ /:/_/:/ /\__\ /\ |:|__|____ /::\  \       /:/__/
       \/\:\  \__  \:\  \ /:/  / \:\/:/ /:/  / \:\/::::/__/ \/\:\  \__   /::\  \
          ":\/\__\  \:\  /:/  /   \::/_/:/  /   \::/~~/~        ":\/\__\ /:/\:\  \
           \::/  /   \:\/:/  /     \:\/:/  /     \:\~~\          \::/  / \/__\:\  \
           /:/  /     \::/  /       \::/  /       \:\__\         /:/  /       \:\__\
           \/__/       \/__/         \/__/         \/__/         \/__/         \/__/
</pre>

<p class="dim">cache-as-ram + cat l3 cache line locking on x86_64. evades memory introspection via cache incoherence.</p>

# contact

[vmsplit@pm.me](mailto:vmsplit@pm.me)