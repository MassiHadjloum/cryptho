import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Provider } from 'react-redux';
import store from './Redux/Store';

import Home from './Screens/Home';
import Cesar from './Cesar';
import CryptAnalysisCesar from './CesarCryptAnlys';
import MyTabsCesar from './Screens/TabScreensCesar';
import MyTabsVigenere from './Screens/TabScreensVigenere';

//const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// /home/massi/softwar/nodejs/node-v15.8.0-linux-x64/bin:
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home" screenOptions={{ 
            headerStyle: {
              backgroundColor: '#009387'
            },
            headerTintColor: '#fff',
            headerTitleStyle:{
              fontWeight: 'bold'
            }
        }}>
          <Drawer.Screen name='Home' component={Home} />
          <Drawer.Screen name='Chiffrement César' component={Cesar} />
          <Drawer.Screen name='Cryptanalyse Cesar' component={CryptAnalysisCesar} />
          <Drawer.Screen name='CesarHome' title='Cesar' component={MyTabsCesar} />
          <Drawer.Screen name='VigenereHome' title='Vigenere' component={MyTabsVigenere} />
        </Drawer.Navigator>
      </NavigationContainer>

    </Provider>
 );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
