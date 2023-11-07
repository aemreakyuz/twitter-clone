import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faRetweet } from "@fortawesome/free-solid-svg-icons";

function Tweet({ tweet }) {
  return (
    <div className="flex mb-8 pb-4 items-start gap-x-8 border-b-2 border-gray-300 ">
      <img className="rounded-full w-1/5" src={tweet.avatar} alt="" />
      <div className="w-4/5">
        <p className="font-bold">
          {tweet.user} <span className="font-light ml-1">@{tweet.user}</span>
        </p>
        <p className="py-2">{tweet.tweet}</p>
        <p>
          <span className="mr-16">
            <FontAwesomeIcon icon={faHeart} /> {tweet.like_count}
          </span>
          <span className="mr-16">
            <FontAwesomeIcon icon={faComment} /> {tweet.comment_count}
          </span>
          <span className="mr-16">
            <FontAwesomeIcon icon={faRetweet} /> {tweet.comment_count}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Tweet;
