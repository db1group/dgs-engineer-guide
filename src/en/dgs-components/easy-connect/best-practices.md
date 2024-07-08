---
outline: deep
---

# Best Practices

Let's talk a little about the best practices you can adopt when using Easy Connect.
Starting with the most important question:

## Where to use Easy Connect?

This is a difficult question to answer, but we will try to help you.

In our view, the best use cases for Easy Connect are integrations that are not part of your core business, that is, integrations that are not your final product.
In Domain Driven Design (DDD), these are what we call generic domains.

With that in mind, imagine that all the integrations that are important but not part of your core business can be done using Easy Connect. It will be able to speed up your deliveries, ensure the quality and maintainability of your code for what really matters.
Leave all that integration work with legacy systems or third-party systems to Easy Connect.

## Where not to use Easy Connect?

Similarly, as we mentioned above, it is not recommended to use Easy Connect for integrations that are part of your core business, that is, integrations that are your final product. Integrations that carry complex business rules, which are the heart of your business, should not be done using Easy Connect.
It is a great tool to accelerate the development of integrations, but it is not recommended for rules that will require a lot of maintenance and evolution.

## Tips and Best Practices in n8n

## Essential - Priority A

1 - **Standardize EVERYTHING** and make the documentation clear and accessible to the team, such as the names of: Workflows, Nodes, Variables, Webhooks, Triggers, Functions, Environment variables, Files, Folders, Tags. **Everything should be standardized.**

2. Create small and modular workflows that can be reused in other workflows.
3. Use tags to organize your workflows.
4. Create a versioning policy for your workflows, you can even version them on Git by exporting and importing the workflows.
5. Create a backup policy for your workflows.
6. Create a Flow Review policy for when a workflow is completed. This flow should be reviewed by another team member.

## Strongly Recommended - Priority B

- Create an ADR (Architectural Decision Record) policy to document the architectural decisions made during the development of workflows, version this with the name of the workflow.

## Recommended - Priority C

- Create a documentation policy for the workflows, document what each workflow does, what the inputs and outputs are, which environment variables are used, which tags are used, which triggers are used, which webhooks are used, which nodes are used, and which functions are used. We know how difficult it is to keep this up to date, however, a team with this maturity can deliver faster and with higher quality.
