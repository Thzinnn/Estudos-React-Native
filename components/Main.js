import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import H1 from './Ui/H1';
import CardUser from './CardUser';

const users = [
  {
    id: 1,
    name: "Thiago Inácio Lima",
    email: "thiagoil2006@gmail.com",
    avatar: "https://www.mjornal.com.br/wp-content/uploads/2023/09/gatinho-678x381.jpg"
  },
  {
    id: 2,
    name: "Maria Souza",
    email: "mariasouza@gmail.com",
    avatar: "https://img.freepik.com/fotos-gratis/isolado-feliz-sorridente-cao-fundo-branco-retrato-4_1562-693.jpg"
  },
  {
    id: 3,
    name: "Bobonica",
    email: "Bobonica@gmail.com",
    avatar: "https://scontent.fpoa10-1.fna.fbcdn.net/v/t39.30808-1/338354827_852499956437680_74557887687071546_n.jpg?stp=dst-jpg_s200x200&_nc_cat=101&ccb=1-7&_nc_sid=596444&_nc_ohc=bv4B-bJ1ig4AX-pProy&_nc_ht=scontent.fpoa10-1.fna&oh=00_AfBuGx2lRmTxfTBPaTUNGzeBnK6zoDbzGA6Ah6Uwzz5l4A&oe=65E6C991"
  },
  {
    id: 4,
    name: "Bobonica",
    email: "Bobonica@gmail.com",
    avatar: "https://scontent.fpoa10-1.fna.fbcdn.net/v/t39.30808-1/338354827_852499956437680_74557887687071546_n.jpg?stp=dst-jpg_s200x200&_nc_cat=101&ccb=1-7&_nc_sid=596444&_nc_ohc=bv4B-bJ1ig4AX-pProy&_nc_ht=scontent.fpoa10-1.fna&oh=00_AfBuGx2lRmTxfTBPaTUNGzeBnK6zoDbzGA6Ah6Uwzz5l4A&oe=65E6C991"
  },
  {
    id: 5,
    name: "Bobonica",
    email: "Bobonica@gmail.com",
    avatar: "https://scontent.fpoa10-1.fna.fbcdn.net/v/t39.30808-1/338354827_852499956437680_74557887687071546_n.jpg?stp=dst-jpg_s200x200&_nc_cat=101&ccb=1-7&_nc_sid=596444&_nc_ohc=bv4B-bJ1ig4AX-pProy&_nc_ht=scontent.fpoa10-1.fna&oh=00_AfBuGx2lRmTxfTBPaTUNGzeBnK6zoDbzGA6Ah6Uwzz5l4A&oe=65E6C991"
  },
  {
    id: 6,
    name: "Bobonica",
    email: "Bobonica@gmail.com",
    avatar: "https://scontent.fpoa10-1.fna.fbcdn.net/v/t39.30808-1/338354827_852499956437680_74557887687071546_n.jpg?stp=dst-jpg_s200x200&_nc_cat=101&ccb=1-7&_nc_sid=596444&_nc_ohc=bv4B-bJ1ig4AX-pProy&_nc_ht=scontent.fpoa10-1.fna&oh=00_AfBuGx2lRmTxfTBPaTUNGzeBnK6zoDbzGA6Ah6Uwzz5l4A&oe=65E6C991"
  },
]

const Main = () => {

    return(
        <View style={styles.main}>
        <View >
          <H1 style={styles.margin}>IAI PAIII</H1>
          <FlatList
              data={users}
              renderItem={({item}) => <CardUser user={item}/>}
              keyExtractor={item => item.id}
              horizontal={true}
          />
            <FlatList
              data={users}
              renderItem={({item}) => <CardUser user={item}/>}
              keyExtractor={item => item.id}
          />
          {/* <CardUser user={users[0]}/>
          <CardUser user={users[1]}/>
          <CardUser user={users[2]}/> */}
        </View>
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
      }

})

export default Main