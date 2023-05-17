import React from "react";
import styled from "styled-components";
import IconRigth from "../assets/icon/IconRight"
import IconLeft from "../assets/icon/IconLeft"
import Photo from "../assets/img/IMAGE (33).png"

function MainSix() {
    return (
        <Wrapper>
            <Header>
                <H1>Что говорят отели</H1>
                <Icons>
                    <IconRigth />
                    <IconLeft />
                </Icons>
            </Header>
            <Menu>
                <BoxImg>
                    <Img src={Photo} />
                </BoxImg>
                <Title>
                    <H2>Мы очень рады внедрению Hoteza.
                        Это решение даёт нам множество
                        возможностей радовать наших 
                        гостей и дарить им незабываемые 
                        впечатления. Система проста в
                        использовании, легко обновляется
                        и существенно сокращает
                        трудозатраты на
                        администрирование.
                    </H2>
                    <Text>
                        <H5>Caroline Rowe</H5>
                        <P>Директор по маркетингу и коммуникациям, Media One Hotel Dubai</P>
                    </Text>
                </Title>
            </Menu>
        </Wrapper>
    )
}

export default MainSix

const Wrapper = styled.div`
    width: 95%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 40px;

    @media screen and (max-width: 2560px){
        height: 75vh;
    }

    @media screen and (max-width: 1710px){
        height: 100vh;
    }

    @media screen and (max-width: 1440px){
        height: 120vh;
    }

    @media screen and (max-width: 768px){
        height: 100vh;
    }
`

const Header = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const H1 = styled.h1`
    font-style: normal;
    font-weight: 400;
    font-size: 52px;
    line-height: 58px;
    color: #000000;

    @media screen and (max-width: 768px){
        font-size: 35px;
        line-height: 50px;
    }

    @media screen and (max-width: 550px){
        font-size: 25px;
        line-height: 25px;
    }
`

const Icons = styled.div`
    width: 200px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 768px){
        width: 150px;
    }

    @media screen and (max-width: 550px){
        width: 100px;
    }
`

const Menu = styled.div`
    width: 100%;
    height: 95%;
    display: flex;
    justify-content: space-between;
    gap: 20px;

    @media screen and (max-width: 425px){
        display: flex;
        flex-direction: column;
    }
`

const BoxImg = styled.div`
    width: 45%;
    height: 70%;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 2560px){
        width: 30%;
    }

    @media screen and (max-width: 1024px){
        width: 40%;
    }

    @media screen and (max-width: 768px){
        width: 40%;
        height: 60%;
    }

    @media screen and (max-width: 425px){
        width: 100%;
        height: 50%;
    }
`

const Img = styled.img`
    width: 100%;
    height: 100%;

    @media screen and (max-width: 425px){
        width: 50%;
        height: 100%;
    }
`

const Title = styled.div`
    width: 55%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (max-width: 425px){
        width: 100%;
        height: 50%;
    }
`

const H2 = styled.h2`
    font-style: normal;
    font-weight: 400;
    font-size: 46px;
    line-height: 51px;
    color: #000000;

    @media screen and (max-width: 1024px){
        font-size: 34px;
        line-height: 40px;
    }

    @media screen and (max-width: 768px){
        font-size: 25px;
        line-height: 30px;
    }

    @media screen and (max-width: 550px){
        font-size: 20px;
        line-height: 25px;
    }

    @media screen and (max-width: 425px){
        font-size: 16px;
        line-height: 20px;
    }
`

const Text = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: column;
`

const H5 = styled.h5`
    font-style: normal;
    font-weight: 400;
    font-size: 23px;
    line-height: 30px;
    color: #000000;

    @media screen and (max-width: 550px){
        font-size: 20px;
        line-height: 30px;
    }
`

const P = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 20px;    
    line-height: 30px;
    color: #707378;

    @media screen and (max-width: 550px){
        font-size: 16px;
        line-height: 25px;
    }
`