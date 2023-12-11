import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';

export default function App() {
 
  

    const [count, setCount] = useState(0);
  
    return (
      <View style={styles.container}>
        <Text style={styles.headText}>You clicked {count} times</Text>
        <Button
          onPress={() => setCount(count + 1)}
          title="Click me!"
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
      marginBottom:"10px"
    }
  });
