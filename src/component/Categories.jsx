import React from 'react'
import styled from 'styled-components'
import { categories } from '../data'
import CategoryItem from './CategoryItem'

const Container = styled.div`
    display: flex;
    /* padding: 20px; */
    flex-wrap: wrap;
`
const Category = styled.div`
  
`
const Title = styled.h3`
  font-size: 20px;
  font-weight: 400;
`

function Categories() {
  return (
    <Category>
        <Title>Catagories</Title>
        <Container>
            {categories.map(item =>(
              <CategoryItem item={item} key={item.id}/>
              ))}
        </Container>
    </Category>
  )
}

export default Categories