import AsyncStorage from '@react-native-async-storage/async-storage';

export const setFavChars = async (favChars) => {
    try {
        await AsyncStorage.setItem('fav_chars', JSON.stringify(favChars));
      } catch (error) {
        console.log(error);
      }
}

export const getFavChars = async () => {
    try {
        const value = await AsyncStorage.getItem('fav_chars');
        if (value !== null) {
            return JSON.parse(value);
        }
      } catch (error) {
        console.log(error);
      }
}