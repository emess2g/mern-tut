import {
  Box,
  Heading,
  HStack,
  IconButton,
  Image,
  Input,
  Button,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverRoot,
  PopoverTitle,
  PopoverFooter,
  PopoverTrigger,
  PopoverCloseTrigger
} from "@/components/ui/popover";
import { Toaster, toaster } from "@/components/ui/toaster";
import React, { useState } from "react";
import { LuDelete } from "react-icons/lu";
import { useColorModeValue } from "./ui/color-mode";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useProductStore } from "@/store/product";

const ProductCard = ({ product }) => {
  const [open, setOpen] = useState(false);
  const [updatedProduct, setUpdatedProduct] = useState(product);
  const textColor = useColorModeValue("gray.600", "gray.500");
  const bg = useColorModeValue("white", "gray.800");
  const { deleteProduct, updateProduct } = useProductStore();

  const handleDelete = async (pid) => {
    const { success, message } = await deleteProduct(pid);
    if (!success) {
      toaster.create({
        title: "Error",
        description: message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toaster.create({
        title: "Success",
        description: message,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleUpdateProduct = async (pid, updatedProduct ) => {
    const {success, message} = await updateProduct(pid, updatedProduct);
    setOpen(!open);
    if (!success) {
        toaster.create({
          title: "Error",
          description: message,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      } else {
        toaster.create({
          title: "Success",
          description: "Product updated successfully",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }
  }
  return (
    <Box
      shadow={"lg"}
      rounded={"lg"}
      overflow={"hidden"}
      transition={"all 0.3s"}
      _hover={{ transform: "translateY(-5px)", shadow: "lg" }}
      bg={bg}
    >
      <Image src={product.image} h={48} w={"full"} objectFit={"cover"}></Image>

      <Box p={4}>
        <Heading as={"h3"} size={"md"} mb={"2"}>
          {product.name}
        </Heading>

        <Text fontWeight="bold" fontSize={"xl"} color={textColor} mb={4}>
          ${product.price}
        </Text>

        <HStack m={2}>
          <IconButton colorScheme={"blue"}>
            <PopoverRoot open={open} onOpenChange={(e) => setOpen(e.open)}>
              <PopoverTrigger asChild>
                <FaRegEdit />
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverBody>
                  <PopoverTitle fontWeight="medium">
                    Update Product
                  </PopoverTitle>
                  <VStack m={4}>
                    <Input
                      placeholder="Product name"
                      name="name"
                      value={updatedProduct.name}
                      onChange={(e) =>
                        setUpdatedProduct({
                          ...updatedProduct,
                          name: e.target.value,
                        })
                      }
                    />
                    <Input
                      placeholder="Product price"
                      name="price"
                      type="number"
                      value={updatedProduct.price}
                      onChange={(e) =>
                        setUpdatedProduct({
                          ...updatedProduct,
                          price: e.target.value,
                        })
                      }
                    />
                    <Input
                      placeholder="Image URL"
                      name="image"
                      value={updatedProduct.image}
                      onChange={(e) =>
                        setUpdatedProduct({
                          ...updatedProduct,
                          image: e.target.value,
                        })
                      }
                    />
                  </VStack>
                </PopoverBody>
                <PopoverFooter>
                    <Button colorScheme={'blue'} mr={3} onClick={() => handleUpdateProduct(product._id, updatedProduct)}>Update</Button>
                    <Button variant={'ghost'} open={open} onClick={() => setOpen(!open)}>Cancel</Button>
                    <PopoverCloseTrigger>                     
                    </PopoverCloseTrigger>
                </PopoverFooter>
              </PopoverContent>
            </PopoverRoot>
          </IconButton>
          <IconButton colorScheme={"red"}>
            <MdDelete onClick={() => handleDelete(product._id)} />
          </IconButton>
        </HStack>
      </Box>

      <Toaster />
    </Box>
  );
};

export default ProductCard;
