import { useContext } from 'react'

import FaveritesContext from '../store/favorites-context'
import MeetupList from '../components/meetups/MeetupList'

function FavoritesPage() {
  const favoritesCtx = useContext(FaveritesContext)

  let content

  if (favoritesCtx.totalFavorites === 0) {
    content = <p>You got no favorites yet. Start adding some?</p>
  } else {
    content = <MeetupList meetups={favoritesCtx.faverites} />
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  )
}

export default FavoritesPage
