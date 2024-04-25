import {View, Text, StyleSheet} from 'react-native'
import Button from '../components/Ui/Button'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect, useState } from 'react'
import { TextInput } from 'react-native-web'
import H1 from '../components/Ui/H1'


export const Login = () => {
    
    const [txtPass, setTxtPass] = useState('')
    const [txtEmail, setTxtEmail] = useState('')

    useEffect(() => {
    },[])

  return (
    <View style={styles.container}>
        <H1>Entrar</H1>

        <TextInput 
        style={styles.input}
        placeholder='Email...'
        onChangeText={setTxtEmail}
        value={txtEmail}
        />
        <TextInput 
        style={styles.input}
        placeholder='Senha...'
        onChangeText={setTxtPass}
        value={txtPass}
        secureTextEntry={true}
        />

        <Button 
            title="Login" 
        /> 

        <Button 
            title="Cadastrar"
            onPress={() => navigation.navigate('Cadastrar')}
        />
              
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
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

export default Login