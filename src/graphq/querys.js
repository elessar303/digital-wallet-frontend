
import { gql } from '@apollo/client';

export const FETCH_WALLETS = gql`
  query wallets{
    wallets{
        address
        firstTransacctionTime
        isOld
        ethBalance
    }
}
`;

export const FETCH_RATES = gql`
    query rates {
    rates{
        currency
        rate
    }
}
`;

export const SAVE_WALLET = gql`
    mutation saveWallet($address:String){
    createWallet(address:$address){
        status
        message
        result
        ethBalance
        firstTransacctionTime
        isOld
    }
    }
`;

export const SAVE_RATE = gql`
    mutation saveExchangeRate ($rate: ExchageRateInput){
    updateExchange(exchageRateInput: $rate){
      currency
      rate
    }
  }
`;