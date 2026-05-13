---
layout: default
title: Home
---

{% assign info = site.data.party_info %}

<div class="party_page">
<h2> Quests / Rumors / Things to follow up on </h2>
<br>
<div id='frame'>
	<a class="help">
	    <div class='pin'></div>
	    <div class='helptext'>Help wanted: </div>
	    <div class='pin'></div>	
    </a>
    {% for quest in info.quests %}
        <a class="note sticky">
            <div class='pin'></div>
            <div class='jobtext'>{{quest.description}}</div>
        </a>
    {% endfor %}
</div>
<br><hr><br>
<h2>Party loot </h2>
<div class="loot">
    <!-- Party Fund -->
	<div> 
        <center>
		    <h3> Party Fund</h3>
		    <span class="coin" style="border: 3px solid #E5E4E2; ">
                <img src="{{ site.baseurl}}/assets/images/misc/platinum_coin.jpg">
                PP: {{ info.pp }}
            </span>
            <br>
		    <span class="coin" style="border: 3px solid #FFD700;">
                <img src="{{ site.baseurl}}/assets/images/misc/gold_coin.jpg">
                GP: {{ info.gp }}
            </span>
            <br>
		    <span class="coin" style="border: 3px solid #C0C0C0;">
                <img src="{{ site.baseurl}}/assets/images/misc/silver_coin.jpg">
                SP: {{ info.sp }}
            </span>
            <br>
		    <span class="coin" style="border: 3px solid #B87333;">
                <img src="{{ site.baseurl}}/assets/images/misc/copper_coin.jpg">
                CP: {{ info.cp }}
            </span>
            <br>
        </center>
	</div> 
    <!-- Party Inventory -->
    <div>
        <h3>Party Loot</h3>
        {% for player in info.loot.players %}
            <h4>{{player.name}}:</h4>
            <ul>
            {% for item in player.items %}
                {% if item.magic %}<em>{% endif %}
                <li>{{item.name}}</li>
                {% if item.magic %}</em>{% endif %}
            {% endfor %}
            </ul>
        {% endfor %}
    </div>
</div>
</div>
