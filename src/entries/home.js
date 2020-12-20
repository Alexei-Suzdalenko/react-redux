import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/home';
import {createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import reducer from './../reducers/index';
import {Map as map } from 'immutable';
import logger from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// function logger({getState, dispatch}){
//     // recibe el metodo para dispachar el sigiente middleware
//     return (next) => {
//         return(action) => {
//             console.log('vamos a enviar esta accion', action);
//             let value =  next(action);
//             console.log('este es mi nuevo estado', getState().toJS());
//             return value;
//         }
//     }
// }

 const logger__ = ({getState, dispatch}) => next => action => {
     console.log('next', next);
     console.log('vamos a enviar esta accion', action);
     let value =  next(action);
     console.log('este es mi nuevo estado', getState().toJS());
     console.log('value', value);
     return value;
 }

const store = createStore(
    reducer,   // reducer function
    map(),   // init state // iniciamos el estado en cada reducer por separado
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()   // enhanser
    // applyMiddleware(logger)
    composeWithDevTools(applyMiddleware(logger, logger__, thunk))
);


const homeContainer = document.getElementById('home-container');

render( <Provider store={store}> <Home  /> </Provider>, homeContainer);















