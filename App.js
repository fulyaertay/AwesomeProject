import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text  style={styles.headText}>My First App</Text>
      <Text>Fulya Ertay</Text>
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
   flex:1,
    backgroundColor: '#fefe',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headText:{
    color:"#1D9BF0"
  }
});
