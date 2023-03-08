import React from 'react'
import { Container } from 'reactstrap'
import Form from './Form'
import WalletList from './WalletList'

const Body = () => {
  return (
    <Container>
        <Form />
        <WalletList />
    </Container>
  )
}

export default Body