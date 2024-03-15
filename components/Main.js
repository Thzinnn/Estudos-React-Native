import { StyleSheet, Text, View, Image, FlatList, TouchableHighlight, TextInput } from 'react-native';
import H1 from './Ui/H1';
import { useEffect, useState } from 'react';
import CardUser from './CardUser';
import CardProduct from './CardProduct';
import Button from './Ui/Button'


const Main = () => {

  const [users, setUsers] = useState([])
  const [products, setProduct] = useState([])
  const [contador, setContador] = useState(0)

  const [txtName, setTxtName] = useState()
  const [txtEmail, setTxtEmail] = useState()
  const [txtAvatar, setTxtAvatar] = useState()

  const getProducts = async () =>{
    try {
      const result = await fetch('https://estudos-no-backend-por-meio-de-js.onrender.com/product')
      const data = await result.json()
      console.log(data)
      setProduct(data.products)
    } catch (error) {
      console.log('Error GetProducts' + error.message)
    }
  }

  const getUsers = async () =>{
    try{
    const result = await fetch('https://estudos-no-backend-por-meio-de-js.onrender.com/user')
    const data = await result.json()
    console.log(data)
    setUsers(data.users)
  } catch (error) {
    console.log('Error GetUsers' + error.message)
  }
  }

  const postUser = async () =>{
    try {
      const result = await fetch('https://estudos-no-backend-por-meio-de-js.onrender.com/user',{
        method: "POST",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify({name: txtName, email: txtEmail, avatar: txtAvatar})
    })
    } catch (error) {
      
    }
  }

  useEffect(() =>{
    getUsers()
    getProducts()
    postUser()
  },[])

    return(
        <View style={styles.main}>
          <TextInput
            style={styles.input}
            onChangeText={setTxtName}
            value={txtName}
          />
          <TextInput
            style={styles.input}
            onChangeText={setTxtEmail}
            value={txtEmail}
          />
          <TextInput
            style={styles.input}
            onChangeText={setTxtAvatar}
            value={txtAvatar}
          />
          <Button
          title="Cadastrar Usuário"
          onPress={() => console.log({name: txtName, email: txtEmail, avatar: txtAvatar})}
          />

          <Button
            title="Add +2"
            onPress={() => setContador(contador + 1)}
          />
          <Button
          title='Add +1'
          onPress={() => setContador(contador + 1)}
          />
          <Text style={{color: '#FFF', fontSize: 30}}>Valor: {contador}</Text>
          <H1 style={styles.margin}>IAI PAIII</H1>
          <FlatList
              data={users}
              renderItem={({item}) => <CardUser user={item}/>}
              keyExtractor={item => item.id}
              horizontal={true}
          />
          <H1 style={styles.margin}>IAI FILHOOOO</H1>
            <FlatList
              data={products}
              renderItem={({item}) => <CardProduct product={item}/>}
              keyExtractor={item => item.id}
              horizontal={true}
          />
          <Button
          title='Atualizar Página'
          onPress={() => {getProducts(); getUsers()}}
          />
          {/* <CardUser user={users[0]}/>
          <CardUser user={users[1]}/>
          <CardUser user={users[2]}/> */}
      </View>
    )

}

const styles = StyleSheet.create ({

    main: {
        flex: 9,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
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
      },
      myButton: {
        backgroundColor: '#973625',
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 5,
      },
      input: {
        height: 40,
        width: 300,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#FFF',
      }      
})

export default Main