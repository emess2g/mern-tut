import { Box } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { useColorModeValue } from './components/ui/color-mode'

import Create from './pages/Create'
import Home from './pages/Home'
import Navbar from './components/ui/Navbar'

const App = () => {
  return (
    <div>
      <Box minH={'100vh'} bg={useColorModeValue("gray.100", "gray.900")}>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/create' element={<Create/>}/>
        </Routes>
      </Box>
    </div>
  )
}

export default App
