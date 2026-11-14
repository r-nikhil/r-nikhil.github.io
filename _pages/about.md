---
layout: default
title: About
---

<section class="home-content about-page">
<div class="home-intro">
  <nav class="social-groups" aria-label="Social links">
    <span class="social-label">Elsewhere</span>
    <div class="social-links">
      <a href="https://twitter.com/rnikhilcom">Twitter</a>
      <a href="https://www.linkedin.com/in/rnikhilcom/">LinkedIn</a>
      <a href="https://news.ycombinator.com/user?id=whoami_nr">HN</a>
      <a href="https://github.com/r-nikhil">GitHub</a>
    </div>
    <span class="social-label">Contact</span>
    <div class="social-links">
      <a href="mailto:contact@rnikhil.com">Email</a>
    </div>
  </nav>

  <p>Hey, I am Nikhil. I love to learn and hack around with new technologies. This site is a partial collection of stories I’ve written down, my general musings and the software I work on. There is no particular theme to this site; it’s just a place to hang random text.</p>

<div class="eras" aria-label="Career history">
  <div class="era-tabs" role="tablist" aria-label="Career by year">
    <button class="era-tab" role="tab" id="era-2014-tab" aria-controls="era-2014" aria-selected="false" tabindex="-1"><b>2014–18</b></button>
    <button class="era-tab" role="tab" id="era-2018-tab" aria-controls="era-2018" aria-selected="false" tabindex="-1"><b>2018–23</b></button>
    <button class="era-tab" role="tab" id="era-2024-tab" aria-controls="era-2024" aria-selected="false" tabindex="-1"><b>2024–25</b></button>
    <button class="era-tab now" role="tab" id="era-now-tab" aria-controls="era-now" aria-selected="true" tabindex="0"><b>2026–now</b></button>
  </div>
  <div class="era-panel" role="tabpanel" id="era-2014" aria-labelledby="era-2014-tab" hidden>
      <div class="era-label">self-taught</div>
      <ul>
      <li>Focus was on learning how computers work. Self taught programmer. Started with web dev but spent majority time on OS, computer security and network protocols. Contributed a ton to FOSS projects</li>
      <li>Wrote malware shellcode obfuscators for OWASP and added packaet sniffing suport for Wolfram Mathematica</li>
      <li>Did <ins><a href="https://summerofcode.withgoogle.com/">some</a></ins> <ins><a href="https://owasp.org/www-community/initiatives/code_sprint/">cool</a></ins> <ins><a href="https://education.wolfram.com/summer-school">internships</a></ins> with low acceptance rates</li>
      </ul>
  </div>
  <div class="era-panel" role="tabpanel" id="era-2018" aria-labelledby="era-2018-tab" hidden>
      <div class="era-label">Flipkart → Paytm</div>
      <ul>
      <li>Responsible for the product and business verticals for the Poker app at Paytm and scaled it to a $10m biz</li>
      <li>Trading and yeild farming across all DeFi protocols</li>
      <li>Played professional poker (all.in adj 11bb/100), built a poker analytics tool startup and ran a coaching and staking operation</li>
      <li>Started at Flipkart as a PM to build their data platform ingestion pipelines and BNPL product</li>
      </ul>
  </div>
  <div class="era-panel" role="tabpanel" id="era-2024" aria-labelledby="era-2024-tab" hidden>
      <div class="era-label">DynamoEval → Accel</div>
      <ul>
      <li>Did some AI stuff at Accel</li>
      <li>If you are building in AI, mail me on nikhil.ramesh@accel.com</li>
      <li>Led product for DynamoEval. An LLM evaluation suite for detecting data leakages, hallucinations, compliance/goverance issues and other security vulnerabilities.</li>
      </ul>
  </div>
  <div class="era-panel" role="tabpanel" id="era-now" aria-labelledby="era-now-tab">
      <div class="era-label">arivulabs.xyz</div>
      <ul>
      <li>Started a company — <a href="https://arivulabs.xyz">arivulabs.xyz</a></li>
      </ul>
  </div>
</div>
</div>

<div class="about-projects" id="projects">
  <h2>Random assortment of side projects</h2>
  {% include projects-index.html %}
</div>
</section>

<style>


:root {
  --home-paper: #f9fbfd;
  --home-ink: #17202a;
  --home-cobalt: #1456d9;
  --home-cobalt-dark: #0c3ba1;
  --home-cobalt-soft: #e8f2ff;
  --home-grid-rule: #c8d6e1;
}

body {
  color: var(--home-ink);
  background-color: var(--home-paper);
}

main {
  background-color: var(--home-paper);
}

header nav ul {
  border-right-color: var(--home-grid-rule);
}

header a,
.home-content a {
  color: var(--home-cobalt);
}

header a:hover,
.home-content a:hover {
  color: var(--home-cobalt-dark);
  background-color: var(--home-cobalt-soft);
}

.home-intro {
  width: 100%;
}

.social-groups {
  width: 100%;
  display: grid;
  grid-template-columns: 6rem minmax(0, 1fr);
  gap: 0.65rem 1rem;
  padding: 0 0 0.8rem;
  border-bottom: 1px solid var(--home-grid-rule);
  margin: 0 0 1.5rem;
}

.social-label {
  width: max-content;
  padding: 0.12rem 0.38rem;
  color: #fff;
  background-color: var(--home-cobalt);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.social-links {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem 1rem;
}

.social-links a {
  color: var(--home-cobalt);
  border-bottom: none;
}

.social-links a:hover {
  color: var(--home-cobalt-dark);
  background-color: var(--home-cobalt-soft);
}

.home-intro > p {
  margin: 1rem 0 1.5rem;
  text-align: justify;
}

.eras {
  margin: 1.5rem 0 2rem;
}

.era-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-bottom: 0.9rem;
}

.era-tab {
  text-align: center;
  border: 1px solid var(--home-grid-rule);
  border-radius: 999px;
  font-weight: 700;
  padding: 4px 12px;
  transition: all 0.2s ease;
  background: none;
  color: var(--text-color);
  cursor: pointer;
  white-space: nowrap;
}

.era-tab:hover {
  transform: translateY(-1px);
  box-shadow: 2px 2px 0 0 var(--home-cobalt);
  background-color: var(--home-cobalt-soft);
  color: var(--home-cobalt-dark);
}

.era-tab[aria-selected="true"] {
  background-color: var(--home-cobalt);
  border-color: var(--home-cobalt);
  color: #fff;
  box-shadow: none;
}

.era-tab.now b::after {
  content: " ●";
  color: #5fd38d;
}

.era-tab:focus-visible {
  outline: 2px solid var(--home-cobalt);
  outline-offset: 2px;
}

.era-panel {
  border: 1px solid var(--home-grid-rule);
  border-radius: 12px;
  padding: 0.8rem 1rem;
  background-color: #fff;
}

.era-label {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #66717d;
  margin-bottom: 0.4rem;
}

.era-panel ul {
  margin: 0 0 0 1.25rem;
}

.era-panel li {
  margin-bottom: 0.3rem;
  text-align: left;
}

.era-panel li:last-child {
  margin-bottom: 0;
}

.about-projects {
  width: 100%;
  margin-top: 0.5rem;
}

.about-projects h2 {
  margin: 0 0 1rem;
  text-align: left;
}

@media screen and (max-width: 45rem) {
  header ul {
    border-bottom: 0;
    padding-bottom: 0;
    margin-bottom: 0;
  }

  .social-groups {
    grid-template-columns: 6.25rem minmax(0, 1fr);
    gap: 0.65rem 0.75rem;
    padding-top: 0.8rem;
    margin-top: 5px;
  }

  .home-intro > p {
    text-align: left;
  }

  .social-label {
    align-self: start;
  }

  .eras {
    margin: 1.25rem 0 1.5rem;
  }

  .era-tabs {
    flex-wrap: nowrap;
    gap: 0.35rem;
    margin-bottom: 0.75rem;
  }

  .era-tab {
    padding: 4px 7px;
  }

  .era-panel {
    padding: 0.7rem 0.8rem;
  }

  .posts li time {
    font-size: 0.8rem;
  }
}

@media screen and (max-width: 22rem) {
  .era-tabs {
    gap: 0.3rem;
  }

  .era-tab {
    padding: 4px 5px;
    font-size: 11.5px;
  }
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const eraTabs = Array.from(document.querySelectorAll('.era-tab'));
  const selectEra = (tab) => {
    eraTabs.forEach(t => {
      const on = t === tab;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
  };
  eraTabs.forEach((tab, i) => {
    tab.addEventListener('click', () => selectEra(tab));
    tab.addEventListener('keydown', (e) => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      const next = eraTabs[(i + (e.key === 'ArrowRight' ? 1 : -1) + eraTabs.length) % eraTabs.length];
      selectEra(next);
      next.focus();
      e.preventDefault();
    });
  });
});
</script>
