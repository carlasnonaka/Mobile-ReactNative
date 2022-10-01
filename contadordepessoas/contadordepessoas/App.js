import React, { Component } from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import { style } from './style';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
  }

  aumentar() {
    this.setState({ contador: this.state.contador + 1 });
  }
  diminuir() {
    this.setState({ contador: this.state.contador - 1 });
  }
  reset() {
    this.setState({ contador: 0 });
  }
  render() {
    return (
      <View>
        <Text style={style.area}></Text>
        <Text style={[style.textoPrincipal, style.alinhaTexto]}>
          CONTADOR{'\n'}DE{'\n'}PESSOAS
        </Text>
        <Text
          style={[
            style.fontePrincipal,
            style.alinhaTexto,
            style.fundoContador,
          ]}>
          {this.state.contador}
        </Text>
        <Pressable style={style.botao1} onPress={() => this.aumentar()}>
          <Text style={style.textoBotao}>+</Text>
        </Pressable>
        <Pressable
          style={[style.botao2, style.textoBotao]}
          onPress={() => this.diminuir()}>
          <Text style={style.textoBotao}>-</Text>
        </Pressable>
        <Pressable
          style={[style.botao3, style.textoBotao]}
          onPress={() => this.reset()}>
          <Text style={style.textoBotao}>Reset</Text>
        </Pressable>
      </View>
    );
  }
}

export default App;
