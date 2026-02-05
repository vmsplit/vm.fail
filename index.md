---
layout: default
title: vm.fail
---

<span class="hi">vm.fail</span> <span class="dim">{low-level systems research}</span>

# About

Systems security research. Hypervisors, rootkits, cache manipulation, shellcode.
ARM64 and x86_64. Occasionally firmware.


# Projects

{% for p in site.data.projects.self %}
## [{{ p.name }}]({{ p.url }}){% if p.wip %}<span class="tag tag--wip">[wip]</span>{% endif %}{% if p.archived %}<span class="tag tag--archived">[archived]</span>{% endif %}

{{ p.desc }}

{% endfor %}

# Collaborators

### wintermute

{% for p in site.data.projects.wintermute %}
- [{{ p.name }}]({{ p.url }}){% if p.archived %}<span class="tag tag--archived">[archived]</span>{% endif %} — {{ p.desc }}
{% endfor %}


# Contact

<vmsplit@pm.me>
