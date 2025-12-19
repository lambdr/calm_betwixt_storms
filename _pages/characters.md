---
layout: default
title: People
permalink: /pages/characters/
---

<div class="tab">
  <button class="tablinks active" onclick="openCity(event, 'PC')" id="defaultOpen">
    Players
  </button>
</div>

<div id="PC" class="tabcontent" style="display:block;">

<div id="top_pc">
  <div id="main">
    <br>
    <h2>Meet The Party</h2>
    <em>Hover over an image to see it larger</em>
  </div>

  <div id="img">
    <button id="clickme" onclick="changeBack();"> ⚔ </button>
    <br>
    <button id="clickme" onclick="changeImage();"> 🥂 </button>
  </div>
</div>

{% assign party = site.people | where: "type", "party" | sort: "order" %}

<table>
  <tbody>
    {% for pc in party %}
    <tr>
      <td>
        <img
          src="/_assets/images/{{ pc.image }}"
          alt="{{ pc.name }}"
          class="avatar1 down"
          id="{{ pc.name | replace: ' ', '' }}"
        >
      </td>

      <td>
        <center>
          <h2>{{ pc.name }}</h2>
          Level {{ pc.level }} {{ pc.class }}
        </center>
      </td>

      <td>
        {{ pc.content | markdownify }}
      </td>
    </tr>
    {% endfor %}
  </tbody>
</table>

</div> <!-- end PC tab -->
