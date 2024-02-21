---
id: bug-documentation
title: Bug Documentation
---

Bug classification
Below is the bug classification used by the DB1 Global Software QA team, these tags should be applied to the card's title, ex:

[MD][BR] - Bug card or use some field in your manage tool.

**Bug type**

[AP] - API: Errors caused in the backend code.<br/>
[DB] - Database: Errors caused by invalid data or data inconsistency.<br/>
[DC] - Documentation: Errors caused due to lack of functional specification or inadequate specification.<br/>
[DEV] - Development: Error caused due to code implemented incorrectly by the developer.<br/>
[AE] - Accessibility: Error caused by the complexity of the system interface, making it difficult to access, understand, and consequently obtain information. Errors that prevent the user's understanding of the usability, with and without disabilities.<br/>
[INF] - Infrastructure: Errors caused by a problem with the server infrastructure (eg unstable power and network connections, internal system updates, maintenance).<br/>
[INT] - Integration: Error caused after updating/integrating the working software in other environments (ex: production).<br/>
[LT] - Layout: Error caused in the visual/design part of the system (ex: paragraph position, tabs, spelling, texts, alignments, buttons, colors, lines, patterns, screen responsiveness, filter ordering).<br/>
[CQ] - Code quality: Error caused due to inconsistency in code development.<br/>
[BR] - Business rule: Error caused due to lack of understanding of the requirements described or when differences are found with the acceptance criteria described in the User Stories.<br/>
[OT] - Others: Error that does not fit into any of the existing categories.<br/>





**Severity**

[CR] - Critical: Error preventing a process, causes the application to crash in the main features or functionalities. Ex:
The button does not work, preventing the use/test of the feature.
The expected feature/functionality does not appear in the version being tested.
Severe data loss.
“Fatal error”.
The functionality developed in disagreement with specified requirements (significant deviation).
Incompatibility with the browser or other environment items.
Security (such as passwords exposed in the database).<br/>

[HG] - High: Serious impairment of functionality. Ex:
Functionality that cannot be used, system crashing or behaving unexpectedly.
Bug in essential product functionality with a complex workaround.
Moderate commitment to testing continuity.
The functionality developed in disagreement with the specified requirements (moderate deviation).
Noticeable performance issues with a reasonable impact on the normal use of the application.
Field validation rules not applied correctly (ex: invalid date and value out of range).<br/>

[MD] - Moderate: Moderate issues with product functionality. There is a simple workaround. Low impact on tests. Ex:
Error/success message not displayed.
Focus is set incorrectly.
Images are not loaded.
Ordering/breaking errors in queries and reports.
Inappropriate terms/out of context.<br/>

[LW] - Low: Feature/Functionality suffers little or no impact, but is still a valid bug. Ex:
Spelling errors.
Small errors in the interface in general, such as field alignment.
Lack of clarity in messages to the user.
NOTE: Spelling errors, despite being classified by default as “low”, deserve attention. Align the highest priority fix with the team if needed.