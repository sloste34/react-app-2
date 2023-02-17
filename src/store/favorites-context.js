import { createContext, useState } from 'react';

//createContext contains React components. Start name of variable with upper case.
const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
});

function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
  };

  return <FavoritesContext.Provider>{props.child}</FavoritesContext.Provider>;
}
