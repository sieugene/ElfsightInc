import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import UsersReducer from './Users-reducer';
import AlbumReducer from './Album-reducer';
import PhotoReducer from './Photo-reducer';


let reducers = combineReducers({
    users: UsersReducer,
    albums: AlbumReducer,
    photos: PhotoReducer
})

type RootReducerType = typeof reducers;
export type AppStateType = ReturnType<RootReducerType>


//extension
// @ts-ignore
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(reducers,composeEnhancers(
//     applyMiddleware(thunkMiddleware)
// ));


//extension
// @ts-ignore
const composeEnhancers = compose;
const store = createStore(reducers,composeEnhancers(
    applyMiddleware(thunkMiddleware)
));

// @ts-ignore
window.store = store;

export default store;