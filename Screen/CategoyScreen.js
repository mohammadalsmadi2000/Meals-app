import {CATEGORIES, MEALS} from '../data/dummy-data';
import {FlatList, StyleSheet, Text, View} from 'react-native';

import CategoryItemGrid from '../Components/CategoryItemGrid'
import React from 'react';

function CategoryScreen({navigation}){
    function renderItem(item){
        return (
            <CategoryItemGrid onPress={()=>navigation.navigate('MealsScreen',{
                categoryId:item.item.id,
                color:item.item.color,
                meal:MEALS
            })} title={item.item.title} color={item.item.color} />
        );
    };
    return(
        <FlatList numColumns={2}  data={CATEGORIES} keyExtractor={(item)=>item.id}  renderItem={renderItem} />
    )
};


const styles=StyleSheet.create({});

export default CategoryScreen;