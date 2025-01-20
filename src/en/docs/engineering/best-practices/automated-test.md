---
outline: deep
---

# Automated tests

If you're not convinced that automated testing is a valuable asset for your software development strategy, this post is not for you. From now on, we'll assume you not only know what automated tests are and the types available, but also see their value.

When it comes to writing code tests, there are pitfalls to consider. The code you write to run the tests is also code. This may seem obvious, but how often have you thought about looking for [test smells](http://xunitpatterns.com/TestSmells.html) in your code? The more you code the tests, the more effort you'll need to maintain them.

So, if there's a trade-off here, what should I do?

![Tests TradeOff](/img/docs/test-tradeoff.png)

As we can see above, the biggest trade-off is to balance the amount of tests against the cost of having them, and the above pyramid expresses what we think you should do.

**Unit tests** are inexpensive; you can have many of them, they're quick to write ([there are even AI tools that generate them for you these days](https://code-gpt-docs.vercel.app/pt/)), quick to run, and validate the behavior of your code. Additionally, writing unit tests will help you create better abstractions and follow [SOLID principles](SOLID.md).

**Contract tests** will help ensure that interoperability remains intact. Everything we do these days involves some form of integration. This is a valuable testing strategy. It also means that their execution will be more expensive. We recommend that you code contract tests for parts of the software that interact with a third-party agent, such as other external systems. This way, you write less code and test what's worth testing.

**Integration tests** are more complex to write and maintain. You don’t just test your own code, but also the parts it connects to. Sometimes, provisioning in-memory infrastructure to allow the test to run is a workaround, but sometimes you’ll have to rely on a running infrastructure to execute them. We recommend that you write these tests only for the system's main features.

**End-to-End (E2E) tests** take a long time to implement and even longer to maintain. The accuracy and reliability, on the other hand, are incredible, as you are really doing what the user wants. Choose only the critical path of your software, what needs to run to be useful to your users and only that.

If you're looking for a magic number for code coverage, it's very difficult to set it for every scenario, but 80% seems to be a reasonable number for most scenarios. If this is well distributed, you will be running a good way to ensure the quality of your software.
