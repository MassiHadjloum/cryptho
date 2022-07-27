import React, { useEffect, useState, useContext } from 'react'
import { View, StyleSheet, TextInput, Text, Button, 
    ScrollView, TouchableWithoutFeedback } from 'react-native';
import Header from './Header';
import InputText from './InputText';
import Card from './Card';
import Context from './Context';
import Histogramme from './Histogramme';
import { connect } from 'react-redux';
import { ResetAction } from '../Redux/Cesar/Actions';
import Legend from './Legend';
import SelectKeyLength from './SelectKeyLength';




const BodyCipher = (props) => {
    const [detail, setdetail] = useState(false)
    useEffect(() => {
            setdetail(props.detail);
            console.log("clean up");
    }, [detail]);

    const histogram = !props.multiHisto ?  
            <Histogramme data={props.datastat} />
        :
            [...props.datastat].map((e, idx) => {
                return (
                    <Histogramme key={idx} data={[...e.values()]} scrolling={'scroll-x'} />
                )
            })
    

    return ( 
        <View style={styles.maincontainer}>

        <ScrollView style={styles.container}>
                <View style={styles.container2}>
                    <Card style={styles.card}>
                        <InputText placeholder="tap a texte" placeholderTextColor="grey" 
                        style={styles.input} multiline={true} 
                        value={props.text}
                        autoCorrect={false} autoFocus={true} numberOfLines={10}
                        onChangeText={props.changeText}/>
                    </Card>
                </View>
                {props.show ?

                <>
                    {!props.show ? props.reset(): null}
                    <View style={{...styles.container2, height: 50, paddingBottom: 10, marginBottom: 4}}>
                        <Card style={styles.card}>
                            <InputText placeholder="entrer une clé"  style={styles.keyvalue}
                            keyboardAppearance={'dark'} keyboardType={props.keyboardType}
                            maxLength={props.maxLength} value={props.decalage} blurOnSubmit 
                            onChangeText={props.numberInput} />
                        </Card>
                    </View >
                    <View style={styles.buttoncontainer}>
                        <View style={styles.button}>
                            <Button  title="Crypter" onPress={props.cryptButton}  />
                        </View>
                        <View style={styles.button}>
                            <Button title="Décrypter" onPress={props.deCryptButton}/>
                        </View>
                    </View>
                    <View style={{...styles.container2, paddingBottom: 20, height: 260, marginBottom: 4}}>
                        <Card style={styles.card}>
                            <InputText placeholderTextColor="grey" //keyboardType={props.keyboardType} 
                            multiline={true} autoCorrect={false} autoFocus={false} 
                            numberOfLines={10}style={styles.input} value={props.textcipher} />
                        </Card>
                    </View>
                </>
                : 
                <>
                    <View style={{...styles.buttoncontainer, height:'auto', justifyContent: 'center'}}>
                        <View style={styles.button}>
                            <Button disabled={props.text == ""}  title="Analyser" onPress={props.analyseButton}  />
                        </View>
                        
                    </View>
                    {props.detail ? 
                    <View>
                        <View  style={{flexDirection: 'row'}} >
                            <Text>Taille clé</Text>
                            <SelectKeyLength />

                        </View>
                        <Card style={styles.cardhisto}>
                            <Legend />
                            <ScrollView horizontal={true} style={styles.input}>
                                {histogram}
                            </ScrollView>
                        </Card>
                        <View style={{...styles.container2, height: 50, paddingBottom: 10, marginBottom: 4}}>
                            <Card style={styles.card}>
                                <Text placeholder="clé" style={styles.input}>{props.decalage}</Text>
                            </Card>
                        </View>
                        <View style={{...styles.container2, paddingBottom: 20, height: 260, marginBottom: 4}}>
                            <Card style={styles.card}>
                                <InputText placeholderTextColor="grey" //keyboardType={'default'} 
                                multiline={true} autoCorrect={false} autoFocus={false} numberOfLines={10}
                                style={styles.input} value={props.textclair} />
                            </Card>
                        </View>
                        
                    </View>
                    :
                    null
                    }
                </>}
                
            </ScrollView>
        </View>
    )
}

const mapStateToProps = (state) => {
    return {
       // textclaire: state.cesar.textclaire,
        //decalage: state.cesar.key,
       // textcipher: state.cesar.textcipher,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        reset:() => {dispatch(ResetAction())}
    }
}

const styles = StyleSheet.create({
    maincontainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        height: '100%',
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
        padding: 5,
        backgroundColor: "#dfe6e9"
    },
    container2: {
        flex: 1,
        width: '100%',
        height: 240,
        alignItems: 'center',
    },
    card: {
        marginVertical: 10,
        width: '92%',
        height: '90%',
        paddingVertical: 1,
          
    },
    cardhisto:{
        marginLeft: 12,
        marginVertical: 10,
        width: '93%',
        height: '42%',
        paddingVertical: 1,
            
    },
    input: {
        height: '100%',
        paddingVertical: 5,
        paddingHorizontal: 8
    },
    keyvalue: {
        fontSize: 15,
        height: '99%',
        padding: 10,
        paddingBottom: 3
    },
    cipherTextview:{
        width:'100%',
        height:'70%',
        borderWidth: 1,
    },
    buttoncontainer: {
        width:'100%',
        height:'10%',
        marginTop: 4,
        paddingHorizontal: 20,
        paddingTop: 5,
        paddingBottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },  
    button: {
        width:'40%',
        height:'100%',
        borderRadius: 20
    },
    histogram: {
        width:'100%',
        height:'60%',
        borderWidth: 1,
        borderColor: 'red',
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(BodyCipher)
