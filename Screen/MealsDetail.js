import {FlatList, Image, ScrollView, StyleSheet, Text, View} from 'react-native'
import {useContext, useLayoutEffect} from 'react';

import { FavContext } from '../store/fav-Context';
import Ionicons from '@expo/vector-icons/Ionicons';
import { MEALS } from "../data/dummy-data";

function MealsDetail({route,navigation}){
  
    const meal=MEALS.find((item)=>{
        return item.id===route.params.idMeal;
    })
    const favCtx=useContext(FavContext);

    const ifMealIsFav = favCtx.ids.includes(route.params.idMeal);
 console.log(ifMealIsFav);
 console.log(route.params.idMeal);

  function pressIcon(){
    if(!ifMealIsFav){
      favCtx.addFav(meal.id)
    }else{
      favCtx.removeFav(meal.id);
    }
  }

    useLayoutEffect(()=>{
      navigation.setOptions({
        headerRight: () => {
          return <Ionicons onPress={pressIcon} color="white" name={ifMealIsFav?'star':'star-outline'}  size={22} />;
        },
        title: meal.title.length > 25 ? route.params.meal.title : meal.title,
      });
    },[navigation,pressIcon]);
    

    function renderList(itemData){
      
      return (
        <View
          style={{
            
            backgroundColor: "#DFD3C3",
            width: "95%",
            flex: 1,
            margin: 3,
            alignItems: "center",
            borderRadius:8,
            marginLeft: 10,
            elevation:5
          
          }}
        >
          <Text>{itemData.item}</Text>
        </View>
      );
    }
    
   
    return (
      <ScrollView>
        <View>
          <View style={styles.imageContainer}>
            <Image source={{ uri: meal.imageUrl }} style={styles.imageStyle} />
            <View style={styles.descriptionImage}>
              <Text> {meal.affordability} </Text>
              <Text> {meal.complexity} </Text>
              <Text> {meal.duration} </Text>
            </View>
          </View>

          <View style={styles.ingredients}>
            <View style={{ alignItems: "center" }}>
              <Text
                style={{
                  fontSize: 24,
                  textDecorationLine: "underline",
                  marginBottom: 10,
                  color:'white'
                }}
              >
                Ingredients
              </Text>
            </View>
            <FlatList
              data={meal.ingredients}
              keyExtractor={(item) => item.id}
              renderItem={renderList}
            />
          </View>
          <View style={styles.ingredients}>
            <View style={{ alignItems: "center" }}>
              <Text
                style={{
                  fontSize: 24,
                  textDecorationLine: "underline",
                  marginBottom: 10,
                  color:'white'
                }}
              >
                Steps
              </Text>
            </View>
            <FlatList
              data={meal.steps}
              keyExtractor={(item) => item.id}
              renderItem={renderList}
            />
          </View>
        </View>
      </ScrollView>
    );
};
export default MealsDetail;

const styles = StyleSheet.create({
  imageStyle: {
    width: "98%",
    height: 180,
    borderRadius: 8,
    margin: 5,
    marginBottom: 0,
  },
  descriptionImage: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 30,
  },
  imageContainer: {
    backgroundColor: "#DFD3C3",
    borderRadius:8,
    margin:5,elevation:5
  },
  ingredients: {
    //alignItems:'center',//backgroundColor:'#DFD3C3'
  },
});