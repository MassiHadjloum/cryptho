import React from 'react';
import { StyleSheet, TextInput } from 'react-native';


const InputText = (props) => {
    return (   
        <TextInput disableFullscreenUI={false} 
        {...props} style={{...styles.inputTextClaire, ...props.style}} />
    );
};

const styles = StyleSheet.create({
    inputTextClaire: {
        textAlignVertical: "top",
        height: '10%',
        width: '100%',
        margin: 0,
        padding: 10,
        borderRadius: 10,
    },
});

export default InputText;
