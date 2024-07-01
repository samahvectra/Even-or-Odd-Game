let attempts = 0;
let score = 0;
function guess(userguess) {
  //Increasing Attempts by 1 :)

  attempts++;
  document.getElementById("attempts").innerHTML = attempts;

  // Generating Random Number (:)

  const random_number = Math.floor(Math.random() * 100) + 1;

  // Determaining the Correct answer

  const correct_answer = random_number % 2 == 0 ? "even" : "odd";

  function sfx(isCorrect) {
    let audio = isCorrect
      ? document.getElementById("correct")
      : document.getElementById("wrong");

    audio.pause();

    audio.currenttime = 0;

    audio.play();
  }

  if (correct_answer == userguess) {
    // Update The Display
    document.getElementById("display").innerHTML =
      "Correct The Number answer is " + random_number;

    score++;

    document.getElementById("score").innerHTML = score;

    // playing sound effects

    sfx(true);
  } else {
    // Update The Displa
    document.getElementById("display").innerHTML =
      "Wrong !The Number answer is " + random_number;

    // playing sound effects

    sfx(false);
  }
}
