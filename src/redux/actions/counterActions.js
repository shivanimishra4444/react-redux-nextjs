//Action Types
export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const DECREMENT_COUNTER = "DECREMENT_COUNTER";
export const GET_DATA = 'GET_DATA'
import {dispatch} from 'react-redux'


//Action Creator
export const incrementCounter = () => ({
   type: INCREMENT_COUNTER
});

export const decrementCounter = () => ({
    type: DECREMENT_COUNTER
});

export const getItems =  ()=> async(dispatch) => {
    const response = await fetch('')
    const result = await response.json()
    return dispatch({type : GET_DATA, payload: result.data})
}