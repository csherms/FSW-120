import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Casey Sherman",
      username: "CSHERMS",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZeMhHXHoO8OZoHEcFppXKFCa9G7I8Q4VtTg&usqp=CAU",
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-0/c25.0.206.206a/p206x206/49505593_565780447254484_4267569553589927936_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=da31f3&_nc_ohc=IHrDyNUMGXUAX_PZml1&_nc_ht=scontent-sea1-1.xx&tp=27&oh=2baa23f54623343d057c898c32bf39bd&oe=608D6356" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
