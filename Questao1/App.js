import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [cont, setCont] = useState(0);
  
  return (
    <View style={styles.container}>
      <Text>You've pressed the button: {cont} times</Text>
      <Button title='Press Me' onPress={() => setCont(cont+1)}>
      </Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
