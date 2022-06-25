import styled from 'styled-components'
import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import { FiShoppingCart} from 'react-icons/fi';
import Badge from '@mui/material/Badge';
import LogoLazada from '../img/lazadaLogo.png'

const Container = styled.div`
    width: 100%;
    height: 60px;
    position: sticky;
    top: 0;
    z-index: 999;
    background-color: white;
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display:flex;
    align-items: center;
    justify-content: space-between;
    
`
const Left = styled.div`
    flex: 1;
    display:flex;
    align-items:center;
`

const Center = styled.div`
    flex: 5;
    width: 100%;
    `
const SearchContainer = styled.div`

    border: none;
    display: flex;
    align-items: center;
    margin-left: 35px;  
`

const Input = styled.input`
    border: none;
    width: 100%;
    padding: 13px;
    background-color: #d3d3d360;
`
const Logo = styled.img`
    width: 100px;
    cursor: pointer;
`
const IconSearch = styled.div`
    padding: 5px 10px;
    background-color: #ff7b00;
    color: white;
    cursor: pointer;
    font-size: 23px;
`

const Right = styled.div`
    flex:2;
    display: flex;
    align-items: flex-end;
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 40px;
`
const MenuItemImage = styled.img`
    width: 60%;
    margin-left: 40px;
`
const IconCart = styled.i`
    font-size: 25px;
    color: #052692;
`

function Navbar() {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Logo src={LogoLazada}/>
            </Left>
            <Center>
                <SearchContainer>
                    <Input placeholder="Search in Lazada"/>
                    <IconSearch><AiOutlineSearch/></IconSearch>
                </SearchContainer>
            </Center>
            <Right>
                <MenuItem>
                <Badge badgeContent={0} color="primary">
                    <IconCart><FiShoppingCart/></IconCart>
                </Badge>
                </MenuItem>
                <MenuItemImage src='https://laz-img-cdn.alicdn.com/images/ims-web/TB18s7ESBr0gK0jSZFnXXbRRXXa.jpg'/>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar