import React, { useState } from "react";
import SuggestedUser from "./SuggestedUser";

function Suggestions() {
  const [suggestions, setSuggestions] = useState([
    {
      name: "Emre",
    },
    { name: "Ege" },
  ]);

  return (
    <div>
      {suggestions.map((user, index) => (
        <SuggestedUser user={user} key={index} />
      ))}
    </div>
  );
}

export default Suggestions;
