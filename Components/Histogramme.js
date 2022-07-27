import React from 'react'
import { View, StyleSheet, Text, ScrollView } from 'react-native';

const Histogramme = (props) => {
    const histo = new Array(0.084,0.0106,0.0303,0.0418,0.1726,0.0112,0.0127,0.0092,0.0734,
        0.0031,0.0005,0.0601,0.0296,0.0713,0.0526,0.0301,0.0099,0.0655,0.0808,
        0.0707,0.0574,0.0132,0.0004,0.0045,0.0030,0.0012);
    
    
    /* let creatHisto = props.data.map((elem, idx) => {
        return (
            <View key={idx} 
            style={{maxHeight: 200, width: 6, height:(elem*1000), backgroundColor:'black', marginHorizontal:3
        }}></View>
        );
    }) */
    let creatHisto = props.data.map((elem, idx) => {
        return (
            <View key={idx} style={styles.doubleview} >

                <View  
                    style={{maxHeight: 200, width: 6, height:(elem*1000), 
                    backgroundColor:'black', }}>  
                </View>
                <View
                    style={{maxHeight: 200, width: 6, height:(histo[idx]*1000), 
                    backgroundColor:'green', marginHorizontal:0}}>  
                </View>

            </View>
        );
    })    
    let createLetter = histo.map((elem, idx) => {
        const alphabet = "abcdefghijklmnopqrstuvwxyz"
        return (
            <View key={idx} style={{width: 9, height:15
            , marginHorizontal:4.6/* 1.52 */, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{color: 'black', width:"100%", height:"100%", 
                fontSize:11, fontWeight: 'bold'}}>{alphabet.charAt(idx)}</Text>
            </View>
        )
    })
    return (
        <View style={{ height: 260}}>
            <View style={styles.maincontainer}>
                <View style={styles.container}>
                    {creatHisto}
                </View>
                <View style={styles.containerletter}>
                    {createLetter}
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
        width: "96%",
        height: 240,
        borderWidth: 0,
        //borderColor: "red",
        paddingHorizontal: 5,
        backgroundColor: '#ecf0f1',
        margin: 6,
    },
    container: {
        flex: 1,
        width: "100%",
        height: 220,
        paddingHorizontal: 5,
        flexDirection: 'row-reverse',
        borderTopColor: "black",
        borderTopWidth: 1,
        transform: [{rotate: '180deg'}],
    },
    doubleview: {
        flexDirection: 'row',
        marginHorizontal:3
    },
    containerletter: {
        flexDirection: 'row',
        width: "100%",
        height: 20,
        paddingHorizontal: 5,
    }
})

export default Histogramme
