// Define an array containing the correct answers for each question in the quiz
const correctAnswers = ['A', 'C', 'B', 'A', 'B', 'B', 'A', 'B', 'D', 'C'];

// Select the form element with the class "quiz-form" from the HTML document
const form = document.querySelector(".quiz-form");

// Select the element with the class "result" from the HTML document
const result = document.querySelector(".result");

// Select all elements with the class "question" from the HTML document and store them in a NodeList
const question = document.querySelectorAll(".question");

// Add an event listener to the form for the "submit" event
form.addEventListener("submit", event => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Initialize a variable to keep track of the user's score
    let score = 0;

    // Create an array containing the user's answers for each question by accessing the form's input values
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value, form.q6.value, form.q7.value, form.q8.value, form.q9.value, form.q10.value];

    // Log the user's answers to the console
    console.log(userAnswers);

    // Iterate through each user answer and compare it with the corresponding correct answer
    userAnswers.forEach((answer, index) => {
        // If the user's answer matches the correct answer, increment the score and add the "correct" class to the corresponding question
        if (answer === correctAnswers[index]) {
            score += 1;
            question[index].classList.add("correct");
        }
        // If the user's answer is incorrect, add the "wrong" class to the corresponding question
        else {
            question[index].classList.add("wrong");
        }
    });

    // Log the final score to the console
    console.log(score);

    // Scroll to the top of the page
    scrollTo(0, 0);

    // Remove the "hide" class from the result element to display the score
    result.classList.remove("hide");

    // Set the text content of the paragraph inside the result element to display the user's score
    result.querySelector('p').textContent = `You scored ${score}/10`;
});
