import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Cadastrar from "../screens/Cadastrar"
import ListUser from "../screens/ListUser"
import Editar from "../screens/Editar"
const Stack = createNativeStackNavigator()

const UserNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen 
        name="ListUser"
         component={ListUser}
         options={{
            title: "Lista de Usuários",
            headerStyle: {backgroundColor: '#000'},           
            headerTintColor: '#FFF'
        }}
         />
      <Stack.Screen
       name="Cadastrar"
        component={Cadastrar}
        options={{
            title: "Cadastrar Usuário",
            headerStyle: {backgroundColor: '#000'},       
            headerTintColor: '#FFF'
        }}
        />
      <Stack.Screen
       name="Editar"
        component={Editar}
        options={{
            title: "Editar Usuário",
            headerStyle: {backgroundColor: '#000'},
            headerTintColor: '#FFF'
        }}
        />
    </Stack.Navigator>
  )
}

export default UserNavigator