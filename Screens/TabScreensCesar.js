
import React, { useEffect } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import { ResetAction } from '../Redux/Cesar/Actions';
import HomeCesar from './HomeCesar';
import Cesar from '../Cesar';
import CesarCryptAnalysis from '../CesarCryptAnlys';
import HomeVigenere from './HomeVigenere';
import Vigener from '../Vigenere';


import Home from './Home';
import Header from '../Components/Header';

const Tab = createMaterialBottomTabNavigator();



function MyTabs({props, navigation}) {
  
  return (
    <Tab.Navigator
      initialRouteName="HomeCesar"
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
        name="HomeCesar"
        component={HomeCesar}
        options={{
          tabBarLabel: '',
         // tabBarColor: "#009387",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
    
      <Tab.Screen
        name="Cesar"
        /* onPress={() => {
          console.log("presed");
          navigation.navigate("Cesar", {analyser:false})
        }}  */
        component={Cesar}
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
        component={CesarCryptAnalysis}
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