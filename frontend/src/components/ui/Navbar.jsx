import { Button, Container, Flex, HStack, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import React from 'react'
import { BsPlusSquare } from 'react-icons/bs'
import { useColorMode} from './color-mode'
import { IoMoon } from 'react-icons/io5'
import { LuSun } from 'react-icons/lu'

const Navbar = () => {
    const { colorMode, toggleColorMode} = useColorMode();

  return (
    <Container maxW={"1140px"} px={4} >
      <Flex
      h={16}
      alignContent={'center'}
      justifyContent={'space-between'}
      flexDir={{ 
        base:'column',
        sm:'row'
      }}
      >
        <Text
        fontSize={{base:'22px', sm:'28px'}}
        fontWeight={"bold"}
        textTransform={"uppercase"}
        textAlign={"center"}
        // bgGradient={"linear(to-r, cyan.400, blue.500)"} 
        bgGradient="to-r" 
        gradientFrom="cyan.400"
         gradientTo="blue.500"
        bgClip={"text"}>
        <Link to={"/"}> Product Store 🛒</Link>
        
        </Text>
     
       <HStack wordSpacing={2} alignItems={"center"}>
          <Link to={"/create"}>
          <Button>
            <BsPlusSquare fontSize={20} />
          </Button>
          </Link>
          <Button onClick={toggleColorMode}>
             {colorMode === 'light' ? <IoMoon/>: <LuSun size={'20'}/>}
          </Button>
        </HStack>
      </Flex>
    </Container>
  )
}

export default Navbar
