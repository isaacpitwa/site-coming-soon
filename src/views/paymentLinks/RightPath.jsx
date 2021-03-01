import {Box, Text,Flex,Link, Spacer,Heading, Image, Button } from '@chakra-ui/react'
import React from 'react'

export default function RightPath() {
    return (
       <Box p="4">
           <Flex align="center" px="20" pb="2">
               <Link href="https://right-path.org/">right-path.org</Link>
               <Spacer/>
               <Text size="sm">+256 414 373 968 / +256 775 738282</Text>
           </Flex>
           <Box  px="20" py="12" w="100%" h="89vh" background= 'url(/static/img/donation-bg@3x.png) center no-repeat' backgroundSize= 'cover'  bgImage="linear-gradient(rgba(18, 18, 44, 0.8), rgba(18, 18, 44, 0.8)), url(https://cdn.filestackcontent.com/TmUstxRASJyhlKy9RwSL);">
                <Flex>
                    <Box color="white" maxW="40%">
                        <Image src="https://cdn.filestackcontent.com/kNV8JzinR42imN76BvFq" width='80px'/>
                        <Heading pt="16" pb="12">Change A Life Today</Heading>
                        <Text>Donate and create an impact that will transform lives of under-privileged children, refugees, families and communities in Uganda and the World.</Text>
                        <Button borderRadius="0" mt="10" px="8" variant="outline" fontSize="sm" borderColor="white" color="white" _hover={{backgroundColor:"#F5A623",border:'0'}}>Learn More</Button>
                    </Box>
                </Flex>
           </Box>
       </Box>
    )
}
