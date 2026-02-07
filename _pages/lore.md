---
layout: default
title: World Lore
permalink: /lore/
---
<!-- Buttons -->
<div class="tab">
<button class="tablinks" onclick="openCity(event, 'states')" id="defaultOpen">Setting Info</button>
<button class="tablinks" onclick="openCity(event, 'religion')">Religion</button>
<button class="tablinks" onclick="openCity(event, 'fiction')">World Fiction</button>
</div>

<div class="lore">
<div id="states" class="tabcontent tabborder">
{% include lore/states.html %}
</div>

<div id="religion" class="tabcontent tabborder">
{% include lore/religion.html %}
</div>

<div id="fiction" class="tabcontent tabborder">
{% include lore/fiction.html %}
</div>
</div>