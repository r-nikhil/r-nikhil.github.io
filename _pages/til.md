---
layout: default

---

<section class="posts">
<ul>
{% for post in site.til %}
<li><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%b '%y" }}</time></li>
{% endfor %}
</ul>
</section>