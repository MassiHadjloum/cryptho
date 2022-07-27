import * as _ from './ActionsTypes';

const initialState = {
    textclaire: '',
    textcipher: '',
    key: '',
    showdetails: false,
    occurrences: {},
}
 
const cesarReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREPT_CESAR': return {
            ...state,
            textcipher: action.payload,
        }
        break;
        case 'DECREPT_CESAR': return {
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
        case 'CRYPTANALYSE_CESAR': 
        //console.log(action.payload.occurrences);    
        return {
            ...state,
            textcipher: action.payload.text,
            key: action.payload.key,
            occurrences: action.payload.occurrences
        }
    }
    return state;
}

export default cesarReducer;