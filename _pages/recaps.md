---
layout: default
title: People
permalink: /recaps/
---
{% assign current_month = "Yonolar" %}

<div id="TOC">
<h2>Campaign Calendar</h2>
<center>
{% for working_month in site.data.calendar %}
{% assign month = working_month[1] %}
<div id="{{ month.slug }}" class="tabcontent"
    {% if month.month == current_month %}
        style="display:block;"
    {% else %}
        style="display:none;"
    {% endif %}
>

      
    <table id="calendar">
    <caption>
        <h3>
            <button 
            class="tablinks" 
            onclick="openCity(event, &#39;m{{month.month_number | minus: 1}}&#39;)">  ←  	</button> 
            {{ month.month }}
            <button class="tablinks" onclick="openCity(event, &#39;m{{month.month_number | plus: 1}}&#39;)"> →  </button>
        </h3>
        <h5>{{ month.year }} A.Y.</h5>
    </caption>

    </table>
    <table id="calendar" class="border">
    <tbody>
        <tr class="weekdays">
            {% for i in (1..10) %} <th scope="col"></th> {% endfor %} 
        </tr>
        {% for day in (1..month.days_in_month) %}
        {% assign day_mod = day | modulo: 10 %}
        {% if day_mod == 1 %}
            <tr class="days">
        {% endif %}

        <td class="day parent">
            <div class="date">{{ day }}</div>

            <!-- Holidays & Misc -->

            {% if month.events and month.events[day] %}
                {% for event in month.events[day] %}
                    <div class="event {{ event.type }} {% if event.length and event.length > 1%} child {% endif %}">
                        {{ event.name }}
                    </div>
                {% endfor %}
            {% endif %}

            <!-- Recaps -->
            {% assign month_recaps = site.recaps | where: "start_month", month.month %}

            {% if month_recaps %}
                {% for recap in month_recaps %}
                    {% if recap.start_date == day %}
                        <div class="event session"
                                onclick="location.href='#s{{ recap.num }}';">
                                Session {{ recap.num }}
                            <div class="event-desc">{{ recap.title }}</div>
                        </div>
                    {% endif %}
                {% endfor %}
            {% endif %}
        </td>
    {% if day_mod == 0 or day == month.days_in_month %}
        </tr>
    {% endif %}
    {% endfor %}
    </tbody>
  </table>

</div>
{% endfor %}
</center>
<em> Click on a session to read the recap. </em>
<br/><hr><br/>


<h2>Session Recaps</h2>
<br/>

<div id="recap-list">
    {% assign recaps = site.recaps | sort: "date" | reverse %}

    {% for session in recaps %}
        <div class="recap" id="s{{ session.num }}">

        <h3>Session {{session.num}}: {{ session.title }}</h3>
        <h5>Game played: {{ session.date | date: "%B %-d, %Y" }} </h5>
        <h5> 
            In game date: {{ session.start_date }} {{ session.start_month}}
            {% if session.end_date != session.start_date %}
                - {{session.end_date}} {{session.end_month}}
            {% endif %}
        </h5>

        <br/>

        {{ session.content | markdownify }}

        <p><em>
            XP per player: {{ session.xp }}
            {% if session.advance %}
                ; All party members advanced to level {{ session.advance }}.
            {% endif %}
        </em></p>
        <a href="#TOC"> Return to top</a>
        <br/><hr><br/>
        </div>
    
    {% endfor %}

</div>
</div>