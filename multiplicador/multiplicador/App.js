import React, { Component } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { style } from './style';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numero1: '',
      numero2: '',
      resultado: '',
    };

    this.pegaNumero = this.pegaNumero.bind(this);
    this.pegaNumero2 = this.pegaNumero2.bind(this);
  }

  pegaNumero(number1){
    this.setState({numero1: number1});
  }
   pegaNumero2(number2){
    this.setState({numero2: number2});
  }
  multiplicador() {
    this.setState ({resultado: this.state.numero1 * this.state.numero2});
  }

  render() {
    return (
      <View>
        <Text style={style.area}></Text>
        <Text style={[style.textoPrincipal, style.alinhaTexto]}>
          MULTIPLICADOR{'\n'}DE{'\n'}NÚMEROS
        </Text>
        
        <TextInput style={style.input} placeholder="Digite o primeiro número:" onChangeText={this.pegaNumero} 
        />
        <TextInput style={style.input} placeholder="Digite o segundo número:" onChangeText={this.pegaNumero2} 
        />
        <Pressable style={style.botao1} onPress={() => this.multiplicador()}>
          <Text style={style.textoBotao}>Calcular</Text>
        </Pressable>
        <Text style={[style.textoResultado, style.alinhaTexto]}>
          Resultado: {this.state.resultado}
        </Text>
      </View>
    );
  }
}

export default App;