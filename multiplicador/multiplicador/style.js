import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  area: {
    marginTop: 80,
  },
  textoPrincipal: {
    fontSize: 40,
    color: '#FF0000',
    fontWeight: 'bold',
    margin: 15,
  },
   textoResultado: {
    fontSize: 40,
    color: '#008000',
    fontWeight: 'bold',
    margin: 15,
  },
  alinhaTexto: {
    textAlign: 'center',
  },
  fontePrincipal: {
    fontSize: 80,
  },
  botao1: {
    width: 200,
    height: 50,
    margin: 15,
    backgroundColor: '#5A4FCF',
    alignSelf: 'center',
  },
  botao2: {
    width: 200,
    height: 50,
    margin: 5,
    backgroundColor: '#008000',
    alignSelf: 'center',
  },
  botao3: {
    width: 200,
    height: 50,
    margin: 15,
    backgroundColor: '#DCDCDC',
    alignSelf: 'center',
  },
  textoBotao: {
    textAlign: 'center',
    textAlignVertical: 'center',
    height: 50,
    fontSize: 35,
    fontWeight: 'bold',
  },
  fundoContador: {
    width: 200,
    height: 120,
    backgroundColor: '#DDA0DD',
    alignSelf: 'center',
  },
      input:{
      height: 45,
      borderWidth: 1,
      borderColor: '#222',
      margin: 10,
      fontSize: 20,
      padding: 10,
    },

});

export { style };