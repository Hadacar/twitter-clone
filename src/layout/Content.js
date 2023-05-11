import React, { useEffect, useState } from "react";
import { PopulerIcon } from "../icons/icons";
import db from "../firebase";
import Tweetbox from "../components/Tweetbox";
import Divider from "../components/Divider";
import FeedList from "../components/FeedList";
import { collection, query, getDocs, orderBy } from "firebase/firestore"

const Content = () => {
  const [tweets, setTweets] = useState([]);
  useEffect(() => {
    
    let fetchData = async() =>{
    let e = query(collection(db, 'feed'),orderBy("timeStamp","desc"))
    const querySnapshot = await getDocs(e)
    setTweets(querySnapshot.docs.map(doc=>doc.data()))
    }
    fetchData()
   
  }, [tweets]);

  return (
    <main className="bg-white flex flex-col flex-1 border-r border-l border-gray-extraLight">
      <header className="sticky top-0 z-10 bg-white flex justify-between items-center p-4 border-b border-gray-extraLight ">
        <span className="font-bold text-xl text-gray-900">Home</span>
        <PopulerIcon className="w-6 h-6 text-primary-base" />
      </header>
      <div className="flex px-4 py-3 space-x-2">
        <img
          src="https://pbs.twimg.com/profile_images/1636709154415951873/twFs9JHc_400x400.jpg"
          className="w-11 h-11 rounded-full"
          alt="Profile"
        />
        <Tweetbox />
      </div>
      <Divider />
      <FeedList tweets={tweets}/>
    </main>
  );
};

export default Content;
