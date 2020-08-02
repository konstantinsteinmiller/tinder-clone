import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import TinderCards from './components/TinderCards/TinderCards'
import ChatsList from './components/ChatsList/ChatsList'
import ChatScreen from './components/ChatScreen/ChatScreen'
import SwipeButtons from './components/SwipeButtons/SwipeButtons'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/chat/:person">
            <Header backButtonUrl="/chat" />
            <ChatScreen />
          </Route>
          <Route path="/chat">
            <Header backButtonUrl="/" />
            <ChatsList />
          </Route>
          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
