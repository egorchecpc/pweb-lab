import { ScrollView, Text, StyleSheet,Image, View, TouchableOpacity } from 'react-native';

const CardScreen = (props) => {
    const { character } = props.route.params;
    const {image, name, status, species, type, gender, origin, location} = character
    return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => props.navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backText}>{'< Back'}</Text>
      </TouchableOpacity>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Image style={styles.image} source={{ uri: image }} />
        <Text style={styles.text}>Name: {name}</Text>
        <Text style={styles.text}>Status: {status}</Text>
        <Text style={styles.text}>Species: {species}</Text>
        <Text style={styles.text}>Type: {type}</Text>
        <Text style={styles.text}>Gender: {gender}</Text>
        <Text style={styles.text}>Origin: {origin.name}</Text>
        <Text style={styles.text}>Location: {location.name}</Text>
      </ScrollView>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    contentContainer: {
      alignItems: 'center',
      padding: 20,
      marginTop: 100,
    },
    backButton: {
      position: 'absolute',
      top: 20,
      left: 20,
      zIndex: 1,
    },
    backText: {
      marginTop:15,
      fontSize: 16,
      color: 'blue',
    },
    image: {
      width: 200,
      height: 200,
      marginBottom: 20,
    },
    text: {
      fontSize: 16,
      marginBottom: 10,
    },
  });

export default CardScreen