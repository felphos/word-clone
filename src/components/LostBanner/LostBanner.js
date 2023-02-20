import React from "react";

import Banner from "../Banner";

function LostBanner({ answer, restartGame }) {
  return (
    <Banner status="sad">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
      <button
        onClick={() => restartGame()}
        className="sad button"
        style={{ marginTop: "16px" }}
      >
        Restart game
      </button>
    </Banner>
  );
}

export default LostBanner;
