import React, { useState } from "react";
import Tweet from "./Tweet";
import { useSelector } from "react-redux";

function TweetList() {
  const tweets = useSelector((store) => store.tweets);

  return (
    <div>
      {tweets.map((tweet, index) => (
        <Tweet tweet={tweet} key={index} />
      ))}
    </div>
  );
}

export default TweetList;
