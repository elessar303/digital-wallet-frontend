import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Input, InputGroup, InputGroupText, Spinner } from 'reactstrap';
import { addWallet } from '../actions/index';

const Form = () => {
    const dispatch = useDispatch();
    const { isLoading } = useSelector(({ app }) => app)
    const [inputValue, setInputValue] = useState(null)

    const onChangeHandler = e => setInputValue(e.target.value)

    const send = () => dispatch(addWallet(inputValue)) && setInputValue(null)
    return (
        <InputGroup>
            <InputGroupText>
                Wallet address:
            </InputGroupText>
            <Input onChange={onChangeHandler} value={inputValue || ''} />
            <Button onClick={send} disabled={isLoading}> {isLoading ? <><Spinner size="sm">
                Loading...
            </Spinner>
                <span>
                    {' '}Loading
                </span></> : 'Add'}

            </Button>
        </InputGroup>
    )
}

export default Form
