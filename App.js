import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem'

function App() {
  const [enteredGoal, setEnteredGoal] = useState('')
  const [goals, setGoals] = useState([])

  function handleInput(enteredText){
    setEnteredGoal(prevText => enteredText)
  }
  function addGoalHandler(){
    if (enteredGoal === ''){
      return
    }else{
      setGoals(prevGoal => [...goals, {id: Math.random().toString() ,value:enteredGoal}]) // I remove the array because, I'm using flatlist instead scrollview
      setEnteredGoal(prevText => '')
     }
  }
  function deleteGoal(goalId){
    setGoals(prevGoal =>{
      return prevGoal.filter(goal=> goal.id !== goalId)
    })
  }
  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <TextInput placeholder='Course Goals' style={styles.input} onChangeText={handleInput} value={enteredGoal}/>
        <Button title='ADD' onPress={addGoalHandler} />
      </View>

      <FlatList keyExtractor={(item, index) => item.id}
       data={goals} 
       renderItem={itemData =>(<GoalItem onDelete={deleteGoal.bind(this, itemData.item.id)} goal={itemData.item.value}/>)}
      
      />
        
     
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  },
  input:{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 10,
    width: '80%'
  },
  containerInput:{
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center'
  }
});
export default App
