import React, {useContext} from "react";
import { FavoritesContext } from "../App";

const Favorites () {
    const favorites = useContext(FavoritesContext);
  return (
    <div>
      <h3>
        Favorites
        </h3>
        {favorites}
    </div>)
};

export default Favorites;
