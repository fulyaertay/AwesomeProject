import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.headText}>Counter</Text>
      <Text style={styles.infoText}>{count}</Text>
      <View style={{ flexDirection: "row", margin: 10 }}>
        <View style={{ flexDirection: "row", margin: 10 }}>
          <Button onPress={() => setCount(count + 1)} title="Increment" color="green" />
        </View>
        <View style={{ flexDirection: "row", margin: 10 }}>
          <Button
            onPress={() => setCount(count > 0 ? count - 1 : 0)}
            title="Decrement"
            disabled={count == 0 && true}
            color="#B6BC2D"
          />
        </View>
        <View style={{ flexDirection: "row", margin: 10 }}>
       
          <Button
            onPress={() => setCount(0)}
            title="Reset"
            disabled={count == 0 && true}
            color="#B53B4F"
          />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

// React Native Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#6dd5ed"

  },
  headText: {
    fontSize: 40,
    marginBottom: 40,
  },
  infoText: {
  
    width: 70,
    height: 65,
    backgroundColor: "black",
    color: "white",
    borderWidth: 1,
    borderColor:"gray",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 40,
    textAlign: "center",
  },
  buttonStyle: {
    marginTop: 10,
    marginLeft: 10,
  },
});
