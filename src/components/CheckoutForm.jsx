import React from 'react'
import { Formik , Form} from 'formik'
import * as Yup from 'yup';
import styled from 'styled-components'
import { useDispatch } from 'react-redux';
import { payment } from '../redux/CartRedux';

const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 32px;
  background-color: var(--Main-White);
  border-radius: var(--Main-border-radius);
  box-shadow: var(--Box-shadow);
`
const Header = styled.h2`
  margin: 8px 0;
  text-transform: uppercase;
  font-size: ${props => props.form ? "14px" : "40px"};
  color: ${props => props.form ? "var(--Main-Orange)" : "var(--Main-black)"};
`

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: flex-start;
// `
const BillingDetail = styled.div`
  padding: 2px;
  display: flex;
  flex-wrap: wrap;
  align-self: start;
  gap: 16px;
`
const FormItem = styled.div`
  width: ${props => props.full ? "100%" : "310px"};
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
const Input = styled.input`
  font-size: 14px;
  width: 85%;
  padding: 18px;
  border-radius: var(--Main-border-radius);
  border: 1px solid var(--Line-Gray);
  background: transparent;
  color: var(--Line-Gray);
`
const Label = styled.label`
  width: 95%;
  margin: 8px 0;
  font-weight: 700;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const ShippingInfo = styled.div`
  padding: 2px;
  display: flex;
  flex-wrap: wrap;
  align-self: start;
  gap: 16px;
`

const PaymentDetail = styled.div`
  padding: 2px;
  display: flex;
  flex-wrap: wrap;
  align-self: start;
  gap: 16px;
`

const Error = styled.span`
    color: var(--Red);
`
const PayButton = styled.button`
    width: 50%;
    padding: 16px;
    margin: 16px 0;
    background-color: var(--Main-Orange);
    color: var(--Main-White);
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 2px;
    border: none;
    box-shadow: var(--Box-shadow);
    cursor: pointer;
`


const CheckoutForm = () => {

  const dispatch =useDispatch()


  const validationSchema = Yup.object({
    name: Yup.string().required("Do not be Empty!"),
    email: Yup.string().email("Wrong Format!").required("Do not be Empty!"),
    phone: Yup.number().required("Do not be Empty!"),
    address: Yup.string().required("Do not be Empty!"),
    zipcode: Yup.number().required("Do not be Empty!"),
    city: Yup.string().required("Do not be Empty!"),
    country: Yup.string().required("Do not be Empty!"),
    // method: Yup.string().required("Do not be Empty!"),
    eMoneyNumber: Yup.number().required("Do not be Empty!"),
    eMoneyPin: Yup.number().required("Do not be Empty!"),

  })

  return (
    <Container>
      <Header>Checkout</Header>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          address: "",
          zipcode: "",
          city: "",
          country: "",
          // method: "",
          eMoneyNumber: "",
          eMoneyPin: ""
        }}
        validationSchema={validationSchema}
        onSubmit={values => {
          console.log(values);
          dispatch(payment(values))
        }}
      >
        {({ handleSubmit, handleChange, values, errors }) => (
          <Form onSubmit={handleSubmit}>
            <Header form>Billing Details</Header>
            <BillingDetail>
              <FormItem>
                <Label>Name <Error>{errors.name && errors.name}</Error></Label>
                <Input
                  type='text'
                  name='name'
                  placeholder='Alexi Ward'
                  onChange={handleChange}
                  values={values.name}
                />
              </FormItem>
              <FormItem>
                <Label>Email Address <Error>{errors.email && errors.email}</Error></Label>
                <Input
                  type='text'
                  name='email'
                  placeholder='alexei@mail.com'
                  onChange={handleChange}
                  values={values.email}
                />
              </FormItem>
              <FormItem>
                <Label>Phone Number <Error>{errors.phone && errors.phone}</Error></Label>
                <Input
                  type='number'
                  name='phone'
                  placeholder='+1 202-555-0136'
                  onChange={handleChange}
                  values={values.phone}
                />
              </FormItem>
            </BillingDetail>
            <Header form>Shipping Info</Header>
            <ShippingInfo>
            <FormItem full>
              <Label>Address <Error>{errors.address && errors.address}</Error></Label>
              <Input
                  type='textarea'
                  name='address'
                  placeholder='1137 Williams Avenue' 
                  onChange={handleChange}
                  values={values.address}
              />
            </FormItem>
            <FormItem>
              <Label>ZIP code <Error>{errors.zipcode && errors.zipcode}</Error></Label>
              <Input 
                  type='number'
                  name='zipcode'
                  placeholder='10001'
                  onChange={handleChange}
                  values={values.zipcode}
              />
            </FormItem>
            <FormItem>
              <Label>City <Error>{errors.city && errors.city}</Error></Label>
              <Input 
                type='text'
                name='city'
                placeholder='New York'
                onChange={handleChange}
                values={values.city}
              />
            </FormItem>
            <FormItem>
              <Label>Country <Error>{errors.country && errors.country}</Error></Label>
              <Input 
                type='text'
                name='country'
                placeholder='United States'
                onChange={handleChange}
                values={values.country}
              />
            </FormItem>
            </ShippingInfo>
            <Header form>Payment Detail</Header>
            <PaymentDetail>
              {/* <FormItem>
                <Label>Payment method <Error>{errors.method && errors.method}</Error></Label>
                <Input 
                    type='radio'
                    name='method'
                    values={values.method}
                />
                <Input 
                    type='radio'
                    name='method'
                    values={values.method}
                />
              </FormItem>*/}
              <FormItem>
              <Label>E-Money Number <Error>{errors.eMoneyNumber && errors.eMoneyNumber}</Error></Label>
                <Input 
                  type='number'
                  name='eMoneyNumber'
                  placeholder='238521993'
                  onChange={handleChange}
                  values={values.eMoneyNumber}
                />
              </FormItem>
              <FormItem>
              <Label>E-Money Pin <Error>{errors.eMoneyPin && errors.eMoneyPin}</Error></Label>
                <Input 
                  type='number'
                  name='eMoneypin'
                  placeholder='6891'
                  onChange={handleChange}
                  values={values.eMoneyPin}
                />
              </FormItem>
            </PaymentDetail> 
            <PayButton type="submit">Continue & Pay</PayButton>
          </Form>
        )}
      </Formik>
    </Container>
  )
}

export default CheckoutForm