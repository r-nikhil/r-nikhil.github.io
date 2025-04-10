---
layout: post
title: Google cloud launches Agent2Agent protocol 

---

Google has launched a new protocol spec for agents to talk to each other. [Link](https://github.com/google/A2A) to the spec. 

From the [blog](https://developers.googleblog.com/en/a2a-a-new-era-of-agent-interoperability/): 

"Today, we’re launching a new, open protocol called Agent2Agent (A2A), with support and contributions from more than 50 technology partners like Atlassian, Box, Cohere, Intuit, Langchain, MongoDB, PayPal, Salesforce, SAP, ServiceNow, UKG and Workday; and leading service providers including Accenture, BCG, Capgemini, Cognizant, Deloitte, HCLTech, Infosys, KPMG, McKinsey, PwC, TCS, and Wipro. The A2A protocol will allow AI agents to communicate with each other, securely exchange information, and coordinate actions on top of various enterprise platforms or applications. We believe the A2A framework will add significant value for customers, whose AI agents will now be able to work across their entire enterprise application estates."

A2A is an open protocol enabling seamless agent collaboration across different frameworks and vendors. It adheres to five principles: embracing natural agent interactions without forcing agents into mere "tool" roles; building on established standards like HTTP and JSON-RPC for easy integration; prioritizing enterprise-grade security; supporting tasks ranging from quick actions to extended research with real-time feedback; and accommodating multiple modalities including text, audio, and video streaming.

Even though Google claims MCP is designed for agent-to-tools interaction and that A2A is better for agent-to-agent, there’s nothing preventing MCP from being used for agent-to-agent too, as the distinction between agents and tools is rather arbitrary[[1]](https://x.com/jancurn/status/1910094901221683277). 
<div align = "center">
<img  src="/assets/files/agent1.png">
</div>

On the other hand, they also published something called the "[Agentcard](https://github.com/google/A2A/blob/main/demo/ui/utils/agent_card.py)" which should make discovery easier for these agents and we probably won't see one more explosion MCP server directory type thing happening again. 

Parallely, they also launched a full stack [agent dev kit](https://google.github.io/adk-docs/#what-is-agent-development-kit). It offers flexible agent development and deployment
Key Features:

Flexible orchestration with workflow agents
Multi-agent architecture for modular applications
Rich tool ecosystem (Search, Code Exec, custom functions)
Deployment options (local, Vertex AI, Cloud Run, Docker)
Built-in evaluation system
Responsible AI patterns and best practices