import { View, StyleSheet, Text, Pressable } from "react-native"
import { Image as ImageExpo } from 'expo-image';
import H4 from "./Ui/H4";
import { useNavigation } from "@react-navigation/native";

const CardUser = ({user}) => {

    const navigation = useNavigation()
  return (
    <Pressable onPress={() => navigation.navigate('Editar', {user})}>
    <View style={styles.card}>
        <View style={styles.avatar}>
        <ImageExpo
                style={styles.avatarImg}
                source={user.avatar}
                />
        </View>
        <View> 
            <H4>{user.name}</H4>
            <Text style={styles.email}>{user.email}</Text>
        </View>
    </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    card:{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15,
        marginHorizontal: 8,
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