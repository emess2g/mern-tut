import { useColorModeValue } from '@/components/ui/color-mode'
import { useProductStore } from '@/store/product'
import { Box, Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, {useState } from 'react'

const Create = () => {
    const [newProduct, setNewProduct] = useState({
        name: "",
        price: "",
        image: ""
    })
 
    const {createProduct} = useProductStore();
    
    const handleAddProduct = async() => {
      const {success, message} = await createProduct(newProduct);
      console.log(success, "Success");
      console.log(message, "Message");
      
      
    }
  return (
    <Container maxW={"xl"}>
       <VStack 
       wordSpacing={8}>
        <Heading as={'h1'}
         textAlign={'center'} 
        size={'2xl'}
        mb={8}
        >Create New Product</Heading>

        <Box w={'full'} bg={useColorModeValue("white", "gray.800") }
        p={6}
        rounded={'lg'}
        shadow={'md'}>
            <VStack wordSpacing={4}
            >
                <Input placeholder='Product Name' 
                name='name'
                value={newProduct.name}
                onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}/>

                <Input placeholder='Price' 
                name='price'
                type='number'
                value={newProduct.price}
                onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}/>

                <Input placeholder='Image URL' 
                name='image'
                value={newProduct.image}
                onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}/>
                
                <Button colorScheme='blue' onClick={handleAddProduct} w={'full'}>Add Product</Button>
            </VStack>
      </Box>

       </VStack>
    </Container>
  )
}

export default Create
