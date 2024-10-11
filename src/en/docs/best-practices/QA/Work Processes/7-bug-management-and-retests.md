# Defect (Bug) Management and Retests

Errors, defects, failures, and root causes?

By habit, any unexpected behavior encountered during testing is reported as a bug, but did you know that not everything is actually a bug? There are theoretical definitions, including those addressed by ISTQB, to help us differentiate and treat each type of behavior individually to achieve the best results during the testing process.

- **Failure** is the incorrect result observed in the system. It is the wrong behavior detected during testing.

- **Defects** are the so-called bugs present in the developed code.

- **Errors** are made by a human action, that is, the developer who coded.

- **Root Cause** is what motivated the error to be made, and these can be diverse, such as lack of information in business documentation, distraction, misunderstanding of a rule, requirement ambiguity, lack of experience in the role, etc.

Knowing this, effective defect (bug) management provides us visibility and traceability of problems and can provide information to resolve the root cause that motivated the error and consequently created the bug leading to a failure in the system.

## Defect (Bug) Management:

- Bugs can be found through manual testing, automated testing, user feedback, and log analysis.

- Each bug must be recorded in the project's management tool for traceability and proper direction, and must be recorded in Task/Mandala with the following information:

### Bug Title

Use the format _"**[SEVERITY][TYPE] Summary of the Found Bug"**_

Examples:

> **[MD][INT] Users Screen - Dependents Module: When registering a dependent, the Date of Birth data type is not being persisted in the database**

> **[BX][LT] Users Screen - Dependents Module: Name element is not breaking line on the screen affecting the layout**

### Severity

- [CR] = Critical
- [GR] = Severe
- [MD] = Moderate
- [BX] = Low

Where:

**Critical [CR]:** Prevents a process, causes application freezing in main Features/Functionalities, and there is no workaround:

- Button does not work, preventing the use/test of the feature

- Expected Feature/Functionality does not appear in the version being tested

- Severe data loss

- "Fatal error"

- Functionality developed contrary to the specified requirements (significant deviation)

- Incompatibility with the browser or other environmental items (if applicable to project operation)

- Security (e.g., exposed passwords in the database)

- Incorrect value calculations causing possible losses for the client

**Severe [GR]:** Compromises functionality, system freezing, or behaving unpredictably, there is a workaround, but it is complex:

- Bug in an essential product functionality

- Moderate compromise of test continuity

- Functionality developed contrary to the specified requirements (moderate deviation)

- Noticeable performance issues with reasonable impact on normal application use

- Field validation rules not applied correctly (e.g., invalid date and out-of-range value) based on the requirement

**Moderate [MD]:** Moderate issues in product functionalities, there is a simple workaround. Low impact on testing:

- Error/success message not displayed

- Incorrect cursor focus

- Images not loaded

- Sorting/break errors in queries and reports

- Inappropriate/ambiguous terms

- Fields, buttons, regions with colors or opacity very different from those specified in the prototype

**Low [BX]:** Feature/Functionality has very little or almost no impact, but it is still a valid error that needs to be corrected, if possible:

- Spelling error

- Minor errors in the interface in general

- Field alignment

- Lack of clarity in user messages

- Fields, buttons, regions with colors or opacity slightly different from those specified in the prototype

### Type

- [API] - Errors found in the API caused by code in back-end development

- [DB] - Errors found in the database caused by invalid data or data inconsistency

- [DC] - Errors found in documentation caused by lack of specification of functionality or specified incorrectly

- [EA] - Errors found in system accessibility caused by the complexity of the system interface, hindering access and understanding, consequently obtaining information. Errors that impede usability understanding for users with and without disabilities.

- [LT] - Errors found in the system layout caused by visual aspects of the system, e.g., paragraph positions, tabulations, spelling, texts, alignments, buttons, colors, lines, patterns, screen responsiveness, filter sorting, etc.

- [RN] - Errors found in business rules caused by a lack of understanding of the described requirements or when there are discrepancies with the acceptance criteria described in User Stories.

- [INF] - Errors found in infrastructure caused by issues with server infrastructure, e.g., power and unstable network connections, internal system updates, maintenance, etc.

- [INT] - Errors found in integration caused by communication between systems.

- [DEV] - Errors found in development caused by incorrectly implemented code by the developer.

- [AMB] - Errors found in the environment caused by environment configuration used for testing.

- [OUT] - Various errors (Others) that do not relate to the above items.

### How to Report a Bug After Classification

To maintain traceability and reliability of the reported data, the bug description in the project's management tool should contain the minimum necessary information to reproduce the problem and objectively inform the expected result after the correction.

**_Suggested Bug Description:_**

**[ENVIRONMENT]**

You can include information such as:

- The environment in which the bug occurred

- Portal links, access data, database address, database users, etc.

- System version

- Browser used

- Any other pertinent information related to the environment

**[DESCRIPTION/PROBLEM]**

Describe a step-by-step or a summary to attempt to simulate the bug. If necessary, attach evidence of the bug such as:

- Screenshot

- Videos

- GIF

**[EXPECTED RESULT]**

Describe the expected behavior if the bug did not occur, based on:

- Existing Business Rules

- Requirement excerpts

- Prototypes

- Commonly applied standards or conventions in the system's modules or similar systems

- Alignment among stakeholders

If necessary, include evidence of the expected result such as:

- Screenshot

- Videos

- GIF

## Retest

For the bug retest to be carried out, it is important to ensure that the bug follows the process within development:

1. **Analysis:**
   - The developer responsible for the bug analyzes the problem, reproduces the error, and identifies the cause.

2. **Correction:**
   - The developer corrects the code according to the analysis. Corrections should be made in a development environment and submitted for review.

3. **Review:**
   - The correction is reviewed and tested to ensure that the problem has been resolved without introducing new issues.

4. **QA Retest:**
   - After correction, the bug should be released for retesting in the environment where the error was reported.

   - The retest should be carried out by the QA and follow the same steps that were used to reproduce the bug originally.

   - If necessary, perform additional tests to ensure that the correction did not cause problems in other parts of the system. This may include regression testing.

   - After validation, the bug documentation should be updated with the test results and any additional relevant information.

5. **Closure:**
   - After confirming that the bug has been resolved and the correction did not cause additional issues, the bug's status can be updated to proceed in the development pipeline.

   - The hours worked on the bug should be recorded, and the triage in Task/Mandala should be closed.
