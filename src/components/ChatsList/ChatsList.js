import React from 'react'
import Chat from '../Chat/Chat'

function ChatsList() {
  return (
    <div>
      <Chat
        name="Jimmy O. Yang"
        message="Whats up?"
        timestamp="40 seconds ago"
        profilePic="https://www.thewrap.com/wp-content/uploads/2018/08/JimmyOYang.jpg"
      />
      <Chat
        name="Amanda Crews"
        message="Hey sweetie"
        timestamp="2 minutes ago"
        profilePic="https://s1.r29static.com/bin/entry/006/x,80/1945796/image.jpg"
      />
      <Chat
        name="Richard Hendrickson"
        message="Got a minute?"
        timestamp="1 week ago"
        // profilePic="https://www.thewrap.com/wp-content/uploads/2018/08/JimmyOYang.jpg"
      />
      <Chat
        name="Erlich Bachman"
        message="Got the money?"
        timestamp="4 years ago"
        profilePic="https://pyxis.nymag.com/v1/imgs/c20/d74/60659c72bedf6bd871c00f6c2127014ad4-23-tj-miller-silicon-valley-4.rsquare.w1200.jpg"
      />
      {/* <Chat*/}
      {/*  name="Dinesh"*/}
      {/*  message="Checkout my new app https://pipedpiper.com/piperchat"*/}
      {/*  timestamp="5 seconds ago"*/}
      {/*  // profilePic="https://www.thewrap.com/wp-content/uploads/2018/08/JimmyOYang.jpg"*/}
      {/* />*/}
      {/* <Chat*/}
      {/*  name="Zach Woods"*/}
      {/*  message="Whats up"*/}
      {/*  timestamp="59 seconds ago"*/}
      {/*  profilePic="https://pmcvariety.files.wordpress.com/2019/02/zach-woods.jpg?w=1000"*/}
      {/* />*/}
    </div>
  )
}

export default ChatsList
