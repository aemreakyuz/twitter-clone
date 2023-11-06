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
      {suggestions.map((user) => (
        <SuggestedUser user={user} />
      ))}
    </div>
  );
}

export default Suggestions;
