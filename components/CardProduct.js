import { View, StyleSheet, Text } from "react-native"
import { Image as ImageExpo } from 'expo-image';
import H4 from "./Ui/H4";

const CardProduct = ({product}) => {
  return (
    <View style={styles.card}>
        <View style={styles.avatar}>
        <ImageExpo
                style={styles.avatarImg}
                source={product.photo}
                />
        </View>
        <View> 
            <H4>{product.name}</H4>
            <Text style={styles.email}>Preço:{product.price}R$</Text>
            <Text style={styles.email}>Quantidade:{product.quantity}</Text>

        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    card:{
        alignItems: 'center',
        marginVertical: 10,
        marginHorizontal: 10,
        width: 150,
        height: 200,
        backgroundColor: '#FFF',
        borderRadius: 20,
    },
    avatar: {
        paddingHorizontal: 10,
    },
    avatarImg:{
        width: 100,
        height: 100,
    },
    email:{
        marginTop: 10,
        fontSize: 15,
    }
})

export default CardProduct