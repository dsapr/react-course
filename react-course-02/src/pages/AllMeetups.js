import { useState, useEffect } from 'react'

import MeetupList from '../components/meetups/MeetupList'

function AllMeetupsPage() {
  // save boolean value
  const [isloading, setIsLoading] = useState(true)
  // save json data
  const [loadedMeetups, setLoadedMeetups] = useState([])

  useEffect(() => {
    setIsLoading(true)
    fetch(
      'https://react-getting-started-3f574-default-rtdb.firebaseio.com/meetups.json'
    )
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        const meetups = []

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          }

          meetups.push(meetup)
        }

        setIsLoading(false)
        setLoadedMeetups(meetups)
      })
  }, [])

  // 加载中返回 Loading
  if (isloading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
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
