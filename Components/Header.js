import React from 'react';
import { StyleSheet, View, Text, ScrollView, FlatList } from 'react-native';
//import Color from '../constants/color';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from './icons.json';

const Header = (props) => {

    console.log(JSON.stringify(Icons)
    .replace(/:[0-9]*/g, ',')
    .replace(/[{"}]/g, '')
    .split(',')[0]);
    let icons = JSON.stringify(Icons).replace(/:[0-9]*,/g, ',').split(',');
    let showNameHandler = (index) => {
        console.log(icons[index]);
    }

    const IconsP = JSON.stringify(Icons).replace(/:[0-9]*,/g, ',').replace(/[{"}]/g, '')
        .split(',').map((elem, index) => {
            //console.log(elem);
            return (
                <View style={styles.icon}  key={index}>
                    <MaterialCommunityIcons  name={elem} size={100} />
                </View>
            );
        });

    return (
        <ScrollView>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>{props.title}</Text> 
                {IconsP}
               {/*  <FlatList  data={icons} renderItem={dataitem => (
                    <View style={styles.icon} key={dataitem.index}
                    /* onTouchStart={showNameHandler(dataitem.index)} * />

                    <MaterialCommunityIcons  name={dataitem.item} size={40} />
                </View>
                )} /> */}
               
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        paddingTop: 16,
        backgroundColor: '#f7287b',
        flexDirection: 'row',
        flexWrap: 'wrap',
        //justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    headerTitle: {
        color: 'black',
        fontSize: 18,
    },
    icon: {
        width: 120,
        height: 100,
        borderWidth: 1,
        borderColor: 'black',
        margin: 3,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 5, 
        paddingBottom: 5

    }
})

export default Header
