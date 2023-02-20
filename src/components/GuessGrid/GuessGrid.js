import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";
import GuessRow from "../GuessRow/GuessRow";

function AnswersGrid({ guesses, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((index) => (
        <GuessRow key={index} answer={answer} guess={guesses[index]} />
      ))}
    </div>
  );
}

export default AnswersGrid;
