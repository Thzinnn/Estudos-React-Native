import {View, Text, StyleSheet} from 'react-native'
import Button from '../components/Ui/Button'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect, useState } from 'react'
import { TextInput } from 'react-native-web'


export const Splash = () => {
    
    

    const navigation = useNavigation()

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Login')
        }, 3500)
    },[])

  return (
    <View style={styles.container}>
        <Text>Carregando</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    input: {
        height: 40,
        width: '100%',
        backgroundColor: '#FFF',
        borderWidth: 1,
        marginBottom: 18,
        padding: 10,
    }
})

export default Splash