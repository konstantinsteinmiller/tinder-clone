import React, { useState, useEffect } from 'react'
import TinderCard from 'react-tinder-card'
import database from '../../firebase'

function TinderCards() {
  const [peoplesList, setPeoplesList] = useState([
    {
      name: 'Erlich Bachman',
      url:
        'https://pyxis.nymag.com/v1/imgs/c20/d74/60659c72bedf6bd871c00f6c2127014ad4-23-tj-miller-silicon-valley-4.rsquare.w1200.jpg',
    },
    {
      name: 'Amanda Crews',
      url: 'https://s1.r29static.com/bin/entry/006/x,80/1945796/image.jpg',
    },
    {
      name: 'Zach Woods',
      url:
        'https://pmcvariety.files.wordpress.com/2019/02/zach-woods.jpg?w=1000',
    },
  ])

  useEffect(() => {
    const unsubscribe = database.collection('people').onSnapshot((snapshot) => {
      setPeoplesList(snapshot.docs.map((doc) => doc.data()))
    })

    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <div>
      <div className="flex justify-center mt-10">
        {peoplesList.map((person) => (
          <TinderCard
            className="absolute"
            preventSwipe={['up', 'down']}
            key={person.name}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="relative w-50vh h-50vh max-w-85vw rounded-xxl bg-cover bg-center shadow-2xl"
            >
              <h3 className="absolute bottom-0 mb-2 ml-4 text-white">
                {person.name}
              </h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  )
}

export default TinderCards
