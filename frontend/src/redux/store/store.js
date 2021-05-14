import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createCropReducer } from '../reducers/crops/createCropReducer';
import { cropListReducer } from '../reducers/crops/cropListReducer';
import { userReducer } from '../reducers/users/userAuthReducer';


const middlewares = [thunk];


const reducer = combineReducers({
    cropCreated: createCropReducer,
    cropsList: cropListReducer,
    userLogin: userReducer,
});

//Get user from localstorage aND SAVE IT

const userAuthFromStorage = localStorage.getItem('userAuthData')
? JSON.parse(localStorage.getItem('userAuthData'))
:null;

const initialState = {
    userLogin: {userInfo: userAuthFromStorage},
};

const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middlewares)));

export { store };
