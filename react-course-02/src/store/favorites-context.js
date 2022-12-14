import { createContext, useState } from 'react'

const FaveritesContext = createContext({
  faverites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
})

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([])

  function addFavoriteHandler(favoriteMeetup) {
    setUserFavorites((prevUserFavorite) => {
      return prevUserFavorite.concat(favoriteMeetup)
    })
  }

  function removeFavoriteHandler(meetupId) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((meetup) => meetup.id !== meetupId)
    })
  }

  function itemIsFavoriteHandler(meetupId) {
    // 有一个则返回为真
    return userFavorites.some((meetup) => meetup.id === meetupId)
  }

  const context = {
    faverites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  }

  return (
    <FaveritesContext.Provider value={context}>
      {props.children}
    </FaveritesContext.Provider>
  )
}

export default FaveritesContext;