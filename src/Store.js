import {createStore,applyMiddleware,compose} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import  rootReducer  from './reducers';
const initialState={};
const middleware=[thunk];
const logger = createLogger({
    /* https://github.com/evgenyrodionov/redux-logger */
    collapsed: true,
    diff: true
});
const store=createStore(rootReducer,initialState,composeWithDevTools(applyMiddleware(...middleware,logger)
//window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
));
export default store;