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
    divisao = this.state.numero1 / Math.pow(this.state.numero2,2);
    if (divisao < 18.5) {
      this.setState({ resultado: 'Abaixo do Peso' });
    } else if (divisao < 25) {
      this.setState({ resultado: 'Peso Normal' });
    }
    else if (divisao < 30) {
      this.setState({ resultado: 'Sobrepeso' });
    }
    else if (divisao < 35) {
      this.setState({ resultado: 'Obesidade Grau I' });
    }
     else if (divisao < 40) {
      this.setState({ resultado: 'Obesidade Grau II' });
    }
    else {
      this.setState({ resultado: 'Obesidade Grau III' });
    }
  }

  render() {
    let img =
      'https://drive.google.com/uc?id=1Spz3aIKqXScXu1NUi6GocMgL05GB9chB';

    return (
      <ScrollView>
        <Text style={style.area}></Text>
        <Text style={[style.textoPrincipal, style.alinhaTexto]}>
          CÁLCULO DO IMC
        </Text>
        <View>
          <Image source={{ uri: img }} style={style.imgem} />
        </View>
        <TextInput
          style={style.input}
          placeholder="Digite o Peso:"
          onChangeText={this.pegaNumero}
        />
        <TextInput
          style={style.input}
          placeholder="Digite a Altura:"
          onChangeText={this.pegaNumero2}
        />
        <Pressable style={style.botao1} onPress={() => this.calculo()}>
          <Text style={style.textoBotao}>Verificar</Text>
        </Pressable>
        <Text style={[style.textoResultado, style.alinhaTexto]}>
          Classificação:
        </Text>
        <Text style={[style.textoPrincipal, style.alinhaTexto]}>
          {this.state.resultado}
        </Text>
      </ScrollView>
    );
  }
}

export default App;