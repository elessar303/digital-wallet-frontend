import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { getRates, getWallets, saveRate } from '../actions/index';
import WalletCard from '../components/walletCard';
import { WalletContainer } from '../styles/components';

const WalletList = () => {
    const dispatch = useDispatch();
    const { wallets, rates } = useSelector(({ app }) => app)

    const onSaveRate = ({currency, rate}) => dispatch(saveRate({currency, rate}))

    useEffect(() => {
        dispatch(getWallets())
        dispatch(getRates())
    }, [])

    return wallets.length === 0 ? <h1>No Wallets</h1> : rates.length > 0 && <WalletContainer>{wallets.map(wallet => (<WalletCard key={uuidv4()} wallet={wallet} rates={rates} onSaveRate={(rate) => onSaveRate(rate)} />))}</WalletContainer>
}

export default WalletList