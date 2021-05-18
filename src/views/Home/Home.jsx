import { Image } from '@chakra-ui/image';
import { Box, HStack, Heading } from '@chakra-ui/layout';
import React from 'react';
import './Home.css'
const Home = () => {
    return (
        <Box bgColor="rgb(0, 0, 0)" minH="100vh" minW="100wh" alignItems="center" d="flex" flexDirection="column" py="4" color="white">
            <HStack>
                <Image src="img/logo.png" maxH="10" maxW="10" />
                <Heading size="md" color="white">Hozybook</Heading>
            </HStack>
            <Box d="flex">
                <div class="sixteenstyle__NormalClockWrapper-ql0kwh-2 jUSvxy"><div class="NormalClock"><div class="NormalUnitContainer"><div class="NormalupperCard"><span>11</span></div><div class="digitLabel"><label><span>days</span></label></div></div><div class="NormalUnitContainer"><div class="NormalupperCard"><span>23</span></div><div class="digitLabel"><label><span>hours</span></label></div></div><div class="NormalUnitContainer"><div class="NormalupperCard"><span>18</span></div><div class="digitLabel"><label><span>minutes</span></label></div></div><div class="NormalUnitContainer"><div class="NormalupperCard"><span>17</span></div><div class="digitLabel"><label><span>seconds</span></label></div></div></div></div>
                <Box className="content-wrapper">
                    <Box className="text-wrapper hzBvvF">
                        <p><span>Our website in under construction</span></p>
                        <h2><span>Something Big update is coming by our team. Wait! We are launching soon with amazing updates!</span></h2>
                        <div class="sixteenstyle__NotifyButton-ql0kwh-6 dLOufD"><button type="submit" class="buttonstyle__ButtonStyle-rnuphx-0 ggHLFe reusecore__button"><span class="btn-text"><span>Notify Me Update</span></span></button></div>
                    </Box>
                </Box>
            </Box>
            <Box d="flex">
                <Box>
                        <Button colorScheme="facebook" leftIcon={<FaFacebook />}>
                    Facebook
                </Button>
  </Box>
            </Box>
        </Box>
    )
}

export default Home;
