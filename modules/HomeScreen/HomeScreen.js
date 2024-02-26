import { useState, useEffect } from 'react'
import { addFavChar } from '../../redux/homeReducer'
import { View, Text, Button, FlatList, StyleSheet, Image,TouchableOpacity} from 'react-native';

const HomeScreen = (props) => {
    const [characters,setCharacters] = useState([])
    const [favchar, setFavChar] = useState([])
    useEffect(()=>{
        setCharacters(props.characters)
    },[props.characters])
    useEffect(()=>{
        setFavChar(props.fav_char)
        console.log('favchar:',props.fav_char)
    },[props.fav_char])

    const renderItem = ({ item }) => (
      <View style={styles.itemContainer} key={item.id}>
        <TouchableOpacity onPress={() => props.navigation.navigate('Details',{ character: item }) }>
          <View style={styles.cardContainer}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <View style={styles.detailsContainer}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text>Status: {item.status}</Text>
                  <Text>Species: {item.species}</Text>
                  <Text>Type: {item.type}</Text>
                  <Text>Gender: {item.gender}</Text>
              </View>
          </View>
        </TouchableOpacity>
        <Button title="Add to favorite" onPress={() => props.addFavChar(item)} />
      </View>
    );
    
    return (
      <View style={styles.container}>
        <FlatList
            data={characters}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
        />
        {!props.isFetching
        ?<Text>Загрузка...</Text>
        :<Button title="Show more" onPress={() => props.addCharacters()} />
        }
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      padding: 10,
  },
  cardContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    margin: 10,
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 10,
  },
  detailsContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginBottom: 5,
  },
});

export default HomeScreen