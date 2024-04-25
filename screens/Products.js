import {View, Text, StyleSheet} from 'react-native'
import Button from '../components/Ui/Button'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect, useState } from 'react'
import { TextInput } from 'react-native-web'


export const Products = () => {
    const [nameUser, setNameUser] = useState('')

    

    const saveAS = async (data, value) => {
        try{
        await AsyncStorage.setItem(data, value)
        console.log(data, value)
        } catch (error) {
            console.log("Erro ao gravar o dado")
        }
    }

    const getAS = async (data) => {
        let dataFound = null
        try{
        dataFound = await AsyncStorage.getItem(data)
        } catch (error) {
            console.log("Erro ao ler o dado")
        }
        return dataFound
    }

    useEffect(() => {
        const getNome = async () => {
            const nome = await getAS('nome')
            setNameUser(nome)
        }

        getNome()
    },[])

  return (
    <View style={styles.container}>
        <Text>Products</Text>

        <Text>Nome Salvo: {nameUser}</Text>

        <TextInput 
                style={styles.input}
                placeholder='Nome...'
                onChangeText={setNameUser}
                value={nameUser}
                />
        <Button
            title="Cadastrar User"
            onPress={() => saveAS("nome", nameUser) }
        />
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

export default Products