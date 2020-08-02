import React from 'react'
import PersonIcon from '@material-ui/icons/Person'
import ForumIcon from '@material-ui/icons/Forum'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import IconButton from '@material-ui/core/IconButton'
import { Link, useHistory } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
function Header({ backButtonUrl }) {
  const history = useHistory()

  return (
    <div className="flex justify-between items-center border-solid border-b border-red-200">
      {backButtonUrl ? (
        <IconButton onClick={() => history.replace(backButtonUrl)}>
          <ArrowBackIosIcon className="m-5" fontSize="large" />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon className="m-5" fontSize="large" />
        </IconButton>
      )}
      <Link to="/">
        <img
          className="m-5 h-10 w-16 object-contain"
          src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
          alt="Tinder logo"
        />
      </Link>
      <Link to="/chat">
        <IconButton>
          <ForumIcon className="m-5" fontSize="large" />
        </IconButton>
      </Link>
    </div>
  )
}

export default Header
