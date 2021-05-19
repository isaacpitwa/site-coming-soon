import { Image } from '@chakra-ui/image';
import { Box, HStack, Heading, Link } from '@chakra-ui/layout';
import { Button, Icon } from "@chakra-ui/react"
import React from 'react';
import { FaFacebookF,FaTwitter,FaGithub} from 'react-icons/fa'
import {GrMail} from 'react-icons/gr'
import Countdown from 'react-countdown';
import './Home.css'

const renderer = ({ days,hours, minutes, seconds, completed }) => {
    return <div class="sixteenstyle__NormalClockWrapper-ql0kwh-2 jUSvxy">
        <div class="NormalClock">
            <div class="NormalUnitContainer">
             <div class="NormalupperCard">
                 <span>{days}</span>
              </div>
            <div class="digitLabel">
        <label><span>days</span></label></div></div><div class="NormalUnitContainer"><div class="NormalupperCard"><span>{hours}</span></div><div class="digitLabel"><label><span>hours</span></label></div></div><div class="NormalUnitContainer"><div class="NormalupperCard"><span>{minutes}</span></div><div class="digitLabel"><label><span>minutes</span></label></div></div><div class="NormalUnitContainer"><div class="NormalupperCard"><span>{seconds}</span></div><div class="digitLabel"><label><span>seconds</span></label></div></div></div></div>;
  };
const Home = () => {
    return (
        <Box bgColor="rgb(0, 0, 0)" minH="100vh" minW="100wh" alignItems="center" d="flex" flexDirection="column" py="4" color="white">
            <HStack>
                <Image src="img/logo.png" maxH="10" maxW="10" />
                <Heading size="md" color="white">Hozybook</Heading>
            </HStack>
            <Box d="flex">
                <Box className="content-wrapper" px="24">
                    <Box className="text-wrapper hzBvvF">
                        <p><span>Our website in under construction</span></p>
                        <h2><span>Something Big update is coming by our team. Wait! We are launching soon with amazing updates!</span></h2>
                        <div class="sixteenstyle__NotifyButton-ql0kwh-6 dLOufD"><button type="submit" class="buttonstyle__ButtonStyle-rnuphx-0 ggHLFe reusecore__button"><span class="btn-text"><span>Notify Me Update</span></span></button></div>
                    </Box>
                        <Countdown
                        date={Date.now() + 900000000}
                        renderer={renderer}/>
                    </Box>
            </Box>
            <HStack spacing="4">
                <Button backgroundColor="#E5E5E5" as={Link}  to="https://business.facebook.com/Hozybook-Mobile-Application-109434854663002/" isExternal borderRadius="100%" py="6"><Icon as={FaFacebookF} color="rgba(0,0,0,.8)" size="24"/></Button>
                <Button backgroundColor="#E5E5E5" as={Link}  to="https://twitter.com/hozybook" isExternal borderRadius="100%" py="6"><Icon as={FaTwitter} color="rgba(0,0,0,.8)"/></Button>
                <Button backgroundColor="#E5E5E5" as={Link}  to="https://github.com/orgs/Witsmind" isExternal borderRadius="100%" py="6"><Icon as={FaGithub} color="rgba(0,0,0,.8)"/></Button>
                <Button backgroundColor="#E5E5E5" as={Link}  to="mailto:support@witsmind.com" isExternal borderRadius="100%" py="6"><Icon as={GrMail} color="rgba(0,0,0,.8)"/></Button>

            </HStack>
            <p className="klbxcz"><span>Copyright {new Date().getFullYear} by Witsmind, Ltd. All rights reserved</span></p>
        </Box>
    )
}

export default Home;
