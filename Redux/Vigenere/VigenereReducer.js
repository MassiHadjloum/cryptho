import * as _ from './ActionsTypes';

const initialState = {
    textclaire: '',
    textcipher: '',
    key: '',
    showdetails: false,
    blocs: null,
    occurrences: {},
}
 
const vigenereReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREPT_VIGENERE': 
        console.log(action.payload);
        return {
            ...state,
            textcipher: action.payload,
        }
        break;
        case 'DECREPT_VIGENERE': return {
            ...state,
            textcipher: action.payload
        }
        break;
        case 'SET_CLAIRE_TEXT': return state = {
            ...state,
            textclaire: action.payload,
        }
        break;
        case 'SET_KEY': return {
            ...state,
            key: action.payload
        }
        break;
        case 'RESET': return {
            initialState
        }
        break;
        case 'CRYPTANALYSE_VIGENERE': 
        //console.log(action.payload.occurrences);    
        return {
            ...state,
            textcipher: action.payload.text,
            key: action.payload.key,
        }
        break;
        case 'GET_TEXT_BLOC':
            console.log("blocs ",action.payload);
            return {
                ...state,
                blocs: action.payload
            }
    }
    return state;
}

export default vigenereReducer;