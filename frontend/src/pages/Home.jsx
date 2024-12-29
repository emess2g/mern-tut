import { useProductStore } from '@/store/product'
import { Container, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Link} from 'react-router-dom'
import ProductCard from '@/components/ProductCard'

const Home = () => {
  const { fetchProducts, products} = useProductStore();

  useEffect(() =>{
    fetchProducts()
  },[fetchProducts])
  console.log(products, "products");
  
  return (
    <Container maxW={''} py={12}>
      <VStack m={8}>

      <Text
        fontSize={{base:'22px', sm:'28px'}}
        fontWeight={"bold"}
        textTransform={"uppercase"}
        textAlign={"center"}
        bgGradient="to-r" 
        gradientFrom="cyan.400"
         gradientTo="blue.500"
        bgClip={"text"}>
         Current Product      
        </Text>

        <SimpleGrid columns={{base:'1', md:'2', lg:'4'}} gap={10} m={10} w={'full'}>
          {products.map((product) => ( <ProductCard key={product._id} product={product}/>))}
        </SimpleGrid>
          
        {products.length === 0 && (
            <Text fontSize={'xl'} textAlign={'center'} fontWeight={'bold'} color={'gray.500'}>
            No Product Found {" "}
            <Link to={'/create'}>
            <Text as={'span'} color={'blue.500'} _hover={{ textDecoration:'underline'}} >
               Create a product
            </Text>
            </Link>
         </Text>
        )}
      </VStack>
    </Container>
  )
}

export default Home
