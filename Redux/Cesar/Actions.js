
import * as _ from './ActionsTypes';
import * as __ from '../BaseFunction';
import { toInteger } from 'lodash';





let tab = __.dicLetterC(true);
let tabrev = __.dicLetterC(false);


let cesarCipher = (text, d) => {
    let dec = toInteger(d);
    let txt = text.split(" ").map(txt => 
        __.cleanText(txt).split('').map((e, idx) => 
            e = tabrev.get((tab.get(e) + dec) % 26)
        ).join('')
    ).join(' ').toLowerCase();
    return txt;
}
 
let decreptCesarCipher = (text, d) =>  {
    let dec = toInteger(d);
    let txt = text.split(" ").map(txt => 
        __.cleanText(txt).split('').map((e, idx) => 
            e = tabrev.get((tab.get(e) - dec) >= 0 ? (tab.get(e) - dec) % 26 : (tab.get(e) - dec) + 26) 
        ).join('')
    ).join(" ")
    .toLowerCase();
    return txt;
}

let cryptAnalyseHandler = (text) => {
    const occ = __.occ(text)[0];
    console.log(occ);
    let stat = new Map([...__.occ(text)[0].entries()].sort((a, b) => b[1] - a[1]));
    const cle = tab.get([...stat.keys()][0]) - 4;
    return {
        text: decreptCesarCipher(text, cle), 
        key: cle,
        occurrences: occ
    };
    
}

export const CryptCesarTextAction = (params) => {
    return {
        type: _.CREPT_CESAR,
        payload: cesarCipher(params.text, params.key),
    }
}

export const DecryptCesarTextAction = (params) => {
    return {
        type: _.DECREPT_CESAR,
        payload: decreptCesarCipher(params.text, params.key)
    }
}

export const CryptAnalysisAction = (params) => {
    return {
        type: _.CRYPTANALYSE_CESAR,
        payload: cryptAnalyseHandler(params),
    }
}

export const SetClaireTextAction = (params) => {
    //console.log(params);
    return {
        type: _.SET_CLAIRE_TEXT,
        payload: params,
    }
}

export const SetKeyAction = (params) => {
    return {
        type: _.SET_KEY,
        payload: params,
    }
}

export const ResetAction = () => {
    return {
        type: _.RESET,
        payload: {},
    }
}