import styled from 'styled-components'

export const Container = styled.div`
    font-family: 'OpenSans-SemiBold', 'Open Sans SemiBold', 'Open Sans';
    display: flex;
    flex-wrap: wrap;
`

export const Header = styled.div`
    font-family: 'OpenSans-SemiBold', 'Open Sans SemiBold', 'Open Sans';
    display: flex;
    flex-wrap: wrap;
    width:100%;
`

export const Body = styled.div`
    font-family: 'OpenSans-SemiBold', 'Open Sans SemiBold', 'Open Sans';
    display: flex;
    flex-wrap: wrap;
    width:100%;
`
export const WalletContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 10px;
`

export const WalletContainerActions = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 20px;
`

export const WalletActions = styled.div`
    border-radius: 4px;
    background-color: rgba(0,0,0,.03);
    padding: 10px;
    border: 1px solid rgba(0,0,0,.125);
    display: flex;
    flex-direction: column;
    align-items: ${ ({alignItems}) => alignItems ? alignItems : ''};
`

export const WalletIcons = styled.div`
    margin-bottom:10px;
    cursor:pointer;
`
export const WalletRates = styled.div`
    display: flex;
    align-items: center;
    font-size: 18px;
    color:#6c757d;
`