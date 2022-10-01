import React, { Component } from 'react';
import { ScrollView, Text, TextInput, Pressable, Image, View } from 'react-native';
import { style } from './style';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sorteioNumero: '',
    };

  }
    calculo() {
    this.setState ({sorteioNumero: Math.floor(Math.random()*11)});
  }
 


  render() {
    let img =
      'https://drive.google.com/uc?id=144PrX_vQZo_tnqKM2WPIsW9lWXK9xIaU';

    return (
      <ScrollView>
        <Text style={style.area}></Text>
        <Text style={[style.textoPrincipal, style.alinhaTexto]}>
          JOGO DO Nº ALEATÓRIO
        </Text>
        <View>
          <Image source={{ uri: img }} style={style.imgem} />
        </View>
        <Text style={[style.textoResultado, style.alinhaTexto]}>
          Pense em um número de 0 à 10:
        </Text>
        <Text style={[style.textoResultado, style.alinhaTexto]}>
        {this.state.sorteioNumero} {'\n'}
          _________________
        </Text>
        <Pressable style={style.botao1} onPress={() => this.calculo()}>
          <Text style={style.textoBotao}>Descobrir</Text>
        </Pressable>
      </ScrollView>
    );
  }
}

export default App;