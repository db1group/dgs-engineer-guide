---
outline: deep
---

# Automated Tests

If you are not convinced that automated tests are a valuable resource for your software development strategy, this post is not for you. From now on, let's assume that you not only know [what it is, the types of existing automated tests](https://www.atlassian.com/continuous-delivery/software-testing/automated-testing), but also see value in them.

When we talk about writing test code, there are pitfalls that need to be considered. The code you create to run the tests is also code. This may seem obvious, but how many times have you thought about looking for [Test Smells](http://xunitpatterns.com/TestSmells.html) in your code? The more you code the tests, the more effort you will have to maintain them.

So, if there is a trade-off here, what should I do?

![Tests TradeOff](/img/docs/test-tradeoff.png)

As we can see above, the biggest trade-off is balancing the amount of tests against the cost of having them, and the pyramid above expresses what we think you should do.

## Best Practices - FIRST

Regardless of the type of test you are writing, we recommend that in all types of tests, you use FIRST:

- **Fast:** Tests should be quick to execute. This means you can run them frequently, which is important to ensure your code is working correctly.
- **Isolated:** Tests should not depend on each other. This means you can run any test in any order and they should not fail because of other tests.
- **Repeatable:** Tests should be repeatable in any environment. This means you can run the tests in any environment and get the same results.
- **Self-Validating:** Tests should be self-validating. This means the test should pass or fail without human intervention or depending on another test to pass. If a test fails, you should know immediately.
- **Timely (A.K.A TDD):** Tests should be written before production code. This means you should write the test before writing the production code. This helps ensure your code is naturally testable and will likely be more modular, cohesive, and decoupled.

**Unit tests** are cheap, you can have many of them, they are quick to write ([there are even AI tools that generate them for you nowadays](https://code-gpt-docs.vercel.app/)), quick to execute, and validate your code's behavior. Additionally, writing unit tests will help you create better abstractions and follow [SOLID principles](SOLID.md).

**Contract tests** will help you ensure interoperability is intact. Everything we do nowadays involves some kind of integration. This is a valuable testing strategy. This also means its execution will be more expensive. We recommend you code contract tests for the parts of the software that interact with a third-party agent, such as other external systems. This way, you will write less code and test what is worth testing.

**Integration tests** are more complex to write and maintain. You need to test not only your code but also the parts it connects to. Sometimes provisioning in-memory infrastructure to allow the test to run is a way out, but sometimes you will have to rely on a working infrastructure to run them. We recommend you write these tests only for the main features of the system.

**E2E (end-to-end) tests** take a long time to implement and even longer to maintain. Accuracy and reliability, on the other hand, are incredible because you will actually be doing what the user wants. Choose only the critical path of your software, what needs to be executed to be useful to your users, and only that.

If you are looking for a magic number for code coverage, it is very difficult to define it for each scenario, but 80% seems to be a reasonable number for most scenarios. If this is well distributed, you will be running a good way to ensure the quality of your software.
