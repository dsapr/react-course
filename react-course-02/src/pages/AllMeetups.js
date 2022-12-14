import { useState } from 'react'

import MeetupList from '../components/meetups/MeetupList'

function AllMeetupsPage () {
  // save boolean value
  const [isloading, setIsLoading] = useState(true)
  // save json data
  const [loadedMeetups, setLoadedMeetups] = useState([])

  useState()

  fetch(
    'https://react-getting-started-3f574-default-rtdb.firebaseio.com/meetups.json'
  )
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      setIsLoading(false)
      setLoadedMeetups(data)
    })

  if (isloading) {
    return (
      <selection>
        <p>Loading...</p>
      </selection>
    )
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  )
}

export default AllMeetupsPage
