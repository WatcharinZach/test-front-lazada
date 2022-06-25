import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import styled from "styled-components";
import { sliderItem } from "../data";
import './slider.css'
import {IoIosArrowForward} from 'react-icons/io';

import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);



const Container = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
`;
const Left = styled.div`
  flex: 1;
  z-index: 2;
  text-align: start;
  box-sizing: border-box;
  background-color: white;
  border: 1px solid lightgrey;
`;
const Menu = styled.div`
  background-color:white;

`
// const Ul = styled.ul`
//   display: flex;
//   flex-direction: column;
//   list-style: none;
//   padding: 0px 2px;
//   cursor: pointer;
// `
// const Li =styled.li`
//   width: 180px;
//   text-align: start;
//   padding: 10px;
// `





const Right = styled.div`
  flex: 7;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "200px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${props=>props.slideIndex * -90}vw);
`;

const Slide = styled.div`
  width: 30vw;
  display: flex;
  align-items: center;
  background-color: ${props=>props.bg};
`;
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;
const Image = styled.img`
  padding: 80px 20px;
  height: 100px;
  width: 100px;
`;

const InfoContainer = styled.div`
  flex: 1;
`;
const Title = styled.h1`
  font-size: 50px;
`;
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

function Slider() {

    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) =>{

        if(direction ==="left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
        }else {
            setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0)
        }
    }
  return (
    <Container>
      <Left>
        <Menu>
          <ul>
            <li className="menu-1">
              Electronic Devices
              <i className="fa"><IoIosArrowForward/></i>
              <div className="sub-menu-1">
                <ul>
                  <li className="hover-me">Mobiles<i className="fa"><IoIosArrowForward/></i>
                    <div className="sub-menu-2">
                      <ul>
                        <li>Mobiles</li>
                      </ul>
                    </div>
                  </li>
                  <li className="hover-me">Tablets<i className="fa"><IoIosArrowForward/></i>
                    <div className="sub-menu-2">
                      <ul className="menu-2">
                        <li>Tablets</li>
                      </ul>
                    </div>
                  </li>
                  <li className="hover-me">Labtop<i className="fa"><IoIosArrowForward/></i>
                    <div className="sub-menu-2">
                      <ul>
                        <li>Traditional Laptops</li>
                        <li>Gameing</li>
                        <li>2-in-1s</li>
                      </ul>
                    </div>
                  </li>
                  <li className="hover-me">Desktops<i className="fa"><IoIosArrowForward/></i>
                    <div className="sub-menu-2">
                      <ul>
                        <li>Gaming</li>
                        <li>All-in-One</li>
                        <li>DIY</li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li className="menu-1">Electronic Accessories<i className="fa"><IoIosArrowForward/></i></li>
            <li className="menu-1">TV &amp; Home Appliances<i className="fa"><IoIosArrowForward/></i></li>
            <li className="menu-1">Health &amp; Beauty<i className="fa"><IoIosArrowForward/></i></li>
          </ul>
        </Menu>
      </Left>

      <Right>
        {/* <Arrow direction="left" onClick={()=>handleClick("left")}>
          <AiOutlineArrowLeft />
        </Arrow> */}
        <Wrapper slideIndex={slideIndex}>
          <AutoplaySlider
            play={true}
            cancelOnInteraction={false} // should stop playing on user interaction
            interval={6000}
          >
            {sliderItem.map(item=>(
              <div data-src={item.img} className="imgSlide"/>
            
                // <Slide bg={item.bg} key={item.id}>
                //     <ImgContainer>
                //     <Image src={item.img} />
                //     </ImgContainer>
                //     <InfoContainer>
                //     <Title>{item.title}</Title>
                //     <Desc>
                //         {item.desc}
                //     </Desc>
                //     <Button>SHOW NOW</Button>
                //     </InfoContainer>
                // </Slide>
            ))}
            </AutoplaySlider>
        </Wrapper>
        {/* <Arrow direction="right" onClick={()=>handleClick("right")}>
          <AiOutlineArrowRight />
        </Arrow> */}
      </Right>
    </Container>
  );
}

export default Slider;
