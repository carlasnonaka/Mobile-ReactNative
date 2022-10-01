import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  area: {
    marginTop: 50,
  },
  textoPrincipal: {
    fontSize: 40,
    color: '#2F4F4F',
    fontWeight: 'bold',
    margin: 5,
  },
  textoResultado: {
    fontSize: 40,
    color: '#DC143C',
    fontWeight: 'bold',
    margin: 5,
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
    backgroundColor: '#1E90FF',
    alignSelf: 'center',
  },
  textoBotao: {
    textAlign: 'center',
    textAlignVertical: 'center',
    height: 50,
    fontSize: 35,
    fontWeight: 'bold',
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  imgem: {
    width: 400,
    height: 280,
    alignSelf: 'center',
  },
});

export { style };