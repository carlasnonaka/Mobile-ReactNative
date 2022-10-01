import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text, ScrollView } from 'react-native';
import { style } from './style';
import Vaga from './src/Vaga';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [
        {
          id: 1,
          titulo: 'Desenvolvedor BackEnd',
          salario: 'R$ 3500',
          descricao: 'Conhecimento em C#',
          contato: 'joseffe@gmail.com',
        },
        {
          id: 2,
          titulo: 'Engenheiro de Dados',
          salario: 'R$ 4800',
          descricao: 'Conhecimento em Banco de Dados',
          contato: 'joao@gmail.com',
        },
        {
          id: 3,
          titulo: 'Analista de Negócios',
          salario: 'R$ 4500',
          descricao: 'Conhecimento em Análise',
          contato: 'maria@gmail.com',
        },
        {
          id: 4,
          titulo: 'Desenvolvedor BackEnd',
          salario: 'R$ 4000',
          descricao: 'Conhecimento em Java',
          contato: 'joaquim@gmail.com',
        },
        {
          id: 5,
          titulo: 'Desenvolvedor Mobile',
          salario: 'R$ 5000',
          descricao: 'Conhecimento em React Native',
          contato: 'paulo@gmail.com',
        },
      ],
    };
  }

  render() {
    return (
      <View>
        <Text style={style.area}></Text>
        <Text style={[style.textoPrincipal, style.alinhaTexto]}>VAGAS</Text>
        <ScrollView>
          <View style={style.box1}>
            <FlatList
              data={this.state.feed}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <Vaga data={item} />}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default App;
