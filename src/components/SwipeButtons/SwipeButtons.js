import React from 'react'
import ReplayIcon from '@material-ui/icons/Replay'
import CloseIcon from '@material-ui/icons/Close'
import StarRateIcon from '@material-ui/icons/StarRate'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FlashOnIcon from '@material-ui/icons/FlashOn'
import IconButton from '@material-ui/core/IconButton'

function SwipeButtons() {
  return (
    <div className="fixed bottom-0 mb-12 flex justify-evenly w-full">
      <IconButton className="shadow-xl">
        <ReplayIcon className="text-orange-400" fontSize="large" />
      </IconButton>
      <IconButton className="shadow-xl">
        <CloseIcon className="text-red-600" fontSize="large" />
      </IconButton>

      <IconButton className="shadow-xl">
        <StarRateIcon className="text-blue-400" fontSize="large" />
      </IconButton>
      <IconButton className="shadow-xl">
        <FavoriteIcon className="text-teal-300" fontSize="large" />
      </IconButton>

      <IconButton className="shadow-xl">
        <FlashOnIcon className="text-purple-600" fontSize="large" />
      </IconButton>
    </div>
  )
}

export default SwipeButtons
