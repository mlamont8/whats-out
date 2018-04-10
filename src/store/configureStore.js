import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import EntApp from '../reducers';



export default function configureStore(initialState) {

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(
        EntApp,
        initialState,
        composeEnhancers(
            applyMiddleware(thunk)
        ));



    return store;
}