---
layout: post
title: Tools for the era of experience
categories: [ai]
---

<div align = "center">
<img  src="/assets/files/eraofexp.png">
</div>


I recent read this beautiful chapter from the unpublished book "Designing an Intelligence" by [David Silver](https://en.wikipedia.org/wiki/David_Silver_(computer_scientist)) and [Rich Sutton](https://en.wikipedia.org/wiki/Richard_S._Sutton) . It's titled "Welcome to the Era of Experience" and you can read it [here](https://storage.googleapis.com/deepmind-media/Era-of-Experience%20/The%20Era%20of%20Experience%20Paper.pdf). The basic gist is this: 
  - Current LLMs trained on human data are approaching the ceiling of what they can learn from existing human knowledge. High-quality human data sources are being exhausted and the systems can only reproduce human capabilities, not surpass them in meaningful ways. For example: If you trained LLMs 300yrs ago, it might be doing reasoning using Newtonian mechanics or if it was trained 1000yrs ago, it may have reasoned in theistic terms. The point is - these models inherit our blind spots. They're sophisticated echo chambers of whatever worldview was baked into their training data. An LLM today might give you brilliant answers about quantum mechanics, but it can't discover the next paradigm shift in physics because it's fundamentally limited to recombining existing human knowledge. It's like asking a master librarian to invent new science - they can tell you everything that's been written, but they can't run the experiment that proves everyone wrong.
  - They argue that, if these AI models have to accelerate beyond the existing school of thought, they need to interact with the real world, make hypothesis, run experiments, observe results and update its inner principles accordingly. They must be grounded on real world data in order to overturn fallacious methods of thoughts and this grounding provides the feedback loop which allows the agent to test its inherited assumptions against reality and discover new principles that are not limited by the current school of thought. The authors state that without this grounding, the AI model(or agent), no matter how sophisticated will just be an echo chamber of existing human knowledge. 

### What next? - Experiential learning

AI agents will learn by doing - continuously interacting with environments and learning from the results, (similar to how AlphaProof generated millions of mathematical proofs to exceed human performance). The postulate that this new era of training AI agents will be based on the following four characteristics: 

- **Streams:** Unlike today's AI that operates in short, disconnected sessions, experiential agents will maintain ongoing streams of experience spanning years. A health agent connected to wearables could track sleep, activity, and diet over months, building personalized recommendations from long-term patterns rather than single interactions(even if the short term recommendation doesn't work immediately). 

- **Actions and Observations:** These agents will move beyond text responses to act autonomously in physical and digital environments. They will use both human-friendly interfaces(Browseruse, CUA are steps in this direction) and machine-friendly APIs to explore, adapt, and discover new strategies. A scientific agent could control laboratory equipment, operate telescopes, and conduct experiments independently.
      
- **Rewards:** What if experiential agents could learn from external events and signals, and not just human preferences? The current approach of relying on human prejudgement usually leads to an impenetrable ceiling on the agent's performance: the agent cannot discover better strategies that are underappreciated by the human rater. To discover new ideas that go far beyond existing human knowledge, it is necessary to use grounded rewards—signals that arise from the environment itself rather than human judgment made in absence of consequences. The world abounds with quantities such as cost, error rates, productivity, health metrics, climate metrics, exam results, success, income, accuracy, and energy consumption that can serve as natural reward signals. A health assistant could ground user health goals into rewards based on combinations of signals like resting heart rate, sleep duration, and activity levels, while an educational assistant could use actual exam results to provide grounded feedback for language learning, measuring real consequences rather than expert predictions. 
      
- **Planning and Reasoning:** Agents can develop non-human reasoning methods using symbolic, distributed, or continuous computations discovered through experience. Rather than inheriting human biases and limitations, they build world models that predict outcomes directly. A health assistant might model how recommendations(a health podcast or a gym) affect sleep patterns, planning actions based on causal effects rather than human-approved reasoning.

| The Era of Experience Phase 	| Signals 	| Predictions 	|
|:---:	|:---:	|:---:	|
| **Synthetic-experience ramp-up** 	| Labs release more computer-use, Operator, Mariner style agents that click, code, and call APIs continuously. 	| Compute spend shifts from one-shot inference to always-on interaction. GPU cost per trajectory becomes a new KPI 	|
| **Reward diversification** 	| Vertical startups define composite metrics (e.g. reduced QA defects per deployment; lab assay yield per $, etc.). 	| Owning measurement pipelines (sensors, logs, BI dashboards) becomes a more important than prompt engineering 	|
| **World-model renaissance** 	| Papers on scalable planning in partially observed, non-stationary environments get popular in conferences 	| Toolchains for causal modelling, counterfactual simulation, and long-horizon credit assignment become the TensorFlow/PyTorch of the era. 	|
| **Safety loop tension** 	| Agents that can act for weeks raise new mis-alignment and interpretability worries, but also create richer feedback to correct them . 	| Expect regulation that requires continuous auditing hooks, agent “flight recorders”, and kill-switch APIs. 	|


The [bitter lesson](http://www.incompleteideas.net/IncIdeas/BitterLesson.html) from decades of AI: over time, the winning models are those that scale best with compute and data, not the ones with the most clever human-designed heuristics. That’s the core of Tesla’s bet: no LiDAR, no human-engineered rules. Just YOLOing on vision + a learning model + fleet data. This also explains why OpenAI moved from fine-tuning with small curated datasets to huge amounts of online data + reinforcement learning on top. Same for Anthropic and other leading AI labs. But before brute-force models got good enough, everyone needed high-quality, structured data: labeling, RLHF, SFT, safety tuning, evaluation, etc. This was the middle layer of the stack: operations-heavy and labor-dependent. But if the vision is: "We're going to skip the human bottleneck and go fully self-supervised or reinforcement-style learning in a simulated or real environment, with scalable compute" then these data labelling companies look like bad long-term bets. (that is not to say they are bad short term bets and the company I work for is/was an investor in Scale AI). The gist of the point is that infinite labeling doesn't scale past a certain model quality threshold.

Part of my job description here at work is to figure out new paradigms in AI and where value creation will happen in the future. If OpenAI and Anthropic and xAI can brute-force intelligence using their compute, what can any startup possibly do that they can’t just replicate better? What can we regular people build that Sam Altman and Sundar Pichai cannot? This blog post tries to answer that question. 

### What to build for this era then?

The Silver & Sutton paper paints a picture where compute + environment beats compute + labels. If that's true, then the game isn't about who has the most GPUs (although that too matters a lot). It's about who controls the richest streams of experiential data.

This is how I am thinking about it: While OpenAI and Google can throw infinite compute at general intelligence, they can't be everywhere at once. They can't own every workflow, every sensor, every domain-specific feedback loop. That's where the opportunity lies.

#### 1. Own the Environment

Remember how Tesla's real USP isn't their AI team or their Dojo supercomputer but their fleet? Every Tesla on the road is a data collector. The winners in the era of experience won't be building better foundation models - they'll be building proprietary environments where agents can learn things nobody else can access.

Take construction sites. Imagine a startup that deploys cheap sensors across construction projects tracking worker movements, equipment usage, material flow, safety incidents, etc. An agent learning in this environment could discover patterns humans miss. Maybe it notices that accidents spike when certain equipment configurations appear together, or that productivity drops in specific weather + task combinations. The construction companies can't build this themselves, and OpenAI can't access this data without the physical deployment.

Or consider hospital emergency rooms. A startup could build the connective tissue between EMR systems, vital sign monitors, staff location trackers, and patient flow systems. The agent doesn't just read static records - it experiences the ER in real-time, learning which triage decisions lead to better outcomes months later. It might discover that routing certain patients to specific doctors based on subtle vital sign patterns reduces readmission rates by 20%. Google can train GPT-6, but they can't access your hospital's real-time sensor feed.

What else to build:
- **Industrial automation agents** that live on factory floors. Imagine an agent that watches CNC machines 24/7, learns the sound patterns before failures, and optimizes cutting paths by actually trying variations. A startup called Machina (hypothetical) could deploy sensors across 100 machine shops and train models that outperform any generic "industrial AI" because they've seen real metal shavings fly.
- **Agricultural yield agents** - Greenhouses with full sensor arrays where agents control temperature, humidity, nutrients, and actually see which tomatoes grow bigger. John Deere can't compete if you own the data from 10,000 greenhouse-hours of experimentation.

The key: You need proprietary access to environments where cause-and-effect cycles play out. No amount of compute at OpenAI can simulate what happens when you change fertilizer mix #47 in greenhouse #12.

### 2. Engineer Better Rewards (the alignment arbitrage)

Here's where it gets really interesting. In the current paradigm, everyone's obsessed with prompt engineering. In the Era of Experience, the money will be in reward engineering.

Let me explain with a concrete example. Say you're building an AI sales assistant. OpenAI's version might optimize for user engagement or satisfaction scores. But what if your reward function is composite - 30% close rate, 20% customer lifetime value, 20% time-to-close, 30% post-sale NPS score measured 6 months later? Suddenly your agent is learning completely different behaviors. It might discover that slowing down the sales process for enterprise clients actually increases LTV, or that certain objection-handling patterns correlate with lower churn a year later.

The beauty is that these reward functions become proprietary knowledge. You're essentially programming business strategy directly into the agent's learning process. A competitor can copy your UI, but they can't copy the three years of refined reward engineering that makes your agent act like a senior enterprise sales rep instead of a chatbot.

More examples:
- **Negotiation agents for B2B contracts** - Define rewards based on deal closure rate, contract value, AND long-term relationship health. Train agents through thousands of real negotiations where you measure not just "did we close?" but "did they renew next year?"
- **Therapy companion agents** - Rewards based on validated mental health metrics (PHQ-9 scores) tracked over months, not "did the user like this response?" This requires deploying with real therapists, tracking real outcomes.
- **Code review agents** that optimize for "bugs caught before production" + "developer learning" + "team velocity" - a composite reward no generic coding assistant will target.

We're already seeing early versions of this. Harvey (the legal AI) isn't just using GPT-4 with a legal prompt. They're building environments where the agent can practice contract negotiations, with rewards based on deal outcomes months later. The agent learns strategies that no human lawyer explicitly programmed.

### 3. Distribution as Destiny (The Interface Layer Power Play)

This one's subtle but crucial. The big labs will build general intelligence, but someone needs to own the last mile - the surfaces where agents actually interact with humans and systems.

Think Figma for the Era of Experience. Figma didn't invent vector graphics or collaboration. But they owned the interface where designers actually work. Now imagine "Figma for AI Agents" - dashboards where product managers can spin up agents, define reward functions with visual tools, monitor long-running agent workflows, and intervene when needed.

Or take enterprise software. Salesforce won't be disrupted by a smarter CRM. But they might be disrupted by someone who builds the connective tissue that lets agents actually operate across CRM, email, calendar, Slack, and analytics tools. The moat isn't the intelligence - it's owning the "flight deck" where humans supervise and direct these long-running agent processes.

What to build:
- **Legal research terminals** embedded in law firms that learn from which cases lawyers actually cite, which arguments win in court. Harvey.ai gets this - they're not building a better LLM, they're building the Bloomberg Terminal for law.
- **Developer environment agents** - Not another coding assistant, but something that lives in your IDE, watches your debugging patterns, learns your codebase's idioms. Cursor and Windsurf are early examples, but imagine agents that learn from your entire team's workflow over months.
- **Financial planning platforms** where agents manage real portfolios, learn from market movements, and adapt strategies based on client life events. Not robo-advisors with fixed rules, but learning systems that get smarter with every market cycle.

I'm seeing early versions of this in companies building "agent orchestration platforms." They're not trying to build better models. They're building the Kubernetes for agents - the infrastructure layer that lets you deploy, monitor, and manage hundreds of specialized agents working on month-long projects.

### 4. Synthetic Worlds (the AlphaGo for X)

This is where things get wild. The next generation of training data won't come from scraping the internet - it'll come from synthetic environments designed specifically to train agents.

Imagine you're trying to train an agent for supply chain optimization. Instead of waiting for real supply chain disruptions (expensive and rare), you build a high-fidelity simulation. Your simulation includes weather patterns, geopolitical events, port congestions, manufacturing delays - all interacting in complex ways. The agent can experience a thousand supply chain crises before breakfast, learning strategies that no human has ever tried.

Or financial markets. While the big labs are training on historical data, you're building synthetic markets where agents can practice trading strategies with realistic but accelerated market dynamics. Your agent experiences 50 years of market cycles in a week, discovering patterns in the interaction between news events, sentiment, and price movement that would take human traders decades to learn.

More synthetic world opportunities:
- **Negotiation simulators** - Multi-agent environments where AIs learn complex negotiation strategies through millions of simulated deals. Train agents that can handle edge cases no human negotiator has seen.
- **Economic policy sandboxes** - Simulate entire economies where agents try different fiscal policies and see long-term effects. Governments could use these to test policies before implementation.
- **Drug interaction simulators** - Not just molecular modeling, but full biological system simulations where agents can try billions of drug combinations and learn interaction patterns.

The key insight: OpenAI won't build a supply chain simulator or a synthetic derivatives market. Too niche. But for a focused startup, that simulator becomes a data factory, churning out experience that's worth more than all the text on the internet for that specific domain.

### 5. The Unaligned Frontier

This last one's controversial, but it's real. The big labs are constrained by their visibility, regulation, and cultural commitments to safety. There's a whole frontier of capabilities they won't touch for years.

I'm not talking about building weapons or breaking laws. I'm talking about agents that operate in the grey zones of human interaction:
- **Adversarial security agents** - Systems that actively probe networks, try exploits, and learn from what works. CrowdStrike meets AlphaGo. Big labs won't touch this.
- **Persuasion optimization engines** - Agents that learn what actually changes minds through A/B testing arguments, tracking belief changes. Useful for public health campaigns, dangerous for propaganda.
- **Financial exploit finders** - Agents that trade in simulated markets, discover arbitrage opportunities, learn market microstructure. The stuff Renaissance Technologies does, but as a service.

A startup building "uncensored therapy agents" for specific populations might discover interaction patterns that actually help people more than our current "always honest, always safe" approach. Maybe the agent learns that for certain personality types recovering from addiction, a small tactical lie about recovery statistics prevents relapse better than brutal honesty.

## The Builder's Playbook

Based on all this, here's your tactical guide:

**1. Secure your telemetry monopoly now**
Find a niche where you can instrument everything. Every action, every outcome, every millisecond. This data exhaust becomes your moat. A friend's startup put sensors in commercial kitchens - they now know more about restaurant operations than anyone.

**2. Build reward engineering tools**
The next TensorFlow won't be for model architectures - it'll be for reward function composition. Imagine Mixpanel meets reinforcement learning. Let domain experts define complex objectives without coding. Think Airflow-grade orchestration for computing and updating rewards on live data streams.

**3. Go full-stack on agents**
Don't build thin wrappers around GPT-4. Build the entire loop: perception → action → outcome measurement → model update. Own the whole cycle or own nothing. Back end-to-end agent stacks, not wrapper apps. The value migrates from prompt veneers to mechanisms that store memories, run planners, and retrain online.

**4. Instrument for safety from day one**
When your agent runs for months unsupervised, you need audit trails, rollback mechanisms, and kill switches. The first startup to make "safe autonomous agents" easy will win enterprise contracts. Companies that operationalize real-time red-teaming and rollback will win enterprise trust fastest.

## The Bottom Line

The Era of Experience isn't just another AI paradigm - it's a redistribution of power from compute-rich to data-rich players. OpenAI has the GPUs, but you can own the environments. They have the models, but you can engineer the rewards. They have the general intelligence, but you can own the specific workflows.

If I had to place bets (and I do, it's literally my job), here's where I'd put chips:
- Vertical-specific agent platforms that own both the environment and the learning loop. Think "Palantir but the software actually does the work, not just dashboards."
- Agent ops infrastructure - the Datadog/Grafana for agents that run for months and touch real-world systems.
- The first killer app that shows what long-horizon experiential learning can actually do. My guess? It'll be in biotech, materials science, or industrial process optimization - somewhere with clear metrics and huge search spaces.

The playbook is clear: Find a domain where experience matters. Instrument the hell out of it. Define rewards that align with real-world outcomes. Deploy agents that learn continuously. Build interfaces that lock in users.

And remember - by the time OpenAI decides to compete in your specific niche, you'll have months or years of proprietary experience data. In the Era of Experience, that's the only moat that matters.

Tesla didn't win by having the best computer vision model. They won by having millions of cars generating edge cases. That's your template. 

The future isn't about bigger models eating more data. It's about smarter agents learning from richer experience. They'll build the intelligence. We'll build the world it lives in.

Now go build something Sam Altman can't.