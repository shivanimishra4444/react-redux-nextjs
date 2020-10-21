import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers/rootReducer';
import {createWrapper} from 'next-redux-wrapper';
import thunkMiddleware from 'redux-thunk'

const bindMiddleware = (middleware) => {
    /* if (process.env.NODE_ENV !== 'production') {
      const { composeWithDevTools } = require('redux-devtools-extension')
      return composeWithDevTools(applyMiddleware(...middleware))
    } */
    return applyMiddleware(...middleware)
  }

export const initStore = (context) => {
    const store = createStore(rootReducer, bindMiddleware([thunkMiddleware]));
    return store;
};

export default createWrapper(initStore);
