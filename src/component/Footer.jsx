import React from "react";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import RoomIcon from "@mui/icons-material/Room";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

const Container = styled.div`
  
`;
const Wrapper = styled.div`
  display: flex;
`;
const TopFooter = styled.div`
  
`
const Itemtop = styled.div`
  display: flex;
  justify-content: space-between;
`
const ItemImage = styled.img`
  width: 33%;
`




const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
const Logo = styled.h1`
  font-size: 16px;
`;
const Desc = styled.p`
  margin: 20px 0px;
  font-size: 13px;
  width: 50%;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  
`;

const Title = styled.h3`
  
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  
`;
const ListItem = styled.li`
  font-size: 13px;
  width: 50%;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const ContactItem = styled.div`
  margin-bottom: 15px;
  display: flex;
  align-items: center;
`;
const Payment = styled.img`
  width: 60%;
`;

function Footer() {
  return (
    <Container>
      <TopFooter>
        <Itemtop>
          <ItemImage src="https://icms-image.slatic.net/images/ims-web/aab53410-56e1-4818-b52c-45ef447592c4.jpg"/>
          <ItemImage src="https://icms-image.slatic.net/images/ims-web/7dc7c8e2-aa43-4323-b58f-2ad06a280c28.jpg"/>
          <ItemImage src="https://icms-image.slatic.net/images/ims-web/1ca02857-9f40-4469-857a-c8dd3ec0059d.jpg"/>
        </Itemtop>
      </TopFooter>
      <Wrapper>
        <Left>
          <Logo>Customer Care</Logo>
          <Desc>
            With LazMall, you won't run out of options as we collaborated with
            hundreds of top brands worldwide. There are more and more renowned
            sellers joining our community to serve you too. RedMart also offers
            a vast selection of grocery items at the lowest prices.
          </Desc>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <FacebookIcon />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <InstagramIcon />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <TwitterIcon />
            </SocialIcon>
            <SocialIcon color="E60023">
              <PinterestIcon />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Lazada</Title>
          <List>
            <ListItem>About Lazada</ListItem>
            <ListItem>Affilliate Program</ListItem>
            <ListItem>Careers</ListItem>
            <ListItem>Terms &amp; Conditions </ListItem>
            <ListItem>Privacy &amp; Policy</ListItem>
            <ListItem>Press &amp; Media</ListItem>
            <ListItem>Security</ListItem>
            <ListItem>Popular Products</ListItem>
            <ListItem>Intellectual Property Protection</ListItem>
            <ListItem>Terms</ListItem>
          </List>
        </Center>
        <Right>
          <Title>Contact</Title>
          <ContactItem>
            <RoomIcon />
            139/45 Moo1 , Nonthaburi 11130
          </ContactItem>
          <ContactItem>
            <LocalPhoneIcon />
            084 080 4081
          </ContactItem>
          <ContactItem>
            <EmailIcon />
            contact@zach.dev
          </ContactItem>
          <Payment src="https://a1devices.com/wp-content/uploads/2020/07/paypal-acceptance-mark-major-credit-card-logos.jpg" />
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Footer;
