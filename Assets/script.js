
            var timeLeft = 60;
            var questions = [
              {
                question: "Inside which HTML element do we put the JavaScript?",
                choices: ["<javascript>", "<js>", "<script>", "<scripting>"],
                answer: "<script>"
              },
              {
                question: "Where is the correct place to insert a JavaScript?",
                choices: ["Both the <head> section and the <body> section are correct", "The <body> section", "The <head> section"],
                answer:  "Both the <head> section and the <body> section are correct"
              },
              {
    
              }
            ];
            var currentQuestion = 0;
            var score = 0;
            
            // Start the quiz and the timer
            function startQuiz() {
              document.getElementById("start-button").style.display = "none";
              document.getElementById("quiz").style.display = "block";
              showQuestion();
              setInterval(countdown, 1000);
            }
            
            // Show the current question and its choices
            function showQuestion() {
              var question = questions[currentQuestion].question;
              var choices = questions[currentQuestion].choices;
              document.getElementById("question").innerHTML = question;
              for (var i = 0; i < choices.length; i++) {
                var choice = choices[i];
                var button = document.createElement("button");
                button.innerHTML = choice;
                button.setAttribute("value", choice);
                button.setAttribute("onclick", "checkAnswer(this)");
                document.getElementById("choices").appendChild(button);
              }
            }
            
            // Check if the answer is correct
            function checkAnswer(button) {
              var choice = button.value;
              if (choice == questions[currentQuestion].answer) {
                score++;
                alert("Correct!");
              } else {
                timeLeft -= 10;
                alert("Incorrect!");
              }
              document.getElementById("choices").innerHTML = "";
              currentQuestion++;
              if (currentQuestion < questions.length) {
                showQuestion();
              } else {
                endQuiz();
              }
            }
            
            // Countdown the timer
            function countdown() {
              if (timeLeft == 0) {
                endQuiz();
              } else {
                document.getElementById("timer").innerHTML = timeLeft + " seconds remaining.";
                timeLeft--;
              }
            }
            
            // End the quiz and show the score
            function endQuiz() {
              document.getElementById("quiz").style.display = "none";
              document.getElementById("end").style.display = "block";
              document.getElementById("score").innerHTML = "Your score is " + score + "/" + questions.length;
            }
            