# Code Review
A **must-have** step in your software development process is code review. It enables developers to **improve code quality, safety** and can also be a **knowledge transfer** tool. As any process it could be either bad or good and DB1 has gathered some characteristics of a good code review process.

When you start reviewing a code, remmember that you will always be looking for:

- **design** (does this integrate well with the rest of the system and are interactions of different components make sense)
- **functionality** (does this change is what the developer intended)
- **complexity** (is this code more complex than it should be)
- **naming** (is naming good?)
- **engineering principles** (solid, kiss, dry),
- **tests** (are different kinds of tests used appropriately, code coverage),
- **style** (does it follow style guidelines)
- **documentation**

In addition to that consider doing the follow practices:

1. Try to review your own code first

   Before sending a code to your colleagues, try to read and understand it first. Search for parts that confuse you.

2. Write a short description of what is changed

   This should explain what was changes at a high level and why are those changes made.

3. Automate what can be automated

   Leave to the system everything that can be automated, such as checking for successful builds (CI), style changes (linters), automated tests and some code smells and bugs (SonarQube).

4. Don't rush

   You need to understand what is changed. Every line of it. Read multiple times if needed, file by file.

5. Comment with kindess

   Never mention the person (you), always focus on changes as questions or suggestions and leave at least one positive comment. Explain the "why" in your comments and give a suggestion on how to make it better. You will see a recommendation for "how to make good comments" latter in this post.

6. Approve PR when its good enough

   Don't strive for perfection, but hold to high standards. Don't be a nitpicker.

7. Make reviews manageable in size

   We should try to make limit the number of lines of code for review in one sitting. Our brains cannot process so much information at once. The ideal number of LOC is 200 to 400 lines of the core at one time, which is usually 60 to 90 minutes of time.

![The Code Review Pyramid](/img/docs/the-code-review-pyramid.jpeg)

So, now you know what to be looking for in a code review process as well as good practices while doing it. Now you will see a way of how to write meaningfull comments in your colleague's code.

1. Create different categories of comment, for example:
   - **[Fix]** Something is wrong and need to be fixed. Your colleague must change it
   - **[Question]** You didn't understand the business process or implementation strategy and you need more information to finish your review
   - **[Suggestion]** There is another way to do the same thing and you wanna show how to do it. It's not necessarily wrong and it is not mandatory to change (knowledge transfer)
   - **[Improvement]** It will work, but there's a better way of doing it and your way will bring real improvement to the code, your colleague should do it
   - **[Compliment]** Your colleague did something really nice and perhaps tought you something new. Don't forget to congratulate him and reinforce that good behavior
2. Define and **document** your code review process in your team's Wiki
3. When you comment something in your colleague's pull request don't forget to **provide references** that support your change request (if you don't find one, maybe your change request is a matter of taste and not an improvement and then you shouldn't request changes)

You can use those categories above or create your own, the goal here is to have **objective visual meaningfull** pilars to determine your intention. You can even replace the categories names with emojis. It's fun!

Credits:

- Image (Code Review Pyramid): Gunnar Morling
- Text (How to do code review properly): Dr. Milan Milanović
