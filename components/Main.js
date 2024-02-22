import { StyleSheet, Text, View, Image } from 'react-native';

const Main = () => {

    return(
        <View style={styles.main}>
        <View >

        </View>
      </View>
    )

}

const styles = StyleSheet.create ({

    main: {
        flex: 9,
        width: '100%',
        justifyContent: 'center',
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

      caixaTexto: {
        backgroundColor: '#000000',
         width: '90%',
         height: 50
      }

})

export default Main