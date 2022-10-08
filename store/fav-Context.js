import { createContext, useState } from "react";

export const FavContext=createContext({
    ids:[],
    addFav:(id)=>{},
    removeFav:(id)=>{}
});

function FavMealContextProvider({children}){
  const [favoriteMealsIds, setFavoriteMealsIds] = useState([]);

  function addFav(id){
    return setFavoriteMealsIds((currentID)=>[...currentID,id]);
  }

  function removeFav(id){
    return setFavoriteMealsIds((currentID) =>
      currentID.filter((mealId) => mealId !==id)
    );
  }

  const value ={
    ids:favoriteMealsIds,
    addFav:addFav,
    removeFav:removeFav
  };
  return <FavContext.Provider value={value} >{children}</FavContext.Provider>;
}

export default FavMealContextProvider;