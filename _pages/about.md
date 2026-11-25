---
layout: default
title: About
---

<section class="about">
  <nav class="elsewhere in" style="--i:2" aria-label="Elsewhere">
    <a href="https://twitter.com/rnikhilcom">Twitter</a>
    <a href="https://www.linkedin.com/in/rnikhilcom/">LinkedIn</a>
    <a href="https://news.ycombinator.com/user?id=whoami_nr">HN</a>
    <a href="https://github.com/r-nikhil">GitHub</a>
    <a href="mailto:contact%40rnikhil.com">Email</a>
  </nav>

  <p class="in" style="--i:2">Hey, I am Nikhil. I love to learn and hack around with new technologies. This site is a partial collection of stories I’ve written down, my general musings and the software I work on. There is no particular theme to this site; it’s just a place to hang random text.</p>

<div class="eras in" style="--i:3" aria-label="Career history">
  <div class="era-tabs" role="tablist" aria-label="Career by year">
    <button class="era-tab" role="tab" id="era-2014-tab" aria-controls="era-2014" aria-selected="false" tabindex="-1"><b>2014–18</b></button>
    <button class="era-tab" role="tab" id="era-2018-tab" aria-controls="era-2018" aria-selected="false" tabindex="-1"><b>2018–23</b></button>
    <button class="era-tab" role="tab" id="era-2024-tab" aria-controls="era-2024" aria-selected="false" tabindex="-1"><b>2024–25</b></button>
    <button class="era-tab now" role="tab" id="era-now-tab" aria-controls="era-now" aria-selected="true" tabindex="0"><b>2026–now</b></button>
  </div>
  <div class="era-panel" role="tabpanel" id="era-2014" aria-labelledby="era-2014-tab" hidden>
      <div class="era-label">Coding</div>
      <ul>
      <li>Focus was on learning how computers work. Self taught programmer. Started with web dev but spent majority time on OS, computer security and network protocols. Contributed a ton to FOSS projects</li>
      <li>Wrote malware shellcode obfuscators for OWASP and added packaet sniffing suport for Wolfram Mathematica</li>
      <li>Did <ins><a href="https://summerofcode.withgoogle.com/">some</a></ins> <ins><a href="https://owasp.org/www-community/initiatives/code_sprint/">cool</a></ins> <ins><a href="https://education.wolfram.com/summer-school">internships</a></ins> with low acceptance rates</li>
      </ul>
  </div>
  <div class="era-panel" role="tabpanel" id="era-2018" aria-labelledby="era-2018-tab" hidden>
      <div class="era-label">Poker, Product and Trading</div>
      <ul>
      <li>Started at Flipkart as a PM to build their data platform ingestion pipelines and BNPL product</li>
      <li>Played poker professionally (all.in adj 9-11bb/100), built a poker analytics tool startup and ran a coaching and staking business.</li>
      <li>Trading and yield farming across all DeFi protocols</li>
      <li>Built and scaled the Poker product at Paytm Games into a $10m biz.</li>
      </ul>
  </div>
  <div class="era-panel" role="tabpanel" id="era-2024" aria-labelledby="era-2024-tab" hidden>
      <div class="era-label">AI and Accel</div>
      <ul>
      <li>Invested in AI companies. Ex: Higgsfield AI and Pramaana Labs</li>
      <li>Led product for DynamoEval. An LLM evaluation suite for detecting data leakages, hallucinations, compliance/goverance issues and other security vulnerabilities.</li>
      </ul>
  </div>
  <div class="era-panel" role="tabpanel" id="era-now" aria-labelledby="era-now-tab">
      <div class="era-label">Prediction Markets</div>
      <ul>
      <li>Started a company - <a href="https://arivulabs.xyz">arivulabs.xyz</a></li>
      <li>Your local and contextual prediction market - <a href="https://agara.xyz">agara.xyz</a></li>
      </ul>
  </div>
</div>

<hr class="rule in" style="--i:3;margin:1.75rem 0">

<div class="about-projects in" style="--i:4" id="projects">
  <h2>Random assortment of side projects</h2>
  {% include projects-index.html %}
</div>
</section>
