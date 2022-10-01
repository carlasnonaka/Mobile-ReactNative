import React, { Component } from 'react';
import { View, Text, Image, ScrollView} from 'react-native';
import {style} from './style';
import { Linking } from 'react-native';
 
class App extends Component {
  render (){
    let nome = 'Carla Nonaka';
    let img = 'https://media-exp1.licdn.com/dms/image/C4D03AQHaFbXPaKDsrw/profile-displayphoto-shrink_800_800/0/1650593228577?e=2147483647&v=beta&t=wLiZM_QsB2aqhvPvEbJMrmEIheazjUhOAFovTWs9r9Y';
 
    return(
        <ScrollView>
        <View>
        <Text style={[style.textoPrincipal, style.alinhaTexto]}>
          Meu Primeiro Aplicativo
        </Text>
       </View>
       <View>
        <Image
          source={{ uri: img }}
          style={{ width: 300, height: 300, alignSelf:'center'}}
        />
        <Text style={[style.fontePrincipal, style.alinhaTexto]}>{nome}</Text>
        </View>
        <View>
        <Text style={style.fonteTitulo}>Dados Pessoais: </Text>
        <Text style={style.fonteTexto}>Nome: Carla Suemi Nonaka</Text>
        <Text style={style.fonteTexto}>E-mail: carlasnonaka@gmail.com </Text>
        <Text style={style.fonteTexto}>Tel: (11) 94538-4973</Text>
        </View>
        <View>
        <Text style={style.fonteTitulo}>Formação: </Text>
        <Text style={style.fonteTexto}>Curso: Administração</Text>
        <Text style={style.fonteTexto}>Faculdade Sumaré</Text>
        <Text style={style.fonteTexto}>Término em dez/2017</Text>
        </View>
        <View>
        <Text style={[style.fonteTexto, style.area]}>Curso: Análise e Desenvolvimento de Sistemas </Text>
        <Text style={style.fonteTexto}>Fatec Praia Grande</Text>
        <Text style={style.fonteTexto}>Previsão de término em Jul/2023</Text>
        </View>
         <View>
        <Text style={style.fonteTitulo}>Experiência: </Text>
        <Text style={style.fonteTexto}>Empresa: MODALGR </Text>
        <Text style={style.fonteTexto}>Cargo: Estágio em Negócios</Text>
        <Text style={style.fonteTexto}>Desde Dez/2021</Text>
        <Text style={[style.fonteTexto, style.area]}>Empresa: IAMSPE </Text>
        <Text style={style.fonteTexto}>Cargo: Oficial Administrativo</Text>
        <Text style={style.fonteTexto}>Desde Abr/2014</Text>
        </View>
        <View>
        <Text style={style.fonteTitulo}>Projetos: </Text>
        <Text style={style.fonteTexto}>1) Dicas de Algotirmo e Lógica de Programação: </Text>
        <Text style={style.fonteTexto}>Acesse:
        <Text style={style.hyperlinkStyle} 
        onPress={() => { 
        Linking.openURL('https://github.com/carlasnonaka/dicas-algoritmos'); 
        }}> https://github.com/carlasnonaka/dicas-algoritmos </Text>
        </Text>
        <Text style= {style.area}></Text>
        <Text style={style.fonteTexto}>2) Projeto Programação Orientada a Objeto em C# - RPG DUNGEON: </Text>
        <Text style={style.fonteTexto}>Acesse:
        <Text style={style.hyperlinkStyle} 
        onPress={() => { 
        Linking.openURL('https://github.com/carlasnonaka/ProjetoPOO'); 
        }}> https://github.com/carlasnonaka/ProjetoPOO </Text>
        </Text>
          <Text style= {style.area}></Text>
        <Text style={style.fonteTexto}>3) Trabalhando com Sessões em Java: Sorteio dos Números da Loteria </Text>
        <Text style={style.fonteTexto}>Acesse:
        <Text style={style.hyperlinkStyle} 
        onPress={() => { 
        Linking.openURL('https://github.com/carlasnonaka/loteria'); 
        }}> https://github.com/carlasnonaka/loteria </Text>
        </Text>
        </View>
      </ScrollView>
    )
  }
}
 
export default App;
