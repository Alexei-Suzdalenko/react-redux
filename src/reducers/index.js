import data from './data';
import modal from './modal';
import isLoading from './isloadin';
// import  {combineReducers} from 'redux';
import  {combineReducers} from 'redux-immutable';


const rootReducer = combineReducers({
    data: data,
    modal: modal,
    isLoading: isLoading
});

export default rootReducer;