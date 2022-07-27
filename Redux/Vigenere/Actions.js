
import * as _ from './ActionsTypes';
import * as __ from '../BaseFunction';
import { toInteger } from 'lodash';


let tab = __.dicLetterC(true);
let tabrev = __.dicLetterC(false);
let dic = __.dicLetter(true);


let VigCipher = (txte, key) => {
    let cle = __.cleanText(key).toUpperCase();
    const txt = __.cleanText(txte).toUpperCase();
    //console.log(key+"\t"+txt+"\n"+cle);

    let res = "";
    let i, j=0, f=key.length, k;
    for(i=0; i<txt.length; i++){
        if(j == f){
            j = 0;
        }
        k = (dic.get(txt[i]) + dic.get(cle[j])) % 26;
        console.log(k, txt[i], dic.get(txt[i]));
        res = res + /* tabrev.get(k); */String.fromCharCode(k+65);
        j++;
    }
    return res; 
}
 
let decreptVigCipher = (txt, key) => {
    let cle = __.cleanText(key).toUpperCase();
    const text = __.cleanText(txt).toUpperCase();
    let res = ""
    let i, j=0, f=key.length, k;
    for(i=0; i<text.length; i++){
        if(j == f){
            j = 0;
        }
        k = (dic.get(text[i]) - dic.get(cle[j])) >= 0 ? 
            dic.get(text[i]) - dic.get(cle[j]) % 26 : 
            dic.get(text[i]) - dic.get(cle[j]) + 26;
        res = res + tabrev.get(k);
        j++;
    }
    return res.toLowerCase();
}

let findKeyLength = (txt) => {
    let keylen = [];
    for(let i = 1; i < 10; i++){
        keylen.push([i, __.calculateIC(__.spliteText(txt, i))]);
    }
    //console.log("keylen: " + keylen+"\nIC "+__.calculateIC(txt)+"\nsplite "+__.spliteText(txt, 6));
    keylen.sort((a, b) => b[1] - a[1]);
    return keylen.filter(e => e[1] > 0.05);
}

let findProbableKeys = (text) => {
    let keylen = findKeyLength(text);
    let keys = [];
    keylen.forEach(elem => {
        let len = elem[0];
        let key = "";
        for(let i=0; i< len; i++){
            let dicocc = __.occ(__.spliteText(text.slice(i)[0], len));
            let stat = [...dicocc.entries()].sort((a, b) => b[1] - a[1])
            stat = stat.filter(e => e[1] == stat[0][1]);
            key += tabrev.get((dic.get(stat[0][0]) - 4) >= 0 ? (dic.get(stat[0][0]) - 4) % 26 
                : ((dic.get(stat[0][0]) - 4) + 26) %26);
        }
        keys.push(key);
    });
    return keys;
}

let getTextBlocs = (text) => {
    //console.log(text);
    let blocs = [];
    let blo = [];
    let keylen = findKeyLength(text);
    console.log("cle :", keylen[0][0])
    for (let i = 0; i < keylen[0][0]; i++) {
        blocs.push(__.occ(__.spliteText(text.slice(i), i))[1]);
        blo.push(__.occ(__.spliteText(text.slice(i), i))[0]);
    }
    console.log(blo); 
    console.log(blocs);
    return blocs;
}

let decalage = (txt) => {
    let min = 100;
    let ecart = 0;
    let r = 0;
    let rfc = [...__.Realstatistics().values()];
    let st = [...__.occ(txt)[0].values()];
    for (let i=0; i<26; i++) {
        ecart=0;
        for (let j=0; j<26; j++) {
        ecart+=Math.abs((st[(i+j)%26]/txt.length) - (rfc[j]));
        }
        if(ecart<min) {
        min=ecart;
        r=i
        }
    }
    return r;
}

let findExactKey = text => {
    let keylen = findKeyLength(text);    
    let keys = [];
    let key = ""
    keylen.forEach(e => {
        let len = e[0];
        key = "";
        for(let i=0; i< len; i++){
            let rang = decalage(__.spliteText(text.slice(i), len));
            key += tabrev.get(rang);
        }
        keys.push(key)
    })
    return keys;
}

let CryptAnalysisVigCipher = (text) => {
    let key = findExactKey(text)[0];
    console.log("clé trouvée", key);
    return {
        text :decreptVigCipher(text, findExactKey(text)[0]).toLowerCase(),
        key: findExactKey(text)[0],
    }
}

export const CryptVigenereTextAction = (params) => {
   // console.log(params.text+" "+params.key+"\n"+VigCipher(params.text, params.key));
    return {
        type: _.CREPT_VIGENERE,
        payload: VigCipher(params.text, params.key),
    }
}

export const DecryptVigenereTextAction = (params) => {
    return {
        type: _.DECREPT_VIGENERE,
        payload: decreptVigCipher(params.text, params.key)
    }
}

export const CryptAnalysisAction = (params) => {
    //console.log("action analyse ", params,"\ncle", findExactKey(params));
    return {
        type: _.CRYPTANALYSE_VIGENERE,
        payload: CryptAnalysisVigCipher(params),
    }
}

export const GetTextBlocsAction = (params) => {
    return {
        type: _.GET_TEXT_BLOC,
        payload: getTextBlocs(params),
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
    //console.log(params);
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