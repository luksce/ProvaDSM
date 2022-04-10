import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style = {{flex: 1}}>
      <View style={styles.container}>
        <View style={[styles.squareShapeView,{backgroundColor:"#7ce0f9"}]}>
          <Text style={styles.text}> Square 1</Text>
        </View>

        <View style={[styles.squareShapeView,{backgroundColor:"#4dc2c2"}]}>
          <Text style={styles.text}> Square 2</Text>
        </View>

      
        <View style={[styles.squareShapeView,{backgroundColor:"#ff637c"}]}>
          <Text style={styles.text}> Square 2</Text>
        </View>
      </View>
    </SafeAreaView>
        
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 300
  },
  squareShapeView: {
    width:100,
    height: 100,
    display: 'flex',
    justifyContent:'center'
  },
  text: {
    textAlign: 'center',
  }
  
});
