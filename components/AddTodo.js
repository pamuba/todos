import React, {useState} from 'react'
import { StyleSheet, TextInput, View, Text, Button } from 'react-native';


export default function AddTodo({submithandler}){
    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val)
    }
    return(
       <View>
        <TextInput
            style = {styles.input}
            placeholder='new todo...'
            onChangeText={changeHandler}
        />
        <Button onPress={()=>submithandler(text)} 
        color='coral'
        title='add todo'/>
       </View>
    )
}

const styles = StyleSheet.create({
    input:{
       marginBottom:10,
       paddingHorizontal:8,
       paddingVertical:6,
       borderBottomWidth:2,
       borderBottomColor:'#ddd'
    }
})