import React from 'react'
import FeedItem from './FeedItem'
const FeedList = (props) => {
  return (
    <div>
        {
            props.tweets.map((tweet,index)=>(
                <FeedItem {...tweet} key={index} />
            ))
        }
    </div>
  )
}

export default FeedList