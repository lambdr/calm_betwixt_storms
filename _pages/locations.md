---
layout: default
title: Locations
permalink: /locations/
---

<h4> Click a tab to read more: </h4>
<em> Clicking map opens in a new tab </em>

<!-- Buttons -->
<div class="tab">
<button class="tablinks" onclick="openCity(event, 'maps')" id="defaultOpen">World & Regional</button>
<button class="tablinks" onclick="openCity(event, 'stillhaven')">Stillhaven</button>
<button class="tablinks" onclick="openCity(event, 'inlarut')">Inlarut</button>
</div>

<!-- Maps -->
<div id="maps" class="tabcontent tabborder">
  <div class="map-grid two-col">
    <figure class="map-figure">
        <!-- Image Slider Removed for now because it is too buggy -->
        <!--<div class="image-slider">
            <div class="overlay">
                <a href="{{ site.baseurl }}/assets/images/maps/heartlands_political.jpg" target="_blank">
                    <img  src="{{ site.baseurl }}/assets/images/maps/heartlands_political.jpg" alt="Map of the Heartlands with political boundaries">
                </a>
            </div>
            <a href="{{ site.baseurl }}/assets/images/maps/heartlands.jpg" target="_blank">
                <img  src="{{ site.baseurl }}/assets/images/maps/heartlands.jpg" alt="Map of the Heartlands">
            </a>
        </div>-->
          <a href="{{ site.baseurl }}/assets/images/maps/heartlands.jpg" target="_blank">
                <img  src="{{ site.baseurl }}/assets/images/maps/heartlands.jpg" alt="Map of the Heartlands">
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
  <div class="map-grid three-col">
    <figure class="map-figure">
    <a href="{{ site.baseurl }}/assets/images/maps/arajin_vale.jpg" target="_blank">
      <img src="{{ site.baseurl }}/assets/images/maps/arajin_vale.jpg"
           alt="Arajin Vale regional map">
    </a>
    <figcaption>Arajin Vale</figcaption>
    </figure>
    <figure class="map-figure">
    <a href="{{ site.baseurl }}/assets/images/maps/northwestern_gilvry.jpg" target="_blank">
      <img src="{{ site.baseurl }}/assets/images/maps/northwestern_gilvry.jpg"
           alt="Northwestern Gilvry regional map">
    </a>
    <figcaption>Northwestern Gilvry</figcaption>
    </figure>
    <figure class="map-figure">
      <a href="{{ site.baseurl }}/assets/images/maps/acheron_range.jpg" target="_blank">
        <img src="{{ site.baseurl }}/assets/images/maps/acheron_range.jpg"
             alt="Regional Map of the Acheron Range">
      </a>
      <figcaption>Acheron Range</figcaption>
    </figure>
  </div>
  

</div>

<!-- Stillhaven -->
<div id="stillhaven" class="tabcontent tabborder">
    <figure class="map-figure">
        <a href="{{ site.baseurl }}/assets/images/maps/stillhaven.png" target="_blank">
            <img src="{{ site.baseurl }}/assets/images/maps/stillhaven.png" alt="Stillhaven town map">
        </a>
    </figure>
</div>


<!-- Inlarut -->
<div id="inlarut" class="tabcontent tabborder">
    <figure class="map-figure">
        <a href="{{ site.baseurl }}/assets/images/maps/inlarut.jpg" target="_blank">
            <img src="{{ site.baseurl }}/assets/images/maps/inlarut.jpg" alt="Inlarut city map" style="width:60%;border-color: 2px #000">
        </a>
    </figure>
    <p>Points of Interest </p>
    <p>
      1. Wilamar Run <br/>
      2. Gate of Princes <br/>
      6. The Grinning Goblin <br/>
      7. Ged's General Goods <br/>
      8. The Silver Hoof <br/>
      24. The Grand Market <br/>
      30. The College of the Naga <br/>
      43. The Prince's Palace
    </p>
</div>