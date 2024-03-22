import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListUser from './screens/ListUser';
import Cadastrar from './screens/Cadastrar';
import Editar from './screens/Editar';
console.log("test")

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="ListUser" component={ListUser}/>
      <Stack.Screen name="Cadastro" component={Cadastrar}/>
      <Stack.Screen name="Editar" component={Editar}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}


