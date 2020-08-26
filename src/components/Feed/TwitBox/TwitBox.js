import React, {useState}from 'react'
import './TwitBox.css'
import { Avatar, Button } from "@material-ui/core";

import db from "../../../firebase";

export default function TwitBox() {
  const [twitMessage, setTwitMessage] = useState('');
  const [twitImage, setTwitImage] = useState('');

  const sendTwit = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "John Pro",
      username: "pitbull",
      verified: true,
      text: twitMessage,
      image: twitImage,
      avatar:
        "https://i.pinimg.com/originals/2d/0f/50/2d0f50e8e4f6b233c7cf70b4bd36f89c.png"
    });

    setTwitMessage("");
    setTwitImage("");
  }; 
  return (
    <div className="twitBox">
      <form>
        <div className="twitBox__input">
          <Avatar src="https://i.pinimg.com/originals/2d/0f/50/2d0f50e8e4f6b233c7cf70b4bd36f89c.png" />
          <input 
            onChange={(e) => setTwitMessage(e.target.value)}
            value={twitMessage}
            className="twitBox__input"
            placeholder="What's new?"
            type="text"
            />
         
        </div>
        <input
          value={twitImage}
          onChange={(e) => setTwitImage(e.target.value)}
          className="twitBox__imageInput"
          placeholder=" Enter image URL"
          type="text"
        /> 
        <Button onClick={sendTwit}
          type="submit" className="twitBox__twitButton">Twit</Button>
      </form>

    </div>
  )
}
