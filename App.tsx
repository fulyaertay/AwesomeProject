import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <ImageBackground
      source={require("./assets/bgImage.jpg")}
      style={{ flex: 1, width: null, height: null }}
    >
      {" "}
      <View style={styles.container}>
        <Text style={[styles.headText]}>Counter</Text>
        <Text style={styles.infoText}>{count}</Text>
        <View style={{ flexDirection: "row", margin: 10 }}>
          <View style={{ flexDirection: "row", margin: 10 }}>
          <TouchableOpacity onPress={() => setCount(count + 1)}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Increment</Text>
          </View>
        </TouchableOpacity>
             
          
          </View>
          <View style={{ flexDirection: "row", margin: 10 }}>
          <TouchableOpacity onPress={() => setCount(count > 0 ? count - 1 : 0)} disabled={count == 0 && true}>
          <View style={styles.button2}>
            <Text style={styles.buttonText}>Decrement</Text>
          </View>
        </TouchableOpacity>
           
          </View>
          <View style={{ flexDirection: "row", margin: 10 }}>
          <TouchableOpacity onPress={() => setCount(0)} disabled={count == 0 && true}>
          <View style={styles.button3}>
            <Text style={styles.buttonText}>Reset</Text>
          </View>
        </TouchableOpacity >
          
          </View>
        </View>
        <StatusBar style="auto" />
      </View>{" "}
    </ImageBackground>
  );
}

// React Native Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  headText: {
    fontSize: 40,
    marginBottom: 40,
    textAlign: "center",
  },
  infoText: {
    height: 65,
    width: 300,
    backgroundColor: "black",
    color: "white",
    borderWidth: 4,
    borderColor: "#C5B8F6",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 40,
    textAlign: "center",
  },
  buttonStyle: {
    marginTop: 10,
    marginLeft: 10,
  },
  button: {

    alignItems: 'center',
    backgroundColor: 'green',
  },
  button2: {

    alignItems: 'center',
    backgroundColor: '#9faf33',
  },
  button3: {

    alignItems: 'center',
    backgroundColor: '#B53B4F',
  },
  
  buttonText: {
    textAlign: 'center',
    padding: 20,
    color: 'white',
  },
});
