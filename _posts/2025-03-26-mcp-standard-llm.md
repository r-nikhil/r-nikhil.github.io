---
layout: post
title: Will MCP stay for the long term? 
tags: ai agents MCP protocol
---

[MCP](https://modelcontextprotocol.io/introduction) is an open protocol that standardizes how applications provide context to LLMs. Think of MCP like a USB-C port for AI applications. Just as USB-C provides a standardized way to connect your devices to various peripherals and accessories, MCP provides a standardized way to connect AI models to different data sources and tools.

<div align = "center">
<img  src="/assets/files/mcp.jpg">
</div>

Another way to look at MCP is as a TCP/IP layer for agent communication. It replaces custom API connectors with a uniform MCP standard and enables you to connect your LLM to anything. It reduces development effort (write custom code for each API vs Connect to pre-built MCP servers), helps in context Management(manually maintain context between calls vs Protocol maintains session context automatically) and error Handling (handle each API's unique error patterns vs Standardized error handling across services). This post is about whether MCP as a standard will stay and whether dev tools companies will build around it. 

I see two kind of worlds. An Apple like closed ecosystem where there are proprietary ways for AI agents to interact with tools/resources (which OpenAI is pursuing) and an Android type situation where you have open standards (which the tools/apps etc will support) and everybody builds on top. I believe both of them will co-exist but we are mainly concerned with whether MCP will exist in the latter world.

The biggest bull case for MCP is the adoption momentum today. The spec is evolving super fast, it came with 100s of example implementations by the AI labs itself and its super easy to implement (basic HTTP rest api types and its just a standard for the explanation of the parameters and tools for any client ), so we have crazy developer engagement. Its also one of the first LLM specific API standard. First mover matters in standards (ex: we are still stuck with BGP for all internet routing depsite its numerious flaws)

#### What do we need for MCP to win? 

- Discovery and a central registry. One of the biggest value add is being able to auto discover all possible tools (within one api) by just asking in english and dynamically load them (instead of predefining/loading) at runtime. This doesn't exist yet but people are building them (like composio/agentr.dev etc). There are talks about an "Official MCP registry API" but its just on the roadmap now. There are 10s of independent server aggregators though.
- I think hosted MCP companies make more sense than self hosting. Else, you will have to implement the MCP middleman and then also manage server executions/functions. At that point, you might as well implement the custom api yourself. 
- Composability through MCP-MCP interactions. (there is an active github issue where people are working on this). Not very realistic today because multi step agent behavior is still hard to get right. MCP's error handling and propagation should improve in this direction
- Enterprise adoption is sketchy. Servers haven't been tested at scale yet. Authentication/rbac isn't standardised(but there is an oauth implementation) and the protocol is still adding support for them. There is no defined way to do observability/logging either and you need to come up with your own implementation. MCP server companies primarily differentiate in how opinionated they implement these things.

<div align = "center">
<img  src="/assets/files/mcp1.jpg">
</div>

#### Bottomline

- Standards generally win only because some dev tools company adopts it and becomes successful. MCP is winning only because Anthropic nailed the claude fine tune to do multi step agent calls. Today you can ask claude something ( like analyse churn) and it will automatically execute sequential tool calls and return final result. <u>This UX just wasn't possible before(without coding it yourself)</u>
- It's like openapi(which is for REST apis) but specialized for ai agents. While there is a lot of overlap, after looking at the basic filesystem mcp server implementation, I think they made it a little more LLM specific. (Ex: server broadcasts in "English" what the tools do and how to call them) 
- I personally use the MCP servers because it lets me do more with a $20 subscription(like tool use inside claude). Earlier I needed an api key(which is more expensive ) and custom code. I download mcp servers like from an app store and make my claude desktop agentic (without writing any code) 
- MCP doesn't make sense in closed systems. (like openai)
- MCP needs hosted MCP server companies to win. Else, its just adds more complexity
- Composability(due to standardization) and discovery are the biggest value adds. Composability isnt unique to it but a MCP registry for discovery will be interesting. Appstore for LLMs sort of thing. 
