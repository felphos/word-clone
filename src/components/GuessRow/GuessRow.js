import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function GuessRow({ guess, answer }) {
  const guessResult = checkGuess(guess, answer);
  return (
    <p className="guess">
      {range(5).map((index) => (
        <span
          key={index}
          className={guessResult ? `cell ${guessResult[index].status}` : "cell"}
        >
          {guess ? guess[index] : undefined}
        </span>
      ))}
    </p>
  );
}

export default GuessRow;
