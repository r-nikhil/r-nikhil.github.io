---
layout: page
title: Random assortment of side projects
---



#### [**LLM Consortium**](https://llm-consortium.rnikhil.com/)

Send your prompt to multiple models and then ask a judge model to synthesize the final response. Based on this [tweet](https://x.com/karpathy/status/1869860858006049259) from Karpathy. Inspired by the [LLM consoritum](https://github.com/irthomasthomas/llm-consortium) project. There is a lot of scope to make the judge/arbiter model better by either using logprobs to evaluate confidence or by adding dynamic confidence weighting based on past responses. 

<div align = "center">
<img  src="/assets/files/consortium.png">
</div>

#### [**GTOInspector** ](https://www.youtube.com/watch?v=rv5AEZbo-XA)

A hand analysis software for poker professionals. Fix your weak points by uploading hand histories to be compared against game theory optimal(GTO) solutions. While building this, I also consulted and helpedpoker websites to combat fraud (multi-accounting, chip dumping, bonus abuse, collusion detection) and improve matchmaking efficiency. 

<div align = "center">
<img  src="/assets/files/gtoinspect.png">
</div>


#### [**Twitter Meme Bot**](https://github.com/r-nikhil/twitterMEMEbot)

Pulls the latest tweets for a set of accounts, ranks them based on engagement potential and then creates a meme to be posted as a reply. Works with your twitter cookies. Uses [IMGFlip AI meme API](https://imgflip.com/ai-meme) and supermeme. GPT-4o rewrites/summarises the tweet into a prompt for the imagegen pipeline. 

#### [**Resume writing crew**](https://github.com/r-nikhil/Resume-Agent-Crew)

Resume optimization project that uses AI agents(CrewAI) to enhance resumes based on company data and job descriptions. The system has four agents working collaboratively - a Resume Analyzer that examines the uploaded resume for key details, a Job Analyzer that scrapes and understands job requirements and company details from provided URLs or  web search, a Resume Writer that optimizes the resume while maintaining authenticity, and a Quality Controller that oversees the entire process(can trigger rewrites, more web searches etc). 


#### [**BAYC Clone bot**](https://github.com/r-nikhil/BAYCBOT)

An autonomous AI Twitter agent that engages in contextual conversations using OpenAI for text and Replicate (image model fine-tuned on BAYC art) for image generation. It maintains conversation history of recent interactions and intelligently decides between text and image responses when replying to mentions and threads.

#### [**Pomodoro timer**](https://pomodoro.rnikhil.com/)

25min timer for us folks who need tools to take a break or concentrate. 




#### [**LLM Backroom Simulator**](https://simulator.rnikhil.com/)

Simulate backroom conversations with LLMs. Give each LLM a character or persona and watch them talk in a group chat. Fun for simulating rap battles between random personalities. Endless entertainment value if you know how to prompt the LLMs and give character definitions. 

<div align = "center">
<img  src="/assets/files/baka.png">
</div>

#### [**Helicopter game**](https://rnikhil.com/heli)

three.js powered clone of the popular Flash helicopter game. 

#### [**Haiku vision**](https://haiku-vision.rnikhil.com/)

Convert your camera feed into poetry. Takes an image and sends it to Claude Haiku asking it to generate a 3 line poem. 

#### [**Habit tracker**](https://habits.rnikhil.com/)


Browser based habit tracker. All data is stored locally and perists across refresh. No login or sign up needed. A small tool which I use every day to track my streaks. 



#### [**TODO app**](https://todo.rnikhil.com/)


Browser based todo app. All data is stored locally and perists across refresh. No login or sign up needed. A small tool which I use every day to track my todos.


#### [**Wolfram Mathematica** ](https://github.com/r-nikhil/wolfram-2017)

Added a Network Analysis feature to Mathematica 11.3 to visualise the packet stream in a real time manner to help in debugging systems and network issues reducing average testing time by 30%. Notebook can be found [here](https://education.wolfram.com/summer/school/alumni/2017/ramesh/)


#### [**ZSC Tool Project** ](https://github.com/OWASP/ZSC/commits/master/?author=r-nikhil)

ZSC is a Shellcode/Obfuscate Code Generator. I added support for 64 bit Windows (using PEB )in Assembly while also implementing the opcoder and support for various encodings to OS X shellcodes. Also built a code obfuscation module based on some flattening techniques. 

#### [**Portsmith**](https://github.com/r-nikhil/Portsmith)

A secure Port Knocking Implementation in Python using single packet authorization. Uses TCP and IND-CCA secure requests to open a port on the server. Uses hping3 to craft TCP packets. The knock packet is encrypted using the key transferred from the server and then sent to the knockport. It is then decrypted and the required port is then opened for the sourceIP using a custom iptables command. There is an integrated SOCKS proxy to perform knocks before routing application traffic. Started work on a kernel module implementation using Netfilter hooks, nftables and cryptographic primitives instead of high level libraries.


#### [**Sailor Web Framework**](https://github.com/r-nikhil/sailor)

Integrated Elasticsearch with Sailor so that ES indexes can now be stored/searched as Sailor models. Developed a config editor to change configuration without downtime greatly easing the development workflow.GSoc 2016 work.

#### [**Luasec**](https://github.com/r-nikhil/luasec)

Added support for HTTPS CONNECT Tunnel, HTTPS Redirects, SNI tests and HTTP/2 support for Luasec HTTP networking library. GSoc 2017 work.


#### [**SSMS Portal**](https://github.com/r-nikhil/StarMash)

Billing and inventory management system used daily at all messes and canteens to handle transactions about 6 lakh Rupees monthly for all 4500 registered students.Written in PHP, MySQL.

#### [**PyGoogle**](https://github.com/r-nikhil/pygoogle)

CLI for Google search. This was useful back in 2012. 

#### [**StarMash**](https://github.com/r-nikhil/StarMash)

FaceMash clone but with celeb photos scraped from IMBD

#### [**MicroTracer**](https://github.com/r-nikhil/microTracer)

System Call tracer for Linux based systems which displays the syscalls used by a particular program in a neatly formatted manner without the complex details as shown by programs like strace. 

#### [**PintOS**](https://github.com/r-nikhil/pintos)

Extended the OS by adding virtual memory, message passing queues, POSIX threads and OS-level semaphores. Implemented "fork" and "exec" system calls and the ability to run user program. Implemented indexed filesystem, hierarchical directory structure and buffer cache. IIRC, this is part of some CS course at Stanford. 

#### **Tracker**

It is to help developers jump start developing any kind of mobility tracking applications. Tracker let's any type or number of GPS enabled endpoints to send data to a NodeJs server which then maps their location history using Google Maps API. 

#### **Peer to Peer Streaming Protocol**

Was involved in the building a statistics module for an application layer streaming protocol in Python. It records information related to the stream, number of peers (audience) per minute, in/out of peers, total peers, etc. Wrote a graphical interface for viewing the numbers built using d3.js. Learnt a bunch about WebRTC