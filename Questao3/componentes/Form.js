import React, {useState} from 'react';
import { View, TextInput, Text, StyleSheet, Button} from 'react-native';

export default function() {
  const [name, setName] = useState('');

  const handleSubmit = () => {
    alert(name);
  }
  return (
    <View>
      <Text style={styles.text}>What is your name?</Text>
      <TextInput style={styles.input} value={name} onChangeText={text => setName(text)}/>
      <Button title='Say Hello' onPress={handleSubmit} style={styles.button}/>
      <Text>Name: {name}</Text>
    </View>

  );
}

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 25
  },
  input: {
    backgroundColor: '#f4f4f4',
    height: 50,
    width: 400,
    borderRadius: 15
  },
  button: {
    marginTop: 10,
  }
});
