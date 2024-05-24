import React from 'react'
import { addToWishlist } from '../WishlistCards'
import { Card, CardBody, Image, Text } from '@chakra-ui/react'

const Cards = () => {{image, title, _id,price, addToWishlist }
  return (
<Card>
  <CardBody>
    <Image src={product.image}/>
    <Text>{product.title}</Text>
    <Text>{product.price}</Text>
  </CardBody>
</Card> 
 )
}

export default Cards