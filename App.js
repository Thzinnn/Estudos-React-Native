import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';
import Header from './components/Header.js';
import Footer from './components/Footer';
import Main from './components/Main';
import { Image as ImageExpo } from 'expo-image';

console.log("test")

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
      resizeMode='cover'
       source={require('./assets/images/Wallpaper-vulcão-para-celular-de-viajantes-travel-wanderlust-iphone-paisagem.jpeg')}
       style={styles.bg}
      >
      <Header />
      <Main />
      <Footer />
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({  

  container: {
    flex: 1
  },

  bg: {
    flex: 1,
    justifyContent: 'center',
    width: '100%'
  }
});

