import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function App() {
  const [image, setImage] = useState(require('./src/images/biscoito.png'));

  


  return (
    <View style={styles.container}>
      <Image source={image}
      style={styles.image} />

      <Text style={styles.texto}>Testte</Text>

      <Button title="Abrir biscoito" onPress={()=>alert('Dale negada')}/>


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
  image:{
    width: 250,
    height: 250
  },
  texto:{
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
  }
});
