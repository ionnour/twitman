import React from 'react';
import './Widgets.css';
import {
  TwitterTimelineEmbed,
  TwitterShareButton
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

export default function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
        <br/>

       

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="TwitterAPI"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://twittercommunity.com/t/"}
          options={{ text: "#TwitterAPI", via: "TwitterAPI" }}
        />
      </div>
    </div>
    
  )
}
