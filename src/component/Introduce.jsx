import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  margin-top: 10px;
  justify-content: space-around;
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  width: 200px;
  border-radius: 15px;
  box-shadow: 1px -1px 5px -3px rgba(0, 0, 0, 0.66);
  -webkit-box-shadow: 1px -1px 5px -3px rgba(0, 0, 0, 0.66);
  -moz-box-shadow: 1px -1px 5px -3px rgba(0, 0, 0, 0.66);

  &:hover {
    cursor: pointer;
    box-shadow: 1px 2px 11px -6px rgba(0, 0, 0, 0.66);
    -webkit-box-shadow: 1px 2px 11px -6px rgba(0, 0, 0, 0.66);
    -moz-box-shadow: 1px 2px 11px -6px rgba(0, 0, 0, 0.66);
  }
`;
const Icon = styled.img`
  width: 30px;
  padding: 0px 3px;
`;
const Title = styled.div``;

function Introduce() {
  return (
    <Container>
      <Item>
        <Icon src="https://icms-image.slatic.net/images/ims-web/9d78cd14-05ee-43ba-a360-61f895a70aef.png" />
        <Title>Lazmall</Title>
      </Item>
      <Item>
        <Icon src="https://laz-img-cdn.alicdn.com/images/ims-web/TB12wVshUT1gK0jSZFhXXaAtVXa.png" />
        <Title>Vouchers</Title>
      </Item>
      <Item>
        <Icon src="https://laz-img-cdn.alicdn.com/images/ims-web/TB11DFthO_1gK0jSZFqXXcpaXXa.png" />
        <Title>Top-Up,Bills&amp;Food</Title>
      </Item>
      <Item>
        <Icon src="https://icms-image.slatic.net/images/ims-web/a6a7c920-404d-47bc-b4a3-c79154048fea.png" />
        <Title>9Baht</Title>
      </Item>
      <Item>
        <Icon src="https://img.alicdn.com/imgextra/i1/O1CN01yvjCS71LsB10MJoJt_!!6000000001354-2-tps-150-150.png" />
        <Title>LazPick</Title>
      </Item>
    </Container>
  );
}

export default Introduce;
