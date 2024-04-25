# SOLID
Now that we got your attention with the "SOLID" title, it's time to say that there are a bunch of principles that the software industry has found very usefull and applicable for enterprise software development, using OOP (object-oriented programming).

To start there are two recommended principles that will force you not to create code you don't need or won't use. Everytime we create software there's a compeling force telling us to create a bazooka to kill a fly, that overkill costs time, effort and money. Those 2 principles will teach you tu reconsider:

1. [YAGNI (You ain't gonna need it)](https://martinfowler.com/bliki/Yagni.html);
2. [KISS (Keep it stupid simple)](https://dev.to/kwereutosu/the-k-i-s-s-principle-in-programming-1jfg).

By stating this we are not saying you shouldn't think about the future and how well-defined things needs to be. There are a bunch of technical choices that will force us to write more code than we could and many times it's the right thing to do, what you need is to find a balance and weigh each decision. Implementing the letter "O" of SOLID will help us keep the code easy to change to adapt it through time (we will discuss about that later in this post). Following this principle will allow us to postpone technical decisions and not creating overkill for our technical implementations.

Now that we are convinced that sometimes we will write less code than before, let's make the one we write, better. We introduce the [Object Calisthenics](https://medium.com/@rafaelcruz_48213/desenvolva-um-código-melhor-com-object-calisthenics-d5364767a9ba) concept. This is a very effective and practical tool giving us only 9 rules to follow. By doing this we will make the SOLID adoption closer and easier. They are connected. The 9 rules are:

1. Only One Level Of Indentation Per Method
2. Don’t Use The ELSE Keyword
3. Wrap All Primitives And Strings
4. First Class Collections
5. One Dot Per Line
6. Don’t Abbreviate
7. Keep All Entities Small
8. No Classes With More Than Two Instance Variables
9. No Getters/Setters/Properties

These 9 rules are meant to improve your maintainability, readability, testability and comprehension of your code.

Last but not least, the [SOLID](https://blog.cleancoder.com/uncle-bob/2020/10/18/Solid-Relevance.html) principle.

SOLID is an acronym created by Michael Feathers after noting that five principles of object orientation and code design—Created by Robert C. Martin (a.k.a. Uncle Bob) and discussed in The Principles of OOD—could fit this word.

The 5 principles are:

1. **S — Single Responsiblity Principle**: A class should have one and only one reason to change. You shouldn't have a GOD class. A class must be specialized in only one subject and nothing else. The violation of this principle could lead the code to lack of cohesion, high coupling, and other issues.
2. **O — Open-Closed Principle**: Objects and entities must be open to extensions but closed for changes, in other words, everytome we need to add a new behavior in our code we should add more code, not change the original one that is written. The violation of open-closed principle could lead us to introduce bugs once we will change a code that was already working.
3. **L — Liskov Substitution Principle**: This is confusing for many people, but it's actually pretty simple: a derived class must be replacable by your base class, in other words, you should be able to work on your abstractions so you can call derived classes refering to it's base class without unexpected results (polymorphism gets safer).
4. **I — Interface Segregation Principle**: A class shouldn't be forced to implement interfaces and methods it won't use. This principle tell us that creating more specialized interfaces is better than having a generic one.
5. **D — Dependency Inversion Principle**: Depend on abstractions, not implementations. Following this principle will lead you to a more cohesive and less coupled code.

There are plenty of content in the internet that will explain in depth each one of these concepts and we highly recommend you to dig a little deeper, but the goal here is to show you principles that will turn our software more: robust, scalable, flexible with just enough code to make it work.

Credits

- [SOLID O guia completo](https://medium.com/desenvolvendo-com-paixao/o-que-é-solid-o-guia-completo-para-você-entender-os-5-princ%C3%ADpios-da-poo-2b937b3fc530)
