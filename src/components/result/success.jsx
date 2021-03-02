import { Box, Heading,Image,Text,Icon, Center, Button } from '@chakra-ui/react'
import React from 'react'
import {GoMailRead} from 'react-icons/go'
import { Link } from 'react-router-dom'
import * as ROUTES from '../../utils/constants/routes'

export default function SuccessTransaction() {
    return (
        <Box p="16" pt="8" minH="100vh" textAlign="center" >
        <Image src="/images/logo.png" pb="8"/>
        <Center pt="16" pb="4">
            <Box w="20" h="20" bg="#fff4e6" d="flex" alignItems="center" justifyContent="center" borderRadius="lg">
                <Icon as ={GoMailRead} boxSize="10" color="brandColor"/>
            </Box>
        </Center>
        <Heading size="sm" pt="4">Check your Email</Heading>
        <Text fontSize="sm" color="GrayText" pt="2">We have sent  Email verification  Instructions<br/>to your email</Text>
        <Button  type="submit" bgColor="brandColor" color="white" size="md" mt="4">Open email</Button>
        <Text fontSize="md" color="GrayText" pt="36">Did not recieve email, check spam filter, <br/> or  <Link to={ROUTES.LOGIN} style={{color:'blue'}}>Login using email address</Link></Text>
    </Box>
    )
}
