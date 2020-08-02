import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import { Link } from 'react-router-dom'

function Chat({ name, message, profilePic, timestamp }) {
  return (
    <Link to={`/chat/${name}`} className="no-underline">
      <div className="flex items-center justify-between p-5 h-16 border-b border-red-100 border-solid">
        <Avatar className="" alt={name} src={profilePic} />
        <div className="flex-grow pl-4">
          <h2>{name}</h2>
          <p className="text-gray-600">{message}</p>
        </div>
        <p className="text-gray-400 text-right">{timestamp}</p>
      </div>
    </Link>
  )
}

export default Chat
