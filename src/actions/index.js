import TYPES from './types';

const increment = () => ({
    type: TYPES.INCREMENT,
});

export const decrement = () => ({
    type: TYPES.DECREMENT,
});

export const incrementAsync = error => ({
    type: TYPES.INCREMENT_ASYNC,
});

export const getWallets = () => ({
    type: TYPES.GET_WALLETS,
});

export const getRates = () => ({
    type: TYPES.GET_RATES,
});

export const addWallet = address => ({
    type: TYPES.ADD_WALLET,
    value: address
});

export const saveRate = rate => ({
    type: TYPES.SAVE_RATE,
    value: rate
});

export default increment;