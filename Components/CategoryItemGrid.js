import {Pressable, StyleSheet, Text, View} from 'react-native'

import React  from "react";

function CategoryItemGrid ({title,color,onPress}){
return (
  <View style={[styles.gridItem,{backgroundColor:color}]}>
    <Pressable onPress={onPress} android_ripple={{color:'#ccc'}} style={({pressed})=>[
        styles.buttonStyle,pressed?styles.buttonStyleTow:null
    ]} >
      <View style={styles.gridItemInner}>
        <Text>{title}</Text>
      </View>
    </Pressable>
  </View>
);
} 

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    elevation: 4,
    borderRadius: 8,
    shadowColor: "black",
    shadowOffset: { height: 0, width: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 5,
    overflow: "hidden",
  },
  buttonStyle: {
    flex: 1,
  },buttonStyleTow:{
    opacity:0.26
  },
  gridItemInner: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryItemGrid;