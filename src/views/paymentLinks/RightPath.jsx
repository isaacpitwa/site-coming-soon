import {Box, Text,Flex,Link, Spacer } from '@chakra-ui/react'
import React from 'react'

export default function RightPath() {
    return (
       <Box p="6">
           <Flex align="center" px="8" pb="4">
               <Link href="https://right-path.org/">right-path.org</Link>
               <Spacer/>
               <Text size="sm">+256 414 373 968 / +256 775 738282</Text>
           </Flex>
           <Box  w="100%" h="90vh"  bgImage="linear-gradient(rgba(18, 18, 44, 0.8), rgba(18, 18, 44, 0.8)), url(https://cdn.filestackcontent.com/TmUstxRASJyhlKy9RwSL);">

           </Box>
       </Box>
    )
}
