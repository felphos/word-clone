import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import GuessInput from "../GuessInput";
import GuessGrid from "../GuessGrid";
import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner";

function Game() {
  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  console.info({ answer });
  const [gameStatus, setGameStatus] = React.useState("running");
  const [guesses, setGuesses] = React.useState([]);

  function handleGuess(guess) {
    const nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);
    if (guess === answer) {
      setGameStatus("won");
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  }

  function restartGame() {
    const newAnswer = sample(WORDS);
    setAnswer(newAnswer);
    setGuesses([]);
    setGameStatus("running");
    console.info({ newAnswer });
  }

  return (
    <>
      <GuessGrid guesses={guesses} answer={answer} />
      <GuessInput handleGuess={handleGuess} gameStatus={gameStatus} />
      {gameStatus === "won" && (
        <WonBanner numOfGuesses={guesses.length} restartGame={restartGame} />
      )}
      {gameStatus === "lost" && (
        <LostBanner answer={answer} restartGame={restartGame} />
      )}
    </>
  );
}

export default Game;
