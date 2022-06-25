import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    flex: 1;
    margin: 1px;
    min-width: 140px;
    height: 150px;
    align-items: center;
    justify-content: center;

    box-shadow: inset;
    text-align: center;
    box-shadow: -3px 0px 106px -30px rgba(0,0,0,0.58);
    -webkit-box-shadow: -3px 0px 106px -30px rgba(0,0,0,0.58);
    -moz-box-shadow: -3px 0px 106px -30px rgba(0,0,0,0.58);
    cursor: pointer;
    transition: 0.5s ease;

    &:hover{
        box-shadow: 3px 1px 56px -7px rgba(0,0,0,0.77);
-webkit-box-shadow: 3px 1px 56px -7px rgba(0,0,0,0.77);
-moz-box-shadow: 3px 1px 56px -7px rgba(0,0,0,0.77);
    }
`
const Image = styled.img`
    width: 60px;
    height: 60px;
    object-fit: cover;
    margin-top: 10px;
`
const Info = styled.div`
   width: 100%;
`
const Title = styled.h4`
    font-size: 14px;
    font-weight: 480;
`

function CategoryItem({item}) {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
        </Info>
    </Container>
  )
}

export default CategoryItem