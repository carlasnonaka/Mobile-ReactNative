import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text, ScrollView, Image} from 'react-native';
import { style } from './style';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      var: '',
    };
  }

  render() {

    return (
      <View>
        <Text style={style.area}></Text>
        <Text style={[style.textoPrincipal, style.alinhaTexto]}>ANÚNCIOS</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>

        
        
        <View style={style.box1}>
        <View>
        <Image source={{ uri:'https://drive.google.com/uc?id=1IkMhijFEM6RoiNPFubXMkmMjFweu6Dgn' }} style={style.imagemFini} />
        </View>
        <Text style={[style.textoBotao, style.alinhaTexto]}>BALAS FINI 500G</Text>
        <Text style={[style.textoPrincipal, style.alinhaTexto, style.textoRiscado]}>DE: R$10,99 </Text>
        <Text style={[style.textoBotao, style.alinhaTexto]}>POR: R$5,99 </Text>
        </View>
         <View style={style.box2}>
         <View>
        <Image source={{ uri:'https://drive.google.com/uc?id=1zncflr-P3oO-6T-XI30JD0zcglEwseQO' }} style={style.imagemNutella} />
        </View>
        <Text style={[style.textoBotao, style.alinhaTexto]}>NUTELLA 750G</Text>
        <Text style={[style.textoPrincipal, style.alinhaTexto, style.textoRiscado]}>DE: R$39,99 </Text>
        <Text style={[style.textoBotao, style.alinhaTexto]}>POR: R$26,99 </Text>
        </View>
         <View style={style.box1}>
         <View>
        <Image source={{ uri:'https://drive.google.com/uc?id=1L6KzEHbcYoHfU3fsxEe-mE6ytZIm2W9K' }} style={style.imagemNutella} />
        </View>
        <Text style={[style.textoBotao, style.alinhaTexto]}>PÉ DE MOÇA {''} 1,1KG</Text>
        <Text style={[style.textoPrincipal, style.alinhaTexto, style.textoRiscado]}>{'\n'}DE: R$30,99 </Text>
        <Text style={[style.textoBotao, style.alinhaTexto]}>POR: R$18,99 </Text>
        </View>
         <View style={style.box2}>
         <View>
        <Image source={{ uri:'https://drive.google.com/uc?id=1maIL8M6aD0urCTdaD0urIVlG-gQnVeg1' }} style={style.imagemFini} />
        </View>
        <Text style={[style.textoBotao, style.alinhaTexto]}>CAIXA SONHO DE VALSA </Text>
        <Text style={[style.textoPrincipal, style.alinhaTexto, style.textoRiscado]}>{'\n'}DE: R$29,99 </Text>
        <Text style={[style.textoBotao, style.alinhaTexto]}>POR: R$20,99 </Text>
        
        </View>
      </ScrollView>
      </View>

    );
  }
}

export default App;
