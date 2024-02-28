import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreenContainer from './modules/HomeScreen/HomeScreenContainer';
import { Provider } from 'react-redux';
import store from './redux/redux-store';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CardScreen from './modules/CardScreen/CardScreen';


const Stack = createStackNavigator();


export default function App() {
  
  return (
    <Provider store={store}>
      <NavigationContainer >
        <Stack.Navigator screenOptions={{header: () => null}}>
          <Stack.Screen name="Home" component={HomeScreenContainer} />
          <Stack.Screen name="Details" component={CardScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
