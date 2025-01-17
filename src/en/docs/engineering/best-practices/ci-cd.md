# CI/CD

Continuous integration, continuous delivery and deployment are development practices of the DevOps movement. The idea is to make the process of building, testing and delivering product, much more efficient bringing automation to the table, in order to deliver software to the users' hands faster than the common and traditional methods.

CI/CD introduces ongoing automation and continuous monitoring throughout the lifecycle of apps, integrating testing phases to delivery and deployment. CI refers to continuous integration which is an automation process for developers. Successful CI means new code changes to an app are regularly built, tested, and merged to a shared repository. The "CD" in CI/CD refers to continuous delivery and/or continuous deployment, which are related concepts that sometimes get used interchangeably.

Continuous delivery usually means a developer’s changes to an application are automatically bug tested and uploaded to a repository (like GitHub or a container registry). Continuous deployment (the other possible "CD") can refer to automatically releasing a developer’s changes from the repository to production, where it is usable by customers.

<img src="/img/docs/ci-cd-flow-desktop.png" alt="CI/CD Flow" style="background: white;padding: 10px;"/>

This is the ideal flow we'll have in an automated process:

![CI/CD](/img/docs/CI-CD.png)

Altough CI/CD concepts are not hard to understand, there are some best practices that will help you get more benefits out of it:

1. To reap the benefits of continuous integration, it's essential that everyone share their changes with the rest of your team. Always keeping your source code up to date and receiving updates made by the team on the source branch;
2. Developing a team culture of collaboration rather than judgment is essential and, as with any change to established work practices, it is worth discussing how you work as a team;
3. Testing is an important part of the process, it is essential that we keep the builds tested and approved in order to avoid building on bad foundations and keep the code in a releasable state;
4. Simplify your automated tests, the purpose of the process is to provide feedback quickly and deliver valuable packages. This means that finding a balance between test coverage and execution performance must be observed;
5. Using containers to host environments and run tests makes it easy to bring up and tear down environments for each new deployment, using an [infrastructure-as-code](https://www.redhat.com/en/topics/automation/what-is-infrastructure-as-code-iac) approach to script these steps so you can test multiple builds in parallel if needed, thus creating clean environments.
6. Take advantage of building an artifact and promoting it at each stage of the pipeline and finally releasing it for use. Avoiding rebuilding the software for different environments, running the risk of introducing inconsistencies and that you cannot be sure that all previous tests have passed.
7. Make the process your only way to deploy to production. It is common for problems to appear and for decisions, the idea of "circumventing" the process arises, but giving in to these demands is a false economy. Skipping the stages of automated testing risks introduces avoidable problems, while reproducing and debugging issues is much more difficult because the build is not readily available for deployment to a test environment;
8. Set up metrics in your CI/CD pipelines to alert you to signs of trouble as early as possible and insights for continuous improvement.

There are several tools to implement CI/CD, and choosing the best one depends on the specific needs of the project and the development team. Some of the most popular tools for CI/CD are:

1. [Azure DevOps Pipeline](https://azure.microsoft.com/pt-br/products/devops/pipelines): A proprietary solution from Microsoft;
2. [Jenkins](https://www.jenkins.io): An open source automation tool that is highly configurable and customizable.
3. [GitLab](https://about.gitlab.com);
4. [CircleCI](https://circleci.com);
5. [Travis CI](https://www.travis-ci.com);
6. [Bamboo](https://www.atlassian.com/br/software/bamboo): A proprietary solution from Atlassian;
7. [TeamCity](https://www.jetbrains.com/teamcity/): A proprietary solution from Jetbrains.

As stated earlier, building an effective CI/CD pipeline is as much about the team and organizational culture as it is about the processes and tools you use. They rely on breaking down traditional silos between developers, testers, and ops and encourage collaboration across teams.

Credits

- [CI/CD](https://www.redhat.com/en/topics/devops/what-is-ci-cd)
