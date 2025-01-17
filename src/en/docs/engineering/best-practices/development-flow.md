---
outline: deep
---

# Development Flow

Development flow using a board for managing user stories.

Suggested columns for the board:

- **Waiting to Start**
- **In Development**
- **Code Review**
- **Testing**
- **QA**
- **Validation**
- **Completed**

In this suggested flow, we use Sonar in its community version, so the code analysis is performed after merging the pull request into the main branch.

## During Refinement

The developer divides the user story, creating one or more tasks with the estimate to develop the functionality.
The responsible QA analyzes the tests for the user story and creates a Functional Tests (FT) task.

At the beginning of the sprint, all tasks are in the **Waiting to Start** column.

## During the Sprint

1. Start of Development

   The developer should set up the local environment and perform the development.

   Test locally on the machine pointing to a development database.

   Run unit/integration test projects.

   Move the task to **In Development** on the board.

2. Code Review

   Create the pull request for the develop or feature branch used and send it to the PR review group on Teams.
   After PR approval, merge and run the build pipeline.

   Move the task to **Code Review** on the board.

3. Build, run unit/integration tests, and Sonar validation

   If the target branch is develop and the project has Sonar analysis enabled, the pipeline will generate the Sonar analysis data. If necessary, make corrections and submit another PR.

   The task remains **In Code Review** on the board.

4. Deploy

   To perform the test in the environment, it is necessary to run the deploy release for the staging environment.

   Move the task to **Testing** on the board.

5. Perform tests in the environment

   Test the routine again in the staging environment, validating each acceptance criterion defined in the user story.

6. Completion of development

   Move the development card to **Completed**.

7. Functional and exploratory tests by QA

   Move the FT card to the QA column, perform the staging, and add the evidence to the task.

   During staging, if a bug is found, a new bug task should be included in the user story with the problem description and the responsible developer should be requested to fix it.

   Upon completion, move the FT task to **Completed**, move or create the Validation card to the **Validation** column on the board.

   Use this description pattern for the validation card "Validation [User Story Description]".

8. Story validation by the Business Analyst PM/PO

   The responsible analyst will perform the staging validation.

   During staging, if a bug is found, a new bug task should be included in the user story with the problem description and the responsible developer should be requested to fix it.

   Upon completion, move the validation task to **Completed**.

Note: For cards that are technical implementations, the developer or the leader can add the evidence to the Validation card and move it to **Completed** without performing the testing and validation steps by the analyst.

## Conclusion

At the end of the flow, the user story will be completed and ready for deployment to the production environment.
