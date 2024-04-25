import { useState } from 'react'
import {View, TextInput, StyleSheet, ScrollView} from 'react-native'
import Button from '../components/Ui/Button'
import { useNavigation } from '@react-navigation/native'


const Cadastrar = () => {
    const navigation = useNavigation()
    


    const [txtName, setTxtName] = useState('')
    const [txtEmail, setTxtEmail] = useState('')
    const [txtAvatar, setTxtAvatar] = useState('')

    const postUser = async () =>{
        try{
          const result = await fetch('https://estudos-no-backend-por-meio-de-js.onrender.com/user', {
            method: "POST",
            headers:{
              "Content-Type": "application/json"
            },
            body: JSON.stringify({name: txtName, email: txtEmail, avatar: txtAvatar})
          })
          const data = await result.json()
          console.log(data)
          if(data?.success){
            navigation.goBack()
          }
          else {
            alert(data.error)
          }
          
        } catch (error){
          console.log('Error postUser ' + error.message)
          alert(error.message)
        }
      } 

    return (
        <ScrollView>
            <View style={styles.form}>
                <TextInput 
                style={styles.input}
                placeholder='Nome...'
                onChangeText={setTxtName}
                value={txtName}
                />
                <TextInput 
                style={styles.input}
                placeholder='Email...'
                onChangeText={setTxtEmail}
                value={txtEmail}
                />
                <TextInput 
                style={styles.input}
                placeholder='Avatar...'
                onChangeText={setTxtAvatar}
                value={txtAvatar}
                />
                <Button 
                    title="Cadastrar Usuário"
                    onPress={postUser}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    form: {
        display: 'flex',
        padding: 40
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

export default Cadastrar