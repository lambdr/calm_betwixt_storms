---
layout: default
title: People
permalink: /characters/
---

<h4> Click a tab to read more: </h4>

<div class="tab">
  <button class="tablinks active" onclick="openCity(event, 'PC')">Players</button>
  <button class="tablinks" onclick="openCity(event, 'arajin')">Arajin Vale</button>
  <button class="tablinks" onclick="openCity(event, 'stillhaven')">Stillhaven</button>
</div>


<div id="PC" class="tabcontent" style="display:block;">

<div id="top_pc">
  <div id="main">
    <h2>Meet The Party</h2>
    <em>Hover over an image to see it larger</em>
  </div>

  <!-- this is code for multiple images, e.g. party attire and normal -->
  <!--<div id="img">
    <button id="clickme" onclick="changeBack();"> ⚔ </button>
    <br>
    <button id="clickme" onclick="changeImage();"> 🥂 </button>
  </div> -->
</div>

{% assign party = site.party | sort: "name" %}

<table class="char">
  <tbody>
    {% for pc in party %}
    <tr>
      <td style="width: 15vw;">
        <img
          src="{{ site.baseurl }}/assets/images/characters/{{ pc.image }}"
          alt="{{ pc.name }}"
          class="avatar"
          id="{{ pc.name | replace: ' ', '' }}"
        >
      </td>

      <td style="width: 15vw;">
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

{% for place in site.data.npcs %}
<div id="{{ place[1].slug }}" class="tabcontent">
  <h3>NPCs you have met in {{ place[1].location }}</h3>
  <br/>
  {% for category in place[1].categories %}
    <table class="char npc">
      <th colspan="2">
        <i class="fa {{ category.icon }}"></i>
        {{ category.name }}
      </th>
    <col style="width:30%">
    <col style="width:70%">

      {% for npc in category.npcs %}
      <tr>
        <td><strong>{{ npc.name }}</strong></td>
        <td>{{ npc.description }}</td>
      </tr>
      {% endfor %}
    </table>
    <br>
  {% endfor %}
</div>
{% endfor %}