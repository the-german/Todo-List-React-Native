import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';

function App() {
  
  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <TextInput placeholder='Course Goals' style={styles.input}/>
        <Button title='ADD' />
      </View>

      <View>

      </View>
      <StatusBar style="auto" />
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
