import React, { useEffect, useState } from 'react';
import { FaEthereum } from "react-icons/fa";
import { FiCheck, FiEdit } from "react-icons/fi";
import { RiMoneyDollarCircleLine, RiMoneyEuroCircleLine } from "react-icons/ri";
import { Alert, Card, CardBody, CardHeader, CardSubtitle, CardTitle, Input } from 'reactstrap';
import { v4 as uuidv4 } from 'uuid';
import { WalletActions, WalletContainerActions, WalletIcons, WalletRates } from '../styles/components';

const WalletCard = ({ wallet, rates = [], onSaveRate }) => {
    const [isDisabled, setIsDisabled] = useState(true)
    const [selectedRate, setSelectedRate] = useState(rates[0])
    const [input, setInput] = useState()

    const handleChangeRate = e => {
        const newSelectedRate = rates.filter(elm => elm.currency === e.target.value)[0]
        setSelectedRate(newSelectedRate)
        setInput(selectedRate.rate)
    }
    const handleChangeInput = e => setInput(e.target.value)

    useEffect(() => {
        setInput(selectedRate.rate)
    }, [selectedRate]);

    return (
        <Card
            className="my-2 mb-0"
            color="light"
        >
            <CardHeader style={{ fontSize: '14px' }}>
                <CardTitle className="text-muted">{wallet.address}</CardTitle>
                <CardSubtitle
                    className="text-muted"
                    style={{ fontSize: '12px' }}
                >
                    <FaEthereum /> {wallet.ethBalance}
                </CardSubtitle>
            </CardHeader>
            <CardBody>
                {wallet.isOld && <Alert color="danger" style={{ fontSize: '14px' }}> Wallet Is Old! </Alert>}
                <WalletContainerActions>
                    <WalletActions alignItems={'flex-end'}>
                        <WalletIcons>
                            {isDisabled && <FiEdit onClick={() => setIsDisabled(!isDisabled)} />}
                            {!isDisabled && <FiCheck color='green' onClick={() => onSaveRate({ ...selectedRate, rate: Number(input) })} />}
                        </WalletIcons>
                        <Input type='text' disabled={isDisabled} value={input} onChange={(e) => handleChangeInput(e)} />
                    </WalletActions>
                    <WalletActions>
                        <Input type='select' onChange={(e) => handleChangeRate(e)} value={selectedRate.currency}>

                            {rates.map(rate => (<option key={uuidv4()} value={rate.currency}>{rate.currency}</option>))}
                        </Input>
                        <div className='card-text'>
                            <WalletRates>
                                <div>{Number(wallet.ethBalance / selectedRate.rate).toFixed(2)}</div>
                                <div style={{ margin: '5px 0' }}>{selectedRate.currency === 'USD' ? <RiMoneyDollarCircleLine /> : <RiMoneyEuroCircleLine />}</div>
                            </WalletRates>
                        </div>
                    </WalletActions>

                </WalletContainerActions>

            </CardBody>
        </Card>
    )
}

export default WalletCard