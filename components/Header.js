import { StyleSheet, Text, View, Image } from 'react-native';
import { Image as ImageExpo } from 'expo-image';

const Header = () => {
    return (
            <View style={styles.header}>
                <View style={styles.flex_header}>
                    <ImageExpo
                        style={styles.imagem}
                        source={{
                            uri: 'https://www.mjornal.com.br/wp-content/uploads/2023/09/gatinho-678x381.jpg',
                        }}
                    />
                    <Text style={styles.texto_header}>Gatinho</Text>
                </View>
            </View>

            )
}

const styles = StyleSheet.create({ 
    header: {

        width: '100%',
        backgroundColor: '#497b8f',
        justifyContent: 'center',
      },

      imagem: {
        width: 50,
        height: 50,
        marginHorizontal: 10,
        borderRadius: 50,
        overflow: 'hidden'
      },
    
      flex_header: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 40,
      },

      texto_header: {
        fontStyle: 'italic',
        color: '#fff',
        fontSize: 20,
        textAlign: 'left',
        textAlignVertical: 'center'
      },
})

export default Header