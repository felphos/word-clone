import React from "react";

import Banner from "../Banner";

function WonBanner({ numOfGuesses, restartGame }) {
  return (
    <Banner status="happy">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {numOfGuesses === 1 ? "1 guess" : `${numOfGuesses} guesses`}
        </strong>
        .
      </p>
      <button
        onClick={() => restartGame()}
        className="happy button"
        style={{ marginTop: "16px" }}
      >
        Restart game
      </button>
    </Banner>
  );
}

export default WonBanner;
