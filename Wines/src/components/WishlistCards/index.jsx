import { Flex } from '@chakra-ui/react'
import React, { useState } from 'react'

const WishlistCards = () => {
    const [data,setData]=useState([])

    const wishlistItems= JSON.parse(localStorage.getItem("cards",))
  return (
    <Flex></Flex>
  )
}

export default WishlistCards