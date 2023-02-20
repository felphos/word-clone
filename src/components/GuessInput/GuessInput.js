import React from "react";

function Guess({ gameStatus, handleGuess }) {
  const [guess, setGuess] = React.useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        handleGuess(guess);
        setGuess("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        maxLength={5}
        minLength={5}
        disabled={gameStatus !== "running"}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        id="guess-input"
        type="text"
        value={guess}
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default Guess;
