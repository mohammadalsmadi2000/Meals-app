import {ImageBackground, Pressable, StyleSheet, Text, View} from 'react-native';

import {MEALS} from '../data/dummy-data';
import {useNavigation} from '@react-navigation/native'

function DisplayMeal({title,imageUrl,color,id}){
    
const navigation=useNavigation();

    return (
      <Pressable
        style={({ pressed }) => [
          { flex: 1 },
          pressed ? { opacity: 0.46 } : null,
        ]}
        onPress={() => {
          navigation.navigate("MealDetail",{
            idMeal:id,
            meal:MEALS
          });
        }}
      >
        <View style={[styles.mealCard, { backgroundColor: color }]}>
          <ImageBackground
            resizeMode="cover"
            source={{ uri: imageUrl }}
            style={{ flex: 1, justifyContent: "center" }}
          >
            <View style={{ flex: 1, justifyContent: "center" }}>
              <Text
                style={{
                  color: "white",
                  fontSize: 14,
                  lineHeight: 74,
                  fontWeight: "bold",
                  textAlign: "center",
                  backgroundColor: "#000000a0",
                }}
              >
                {title}
              </Text>
            </View>
          </ImageBackground>
        </View>
      </Pressable>
    );
}

const styles = StyleSheet.create({
  mealCard: {
    height: 150,
    backgroundColor: "red",
    // width:150
    borderRadius: 12,
    elevation: 8,
    margin: 16,
    //justifyContent:'center',
    //alignItems:'center',
    shadowColor: "black",
    shadowOffset: { height: 0, width: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 6,
    overflow: "hidden",
  },
});

export default DisplayMeal;