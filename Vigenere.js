import React, {Component} from 'react';
import { View, StyleSheet, TextInput, TouchableWithoutFeedback } from 'react-native';

import { connect } from 'react-redux';
import { SetClaireTextAction, 
    SetKeyAction, ResetAction,
    CryptVigenereTextAction, 
    DecryptVigenereTextAction 
} from './Redux/Vigenere/Actions';
import BodyCesarCipher from './Components/BodyCipher';

class Vigener extends Component { /* ({route, navigation}) => {*/
    constructor (props) {
        super(props);
        this.state = {
            text: '',
            decalage: '',
            textcipher: '',
        }
    } 

    componentWillUnmount(){
        //this.props.reset();
        console.log("Componenet didmount");
    }

    render() {
        let changeTextHandler = (value) => {
            //settext(value);
            this.setState({text: value});
            this.props.set_text(this.state.text)
            console.log(text);
        }

        const numberInputHandler = input => {
            //setdecalage(input.replace(/[^0-9]/g, ''));
            this.setState({decalage: input.replace(/[^A-Z^a-z]/g, '')});
            this.props.set_key(this.state.decalage)
        }

        let cryptButtonHandler = () => {
            //settextcipher(cesarCipher(text, decalage));
            //setdecalage('');
            this.props.crypt_text({text: this.state.text, key: this.state.decalage});
        }

        let deCryptButtonHandler = () => {
            //settextcipher(decreptCesarCipher(text, decalage));
            //setdecalage('');
            this.props.decrypt_text({text: this.state.text, key: this.state.decalage});
        }

       
        const { text, decalage, textcipher } = this.state;
    
        return (
            <View style={styles.maincontainer}> 
                <BodyCesarCipher text={text} decalage={decalage} textcipher={this.props.textcipher}
                changeText={changeTextHandler} numberInput={numberInputHandler}
                show={true} detail={false} keyboardType='default' maxLength={20}
                cryptButton={cryptButtonHandler} deCryptButton={deCryptButtonHandler} />                  
        
            </View> 
        )
    }
}
 
const mapStateToProps = (state) => {
    return {
        textclaire: state.vigenere.textclaire,
        decalage: state.vigenere.key,
        textcipher: state.vigenere.textcipher,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        set_text:(params) => {dispatch(SetClaireTextAction(params))},
        set_key:(params) => {dispatch(SetKeyAction(params))},
        crypt_text:(params) => {dispatch(CryptVigenereTextAction(params))},
        decrypt_text:(params) => {dispatch(DecryptVigenereTextAction(params))},
        reset:() => {dispatch(ResetAction())}
    }
}

const styles = StyleSheet.create({
    maincontainer: {
        width: '100%',
        height: '100%',
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
   
})

export default connect(mapStateToProps, mapDispatchToProps)(Vigener);
