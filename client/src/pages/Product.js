import React from 'react';
import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  Image,
  useToast,
} from '@chakra-ui/react';
import img from '../assets/default-product.png';
import { MdAddShoppingCart } from 'react-icons/all';
import { useParams } from 'react-router-dom';
import { useProduct } from '../stores/ProductStore';
import { useUser } from '../stores/UserStore';
import { useCart } from '../stores/CartStore';
import { addCartItem } from '../http/cartAPI';
import { useBrand } from '../stores/BrandStore';

const Product = () => {
  const [product] = useProduct();
  const [user, setUser] = useUser();
  const [brand, setBrand] = useBrand();
  const [cart, setCart] = useCart();
  const { id } = useParams();
  const toast = useToast();
  const findCurrentProduct = () => {
    return product.filter((product) => {
      return product.id.toString() === id.toString();
    });
  };
  const showToast = () => {
    let currentProduct;
    product.map((product) => {
      if (product.id.toString() === id.toString()) {
        return (currentProduct = product.name);
      }
    });
    toast({
      title: 'Product added.',
      description: `${currentProduct} added to your cart.`,
      status: 'success',
      duration: 9000,
      isClosable: true,
    });
  };
  return (
    <Container maxW="container.xl" p="40px">
      <Box d="flex" justifyContent="space-evenly">
        <Image src={img} />
        <Box>
          <Heading fontSize="4em" wordBreak="break">
            {findCurrentProduct()[0].name}
          </Heading>
          <Box fontSize="2em">
            {brand.map((item) => {
              if (
                item.id.toString() ===
                findCurrentProduct()[0].brandId.toString()
              ) {
                return <Box key={item.id}>{item.name}</Box>;
              }
            })}
          </Box>
          <Box fontSize="3em">{findCurrentProduct()[0].price} $</Box>
          <Divider mt="50px" />
          <Box mt="50px" fontSize="2em">
            {findCurrentProduct()[0].properties.map((property) => {
              return (
                <Box key={property.id}>
                  {property.name}: {property.value}
                </Box>
              );
            })}
          </Box>
          {user ? (
            <Button
              leftIcon={<MdAddShoppingCart />}
              bg="#805AD5"
              color="white"
              variant="solid"
              w="150px"
              mt="30px"
              onClick={() => {
                addCartItem(id).then((data) => setCart(data));
                showToast();
              }}
            >
              Add to cart
            </Button>
          ) : (
            ''
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default Product;
