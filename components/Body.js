import { StyleSheet, Text, View, Image, FlatList, TouchableHighlight, TextInput, Platform} from 'react-native';
import H1 from './Ui/H1';
import { useEffect, useState } from 'react';
import CardUser from './CardUser';
import Button from './Ui/Button';
import { useNavigation } from '@react-navigation/native';
import Header from './Header';
import Footer from './Footer';




const Body = () => {

  const [users, setUsers] = useState([])
  const navigation = useNavigation()
  console.log('Platform ', Platform.OS);
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
              style={{width: '100%'}}
              data={users}
              renderItem={({item}) => <CardUser user={item}/>}
              keyExtractor={item => item.id}
              ListHeaderComponent={Header}
              ListFooterComponent={Footer}
              contentContainerStyle={styles.flatList}
          />
          </View>
      </View>
    )

}

const styles = StyleSheet.create ({

    body: {
        width: '100%',  
        backgroundColor: '#373b38',
        minHeight: 750,
      },
      margin: {
        marginBottom: 25,
        color: "#FFF"
      },
      listUser: {
      
        display: 'flex',
      width: '100%',
      alignItems: 'center',
      marginBottom: 20,
      maxHeight: Platform.OS === 'web' ? '90vh' : null,
      },
      flatList: {
        alignSelf: 'center'
        
      },
      titleAdd: {
        display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      }
})

export default Body