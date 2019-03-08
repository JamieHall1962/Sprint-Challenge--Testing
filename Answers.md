Demonstrate your understanding of this week's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

1. In Jest, what are the differences between `describe()` and `it()` globals, and what are good uses for them?

Describe serves as a header for a particular suite of test. It allows you to categorize a series of test with descriptive language.

'It' is an alias for 'test', and that's exactly what it does. It runs a test. You can include descriptors to make the purpose of the test clear. The test itself will set up certain expectations and then test to see if those expectations were met. 

2. What is the point of `Test Driven Development`? What do you think about this approach?

The point of TDD is writing tests before writing the code. This allows you to define the desired results, and work from there to create the code that will produce them. As for my opinion, it seems sort of backwards. I can see the validity, but to me the usefulness is fully dependent on just how well your tests are written. I can (and surely did this week) write bad code that can pass tests.


3. Mention three types of automated tests.

Unit Testing
Integration Testing
Component Testing
Snapshot Testing

There are others, but those are the ones we focused on this week.