import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native';

const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>Welcome to React-Native</Text>
            <Button title="Go to Cesar"
              onPress={() => navigation.navigate("CesarCipher")} />
            
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

export default Home
