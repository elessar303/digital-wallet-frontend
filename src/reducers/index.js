import { combineReducers } from 'redux';
import TYPES from '../actions/types';

const initialState = {
    wallets: [],
    rates: [],
    isLoading: false
};

function count(state = initialState, action) {
    switch (action.type) {

        case TYPES.SET_WALLETS:
            return {
                ...state,
                wallets: [...action.value],
                isLoading: false
            }
        case TYPES.GET_WALLETS:
        case TYPES.ADD_WALLET:
        case TYPES.SAVE_RATE:
            return {
                ...state,
                isLoading: true
            }
            
        case TYPES.SET_RATES:
            return {
                ...state,
                rates: [...action.value],
                isLoading: false
            }
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    app: count
});

export default rootReducer;