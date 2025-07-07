---
layout: post
title: n8n vs Zapier
categories: [ai]
---


#### Counter positioning against Zapier
  - Zapier was built when multiple SaaS tools were exploding. Leads on Gmail to spreadsheet. Stripe payment alert to Slack message. All with no-code automation.
  - Zapier was never built for teams who wanted to write custom code, build loops or integrate with complex/custom APIs. Simplicity was the focus but which also became their constraint later on. Closed source. Worked out of the box seamlessly
  - N8n countered with 
    - open source, self host, inspect the logic
    - Write code on all the nodes. Run infinite loops. Write code to manipulate data in the node, build conditionals, integrate with APIs flexibly. You can add code blocks on Zapier but there is limitation around time limits, what modules you can import etc. Code blocks is not a first party citizen in their ecosystem. 
    - Focus on the technical audience. Work with sensitive data because on prem solution
    - Zapier charged per task or integration inside a zap("workflow"). n8n charges per workflow instead of charging for atomic triggers/tasks. Unlocked more ambitious use cases without punishing high volume usage
    - Orchestrate entire internal data flows, build data lakes, and even replace lightweight ETL pipelines were the usecases. 
  
n8n didn’t try to beat Zapier at being low code automation for the same ICP. Instead, it positioned itself for a different ICP. Zapier targeted non technical users with a closed, cloud only, task based billing model with limited customization. n8n went after developers, data and infrastructure teams with an open source, self hostable, workflow-based model where you could code if you wanted to. Both are automation products and usecases overlap heavily.

#### How they will win against Zapier? 
  - Zapier charges per task. expensive for high volume loads. n8n is self hostable and charges per workflow and you can write code
    - Can zapier do this? Sure, but they will have to tank their cloud margins and product will get too technical for its core ICP and they will lose control over its ecosystem and data
    - They have to redo their entire support system(retrain the CS folks) and sales pitch if they go after tech folks and build CLI tools etc. 
    - Branding gets muddied. No longer the simple drag and drop interface. 
    - They can't go FOSS. IP becomes commoditized. No leverage over the partner ecosystem and their per task flywheel will break
      - In a world where the AI systems are changing fast and the best practices are evolving every day, its quite important to be dev first and open source

Zapier cant do this without the above headaches. n8n repackaged automation tools and positioned it for dev control and self hosting. While they are building an "agents" product but that is more of a different interface (chat -> workflows) for the same ICP. 

#### Differentiation against zapier from Lindy POV (From Tegus)

  - Lindy negotiated a fixed price for a couple years. 
  - Scaling costs: zapier charges per zap and task run. n8n (while initially you have to buy) doesn't charge per run(for FOSS) and cheaper for overall workflows (compared to step level charging by zapier)
  - Performance/latency: you can embed the npm package in your own code. No extra hop to call zapier
  - Open-source benefits: integration plugins was added fast, people were able to troubleshoot code and integrate with their existing systems fast

