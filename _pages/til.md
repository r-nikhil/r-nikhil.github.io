---
layout: default
---

<section>
<ul class="list">
{% for post in site.til reversed %}
<li><a href="{{ site.baseurl }}{{ post.url }}"><span class="row"><span class="t">{{ post.title }}</span></span><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%b '%y" }}</time></a></li>
{% endfor %}
</ul>
</section>
