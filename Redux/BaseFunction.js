
export let dicLetterC = bool => {
    let dic = new Map();
    let i = 0;
    for (i = 0; i < 26; i++) {
        if(bool)
            dic.set(String.fromCharCode(65+i), i);
        else 
            dic.set(i, String.fromCharCode(65+i)); 
    }
    
    return dic;
}

export let dicLetter = (bool) => {
    let dic = new Map();
    let i = 0;
    for (i = 0; i < 26; i++) {
        if(bool)
            dic.set(String.fromCharCode(65+i), i);
        else 
            dic.set(String.fromCharCode(65+i), 0);
    }

    return dic;
}

export let cleanText = text => text.toLowerCase()
    .replace(/[àâ]/g, 'a')
    .replace(/[éè]/g, 'e')
    .toUpperCase()
    .replace(/[^A-Z]/g, '');

export const occ = txt => {
    let dic = dicLetter(false); let dic2 = dicLetter(false);
    cleanText(txt).split("").forEach(e => dic.set(e, dic.get(e)+1));
    [...dic.keys()].forEach(k => dic2.set(k, dic.get(k)/txt.length));
    return [dic, dic2];
}

export const calculateIC = (txt) => 
    [...occ(txt)[0].values()]
    .map(e => e = e*(e-1))
    .reduce((total, cur) => total + cur/(txt.length*(txt.length -1)), 0);

export const spliteText = (txt, val) => 
    txt.split("").filter((c, idx) => idx%val===0).join('');

const histo = new Array(0.084,0.0106,0.0303,0.0418,0.1726,0.0112,0.0127,0.0092,0.0734,
    0.0031,0.0005,0.0601,0.0296,0.0713,0.0526,0.0301,0.0099,0.0655,0.0808,
    0.0707,0.0574,0.0132,0.0004,0.0045,0.0030,0.0012);

export const Realstatistics = () => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let refs = dicLetter(false);
    [...alphabet].forEach((e, index) => {
        refs.set(alphabet.charAt(index), histo[index]);
    });
    return refs;
}

//todo A enlever aprés
let findKeyLength = (txt) => {
    let keylen = [];
    for(let i = 0; i < 10; i++){
        keylen.push([i, calculateIC(spliteText(txt, i))]);
    }
    //console.log("keylen: " + keylen+"\nIC "+__.calculateIC(txt)+"\nsplite "+__.spliteText(txt, 6));
    keylen.sort((a, b) => b[1] - a[1]);
    return keylen.filter(e => e[1] > 0.05);
}

export const getTextBlocs = (text) => {
    //console.log(text);
    let blocs = [];
    let keylen = findKeyLength(text);
    //console.log("cle :", keylen[0][0])
    for (let i = 1; i < keylen[0][0]; i++) {
        blocs.push(occ(spliteText(text.slice(i), i))[1]);
    }
    return blocs;
}
