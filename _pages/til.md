---
layout: default
---

<section class="sec">
  <h2>TIL</h2>
  <ul class="body rows">
  {% for post in site.til reversed %}<li><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a><time class="d" datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%b %Y" }}</time></li>
  {% endfor %}
  </ul>
</section>
