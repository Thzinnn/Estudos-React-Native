import { View, StyleSheet, Text } from "react-native"
import { Image as ImageExpo } from 'expo-image';
import H4 from "./Ui/H4";

const CardUser = () => {
  return (
    <View style={styles.card}>
        <View style={styles.avatar}>
        <ImageExpo
                style={styles.avatarImg}
                source={{
                    uri: 'https://www.mjornal.com.br/wp-content/uploads/2023/09/gatinho-678x381.jpg',
                }}
            />
        </View>
        <View> 
            <H4>Thiago Inácio Lima</H4>
            <Text style={styles.email}>thiagoil2006@gmail.com</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    card:{
        flexDirection: 'row',
        alignItems: 'center',

        width: 300,
        height: 100,
        backgroundColor: '#FFF',
        borderRadius: 20,
    },
    avatar: {
        paddingHorizontal: 10,
    },
    avatarImg:{
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    email:{
        marginTop: 15,
    }
})

export default CardUser