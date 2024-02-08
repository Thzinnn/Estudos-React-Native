import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

console.log("test")

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.boasvindas}>Deus é bom e o Diabo não presta</Text>
      <Text style={styles.outrotexto}>O Povo não quer picanha, o povo quer chapaaar</Text>
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

  boasvindas: {
    color:"#568975",
    backgroundColor:"DDDDDD",
    fontSize: 30
  },

  outrotexto: {
    fontStyle: "italic",
    fontSize: 25,
    fontWeight: "700",
    color: "GGGGGG",

  }
});

