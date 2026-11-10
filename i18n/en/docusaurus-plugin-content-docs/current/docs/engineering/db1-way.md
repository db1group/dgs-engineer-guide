---
sidebar_label: DB1 Way
sidebar_position: 1
---

# DB1 Way

The main measure of progress is working software, as the Agile Manifesto says. Technical debt leads to low delivery capacity, and prevention comes from two connected pillars: **good code metrics** and **application of best practices**.

![Technical debt](/img/docs/Technical-Debt-1024x535.png)

## Processes pillar

Processes are the way the team develops software, in five fronts:

- build & release management;
- code quality;
- test management;
- application monitoring;
- secure development.

## Metrics pillar

Metrics tell where to put effort. They are measured with SonarQube (static analysis) in the indicators:

- code coverage;
- maintainability;
- duplication density;
- reliability;
- security;
- security review.

## Engineering health calculation

- Each suggested process "completed" by the team scores.
- Each healthy metric scores; the closer to the SonarQube "A" rating, the more points.
- Each pillar has a maximum of 100 points.
- Engineering health is the midpoint (average) of the two pillars.

| Health | Classification |
|---|---|
| >=80% | Healthy |
| >=60% & &lt;80% | Degraded |
| &lt;60% | Unhealthy |

The average is an indicator that can be naive: the team must break down and combine the indicators for critical analysis.

HealthPanel, a DB1 internal product, stores the processes and metrics of all of each team's codebases. Every lead engineer, when starting with a team, applies best practices, manages technical debt, and is responsible for keeping engineering health as high as possible.

## Why

Bad code leads to bad maintenance, which leads to more time and more money. Bad code is more expensive and hurts time to market. Clients pay DB1 to be efficient.

![Reading time versus writing time of code](/img/docs/Uncle-Bob-Quote-Reading-v-Writing-Time.png)
