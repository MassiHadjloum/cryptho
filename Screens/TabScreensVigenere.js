
import React, { useEffect } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import { ResetAction } from '../Redux/Cesar/Actions';
import HomeCesar from './HomeCesar';
import Cesar from '../Cesar';
import VigenereCryptAnalysis from '../VigenereCryptAnalys';
import HomeVigenere from './HomeVigenere';
import Vigenere from '../Vigenere';

import Home from './Home';
import Header from '../Components/Header';

const Tab = createMaterialBottomTabNavigator();



function MyTabs({props, navigation}) {
  
  return (
    <Tab.Navigator
      initialRouteName="HomeVigenere"
      activeColor="#fff" //"#e91e63"
      inactiveColor="#3e2465"
      barStyle={{
          bottom: 0,
          left: 2,
          right: 2,
          backgroundColor: "#009387",
          elevation: 0,
      }}
    >
      <Tab.Screen
        name="HomeVigenere"
        component={HomeVigenere}
        options={{
          tabBarLabel: '',
         // tabBarColor: "#009387",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
    
      <Tab.Screen
        name="Vigenere"
        /* onPress={() => {
          console.log("presed");
          navigation.navigate("Cesar", {analyser:false})
        }}  */
        component={Vigenere}
        options={{
          tabBarLabel: 'Crypter',
          //tabBarColor: "#009387",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="eraser" color={color} size={26} />
          ),
        }}
      />
     {/*  <Tab.Screen
        name="Profile"
        component={Header}
        options={{
          tabBarLabel: 'Analyser',
          tabBarColor: "#009387",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      /> */}
      <Tab.Screen
        name="AnalyserCesar"
        component={VigenereCryptAnalysis}
        onPress={() => props.reset()}
        options={{ 
          tabBarLabel: 'Analyser',
          //tabBarColor: "#009387",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
      reset:() => {dispatch(ResetAction())}
  }
}

export default connect(mapDispatchToProps)(MyTabs);