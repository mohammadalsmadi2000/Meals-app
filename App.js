import { Button, Pressable, StyleSheet } from 'react-native';
import React,{useState} from 'react'

import CategoryScreen from './Screen/CategoyScreen';
import CustomDrawer from './Components/CustomDrawer';
import FavMealContextProvider from './store/fav-Context';
import Favorite from './Screen/Favorite';
import Ionicons from '@expo/vector-icons/Ionicons';
import MealScreen from './Screen/MealScreen';
import MealsDetail from './Screen/MealsDetail';
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';
import {createDrawerNavigator} from '@react-navigation/drawer'
import {createNativeStackNavigator} from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function DrawerNav(){
  return (
    <Drawer.Navigator
      drawerContent={props=><CustomDrawer {...props} /> }
      screenOptions={{
        drawerStyle:{width:240},
        drawerActiveTintColor:'#351401',
          drawerActiveBackgroundColor:'#FAE4CD',
        //drawerActiveBackgroundColor: "#FAE4CD",
        headerTintColor: "white",
        headerStyle:{backgroundColor:'#351401'},
        sceneContainerStyle:{backgroundColor:'#3f2f25'}
      }}
    >
      <Drawer.Screen
        options={{
          
          headerTitleAlign: "center",
          drawerIcon: ({ color }) => (
            <Ionicons name="list" color={color} size={22} />
          ),
        }}
        name="Category"
        component={CategoryScreen}
      />
      <Drawer.Screen
        options={{
          headerTitleAlign: "center",
          drawerIcon: ({ color }) => (
            <Ionicons name="star" color={color} size={22} />
          ),
        }}
        name="Favorite"
        component={Favorite}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
   const [pushButton,setPushButton]=useState(false);
   let icon;
    if(pushButton){
      icon=<Ionicons
      name="md-star"
      color={"red"}
      size={22}
    />
    }else {
      icon=<Ionicons
      name="md-star"
      color={"white"}
      size={22}
    />
    }
   
    return (
      <>
      <FavMealContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="MealsCategory"
            screenOptions={{
              headerTitleAlign: "center",
              //drawerActiveBackgroundColor: "#FAE4CD",
              headerTintColor: "white",
              headerStyle: { backgroundColor: "#351401" },
              contentStyle: { backgroundColor: "#3f2f25" },
            }}
          >
            <Stack.Screen
              options={{ title: "Meals", headerShown: false }}
              name="MealsCategory"
              component={DrawerNav}
            />
            <Stack.Screen name="MealsScreen" component={MealScreen} />
            <Stack.Screen
              name="MealDetail"
              component={MealsDetail}
             
                
            />
            <Stack.Screen name="Favorite" component={Favorite} />
          </Stack.Navigator>
        </NavigationContainer>
        </FavMealContextProvider>
        <StatusBar style="light" />
      </>
    );
  
}

const styles = StyleSheet.create({
  buttonStyle: {
    //flex: 1,
  },buttonStyleTow:{
    opacity:0.26,
    //backgroundColor:'red'
  },
});
