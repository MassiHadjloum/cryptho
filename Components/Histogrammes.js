import React from 'react'
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import Histogramme from './Histogramme';

const Histogramme = (props) => {
    const histo = new Array(0.084,0.0106,0.0303,0.0418,0.1726,0.0112,0.0127,0.0092,0.0734,
        0.0031,0.0005,0.0601,0.0296,0.0713,0.0526,0.0301,0.0099,0.0655,0.0808,
        0.0707,0.0574,0.0132,0.0004,0.0045,0.0030,0.0012);
    
    
    let creatHisto = props.data.map((elem, idx) => {
        return (
            <View key={idx} 
            style={{maxHeight: 200, width: 6, height:(elem*1000), backgroundColor:'black', marginHorizontal:3
        }}></View>
        );
    })    
    let createLetter = histo.map((elem, idx) => {
        const alphabet = "abcdefghijklmnopqrstuvwxyz"
        return (
            <View key={idx} style={{width: 9, height:15
            , marginHorizontal:1.52, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{color: 'black', width:"100%", height:"100%", 
                fontSize:11, fontWeight: 'bold'}}>{alphabet.charAt(idx)}</Text>
            </View>
        )
    })
    return (
        <ScrollView style={styles.maincontainer}>
            <View /* style={styles.container} */>
                <Histogramme data={props.datastat} />
            </View>
           
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
       /*  width: "95%", */
        height: 240,
        borderWidth: 1,
        borderColor: "red",
        paddingHorizontal: 5,
        margin: 6,
        scro
    },
    container: {
        flex: 1,
        width: "95%",
        height: 220,
        paddingHorizontal: 5,
        flexDirection: 'row-reverse',
        borderTopColor: "black",
        borderTopWidth: 1,
        transform: [{rotate: '180deg'}],
    },
    containerletter: {
        flexDirection: 'row',
        width: "100%",
        height: 20,
        paddingHorizontal: 5,
    }
})

export default Histogramme
