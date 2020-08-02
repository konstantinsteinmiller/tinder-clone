import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar'
// import Chat from '../Chat/Chat'

function ChatScreen() {
  const person = {
    name: 'PERSON',
    timestamp: 1596405652265
  }
  const [input, setInput] = useState('')

  const [messagesList, setMessagesList] = useState([
    { name: 'Erlich Bachman', url: 'https://pyxis.nymag.com/v1/imgs/c20/d74/60659c72bedf6bd871c00f6c2127014ad4-23-tj-miller-silicon-valley-4.rsquare.w1200.jpg', message: 'Whats up?' },
    {
      name: 'Erlich Bachman',
      url: 'https://pyxis.nymag.com/v1/imgs/c20/d74/60659c72bedf6bd871c00f6c2127014ad4-23-tj-miller-silicon-valley-4.rsquare.w1200.jpg',
      message: 'How did the presentation go?',
    },
    {
      message:
        'Man it was awesome, I rocked it and they are going to fund us. Is this for real?',
    },
  ])

  const handleSend = e => {
    e.preventDefault()
    setMessagesList([...messagesList, { message: input }])
    setInput('')
  }

  return (
    <div className="">
      <p className="uppercase text-center p-5 text-gray-500">
        You matched with {person.name} on { new Date(person.timestamp).toLocaleDateString() }
      </p>
      {messagesList.map((message) => (
        <div className="p-3 flex items-center" key={message.message}>
          { message?.name
            && <Avatar className="mr-4" alt={message.name} src={message.url} /> }
          <p className={ `py-2 px-4 rounded-xxxl max-w-85vw ${ message?.name ? 'bg-gray-400': 'bg-blue-400 text-white ml-auto'}` }
          >
            {message.message}
          </p>
        </div>
      ))}

      <form className="fixed bottom-0 p-1 w-full flex items-center border-t border-gray-400 border-solid">
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="flex-grow p-4 border-none outline-none"
          placeholder="Type a message..."
        />
        <button
          className="uppercase p-4 font-bold text-red-600 border-none hover:bg-gray-300"
          onClick={handleSend} type="submit"
        >
          Send
        </button>
      </form>
    </div>
  )
}

export default ChatScreen
