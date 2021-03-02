import {
    Box, FormControl,
    FormLabel,
    FormErrorMessage, Input, Button, SimpleGrid,useToast
} from '@chakra-ui/react'
import React from 'react'
import { Field, Form, Formik } from 'formik';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import * as ROUTES from '../../utils/constants/routes'
export default function DonationForm() {
    var history = useHistory();
    const toast = useToast()
    function validate(values) {
        let errors = {};
        if (!values.fName) errors.fName = 'Required';
        if (!values.lName) errors.lName = 'Required';
        if (!values.phoneNumber) errors.phoneNumber = 'Required';
        if (!values.amount) errors.amount = 'Required';
        if (!values.cardNumber) errors.cardNumber = 'Required';
        if (!values.expiryMonth) { errors.expiryMonth = 'Required' } 
        if (values.expiryMonth && (parseInt(values.expiryMonth) <= 0 || parseInt(values.expiryMonth) > 12)) {
            errors.expiryMonth = 'Invalid Expiry Month'
        };
        if (!values.expiryYear) { errors.expiryYear = 'Required' } 
        if ( values.expiryYear && parseInt(values.expiryYear) <= new Date().getFullYear()) {
            errors.expiryYear = 'Invalid Expiry Year'
        };
        if (!values.email) {
            errors.email = 'Required';
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
            errors.email = 'Invalid email address';
        }
        return errors;
    }
const makeCyberSourcePayment = (values, submission) => {
        console.log(values)
            axios({
            method: 'POST',
            url: 'http://localhost:3100/payment',
            headers:{'Content-Type': `application/json`,},
            data: values
        }
        )
          .then(function (response) {
            submission(false)
            console.log(response.data);
            if(response.data.error){
                toast({
                    title: "An Error Occured",
                    description: "We've created your account for you.",
                    status: "error",
                    duration: 9000,
                    isClosable: true,
                  })
            }
            else if(response.data.data.status === 'DECLINED'){
                toast({
                    title: `An Error Occured -${response.data.data.errorInformation.reason}`,
                    description: response.data.data.errorInformation.message,
                    status: "error",
                    duration: 9000,
                    isClosable: true,
                  })
            }
            else if(response.data.response.status === 201 && response.data.data.status === 'AUTHORIZED'){
                history.push(ROUTES.RIGHT_PATH_PAYMENT_SUCCESS);
            }
          })
          .catch(function (error) {
            toast({
                title: "An Error Occured",
                description: error.message,
                status: "error",
                duration: 9000,
                isClosable: true,
              })
            submission(false)
          });
    }

    return (
        <Box backgroundColor="white" p="10">
            <Formik
                validate={validate}
                initialValues={{ fName: '', lName: '', email: '', amount: undefined , phoneNumber: '', cardNumber: undefined , expiryMonth: undefined, expiryYear: undefined }}
                onSubmit={(values, actions) => {

                    actions.setSubmitting(true);
                    makeCyberSourcePayment(values,actions.setSubmitting)
                }}
            >
                {(props) => (
                    <Form>
                        <SimpleGrid columns={2} spacing={4}>
                            <Field name="fName" >
                                {({ field, form }) => (
                                    <FormControl isInvalid={form.errors.fName && form.touched.fName}>
                                        <FormLabel htmlFor="fName" fontSize="sm" fontWeight="400">First name</FormLabel>
                                        <Input {...field} id="fName" placeholder="First Name" fontSize="sm" fontWeight="400" />
                                        <FormErrorMessage>{form.errors.fName}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                            <Field name="lName" >
                                {({ field, form }) => (
                                    <FormControl isInvalid={form.errors.lName && form.touched.lName}>
                                        <FormLabel htmlFor="lName" fontSize="sm" fontWeight="400">First name</FormLabel>
                                        <Input {...field} id="lName" placeholder="Last Name" fontSize="sm" fontWeight="400" />
                                        <FormErrorMessage>{form.errors.lName}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                        </SimpleGrid>
                        <SimpleGrid columns={2} spacing={4}>
                            <Field name="email">
                                {({ field, form }) => (
                                    <FormControl pt="2" isInvalid={form.errors.email && form.touched.email} isRequired>
                                        <FormLabel htmlFor="email" fontSize="sm" fontWeight="400">Email</FormLabel>
                                        <Input {...field} type="email" id="email" fontSize="sm" fontWeight="400" placeholder="johndoe@domain.com" />
                                        <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                            <Field name="phoneNumber" isRequired>
                                {({ field, form }) => (
                                    <FormControl pt="2" isInvalid={form.errors.phoneNumber && form.touched.phoneNumber}>
                                        <FormLabel htmlFor="phoneNumber" fontSize="sm" fontWeight="400">Phone Number</FormLabel>
                                        <Input {...field} type="text" id="phoneNumber" placeholder="256 123456789" fontSize="sm" fontWeight="400" />
                                        <FormErrorMessage>{form.errors.phoneNumber}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                        </SimpleGrid>
                        <Field name="amount">
                            {({ field, form }) => (
                                <FormControl pt="2" isInvalid={form.errors.amount && form.touched.amount} >
                                    <FormLabel htmlFor="amount" fontSize="sm" fontWeight="400">Amount(USD)</FormLabel>
                                    <Input {...field} type="number" id="amount" placeholder="0.00" fontSize="sm" fontWeight="400" />
                                    <FormErrorMessage>{form.errors.amount}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                        <Field name="cardNumber" isRequired>
                            {({ field, form }) => (
                                <FormControl pt="4" isInvalid={form.errors.cardNumber && form.touched.cardNumber} isRequired>
                                    <FormLabel htmlFor="cardNumber" fontSize="sm" fontWeight="400"> Card Number</FormLabel>
                                    <Input {...field} type="text" id="cardNumber" placeholder="Card Number" fontSize="sm" fontWeight="400" />
                                    <FormErrorMessage>{form.errors.cardNumber}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                        <SimpleGrid columns={2} spacing={4}>
                            <Field name="expiryMonth" isRequired>
                                {({ field, form }) => (
                                    <FormControl pt="4" isInvalid={form.errors.expiryMonth && form.touched.expiryMonth} isRequired>
                                        <FormLabel htmlFor="expiryMonth" fontSize="sm" fontWeight="400"> Expiry Month</FormLabel>
                                        <Input {...field} type="number" id="expiryMonth" placeholder="12" fontSize="sm" fontWeight="400" />
                                        <FormErrorMessage>{form.errors.expiryMonth}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                            <Field name="expiryYear" isRequired>
                                {({ field, form }) => (
                                    <FormControl pt="4" isInvalid={form.errors.expiryYear && form.touched.expiryYear} isRequired>
                                        <FormLabel htmlFor="expiryYear" fontSize="sm" fontWeight="400"> Expiry Year</FormLabel>
                                        <Input {...field} type="number" id="expiryYear" placeholder="2022" fontSize="sm" fontWeight="400" />
                                        <FormErrorMessage>{form.errors.expiryYear}</FormErrorMessage>
                                    </FormControl>
                                )}
                            </Field>
                        </SimpleGrid>
                        <Button
                            mt={4}
                            backgroundColor="#F5A623"
                            color="white"
                            width="100%"
                            borderRadius="sm"
                            fontSize="sm"
                            isLoading={props.isSubmitting}
                            type="submit"
                            _hover={{ opacity: '0.8' }}
                        >DONATE ONCE</Button>
                    </Form>
                )}
            </Formik>
        </Box>
    )
}
