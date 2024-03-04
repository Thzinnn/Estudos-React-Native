import { StyleSheet, Text, View, Image } from 'react-native';
import H1 from './Ui/H1';
import CardUser from './CardUser';

const Main = () => {

    return(
        <View style={styles.main}>
        <View >
          <H1 style={styles.margin}>IAI PAIII</H1>
          <CardUser
            avatar="https://www.mjornal.com.br/wp-content/uploads/2023/09/gatinho-678x381.jpg"
            name="Thiago Inácio Lima"
            email="thiagoil2006@gmail.com"/>
            <CardUser
            avatar="https://img.freepik.com/fotos-gratis/isolado-feliz-sorridente-cao-fundo-branco-retrato-4_1562-693.jpg"
            name="Maria Souza"
            email="mariasouza@gmail.com"/>
            <CardUser
            avatar="https://scontent.fpoa10-1.fna.fbcdn.net/v/t39.30808-1/338354827_852499956437680_74557887687071546_n.jpg?stp=dst-jpg_s200x200&_nc_cat=101&ccb=1-7&_nc_sid=596444&_nc_ohc=bv4B-bJ1ig4AX-pProy&_nc_ht=scontent.fpoa10-1.fna&oh=00_AfBuGx2lRmTxfTBPaTUNGzeBnK6zoDbzGA6Ah6Uwzz5l4A&oe=65E6C991"
            name="Bobonica"
            email="Bobonica@gmail.com"/>
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
      },
      margin: {
        marginBottom: 25,
      }

})

export default Main