import styled from "styled-components"

const Container = styled.div`
    height: 60px;
    background-color: #42c99c;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;

`

function Announcement() {
  return (
    <Container>
        Free Car Go to Home to you Jub Jub
    </Container>
  )
}

export default Announcement