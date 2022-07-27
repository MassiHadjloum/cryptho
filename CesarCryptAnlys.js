import React, { Component} from 'react';
import { View, StyleSheet, TextInput, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import { SetClaireTextAction, CryptAnalysisAction, ResetAction } from './Redux/Cesar/Actions';
import { occ } from './Redux/BaseFunction';
import BodyCesarCipher from './Components/BodyCipher';

class CesarCryptAnalysis extends Component {/* = (props) => { */
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            decalage: '',
            textcipher: '',
            showdetails: false,
            statis: [],
        }
    }

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
            const st = [...occ(this.state.text).values()];
            this.state.statis = [...occ(this.state.text)[1].values()];
            //console.log(this.state.statis);
            this.props.cryptanalysis(this.state.text);
            //console.log(this.props.datastat);
        }

        const { text, decalage, textcipher } = this.state;
        return (
            <View style={styles.maincontainer}> 
                <BodyCesarCipher text={text} decalage={this.props.decalage} 
                changeText={changeText} datastat={this.state.statis} keyboardType='decimal-pad'
                show={false} textclair={this.props.textcipher} detail={this.state.showdetails}
                analyseButton={cryptAnalyseHandler} />                  
        
            </View> 
        );
    };
};
const mapStateToProps = (state) => {
    return {
        textclaire: state.cesar.textclaire,
        textcipher: state.cesar.textcipher,
        decalage: state.cesar.key,
        datastat: state.cesar.occurrences
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        set_text:(params) => {dispatch(SetClaireTextAction(params))},
        cryptanalysis: (params) => {dispatch(CryptAnalysisAction(params))},
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

export default connect(mapStateToProps, mapDispatchToProps)(CesarCryptAnalysis);
