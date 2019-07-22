import {createStore,compose,applyMiddleware} from 'redux'
import Reducers from './reducer/index';
import thunk from 'redux-thunk';


const middleware = [thunk]
const initialState = {};

const store = createStore(
    Reducers,
    initialState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

export default store;