import {View, Text, StyleSheet} from 'react-native'
import Button from '../components/Ui/Button'
import { useNavigation } from '@react-navigation/native'



export const Products = () => {

    const navigation = useNavigation()

  return (
    <View style={styles.container}>
        <Text>Products</Text>
        <Button
            title="Cadastrar User"
            onPress={() => navigation.navigate('Cadastrar') }
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Products