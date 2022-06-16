import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native';


export default function TodoItem({item, pressHandler}){
    return(
        <TouchableOpacity onPress={()=>pressHandler(item.key)}>
            <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item:{
        padding:16,
        marginTop:16,
        borderColor:'#bbb',
        borderWidth:2,
        borderStyle:'solid',
        borderRadius:10
    }
})