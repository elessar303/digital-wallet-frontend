import React from 'react'
import { Container } from 'reactstrap'
import Body from './containers/Body'
import Header from './containers/Header'
const Dashboard = () => {
  return (
    <Container>
      <Header />
      <Body />
    </Container>
  )
}

export default Dashboard