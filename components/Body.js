import { StyleSheet, Text, View, Image, FlatList, TouchableHighlight, TextInput} from 'react-native';
import H1 from './Ui/H1';
import { useEffect, useState } from 'react';
import CardUser from './CardUser';
import Button from './Ui/Button';
import { useNavigation } from '@react-navigation/native';




const Body = () => {

  const [users, setUsers] = useState([])
  const navigation = useNavigation()
  const getUsers = async () =>{
    try{
    const result = await fetch('https://estudos-no-backend-por-meio-de-js.onrender.com/user')
    const data = await result.json()
    console.log(data.success)
    setUsers(data.users)
  } catch (error) {
    console.log('Error getUsers' + error.message)
  }
  }


  useEffect(() =>{
    getUsers()
  },[])

    return(
        <View style={styles.body}>
          <View style={styles.titleAdd}>
          <H1 style={styles.margin}>Usuarios</H1>
          <Button title='Add Usuarios' onPress={() => navigation.navigate('Cadastrar', {users, setUsers})}/>
          </View>
          <View style={styles.listUser}>
          <FlatList
              data={users}
              renderItem={({item}) => <CardUser user={item}/>}
              keyExtractor={item => item.id}
          />
          </View>
      </View>
    )

}

const styles = StyleSheet.create ({

    body: {
        width: '100%',
        minHeight: 750,

        backgroundColor: '#373b38',
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
        color: "#FFF"
      },
      listUser: {
        display: 'flex',
      width: '100%',
      alignItems: 'center',
      marginBottom: 20
      },
      titleAdd: {
        display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      }
})

export default Body