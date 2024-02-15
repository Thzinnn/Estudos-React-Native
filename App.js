import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

console.log("test")

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.flex_header}>
          <Image
            style={styles.imagem}
            source={{
              uri: 'https://www.mjornal.com.br/wp-content/uploads/2023/09/gatinho-678x381.jpg',
            }}
          />
          <Text style={styles.texto_header}>Gatinho</Text>
        </View>
      </View>
      <View style={styles.main}>
        <Text style={styles.outrotexto}>Essa é a história de um anão que dishavava, fumou da erva fina e bateu uma onda forte, ele foi pro paraiso e na fachada tava escito oq          BATALHAAA DA NORTEE</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.textos}>copyright@2024</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    flex: 1.7,
    width: '100%',
    backgroundColor: '#07436e',
    justifyContent: 'center',
  },

  main: {
    flex: 9,
    width: '100%',
    justifyContent: 'center',
  },

  footer: {
    flex: 1,
    width: '100%',
    backgroundColor: '#07436e',
    justifyContent: 'flex-end',
  },

  boasvindas: {
    color: "#568975",
    backgroundColor: "DDDDDD",
    fontSize: 30
  },

  outrotexto: {
    fontStyle: "italic",
    fontSize: 20,
    textAlign: 'center',
  },

  textos: {
    fontStyle: 'italic',
    color: '#fff',
    fontSize: 10,
    textAlign: 'left',
    marginLeft: 10,
    marginBottom: 5,
  },

  texto_header: {
    fontStyle: 'italic',
    color: '#fff',
    fontSize: 20,
    textAlign: 'left',
    textAlignVertical: 'center'
  },

  imagem: {
    width: 50,
    height: 50,
    marginHorizontal: 10,
    borderRadius: 50,
  },

  flex_header: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 40,
  }
});

