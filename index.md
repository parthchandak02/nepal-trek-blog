---
layout: home
title: Home
---

# Building Schools, Building Hope

A journey through Nepal with BuildOn

## Latest Posts

{% for post in site.posts %}
  <article class="post-preview">
    <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
    <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time>
    {% if post.image %}
    <img src="{{ post.image | relative_url }}" alt="{{ post.title }}">
    {% endif %}
  </article>
{% endfor %}

## Photo Gallery

<section class="gallery">
  {% for image in site.static_files %}
    {% if image.path contains 'assets/images' %}
    <div class="gallery-item">
      <figure>
        <img src="{{ image.path | relative_url }}" alt="Trek Photo">
        <figcaption>Nepal Trek</figcaption>
      </figure>
    </div>
    {% endif %}
  {% endfor %}
</section>
