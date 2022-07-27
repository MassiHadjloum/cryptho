import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MyTabs from './TabScreensCesar';

const Drawer = createDrawerNavigator();

const HomeVigenere = ({navigation}) => {
    return (
        
        <View style={styles.container}>
            <Text>Welcome to VigenereCipher, simple presentation.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default HomeVigenere
