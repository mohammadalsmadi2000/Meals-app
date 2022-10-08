import {FlatList, Pressable, Text, View} from 'react-native';

import DisplayMeal from '../Components/displayMeal';
import { MEALS } from '../data/dummy-data';
import { useLayoutEffect } from 'react';

function MealScreen({route,navigation}){
     
    
  // const c=useRoute(); you can use it
  const catId = route.params.categoryId;
  const color = route.params.color;
  
  
  useLayoutEffect(()=>{
    console.log(display)
      navigation.setOptions({title:display.title})

  },[catId,navigation]);
  
  function renderItem(itemData){
    let item = itemData.item;
    return <DisplayMeal id={item.id} imageUrl={item.imageUrl} color={color}  title={item.title}/>
  }

  const display=MEALS.filter((meal)=>{
    return meal.categoryIds.indexOf(catId)>=0;
  })
  //const navigation=useNavigation(); you can use it
  return (
    <FlatList
      data={display}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
    />
  );
}

export default MealScreen;