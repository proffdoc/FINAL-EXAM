import { Image } from '@chakra-ui/react';
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import "./index.scss"
const Home = () => {
  return (
    <div><div className="container">
      <div className="row ">
        <div className="col">
        <Image
  borderRadius='full'
  boxSize='150px'
  src='https://preview.colorlib.com/theme/wines/images/person_3.jpg.webp'
  alt='Dan Abramov'
/>          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sint accusamus iusto officia non iure ea corrupti impedit repellendus alias molestias beatae labore magnam quibusdam quas exercitationem, ipsa explicabo totam?</p>
          <p>-Harley perkins</p>
          </div>
          <div className="col">
        <Image
  borderRadius='full'
  boxSize='150px'
  src='https://preview.colorlib.com/theme/wines/images/person_3.jpg.webp'
  alt='Dan Abramov'
/>          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sint accusamus iusto officia non iure ea corrupti impedit repellendus alias molestias beatae labore magnam quibusdam quas exercitationem, ipsa explicabo totam?</p>
          <p>-Harley perkins</p>
          </div>  <div className="col">
        <Image
  borderRadius='full'
  boxSize='150px'
  src='https://preview.colorlib.com/theme/wines/images/person_3.jpg.webp'
  alt='Dan Abramov'
/>          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus sint accusamus iusto officia non iure ea corrupti impedit repellendus alias molestias beatae labore magnam quibusdam quas exercitationem, ipsa explicabo totam?</p>
          <p>-Harley perkins</p>
          </div>
          </div>
          </div></div>
          
  )
}

export default Home