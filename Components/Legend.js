import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

const Legend = () => {
    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.text}>Référence</Text>
                <View style={styles.color}/>
            </View>
            <View style={styles.container}>
                <Text style={styles.text}>Text</Text>
                <View style={{...styles.color, backgroundColor:'black'}}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: { flexDirection: 'row', paddingHorizontal: 6, paddingTop: 10},
    text: {fontWeight: 'bold'},
    color: {width:20, height:12, backgroundColor: 'green', marginLeft: 5, marginTop: 5},

})

export default Legend;
