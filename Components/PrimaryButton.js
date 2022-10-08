import {StyleSheet, Text, View} from 'react-native'

import React from 'react';

const PrimaryButton =({children})=>{
    return <View style={styles.buttonStyle}>
        <Text >{children}</Text>
    </View>
};

const styles=StyleSheet.create({
    buttonStyle:{
        height:30,
        width: 50,
        backgroundColor:"white",
        margin:10,
        textAlign:'center'
    }

});

export default PrimaryButton;
