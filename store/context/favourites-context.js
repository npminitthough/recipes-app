import { createContext, useState } from "react";

export const FavouritesContext = createContext({
  ids: [],
  addFavourite: (id) => {},
  removeFavourite: (id) => {},
});

function FavouritesContextProvider({ children }) {
  const [favouriteMealIds, setFavouriteMealIds] = useState([]);

  function addFavourite(id) {
    setFavouriteMealIds((currentIds) => [...currentIds, id]);
  }

  function removeFavourite(id) {
    setFavouriteMealIds((currentIds) =>
      currentIds.filter((currId) => currId !== id)
    );
  }

  // wrapped components get access to the context
  const value = { ids: favouriteMealIds, addFavourite, removeFavourite };

  return (
    <FavouritesContext.Provider value={value}>
      {children}
    </FavouritesContext.Provider>
  );
}

export default FavouritesContextProvider;
