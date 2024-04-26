import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons'
// import { createDrawerNavigator } from '@react-navigation/drawer';
import Products from './screens/Products';
import UserNavigator from './navigators/UserNavigator';
import Splash from './screens/Splash.js'
import Login from './screens/Login.js';
import Cadastrar from './screens/Cadastrar.js';
console.log("test")

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator()
// const Drawer = createDrawerNavigator()

const MainNavigator = () => {
  <NavigationContainer>
  {/* <Stack.Navigator>
  <Stack.Screen name="ListUser" component={ListUser}/>
  <Stack.Screen name="Cadastrar" component={Cadastrar}/>
  <Stack.Screen name="Editar" component={Editar}/>

  </Stack.Navigator> */}

  <Tab.Navigator screenOptions={{
      headerStyle: {backgroundColor: '#000'},
      headerTintColor: '#FFF',
      tabBarShowLabel: false,
      
  }}>
  <Tab.Screen 
  name="Users"
   component={UserNavigator}
   options={{
    headerShown: false,
    tabBarIcon: ({color, size}) => (
      <Feather name="home" color={{ color: '#000'}} size={28}/>
    )
   }}
   />
  <Tab.Screen 
  name="Products"
   component={Products}
    options={{
      tabBarIcon: ({color, size}) => (
        <Feather name="shopping-cart" color={{ color: '#000'}} size={28}/>
      )
    }}
   />
  

  </Tab.Navigator>
  
  {/* <Drawer.Navigator>
  <Drawer.Screen name="ListUser" component={ListUser}/>
  <Drawer.Screen name="Cadastrar" component={Cadastrar}/>
  

  </Drawer.Navigator> */}
</NavigationContainer>
}

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen
        name="Splash"
        component={Splash} 
        options={{
          headerShown: false
        }}
        />
        <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false
        }}
        />
        <Stack.Screen
          name="Main"
          component={MainNavigator}
          options={{
            headerShown: false
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
          </Stack.Navigator>
    </NavigationContainer>
  );
}


