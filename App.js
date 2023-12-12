import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';

export default function App() {
 
  

    const [count, setCount] = useState(0);
  
    return (
      <View style={styles.container}>
      <Text style={styles.headText}>Counter</Text>
        <Text style={styles.infoText}>{count}</Text>
        <Button
          style={{backgroundColor:"green"}}
          onPress={() => setCount(count + 1)}
          title="Increment"
        />
         <Button
          style={{backgroundColor:"green"}}
          onPress={() => setCount(count>0 ? count - 1: 0)}
          title="Decrement"
        />
         <Button
          style={{backgroundColor:"green"}}
          onPress={() => setCount(0)}
          title="Reset"
        />
        <StatusBar  style="auto" />
      </View>
    );
  };
  
  // React Native Styles
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:"#dfdf"
    },
    headText:{
    fontSize:"2rem"
    },
    infoText:{
      marginBottom:"10px",
      width:"80px",
      height:"60px",
      backgroundColor:"black",
      color:"white",
     border:"1px solid gray",
      alignItems:"center",
      justifyContent:"center",
      fontSize:"40px",
      textAlign:"center"
    }
  });
