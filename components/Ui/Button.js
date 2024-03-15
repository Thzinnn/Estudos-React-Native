 import { TouchableHighlight, View, Text, StyleSheet } from "react-native"


 const Button = ({title, onPress}) => {
    return (
        <TouchableHighlight style={styles.buttonInteiro} onpress={onPress}>
            <View style={styles.myButton}>
            <Text style={{color: '#FFF', fontSize: 30}}>{title}</Text>
            </View>
          </TouchableHighlight>
    )
 }

 const styles = StyleSheet.create({
    myButton: {
        backgroundColor: '#973625',
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 5,
      },
    buttonInteiro: {
        marginVertical: 10,
    }
 })

export default Button