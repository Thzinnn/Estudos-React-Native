import { StyleSheet, Text, View, Image } from 'react-native';

const Footer = () => {
    return(
    <View style={styles.footer}>
        <Text style={styles.textos}>copyright@2024</Text>
        <Image
        style={styles.imagem_footer}
        source={require('../assets/images/github.png')}
        />
      </View>
    )
}

const styles = StyleSheet.create ({

    footer: {
        height: 100,
        width: '100%',
        flexDirection: 'row',
      },



      textos: {
        fontStyle: 'italic',
        color: '#fff',
        fontSize: 10,
        textAlign: 'left',
        marginLeft: 10,
        marginBottom: 5,
        textAlignVertical: 'bottom'
      },

      imagem_footer: {
        width: 25,
        height: 25,
        overflow: 'hidden',
        left: 300,
        top: 50,
      }
})

export default Footer