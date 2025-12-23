---
layout: default
title: People
permalink: /locations/
---

<h4> Click a tab to read more: </h4>
<em> Clicking map opens in a new tab </em>

<!-- Buttons -->
<div class="tab">
<button class="tablinks" onclick="openCity(event, 'maps')" id="defaultOpen">World & Regional</button>
<button class="tablinks" onclick="openCity(event, 'stillhaven')">Stillhaven</button>
</div>

<!-- Maps -->
<div id="maps" class="tabcontent tabborder">
  <div class="map-grid two-col">
    <figure class="map-figure">
      <a href="{{ site.baseurl }}/assets/images/maps/heartlands.jpg" target="_blank">
        <img src="{{ site.baseurl }}/assets/images/maps/heartlands.jpg"
             alt="Map of the Heartlands">
      </a>
      <figcaption>The Heartlands</figcaption>
    </figure>
    <figure class="map-figure">
      <a href="{{ site.baseurl }}/assets/images/maps/emerald_coast.jpg" target="_blank">
        <img src="{{ site.baseurl }}/assets/images/maps/emerald_coast.jpg"
             alt="Map of the Emerald Coast">
      </a>
      <figcaption>The Emerald Coast</figcaption>
    </figure>
  </div>

  <hr>

  <h5>Regional maps</h5>

  <figure class="map-figure">
    <a href="{{ site.baseurl }}/assets/images/maps/arajin_vale.jpg" target="_blank">
      <img src="{{ site.baseurl }}/assets/images/maps/arajin_vale.jpg"
           alt="Arajin Vale regional map">
    </a>
    <figcaption>Arajin Vale</figcaption>
  </figure>

</div>

<!-- Stillhaven -->
<div id="stillhaven" class="tabcontent tabborder">
    <figure class="map-figure">
        <a href="{{ site.baseurl }}/assets/images/maps/stillhaven.png" target="_blank">
            <img src="{{ site.baseurl }}/assets/images/maps/stillhaven.png" alt="Stillhaven town map">
        </a>
    </figure>
</div>