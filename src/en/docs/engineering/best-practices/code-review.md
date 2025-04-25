---
outline: deep
---

# Code Review

A **mandatory** step in your software development process is code review. It allows developers to **improve code quality and security** and can also be a **knowledge transfer tool**. Like any process, it can be good or bad, and DB1 has gathered some characteristics of a good code review process.

When starting to review code, remember that you are always looking for:

- **Functionality** - **This is the most important**. Does the implementation do what it is supposed to do? Do you understand what this Pull Request is trying to accomplish? After that, check if the code is actually implementing what was proposed.
- **Design** (does it integrate well with the rest of the system, and do the interactions of the different components make sense?)
- **Complexity** (is this code more complex than it should be?)
- **Naming** (is the naming good?)
- **Engineering principles** (SOLID, KISS, DRY)
- **Tests** (are the different types of tests used appropriately, code coverage?)
- **Style** (does it follow the style guidelines?)
- **Security** Are there security vulnerabilities in the code? Exposed API keys, passwords stored in plain text, injectable SQL queries, etc.
- **Documentation**

Additionally, consider the following practices:

1. Try to review your own code first

   Before sending code to your colleagues, try reading and understanding it first. Look for parts that confuse you.

2. Write a brief description of what was changed

   This should explain what was changed at a high level and why these changes were made.

3. Automate what can be automated

   Leave to the system everything that can be automated, such as checking successful builds (CI), style changes (linters), automated tests, and some bugs and code smells (SonarQube).

4. Don't rush

   You need to understand what was changed. Every line. Read multiple times if necessary, file by file.

5. Comment kindly

   Never mention the person (you), always focus on the changes as questions or suggestions and leave at least one positive comment. Explain the "why" in your comments and give a suggestion on how to improve the situation. You will see a recommendation on "how to make good comments" later in this post.

6. Approve PR when it's good enough

   Don't seek perfection, but maintain high standards. Don't be a nitpicker.

7. Make reviews manageable in terms of size

   We should try to limit the number of lines of code for review in a single session. Our brain cannot process so much information at once. The ideal number of LOC is 200 to 400 core lines at a time, which usually takes 60 to 90 minutes.

[The Code Review Pyramid](../../../public/img/docs/the-code-review-pyramid.jpeg)

So now you know what to look for in a code review process, as well as best practices when doing it. Now you will see a way to write meaningful comments on your colleague's code.

1. Create different categories of comments, for example:
   - **[Fix]** Something is wrong and needs to be fixed. Your colleague should change it.
   - **[Question]** You didn't understand the business process or implementation strategy and need more information to complete your review.
   - **[Suggestion]** There is another way to do the same thing, and you want to show how to do it. It is not necessarily wrong and is not mandatory to change (knowledge transfer).
   - **[Improvement]** It will work, but there is a better way to do it, and your way will bring real improvements to the code. Your colleague should do it.
   - **[Praise]** Your colleague did something very good and maybe taught you something new. Don't forget to congratulate them and reinforce that good behavior.
2. Define and **document** your code review process in your team's Wiki.
3. When you comment on something in your colleague's pull request, don't forget to **provide references** that support your change request (if you can't find any, maybe your change request is a matter of taste and not an improvement, and then you shouldn't request changes).

You can use the categories above or create your own. The goal here is to have **objective, visual, and meaningful** pillars to determine your intent. You can even replace the category names with emojis. It's fun!

Credits:

- Image (Code Review Pyramid): Gunnar Morling
- Text (How to do code review properly): Dr. Milan Milanović
