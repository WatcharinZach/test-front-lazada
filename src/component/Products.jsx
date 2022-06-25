import React from 'react'
import styled from 'styled-components'
import {popularProducts} from '../data'
import Product from './Product'

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
const Btn = styled.div`
  width: 100%;
  text-align: center;
`
const Button = styled.button`
  margin: 10px 0px;
  background: none;
  border: 2px solid #3db8e0;
  color: #3db8e0;
  padding: 15px 150px;
  font-weight: 700;
  cursor: pointer;
`

function Products() {
  return (
    <div className="product">
        <Container>
            {popularProducts.map(item =>(
                <Product item={item} key={item.id}/>
                ))}
          <Btn>
            <Button>LOAD MORE</Button>
            <hr/>
          </Btn>
        </Container>
    </div>
  )
}

export default Products