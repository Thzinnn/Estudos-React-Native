import { StyleSheet, Text, View, Image, FlatList, TouchableHighlight } from 'react-native';
import H1 from './Ui/H1';
import { useEffect, useState } from 'react';
import CardUser from './CardUser';
import CardProduct from './CardProduct';
import Button from './Ui/Button'


const Main = () => {

  const [users, setUsers] = useState([])
  const [products, setProduct] = useState([])
  const [contador, setContador] = useState(0)

  const getProducts = async () =>{
    try {
      const result = await fetch('https://estudos-no-backend-por-meio-de-js.onrender.com/product')
      const data = await result.json()
      console.log(data)
      setProduct(data.products)
    } catch (error) {
      console.log(error.message)
    }
  }

  const getUsers = async () =>{
    try{
    const result = await fetch('https://estudos-no-backend-por-meio-de-js.onrender.com/user')
    const data = await result.json()
    console.log(data)
    setUsers(data.users)
  } catch (error) {
    console.log(error.message)
  }
  }

  useEffect(() =>{
    getUsers()
  },[])

  useEffect(() =>{
    getProducts()
  },[])

    return(
        <View style={styles.main}>
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
      }

})

export default Main