import React, { Component } from 'react';
import { ScrollView, Text, TextInput, Pressable, Image, View } from 'react-native';
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

  pegaNumero(number1) {
    this.setState({ numero1: number1 });
  }
  pegaNumero2(number2) {
    this.setState({ numero2: number2 });
  }
  calculo() {
    divisao = this.state.numero1 / this.state.numero2;
    if (divisao < 0.7) {
      this.setState({ resultado: 'Abastecer com Alcool' });
    } else {
      this.setState({ resultado: 'Abastecer com Gasolina' });
    }
  }

  render() {
    let img =
      'https://drive.google.com/uc?id=1NsdfwCRnnI20ZCZcmMXsRhU22JIHUtDF';

    return (
      <ScrollView>
        <Text style={style.area}></Text>
        <Text style={[style.textoPrincipal, style.alinhaTexto]}>
          ALCOOL{'\n'}OU{'\n'}GASOLINA?
        </Text>
        <View>
          <Image source={{ uri: img }} style={style.imgem} />
        </View>
        <TextInput
          style={style.input}
          placeholder="Digite o preço do Alcool:"
          onChangeText={this.pegaNumero}
        />
        <TextInput
          style={style.input}
          placeholder="Digite o preço da Gasolina:"
          onChangeText={this.pegaNumero2}
        />
        <Pressable style={style.botao1} onPress={() => this.calculo()}>
          <Text style={style.textoBotao}>Verificar</Text>
        </Pressable>
        <Text style={[style.textoResultado, style.alinhaTexto]}>
          Resultado:
        </Text>
        <Text style={[style.textoPrincipal, style.alinhaTexto]}>
          {this.state.resultado}
        </Text>
      </ScrollView>
    );
  }
}

export default App;
