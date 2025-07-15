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




The [bitter lesson](http://www.incompleteideas.net/IncIdeas/BitterLesson.html) from decades of AI: over time, the winning models are those that scale best with compute and data, not the ones with the most clever human-designed heuristics. That’s the core of Tesla’s bet: no LiDAR, no human-engineered rules. Just YOLOing on vision + a learning model + fleet data. This also explains why OpenAI moved from fine-tuning with small curated datasets to huge amounts of online data + reinforcement learning on top. Same for Anthropic and other leading AI labs. But before brute-force models got good enough, everyone needed high-quality, structured data: labeling, RLHF, SFT, safety tuning, evaluation, etc. This was the middle layer of the stack: operations-heavy and labor-dependent. But if the vision is: "We're going to skip the human bottleneck and go fully self-supervised or reinforcement-style learning in a simulated or real environment, with scalable compute" then these data labelling companies look like bad long-term bets. (that is not to say they are bad short term bets and the company I work for is/was an investor in Scale AI). The gist of the point is that infinite labeling doesn't scale past a certain model quality threshold.

Part of my job description here at work is to figure out new paradigms in AI and where value creation will happen in the future. If OpenAI and Anthropic and Elon-san can brute-force intelligence using their compute, what can any startup possibly do that they can’t just replicate better? What can we regular people build that Sam Altman and Sundar Pichai cannot? This blog post tries to answer that question. 

### What to build for this era then?

  - The key insight is that while OpenAI and Google can throw infinite compute at general intelligence, they can't be everywhere at once. They can't own every workflow, every sensor, every domain-specific feedback loop. That's where the opportunity lies.
