# Technical Documentation

## Contextualization

The solution architecture can be expressed through many tools and methods. The [Unified Modeling Language (UML)](https://en.wikipedia.org/wiki/Unified_Modeling_Language) is a general-purpose development modeling language in the field of software engineering that aims to provide a standard way to visualize a system's design.

Technological solutions can become very complex and, consequently, so can their visual representations. There are many frameworks and tools that provide us with an excellent documentation structure, enabling governance and management of solutions beyond visual representations. On a practical level, we recommend always having technical documentation.

You might ask: what does this mean? Well, have you ever heard the phrase: "Do you understand, or do you want me to draw it?" Behind this question lies a lesson that suggests that perhaps drawing the solution to a problem is the most effective way to explain it.

## Why Document?

Programming enterprise software involves interacting with different people, departments, and even companies and making everything fit into one solution. We strongly believe that a good drawing representing your problem’s solution is the most effective way to engage everyone. Drawing boxes and connecting them with arrows might be the easiest way to start, and even this will bring benefits. At DB1, we encourage using the [C4 Model](https://c4model.com) for this purpose. It is a simple, practical, and free tool for representing your solutions across four levels of detail. Each level will be more effective depending on the discussion level and audience involved.

How many times have you stopped your work to explain a business rule or how software components fit into the bigger picture? We believe that a good [C4 Model](https://c4model.com) diagram can answer these kinds of questions instead of you. Whenever the team has a question, the first thing to do is consult the diagram. This will help keep it up-to-date, meaningful, and generally useful for you and your team.

After reviewing the [C4 Model](https://c4model.com) documentation, you'll find it very easy to use and practical. Create some diagrams and use the diagram review checklist to ensure you're aligned with best practices.

To make this even better, there’s a way to turn code into a [C4 Model](https://c4model.com) diagram using [C4-PlantUML](https://github.com/plantuml-stdlib/C4-PlantUML). You can add this to your code review process, ensuring that every code change is reflected in the diagram. From time to time, you can check if the solution aligns with the goals defined by you and your team (from a technical perspective).

Additionally, it’s important to integrate some practices to ensure architectural documentation remains up-to-date and relevant.

## Documentation as a Living Tool

**Automation**: Whenever possible, automate diagram and document generation. Tools like TEMOC or custom scripts help align documentation with the code.

**Continuous Review**: Promote a culture where documentation is reviewed and adjusted every time it’s consulted. If possible, include documentation review as a requirement in the code review process.

**Relevance**: Prioritize content that adds value, such as business rules, communication flows between systems, and diagrams. Avoid redundancies like documenting technical aspects of libraries/frameworks that are easily found in their official documentation.

## Structure

### Business Documentation:

- Explain what the business does and its main objectives within the application context.
- Include high-level diagrams (C4 Model – Level 1) to set the context.

### Technical Architecture:

- Map interactions between components, external systems, and internal processes.
- Use Level 1 and Level 2 diagrams from the C4 Model.

### Onboarding and Standards:

- Create a clear section for technical onboarding, including links to other documentation and best practices.
- Document expected technical standards in code reviews.

### Libraries and Frameworks:

- Document aspects of libraries/frameworks used that aren’t trivial or easily found in their official documentation.
- Explain how and why these libraries/frameworks were chosen, problems they solved, and how they impact the solution.

## Avoid

### Outdated Documentation

Avoid leaving documentation outdated. Outdated documentation can be more harmful than helpful, leading to misunderstandings and errors.

### Redundancy

Avoid redundancies like documenting technical aspects already well-covered in official library or framework documentation.

### Documentation Just for Compliance

Avoid creating documentation solely for formal or bureaucratic requirements. Documentation should be useful and practical.

### Excessive Documentation

Not everything needs to be documented; focus on documenting what’s truly necessary and adds value—like architecture, communication flows, and business rules. Avoid excessive text; diagrams and flowcharts often provide more value than long detailed texts.

### Lack of Standards and Consistency

Use templates and checklists to ensure documentation follows a standard format and covers all necessary requirements. If needed, create a style guide for documentation.

### Documentation Without Feedback or Continuous Improvement

Encourage the team to suggest improvements and keep documentation updated. Include documentation review practices in daily team routines.

## Tools

Last but not least, DB1 created an [e-book](/assets/ebooks/GEP_2021_EBOOK_ARQUITETURA.pdf) about the C4 Model that can help you get started quickly.

## Credits

- [UML-Wikipedia](https://en.wikipedia.org/wiki/Unified_Modeling_Language)
- [C4 Model](https://c4model.com)
- DB1 Software Engineering Team

