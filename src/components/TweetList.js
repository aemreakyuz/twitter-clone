import React, { useState } from "react";
import Tweet from "./Tweet";
function TweetList() {
  const [tweets, setTweets] = useState([
    { tweet: "lorem ipsum", user: { name: "Emre" } },
    { tweet: "lorem ipsum 2", user: { name: "Ege" } },
  ]);

  return (
    <div>
      {tweets.map((tweet) => (
        <Tweet tweet={tweet} />
      ))}
    </div>
  );
}

export default TweetList;
