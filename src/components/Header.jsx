import React from "react";
import styled from "styled-components";
import Logo from "../assets/img/Frame (1).png"

function Header() {
    return (
        <Wrapper>
            <Container>
                <Img src={Logo} />
                <Button>Подключиться сейчас</Button>
            </Container>
        </Wrapper>
    )
}

export default Header

const Wrapper = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #FFFFFF;
    box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.1);

    @media screen and (max-width: 425px){
        height: 60px;
    }

    @media screen and (max-width: 375px){
        height: 50px;
    }
`

const Container = styled.div`
    width: 97%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Img = styled.img`
    @media screen and (max-width: 2560px){
        width: 15%;
        height: 60%;
    }

    @media screen and (max-width: 1500px){
        width: 17%;
        height: 60%;
    }

    @media screen and (max-width: 1024px){
        width: 18%;
        height: 50%;
    }

    @media screen and (max-width: 768px){
        width: 20%;
        height: 50%;
    }

    @media screen and (max-width: 600px){
        width: 25%;
        height: 45%;
    }

    @media screen and (max-width: 425px){
        width: 30%;
        height: 38%;
    }
`

const Button = styled.button`
    background: #000000;
    border-radius: 30px;
    border: none;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    color: #FFFFFF;

    @media screen and (max-width: 2560px){
        width: 300px;
        height: 60px;
        font-size: 20px;
    }

    @media screen and (max-width: 1440px){
        width: 209px;
        height: 39px;
        font-size: 16px;
    }

    @media screen and (max-width: 768px){
        width: 150px;
        height: 30px;
        font-size: 12px;
    }

    @media screen and (max-width: 425px){
        width: 120px;
        height: 25px;
        font-size: 9px;
    }

    @media screen and (max-width: 425px){
        width: 100px;
        height: 20px;
        font-size: 8px;
    }
`