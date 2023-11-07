import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";

function Tweet({ tweet }) {
  return (
    <div>
      <p>{tweet.tweet}</p>
      <p>
        {tweet.user} - <FontAwesomeIcon icon={faHeart} /> {tweet.like_count}
        {" - "}
        <FontAwesomeIcon icon={faComment} /> {tweet.comment_count}
      </p>
    </div>
  );
}

export default Tweet;
