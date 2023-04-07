import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import CheckoutForm from '../components/CheckoutForm'
import Summary from '../components/Summary'


const Container = styled.div`
    width: 100vw;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5vh;
    background-color: var(--Main-Gray);
`
const PayContainer = styled.div`
    width: 80vw;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 32px;
`
const FormContainer = styled.div`
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: center;
`
const SummaryContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Checkout = () => {
  return (
    <Container>
        <PayContainer>
            <FormContainer>
                <CheckoutForm />
            </FormContainer>
            <SummaryContainer>
                <Summary />
            </SummaryContainer>
        </PayContainer>
        <Footer />
    </Container>
  )
}

export default Checkout