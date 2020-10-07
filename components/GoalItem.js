import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

function GoalItem(props) {
    return (
        <TouchableOpacity onPress={props.onDelete}>
          <View  style={styles.containerItems}>
           <View style={styles.listItem} >
             <Text >{props.goal }</Text>
           </View>
        </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    listItem:{
      padding:10,
      backgroundColor:'#ccc',
      borderColor:'black',
      borderWidth:1,
      margin: 2
    },
    containerItems:{
      paddingTop:12
    }
  });
export default GoalItem
 