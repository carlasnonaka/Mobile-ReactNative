import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  Pressable,
  View,
  Switch,
} from 'react-native';
import { style } from './style';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      idade: '',
      sexo: '',
      escolaridade: '',
      limite: 0,
      brasileiro: '',
    };

    this.exibirInformacoes = this.exibirInformacoes.bind(this);
  }

  exibirInformacoes() {
    if (this.state.nome === '' || this.state.idade === '') {
      alert('Preencha os dados corretamente!');
    } else {
      this.setState({ nome: this.state.nome });
      this.setState({ idade: this.state.idade + ' anos' });
      this.setState({ sexo: this.state.sexo });
      this.setState({
        escolaridade: this.state.escolaridade,
      });
      this.setState({
        limite: this.state.limite,
      });
      this.setState({
        brasileiro: this.state.brasileiro,
      });
    }
  }

  render() {
    return (
      <ScrollView>
        <Text style={style.area}></Text>
        <Text style={[style.textoPrincipal, style.alinhaTexto]}>
          ABERTURA DE CONTA
        </Text>
        <Text style={style.texto}> Nome: </Text>
        <TextInput
          style={style.input}
          onChangeText={(nomeInput) => this.setState({ nome: nomeInput })}
        />
        <Text style={style.texto}> Idade: </Text>
        <TextInput
          style={style.input}
          onChangeText={(idadeInput) => this.setState({ idade: idadeInput })}
        />
        <Text style={style.texto}> Sexo: </Text>
        <Picker
          style={style.input}
          selectedValue={this.state.sexo}
          onValueChange={(itemValue1) => this.setState({ sexo: itemValue1 })}>
          <Picker.Item key={1} value={'Não Informado'} label="Selecione" />
          <Picker.Item key={2} value={'Masculino'} label="Masculino" />
          <Picker.Item key={3} value={'Feminino'} label="Feminino" />
          <Picker.Item key={4} value={'Indefinido'} label="Indefinido" />
        </Picker>
        <Text style={style.texto}> Escolaridade: </Text>
        <Picker
          style={style.input}
          selectedValue={this.state.escolaridade}
          onValueChange={(itemValue2) =>
            this.setState({ escolaridade: itemValue2 })
          }>
          <Picker.Item key={1} value={'Não Informado'} label="Selecione" />
          <Picker.Item key={2} value={'Analfabeto'} label="Analfabeto" />
          <Picker.Item
            key={3}
            value={'Ensino Fudamental'}
            label="Ensino Fudamental"
          />
          <Picker.Item key={4} value={'Ensino Médio'} label="Ensino Médio" />
          <Picker.Item
            key={5}
            value={'Ensino Superior'}
            label="Ensino Superior"
          />
          <Picker.Item key={6} value={'Pós Graduação'} label="Pós Graduação" />
          <Picker.Item key={7} value={'Mestrado'} label="Mestrado" />
          <Picker.Item key={8} value={'Doutorado'} label="Doutorado" />
        </Picker>
        <Text style={style.texto}> Limite: </Text>
        <View style={style.container}>
          <Slider
            minimumValue={0}
            maximumValue={10000}
            step={500}
            minimumTrackTintColor="blue"
            maximumTrackTintColor="gray"
            thumbTintColor="blue"
            onValueChange={(valorSelecionado) =>
              this.setState({ limite: valorSelecionado })
            }
            value={this.state.limite}
          />
          <Text style={{ textAlign: 'center', fontSize: 30 }}>
            R$ {this.state.limite.toFixed(0)}
          </Text>
        </View>
        <View>
          <Text style={style.texto}>
            {' '}
            Brasileiro:{' '}
            <Switch
              value={this.state.brasileiro}
              thumbColor="gray"
              onValueChange={(valorSwitch) =>
                this.setState({ brasileiro: valorSwitch })
              }
            />
          </Text>
        </View>
        <Pressable
          style={style.botao1}
          onPress={() => this.exibirInformacoes()}>
          <Text style={style.textoBotao}> Confirmar </Text>
        </Pressable>
        <Text style={[style.texto, style.alinhaTexto]}>
          {' '}
          DADOS INFORMADOS:{' '}
        </Text>
        <Text style={style.texto}> Nome: {this.state.nome} </Text>
        <Text style={style.texto}> Idade: {this.state.idade} </Text>
        <Text style={style.texto}> Sexo: {this.state.sexo} </Text>
        <Text style={style.texto}>
          {' '}
          Escolaridade: {this.state.escolaridade}{' '}
        </Text>
        <Text style={style.texto}>
          {' '}
          Limite: R$ {this.state.limite.toFixed(0)}{' '}
        </Text>
        <Text style={style.texto}>
          {' '}
          Brasileiro: {this.state.brasileiro ? 'Sim' : 'Não'}{' '}
        </Text>
      </ScrollView>
    );
  }
}

export default App;
