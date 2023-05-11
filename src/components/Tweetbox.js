import React, { useState } from "react";
import {
  ImageIcon,
  GIFIcon,
  PollIcon,
  ScheduleIcon,
  EmojiIcon,
} from "../icons/icons";
import firebase from 'firebase/compat/app';

import db from "../firebase"
const Tweetbox = () => {
  const [content, setContent] = useState("");
  const sendTweet=()=>{
    if(content!==""){
      db.collection("feed").add({
        displayName:"Alperen Bozkurt",
        username:"@alprnbzkrt007",
        content,
        timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPAOjkTX77DyhxsRe-JZazrkNHjiIr607HYe15B70eiw&s",
        avatar:"https://pbs.twimg.com/profile_images/1636709154415951873/twFs9JHc_400x400.jpg",
      });
      setContent("")
    }
  }
  return (
    <div className="flex flex-col flex-1 mt-2 px-8">
      <textarea
        className="w-full text-xl placeholder-gray-dark outline-none overflow-hidden resize-none bg-transparentS"
        placeholder="What's happening"
        onChange={(e)=>setContent(e.target.value)}
        value={content}
      />
      <div className="flex items-center justify-between">
        <div className="flex -ml-3">
          <div className="flex items-center justify-center rounded-full w-11 h-11 hover:bg-gray-lightest ">
            <ImageIcon className="w-6 h-6 text-primary-base" />
          </div>
          <div className="flex items-center justify-center rounded-full w-11 h-11 hover:bg-gray-lightest ">
            <GIFIcon className="w-6 h-6 text-primary-base" />
          </div>{" "}
          <div className="flex items-center justify-center rounded-full w-11 h-11 hover:bg-gray-lightest ">
            <PollIcon className="w-6 h-6 text-primary-base" />
          </div>{" "}
          <div className="flex items-center justify-center rounded-full w-11 h-11 hover:bg-gray-lightest ">
            <EmojiIcon className="w-6 h-6 text-primary-base" />
          </div>
          <div className="flex items-center justify-center rounded-full w-11 h-11 hover:bg-gray-lightest ">
            <ScheduleIcon className="w-6 h-6 text-primary-base" />
          </div>
        </div>
        <button className="bg-primary-base text-white rounded-full px-4 py-2 font-medium"
        onClick={sendTweet}>
          Tweet{" "}
        </button>
      </div>
    </div>
  );
};

export default Tweetbox;
