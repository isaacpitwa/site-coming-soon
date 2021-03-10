import {Box, Text,Flex,Link, Spacer,Heading, Image, Button,useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import { DonationForm } from '../../components'

export default function RightPath() {
    const [isLargerThanTabSize] = useMediaQuery("(min-width: 768px)")
    const [isTabSize] = useMediaQuery("(min-width: 600px)")

    const [isLargerThanPhoneSize] = useMediaQuery("(min-width: 320px)")
    const bgSize =isLargerThanTabSize?'89vh':''
    return (
       <Box p="4">
           <Flex align="center" px={isLargerThanTabSize?'20':'0'} pb="2">
               <Link href="https://right-path.org/" fontSize="sm">right-path.org</Link>
               <Spacer/>
               <Text fontSize="sm">+256 414 373 968 / +256 775 738282</Text>
           </Flex>
           <Box  px={(isTabSize&& !isLargerThanTabSize)?'10':isLargerThanTabSize?'20':'8'} py="12" w="100%" h={bgSize} background= 'url(/static/img/donation-bg@3x.png) center no-repeat' backgroundSize= 'cover'  bgImage="linear-gradient(rgba(18, 18, 44, 0.8), rgba(18, 18, 44, 0.8)), url(https://cdn.filestackcontent.com/TmUstxRASJyhlKy9RwSL);">
                <Flex flexDirection={(isTabSize&& !isLargerThanTabSize)?'row':isLargerThanTabSize?'row':'column'}>
                    <Box color="white" maxW={(isTabSize&& !isLargerThanTabSize)?'50%':isLargerThanTabSize?'40%':'100%'} pr="4">
                        <Image src="https://cdn.filestackcontent.com/kNV8JzinR42imN76BvFq" width='80px'/>
                        <Heading pt="16" pb="12" color="white">Change A Life Today</Heading>
                        <Text color="white">Donate and create an impact that will transform lives of under-privileged children, refugees, families and communities in Uganda and the World.</Text>
                        <Button borderRadius="0" mt="10" px="8" variant="outline" fontSize="sm" borderColor="white" color="white" _hover={{backgroundColor:"#F5A623",border:'0'}}>Learn More</Button>
                    </Box>
                    <Spacer/>
                    <Box d="flex" alignItems="center"   justifyContent="flex-end" pt={isLargerThanTabSize?'0':'16'} minW={isLargerThanTabSize?' ':'100%'}>                        
                        <DonationForm/>
                    </Box>
                </Flex>
           </Box>
       </Box>
    )
}
