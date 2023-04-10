import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import CheckoutForm from '../components/CheckoutForm'
import Summary from '../components/Summary'
import { mobile, tablet } from '../responsive'
import { useNavigate } from 'react-router-dom'


const Container = styled.div`
    width: 100vw;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5vh;
    background-color: var(--Main-Gray);
    position: relative;
    ${mobile({
    gap: "2vh"
})}
`
const PayContainer = styled.div`
    width: 80vw;
    margin: 10vh 0;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 32px;
    ${mobile({
    flexDirection: "column-reverse",
    margin: "0px",
    marginBottom: "10vh",
})}
`
const FormContainer = styled.div`
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    ${mobile({
    width: "80vw",
})}
`
const SummaryContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    ${mobile({
    width: "80vw",
})}
`

const GoBackButton = styled.button`
    background: transparent;
    border: none;
    align-self: flex-start;
    color: var(--Line-Gray);
    text-decoration: underline;
    text-align: left;
    cursor: pointer;
    margin: 16px 0;
`


const Checkout = () => {
    const navigate = useNavigate()

    return (
        <Container>
            <GoBackButton onClick={() => navigate(-1)}>Go Back</GoBackButton>

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