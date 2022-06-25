import React from 'react'
import styled from 'styled-components'
import Announcement from '../component/Announcement'
import Categories from '../component/Categories'
import Footer from '../component/Footer'
import Introduce from '../component/Introduce'
import Navbar from '../component/Navbar'
import Newsletter from '../component/Newsletter'
import Products from '../component/Products'
import Slider from '../component/Slider'

const Container = styled.div`
  width: 1200px;
  margin: auto;
`

function Home() {
  return (
    <Container>
      <Announcement/>
      <Navbar/>
      <Slider/>
      <Introduce/>
      <Categories/>
      <Products/>
      <Footer/>
    </Container>
  )
}

export default Home