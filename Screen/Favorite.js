import {FlatList, StyleSheet,} from 'react-native';

import DisplayMeal from '../Components/displayMeal';
import { FavContext } from '../store/fav-Context';
import {MEALS} from '../data/dummy-data';
import { useContext } from 'react'

function Favorite() {

const favCtx=useContext(FavContext);
/*let displayFav=[];
for(const ele of favCtx.ids){
   const display=MEALS.filter((meal)=>{
    return meal.id===ele ;
  })
displayFav.push(display)
}
console.log(displayFav)*/

const favMeals=MEALS.filter(meal=>favCtx.ids.includes(meal.id))

function renderItem(itemData){
 //for(const ele of itemData.item){
  
//console.log(itemData)
    let item = itemData.item;

    return <DisplayMeal id={item.id} imageUrl={item.imageUrl} color={'#fff'}  title={item.title}/>
 // }
}

//console.log(displayFav)
  return (
    <FlatList
      data={favMeals}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
    />
  );
}

const styles=StyleSheet.create({
    textContainer:{
        //alignItems:'center'
    },textStyle:{
        fontSize:22,
        fontStyle:'italic',
    
    }
})

export default Favorite;