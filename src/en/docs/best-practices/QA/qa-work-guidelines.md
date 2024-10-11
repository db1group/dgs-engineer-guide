# QA Work Guidelines

These guidelines reflect our way of being and acting as QA within projects.

Our role as QA is **to ensure that processes exist and function correctly**, promoting quality in deliveries. The QA is not responsible for making everything happen but for **monitoring and informing** the team when something is not aligned with the guidelines so that corrective actions can be taken. The QA must demonstrate the value of following the guidelines listed below to maintain quality and efficiency, aiming to achieve technical excellence within the projects.

## 1. All requests are tested

**Evaluation Criteria:**

- Testing is performed in all development processes/types (new functionality, maintenance, defects, etc.).

- No version is delivered to production without approval based on testing by the QA.

## 2. Test execution and evidence

**Evaluation Criteria:**

- All tests are executed according to the (add link) Test Execution process.

- All tests are documented according to the (add link) Test Evidence process.

## 3. Quality documentation

**Evaluation Criteria:**

- The business rule, acceptance criteria, and screen prototypes are documented and reviewed in the requests.

- The documentation is accessible to all project members.

- The QA can clarify doubts with project members about the documentation.

## 4. Test case planning and creation

**Evaluation Criteria:**

- All tests are created according to the Test Case Creation/Writing process.

- The QA is aware of what will be tested in advance, allowing for proper planning.

- There is sufficient time to perform test planning.

- The planning includes applying testing techniques for better accuracy.

- Planned tests are organized and traceable in a tool accessible to the team.

## 5. Test activity estimation

**Evaluation Criteria:**

- The QA estimates the time/effort for test tasks.

- The estimates are respected within the team's capacity.

- Estimates are refined.

## 6. Internal and external defect management

**Evaluation Criteria:**

- Internal errors (found by QA) and external errors (found by the client) follow the (add link) Bug and Retest Management model.

- The process for creating error tasks is well-defined by the project, so the QA can open internal/external error tasks according to the (add link) standard.

## 7. Homologation environment

**Evaluation Criteria:**

- There is a dedicated homologation environment for the test team.

- The environment is fully available for testing, allowing for version and test base manipulation as needed.

- There are no limitations that impact testing, such as database restrictions, version issues, or lack of QA autonomy.

- The environment is stable and does not present instabilities that may hinder testing.

## 8. Meeting agreed delivery deadlines with testing

**Evaluation Criteria:**

- There are no delays in the agreed internal deadlines between development and QA.

- Any delays do not negatively impact testing or delivery to the client.

- In case of delays, the QA is aligned and participates in defining new deadlines.

## 9. Well-defined project process and work model

**Evaluation Criteria:**

- It is possible to identify the work model or combination of models used in the project, such as Scrum, Kanban, Waterfall, etc.

- The process includes the minimum test activities (planning, estimation, and execution).

## 10. QA participation in all process stages

Ensure active QA participation in all product development phases, from initial planning to final delivery.

**Evaluation Criteria:**

- The QA is involved from the requirement definition stage, actively participating in initial meetings and discussions.

- During the development phase, the QA collaborates with developers to anticipate possible failures and design test strategies.

- During sprint planning and handover, the QA has space to showcase their technical expertise and help foresee risks.

- The QA continuously reviews quality at all stages, such as code reviews, automated testing, and requirement validation.

_Example:_
> Requirements Refinement Meetings: The QA participates in these meetings to ensure that all acceptance criteria are clear and testable, identifying possible gaps and risks before development begins.

## 11. Creation and execution of local automated tests

Start the process of automating tests in the local environment.

**Evaluation Criteria:**

- The QA takes courses or receives mentoring to learn how to automate written tests.

- There are automated tests for the project in the local environment (QA’s computer). Example: Project screen or API test automations that are running correctly.

## 12. Automated tests in the project repository

**Evaluation Criteria:**

- The automated tests are available in the project repository (Git, Bitbucket, etc.).

- Automated tests are committed to the repository at a defined frequency (every week, every 15 days, per automated task, etc.).

- The automated test project has a Read.md in the repository with installation, configuration, and execution instructions.

## 13. Automated test coverage >=40% (based on written tests)

**Evaluation Criteria:**

- Automated tests cover at least 40% of the written test cases.

## 14. Implementation of automated tests in pipelines

**Evaluation Criteria:**

- Use of Jenkins, Azure DevOps, or GitHub Actions (among others) to run automated tests on every commit in the repository, ensuring quick feedback and allowing rapid identification of problems.

## 15. Automated tests run daily

**Evaluation Criteria:**

- Automated tests are configured to run daily in the CI/CD tool.

- The automatic execution notifies the team in case of failure.

## 16. Automated test coverage >=60% (based on written tests)

**Evaluation Criteria:**

- Automated tests cover at least 60% of the written test cases.
