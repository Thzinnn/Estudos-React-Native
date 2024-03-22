import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import { Image as ImageExpo } from 'expo-image';
import Body from '../components/Body.js';

console.log("test")

const ListUser = () => {
  return (
    <View>

      <Body />

      <StatusBar style="auto" />
    </View>
  );
}


export default ListUser
