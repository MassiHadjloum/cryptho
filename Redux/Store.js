import React from 'react';
import { createStore, combineReducers } from 'redux';
import cesarReducer from './Cesar/CesarReducer';
import vigenereReducer from './Vigenere/VigenereReducer';

const rootReducer = combineReducers({
    cesar: cesarReducer,
    vigenere: vigenereReducer
})

const store = createStore(rootReducer);

export default store;