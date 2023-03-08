import { client } from '../graphq/index';
import { FETCH_RATES, FETCH_WALLETS, SAVE_RATE, SAVE_WALLET } from '../graphq/querys';

export const fetchWallets = async () => {
    try {
        const { data } = await client.query({ query: FETCH_WALLETS, fetchPolicy:'no-cache' });
        return data.wallets
    } catch (error) {
        console.log(error)
        return []
    }
}

export const fetchRates = async () => {
    try {
        const { data } = await client.query({ query: FETCH_RATES, fetchPolicy:'no-cache' });
        return data.rates
    } catch (error) {
        console.log(error)
        return []
    }
}

export const saveWallet = async address => {
    try {
        const { data } = await client.mutate({ mutation: SAVE_WALLET, variables: { address } });
        return data.createWallet
    } catch (error) {
        console.log(error)
        return []
    }
}

export const saveRate = async rate => {
    try {
        const { data } = await client.mutate({ mutation: SAVE_RATE, variables: { rate } });
        return data.updateExchange
    } catch (error) {
        console.log(error)
        return []
    }
}