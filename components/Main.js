import { StyleSheet, Text, View, Image } from 'react-native';
import H1 from './Ui/H1';
import CardUser from './CardUser';

const Main = () => {

    return(
        <View style={styles.main}>
        <View >
          <H1>IAI PAIII</H1>
          <CardUser/>
        </View>
      </View>
    )

}

const styles = StyleSheet.create ({

    main: {
        flex: 9,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
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