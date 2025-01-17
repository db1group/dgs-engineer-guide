# DB1 Way
Our intent on this post is to describe DB1 way of developing software, or at least how our engineers see it.

DB1 is a very **metrics oriented** business. The engineering team has created a **complete guide** to access, understand and apply engineering metrics on your project (you can check the _engineering performance guide_ [here](https://github.com/db1group/engineering-performance-guide)).

Before you dive into the link above, let's understand what a healthy software means for DB1.

First things first: what is the primary measure of progress in software development? According to the [agile manifesto](https://agilemanifesto.org) it's **working software**. The manifesto also tell us in its [principles](https://agilemanifesto.org/principles.html) that **"Our highest priority is to satisfy the customer through early and continuous delivery of valuable software."** and that we should **"Welcome changing requirements, even late in development. Agile processes harness change for the customer's competitive advantage."**. The principles also tell us that **"Continuous attention to technical excellence and good design enhances agility."** You might be asking yourself what all of this have to do with technical health? you will understand in a minute.

![Technical Debt](/img/docs/Technical-Debt-1024x535.png)
Source: https://adevait.com/software/technical-debt.

Experience has taught us that technical debt leads us to low delivery capabilities.

How can we prevent that? In our opinion, ensuring two things: **good code metrics and applying best practices** in software development. These 2 things are highly connected.

1. **Process** is the **way we develop** software. That is very generic, right? Well, some of them are described in the "best practices" section of this website, but we understand these processes as the way we deal with:

   - Build & Release Management;
   - Code quality;
   - Test management;
   - Application Monitoring;
   - Infrastructure as code.

2. **Metrics** is what **the code tells me** about **where** I should **put effort** to make it better. We currently use [SonarQube](https://www.sonarsource.com/products/sonarqube) for that. It's proven to be a stable and realiable tool for static analysis. We focus on the main indicators of SonarQube (in order to achieve what we describe earlier as our goal): Code Coverage, Maintainability, Duplication Density, Reliability, Security and Security Review.

In order to manage all that, we have created an internal product called [HealthPanel](https://healthpanel.com.br). Its goal is to hold information from every team's processes and metrics from every codebase they touch.

To keep this alive, every time a lead engineer begins working with a team one of his responsabilities is to apply the best practices we've learned in the past decades and manage technical debt. The panel will reflect that and our staff engineers will keep it moving towards evolution.

## So... how technical health is calculated?

We'll score every "check" a team has in the suggested processes. The exact same things happens for healthy sonar metrics. The closer the codebase is to ["A" (SonarQube classification)](https://docs.sonarqube.org/latest/user-guide/metric-definitions/), the more you score.

Think you can have a maximum score of 100 points for both metrics and processes. Each process will count, so will every healthy metric.

Lastly, we calculate our engineering health score as the average point for those 2 pilars.

One of lead engineers responsabilities in DB1 is to keep that number as high as possible. We also have a range to identify projects and teams that need more urgent attention:

|  Engineering Health   |
| :-------------------: |
|     >=80% Healthy     |
| >=60% & <80% Degraded |
|    >60% Unhealthy     |

Of course we understand every "average" can be a naive indicator. We always encourage our engineering team to drilldown the indicators and combine them for better critical analysis.

## Why is this important?

![Uncle Bob Quote Reading vs Writing Time](/img/docs/Uncle-Bob-Quote-Reading-v-Writing-Time.png)

1. **Bad code = Bad Maintenance**, among other things.
2. **Bad maintenance = More time** to evolve it.
3. **More time = More money** spent on it.

**Bad code is more expensive and hurts your time to market**.

Our clients pay us to be **efficient**, so that is where our focus is.
