# ADVENTURE-LOG

## Overview

Adventure-Log is a web app created to track generic stats, and take notes for TTRPG sessions.
Currently it allows the users to input custom resources (health points, spell slots, etc.) that they
want to keep track of during their game sessions. They can upload or download these trackers as json data to use them
between sessions.

### The Problem
While playing Dungeons and Dragons I got really tired of having to constantly switch between my character sheet and my notes.

<p float="left">
    <img align="middle" src="images\char-sheet.PNG" alt="char-sheet" width=40%/>
    <img align="middle" src="images\notes.PNG" alt="session-notes" width=40%/>
</p>

I realized that there were actually only a handful of things from my character sheet that needed
to be tracked each session (spell slots, HP, and a few other actions). I thought wouldn't it be great if I could
combine the few things I wanted into a web page that also allowed me to take notes?

### The Solution
Which led to the creation of my glorious [Prototype](https://adventure-log-two.vercel.app/Trackers)! It had all the
functionalities that I wanted, but boy was it ROUGH to look at. I really wanted to create something that other
people would enjoy using, and want to use. Unfortunately looking at my prototype did not give even me that feeling. :slightly_frowning_face:

:sparkles: Thankfully one of my friends gave me this great layout design! :sparkles:

<img src="https://raw.githubusercontent.com/mcclellangg/adventure-log/dev/images/adventure-log-v2.png" alt="layout-design" width="400"/>

With this in hand I completely redid the UX/UI (which was also a great chance to refactor my code in general) :smile:!

You can find the [current design here](https://adventure-log-two.vercel.app/Log)!

### Next Steps
Current List of possible upgrades:
- Increase responsiveness
- Add a layout for mobile
- Implement users and authentication
- Save info in sessions
- Turn the notes section into an interactive parser that looks for keywords like heal, damage, or loot
