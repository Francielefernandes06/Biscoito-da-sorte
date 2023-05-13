import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button,TouchableOpacity } from 'react-native';

export default function App() {
  const [image, setImage] = useState(require('./src/images/biscoito.png'));
  const [textoFrase, setTextoFrase] = useState('Testando a frase');

  let frases = [
    'A vida trará coisas boas se tiveres paciência.',
    'Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.',
    'Não compense na ira o que lhe falta na razão.',
    'Defeitos e virtudes são apenas dois lados da mesma moeda.',
    'A maior de todas as torres começa no solo.',
    'Não há que ser forte. Há que ser flexível.',
    'Gente todo dia arruma os cabelos, por que não o coração?',
    'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
    'A juventude não é uma época da vida, é um estado de espírito.',
    'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.',
    'Dê toda a atenção para a formação dos teus filhos, sobretudo por exemplos de tua própria vida.',
    'Siga os bons e aprenda com eles.',
    'Não importa o tamanho da montanha, ela não pode tapar o sol.',
    'O bom-senso vai mais longe do que muito conhecimento.',
    'Quem quer colher rosas deve suportar os espinhos.',
  ]

  function abrirBiscoito(){

    setImage(require('./src/images/biscoitoAberto.png'));

    let numeroAleatorio= Math.floor(Math.random()* frases.length)

    console.log(frases[numeroAleatorio]);

    setTextoFrase('"' + frases[numeroAleatorio]+ '"');


  }

  function reiniciarBiscoito(){
    setImage(require('./src/images/biscoito.png'));
    setTextoFrase('');
  }



  


  return (
    <View style={styles.container}>
      <Image source={image}
      style={styles.image} />

      <Text style={styles.texto}>{textoFrase}</Text>

      

      <TouchableOpacity style={styles.botao} onPress={abrirBiscoito}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>Quebrar biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.botao, {marginTop:15 ,borderColor:'#000'}]} onPress={reiniciarBiscoito}>
        <View style={styles.btnArea}>
          <Text style={[styles.btnTexto,{color: '#000'}]}>Reiniciar biscoito</Text>
        </View>
      </TouchableOpacity>


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
    color: '#3498DB',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao:{
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#3498DB',
    borderRadius: 25
  },
  btnArea:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3498DB'

  }



});
