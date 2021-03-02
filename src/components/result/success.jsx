import { Box, Heading,Image,Text,Icon, Center, Button } from '@chakra-ui/react'
import React from 'react'
import {IoCheckmarkCircleOutline} from 'react-icons/io5'
import { Link } from 'react-router-dom'
import * as ROUTES from '../../utils/constants/routes'

export default function SuccessTransaction() {
    return (
        <Box p="16" pt="8" minH="100vh" textAlign="center" >
        <Image src="/images/logo.png" pb="8"/>
        <Center pt="16" pb="4">
            <Box w="20" h="20" bg="#fff4e6" d="flex" alignItems="center" justifyContent="center" borderRadius="lg">
                <Icon as ={IoCheckmarkCircleOutline} boxSize="10" color="#F5A623"/>
            </Box>
        </Center>
        <Heading size="sm" pt="4">Transactions Successful</Heading>
        <Text fontSize="sm" color="GrayText" pt="2">We have sent  Email Transaction  Details<br/>to your email</Text>
        <Button  type="submit" bgColor="#F5A623" color="white" size="md" mt="4">Go Back</Button>
        <Text fontSize="md" color="GrayText" pt="36">Did not recieve email, check spam filter, <br/> or  <Link to={ROUTES.RIGHT_PATH_PAYMENT_LINK} style={{color:'blue'}}>Donate again</Link></Text>
    </Box>
    )
}
