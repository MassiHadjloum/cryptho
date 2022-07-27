import React, { Component} from 'react';
import { View, StyleSheet, TextInput, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { SetClaireTextAction, CryptAnalysisAction,
     ResetAction, GetTextBlocsAction } from './Redux/Vigenere/Actions';
import { occ, getTextBlocs } from './Redux/BaseFunction';
import BodyCesarCipher from './Components/BodyCipher';

class VigenereCryptAnalysis extends Component {/* = (props) => { */
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            decalage: '',
            textcipher: '',
            showdetails: false,
            statis: [],
            blocs: [],
        }
    }

    /* componentDidUpdate(){
        this.state.blocs = [...this.props.blocs];
        console.log(this.props.blocs);
    } */

    render(){
        /* const [text, settext] = useState('');
        const [decalage, setdecalage] = useState();
        const [textcipher, settextcipher] = useState("");
        const [showdetails, setshowdetails] = useState(false)
        const [statis, setstatis] = useState([]);
    */
        let changeText = (value) => {
            //settext(value);
            this.setState({text: value});
            this.props.set_text(this.state.text);
        }

        let cryptAnalyseHandler = () => {
            this.setState({showdetails: true});
            this.state.statis = [...occ(this.state.text)[1].values()];
            //console.log(this.state.statis);
            this.props.cryptanalysis(this.state.text);
            this.props.get_text_bloc(this.state.text);
            this.setState({blocs: [...getTextBlocs(this.state.text)]})
            console.log(this.state.blocs);
        }

       

        const { text, decalage, textcipher } = this.state;
        return (
            <View style={styles.maincontainer}> 
                <BodyCesarCipher text={text} decalage={this.props.decalage} 
                changeText={changeText} datastat={this.state.blocs} multiHisto={true}
                keyboardType='decimal-pad' show={false} textclair={this.props.textcipher} 
                detail={this.state.showdetails} analyseButton={cryptAnalyseHandler} />                  
        
            </View> 
        );
    };
};
const mapStateToProps = (state) => {
    //console.log(state.vigenere.blocs);
    return {
        textclaire: state.vigenere.textclaire,
        textcipher: state.vigenere.textcipher,
        decalage: state.vigenere.key,
        datastat: state.vigenere.occurrences,
        blocs: state.vigenere.blocs,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        set_text:(params) => {dispatch(SetClaireTextAction(params))},
        cryptanalysis: (params) => {dispatch(CryptAnalysisAction(params))},
        get_text_bloc:(params) => {dispatch(GetTextBlocsAction(params))},
        reset:() => {dispatch(ResetAction())},
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

export default connect(mapStateToProps, mapDispatchToProps)(VigenereCryptAnalysis);
