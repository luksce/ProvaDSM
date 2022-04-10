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
    fontSize: 15
  },
  input: {
    borderWidth: 1,
    borderColor:'#000'
  },
  button: {
    marginTop: 10,
  }
});
