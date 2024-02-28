import { useState, useEffect } from 'react'
import { View, Text, Button, FlatList, StyleSheet, Image,TouchableOpacity} from 'react-native';

const HomeScreen = (props) => {
    const [characters,setCharacters] = useState([])
    const [displayFavorites, setDisplayFavorites] = useState(false);
    useEffect(()=>{
        setCharacters(props.characters)
    },[props.characters])
    
    const addFavoriteCharacter = async (character) => {
      props.addFavChar(character);
      const updatedFavChars = [...props.favoriteCharacters, character]; 
      props.setFavChars(updatedFavChars);
    };

    const removeFavoriteCharacter = async (characterId) => {
      props.removeFavChar(characterId);
      const updatedFavChars = props.favoriteCharacters.filter(char => char.id !== characterId);
      props.setFavChars(updatedFavChars);
    };

    const renderItem = ({ item }) => {
      const isFavorite = props.favoriteCharacters.some(char => char.id === item.id);
      return(
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
          <Button
            title={isFavorite ? "Remove from favorite" : "Add to favorite"}
            onPress={() => {
            isFavorite
              ?removeFavoriteCharacter(item.id)
              :addFavoriteCharacter(item)
        }}
      />
        </View>
      )
    };
    
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.favBtn}
          onPress={() => setDisplayFavorites(!displayFavorites)}
        >
          <Text style={styles.favBtnText}>
            {displayFavorites ? "Show All" : "Favorites"}
          </Text>
        </TouchableOpacity>
        <FlatList
            data={displayFavorites ? props.favoriteCharacters : characters}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
        />
        {!displayFavorites
        ?props.isFetching
          ?<Text>Загрузка...</Text>
          :<Button title="Show more" onPress={() => props.addCharacters()} />
        :''
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
  favBtn: {
    margin: 5,
    marginTop: 25, 
    backgroundColor: '#ADD8E6', 
    borderRadius: 5, 
    paddingVertical: 10, 
    paddingHorizontal: 20, 
    alignSelf: 'center', 
  },
  favBtnText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HomeScreen