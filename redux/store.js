import {createStore} from 'redux';
import rootReducer from './reducers/rootReducer';
import {createWrapper} from 'next-redux-wrapper';


export const makeStore = (context) => {
    const store = createStore(rootReducer);
    return store;
};

export default createWrapper(makeStore);
