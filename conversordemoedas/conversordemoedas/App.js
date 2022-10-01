import React, { Component } from 'react';
import { ScrollView, Text, TextInput, Pressable, View } from 'react-native';
import { style } from './style';
import { Picker } from '@react-native-picker/picker';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valor: 0,
      de: 0,
      para: 0,
      resultado: 0,
    };

    this.pegaValor = this.pegaValor.bind(this);
    this.calcular = this.calcular.bind(this);
  }

  pegaValor(number1) {
    this.setState({ valor: number1 });
  }

  calcular() {
    if (this.state.de == 1) {
      if (this.state.para == 1) {
        this.setState({ resultado: '$' + this.state.valor });
      } else if (this.state.para == 2) {
        this.setState({
          resultado: 'R$' + (this.state.valor * 5.4125).toFixed(2),
        });
      } else if (this.state.para == 3) {
        this.setState({
          resultado: '€' + (this.state.valor * 1.0199).toFixed(2),
        });
      }
    } else if (this.state.de == 2) {
      if (this.state.para == 1) {
        this.setState({
          resultado: '$' + (this.state.valor * 0.1848).toFixed(2),
        });
      } else if (this.state.para == 2) {
        this.setState({ resultado: 'R$' + this.state.valor });
      } else if (this.state.para == 3) {
        this.setState({
          resultado: '€' + (this.state.valor * 0.1884).toFixed(2),
        });
      }
    } else if (this.state.de == 3) {
      if (this.state.para == 1) {
        this.setState({
          resultado: '$' + (this.state.valor * 0.9805).toFixed(2),
        });
      } else if (this.state.para == 2) {
        this.setState({
          resultado: 'R$' + (this.state.valor * 5.308).toFixed(2),
        });
      } else if (this.state.para == 3) {
        this.setState({ resultado: '€' + this.state.valor });
      }
    }
  }

  render() {
    return (
      <ScrollView>
        <Text style={style.area}></Text>
        <Text style={[style.textoPrincipal, style.alinhaTexto]}>
          CONVERSOR DE MOEDAS DOLLAR, REAL, EURO
        </Text>
        <Text style={style.texto}> Valor: </Text>
        <TextInput style={style.input} onChangeText={this.pegaValor} />
        <Text style={style.texto}> De: </Text>
        <Picker
          style={style.input}
          selectedValue={this.state.de}
          onValueChange={(itemValue1, itemIndex1) =>
            this.setState({ de: itemIndex1 })
          }>
          <Picker.Item key={1} value={0} label="Selecione" />
          <Picker.Item key={2} value={1} label="Dólar" />
          <Picker.Item key={3} value={2} label="Real" />
          <Picker.Item key={4} value={3} label="Euro" />
        </Picker>
        <Text style={style.texto}> Para: </Text>
        <Picker
          style={style.input}
          selectedValue={this.state.para}
          onValueChange={(itemValue2, itemIndex2) =>
            this.setState({ para: itemIndex2 })
          }>
          <Picker.Item key={1} value={0} label="Selecione" />
          <Picker.Item key={2} value={1} label="Dólar" />
          <Picker.Item key={3} value={2} label="Real" />
          <Picker.Item key={4} value={3} label="Euro" />
        </Picker>
        <Pressable style={style.botao1} onPress={() => this.calcular()}>
          <Text style={style.textoBotao}> Converter </Text>
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
