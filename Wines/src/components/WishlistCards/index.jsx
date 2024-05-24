import { Flex } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../api/constant'


export const addToWishlist = () => {
    const [data,setData]=useState([])

    const wishlistItems= JSON.parse(localStorage.getItem("cards")?? [])
    if(!wishlistItems.find((item)=>item._id===id)){
        const products= data.find((item)=>item._id===id)
        localStorage.setItem("cards", JSON.stringify([...wishlistItems,products]))
    }

    useEffect(()=>{
        axios.get(`${BASE_URL}api/products`)
        .then(console.log(response))
        setData(response.data.data)
        .catch((err)=>console.log(err))
    },[])
  return (
    <Flex></Flex>
  )
}

