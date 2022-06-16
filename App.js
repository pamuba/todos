import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback ,Alert, Keyboard, FlatList} from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';


export default function App() {
  const [todos, setTodos] = useState([
    {text:'Do react native', key:'1'},
    {text:'Do arrange books', key:'2'},
    {text:'Do some workout', key:'3'},
    {text:'Do sleep well', key:'4'},
  ])

  const submithandler = (text) => {

    if(text.length > 3){
      setTodos((prevTodos)=>{
        return [
          {text:text, key:Math.random().toString()},
          ...prevTodos
        ]
      })
    }
    else{
      Alert.alert('OOPS!!', "TODOS MUST BE OVER 3 CHARS LONG", [
        {text:'Understood', onPress:()=>console.log('Alert Closed')}
      ])
    }
  }


  const pressHandler = (key) => {
    setTodos((prevTodo)=>{
      return prevTodo.filter(todo => todo.key != key)
    })
  }

  return (
   <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss()
    }}>
      <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo submithandler={submithandler}/>
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem = {({item}) => (
              <TodoItem item={item} pressHandler={pressHandler}/>
            )}
          ></FlatList>
        </View>
      </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  content:{
    padding:40,
    flex:1
  },
  list:{
    marginTop:20,
    flex:1
  }
});
