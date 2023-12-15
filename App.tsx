import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, Text, Button, StyleSheet, ImageBackground,    TouchableOpacity } from "react-native";

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
          <TouchableOpacity>
        
          <Button
              onPress={() => setCount(count + 1)}
              title="Increment"
              color="green"
            />
         
        </TouchableOpacity>
           
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
});
