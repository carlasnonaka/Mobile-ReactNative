import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  Pressable,
  View,
} from 'react-native';
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
    this.pegaDe = this.pegaDe.bind(this);
    this.pegaPara = this.pegaPara.bind(this);
    this.calcular = this.calcular.bind(this);
  }

  pegaValor(number1) {
    this.setState({ valor: number1 });
  }
  pegaDe(item) {
    this.setState({ de: item });
  }
   pegaPara(item2) {
    this.setState({ para: item2 });
  }

  calcular() {

      if (this.state.pegaDe == 1)
      {
        if (this.state.pegaPara == 1)
        {
          this.setState({ resultado: '$' + valor});
        }
        else if (this.state.pegaPara == 2)
        {
          this.setState({ resultado: 'R$' + (valor*5.4125) });
        }
         else if (this.state.pegaPara == 3)
        {
          this.setState({ resultado: '€' + (valor*1.0199) });
        }
      }
      else if (this.state.pegaDe == 2)
      {
        if (this.state.pegaPara == 1)
        {
          this.setState({ resultado: '$' + (valor*0.1848)});
        }
        else if (this.state.pegaPara == 2)
        {
          this.setState({ resultado: 'R$' + valor });
        }
         else if (this.state.pegaPara == 3)
        {
          this.setState({ resultado: '€' + (valor*0.1884) });
        }

      }
      else if (this.state.pegaDe == 3)
       {
        if (this.state.pegaPara == 1)
        {
          this.setState({ resultado: '$' + (valor*0.9805)});
        }
        else if (this.state.pegaPara == 2)
        {
          this.setState({ resultado: 'R$' + (valor*5.3080) });
        }
         else if (this.state.pegaPara == 3)
        {
          this.setState({ resultado: '€' + valor });
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
        <TextInput
          style={style.input}
          onChangeText={(nomeInput) => this.setState({ nome: nomeInput })}
        />
        <Text style={style.texto}> De: </Text>
        <Picker
          style={style.input}
          selectedValue={this.state.de}
          onValueChange={(itemValue1) => this.setState({ de: itemValue1 })}>
          <Picker.Item key={1} value={0} label="Selecione" />
          <Picker.Item key={2} value={1} label="Dólar" />
          <Picker.Item key={3} value={2} label="Real" />
          <Picker.Item key={4} value={3} label="Euro" />
        </Picker>
        <Text style={style.texto}> Para: </Text>
        <Picker
          style={style.input}
          selectedValue={this.state.para}
          onValueChange={(itemValue2) => this.setState({ para: itemValue2 })}>
          <Picker.Item key={1} value={0} label="Selecione" />
          <Picker.Item key={2} value={1} label="Dólar" />
          <Picker.Item key={3} value={2} label="Real" />
          <Picker.Item key={4} value={3} label="Euro" />
        </Picker>
        <Pressable
          style={style.botao1}
          onPress={() => this.calcular()}>
          <Text style={style.textoBotao}> Converter </Text>
        </Pressable>
        <Text style={[style.textoResultado, style.alinhaTexto]}>
          Resultado:
        </Text>
         <Text style={[style.textoPrincipal, style.alinhaTexto]}>
          {this.state.resultado.toFixed(2)}
        </Text>
        
      </ScrollView>
    );
  }
}

export default App;

