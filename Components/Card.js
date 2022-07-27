import React from 'react';
import { View, StyleSheet } from 'react-native';


const Card = (props) => {
    return (
        <View style={{...styles.card, ...props.style}}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        //height: '30%',
        shadowColor: 'black',
        shadowOffset: {width: 1, height: 6},
        shadowRadius: 10,
        shadowOpacity: 0.6,
        backgroundColor: 'white',
        elevation: 10,
        paddingVertical: 20,
        borderRadius: 5,
    }
})

export default Card
