import React from "react";
import styled from "styled-components";
import Announcement from "../component/Announcement";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import Products from "../component/Products";

const Container = styled.div`
  background-color: #d3d3d33b;
`;
const Wrapper = styled.div`
  margin: 20px 0px;
  display: flex;
`;
const CartDetail = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
`;
const Selectall = styled.div`
  padding: 10px 0px;
  padding-left: 20px;
  background: white;
`;
const ItemCart = styled.div`
  margin-top: 10px;
  background: white;
  padding: 10px 20px;
`;
const TopItem = styled.div`
  position: sticky;
  top: 0;
`;
const ToptoTop = styled.div`
  display: flex;
  justify-content: space-between;
`;
const NameShopItem = styled.div``;
const Voucher = styled.div``;
const DetailsVoucher = styled.div``;

const DetailItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
`;
const Left = styled.div`
  width: 500px;
  display: flex;
`;
const NameDetailItem = styled.div``;
const NameDetailItemTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0px 10px;
`;
const SubDetailItem = styled.div`
  font-size: 13px;
  margin-bottom: 10px;
  opacity: 70%;
`;
const Center = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;
const Price = styled.div`
    font-weight: 500;
    color: #ff9100;
    font-size: 20px;
`;
const ButtonFD = styled.div`
    display: flex;
    justify-content: space-around;
    cursor: pointer;
`;
const BtnFD = styled.button``;

const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Delivery = styled.div`
  flex: 1;
  margin-left: 10px;
  background-color: white;
`;

const ImageDetails = styled.img`
  width: 15%;
`;

function Cart() {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <CartDetail>
          <Selectall>SELECT ALL(2ITEM(S))</Selectall>
          <ItemCart>
            <TopItem>
              <ToptoTop>
                <NameShopItem>WANDEE</NameShopItem>
                <Voucher>Get Voucher</Voucher>
              </ToptoTop>
              <DetailsVoucher>
                Spend ฿1,688.00 enjoy shipping fee ฿28.00 off for Standard
                delivery option
              </DetailsVoucher>
            </TopItem>
            <hr/>
            <DetailItem>
              <Left>
                <ImageDetails src="https://lzd-img-global.slatic.net/g/p/9827bcc173c8c214e1bd66fe3e477d9b.jpg_2200x2200q80.jpg_.webp" />
                <NameDetailItemTop>
                  <NameDetailItem>
                    สายชาร์จ Samsung Note10 หัวชาร์จ+สาย{" "}
                  </NameDetailItem>
                  <SubDetailItem>
                    Samsung,Connection: Type C, Color Family: สีดำ, Cable Length{" "}
                    <br /> (M):1
                  </SubDetailItem>
                </NameDetailItemTop>
              </Left>
              <Center>
                <Price>฿208.00</Price>
                <ButtonFD>
                  <BtnFD>F</BtnFD>
                  <BtnFD>D</BtnFD>
                </ButtonFD>
              </Center>
              <Right>
                <BtnFD>-</BtnFD>1<BtnFD>+</BtnFD>
              </Right>
            </DetailItem>
          </ItemCart>
        </CartDetail>

        <Delivery>Location</Delivery>
      </Wrapper>
      Just For Your
      <Products />
      <Footer />
    </Container>
  );
}

export default Cart;
