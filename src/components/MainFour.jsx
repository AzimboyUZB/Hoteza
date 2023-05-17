import React from "react";
import styled from "styled-components";
import Phone1 from "../assets/img/IMAGE (30).png"
import Phone2 from "../assets/img/IMAGE (31).png"
import Phone3 from "../assets/img/IMAGE (32).png"
import Brand1 from "../assets/img/Frame (5).png"
import Brand2 from "../assets/img/Frame (6).png"
import Brand3 from "../assets/img/Frame (7).png"
import Brand4 from "../assets/img/Frame (8).png"
import Brand5 from "../assets/img/Frame (9).png"
import Brand6 from "../assets/img/Frame (10).png"
import Brand7 from "../assets/img/Frame (11).png"
import Brand8 from "../assets/img/Frame (12).png"
import Brand9 from "../assets/img/Frame (13).png"
import Brand10 from "../assets/img/Frame (14).png"

function Main4() {
    return (
        <Wrapper>
            <Text>
                <H1>Адаптируется под фирменный стиль отеля</H1>
                <P>Неограниченные возможности кастомизации и полное соответствие фирменному стилю бренда отеля</P>
            </Text>
            <BoxImg>
                <BottomImg>
                    <Img src={Phone1} />
                </BottomImg>
                <TopImg>
                    <Img src={Phone2} />
                </TopImg>
                <BottomImg>
                    <Img src={Phone3} />
                </BottomImg>
            </BoxImg>



            <Text>
                <H1>Вы в компании<br /> лучших</H1>
                <P>Более 500 отелей по всему миру<br /> используют Hoteza</P>
            </Text>
            <BoxBrands>
                <Box>
                    <BrandImg src={Brand1}/>
                    <BrandImg src={Brand2}/>
                    <BrandImg src={Brand3}/>
                    <BrandImg src={Brand4}/>
                    <BrandImg src={Brand5}/>
                </Box>
                <Box>
                    <BrandImg src={Brand6}/>
                    <BrandImg src={Brand7}/>
                    <BrandImg src={Brand8}/>
                    <BrandImg src={Brand9}/>
                    <BrandImg src={Brand10}/>
                </Box>
            </BoxBrands>
        </Wrapper>
    )
}

export default Main4

const Wrapper = styled.div`
    width: 95%;
    height: 200vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 1750px){
        height: 170vh;
    }

    @media screen and (max-width: 1440px){
        height: 200vh;
    }

    @media screen and (max-width: 1270px){
        height: 170vh;
    }

    @media screen and (max-width: 950px){
        height: 150vh;
    }

    @media screen and (max-width: 768px){
        height: 300vh;
    }

    @media screen and (max-width: 520px){
        height: 260vh;
    }

    @media screen and (max-width: 520px){
        height: 260vh;
    }

    @media screen and (max-width: 425px){
        height: 300vh;
    }
`

const Text = styled.div`
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: space-between;
`

const H1 = styled.h1`
    width: 50%;
    height: 100%;
    font-style: normal;
    font-weight: 400;
    font-size: 52px;
    line-height: 58px;
    color: #000000;

    @media screen and (max-width: 1300px){
        font-size: 42px;
        line-height: 50px;
    }

    @media screen and (max-width: 1024px){
        font-size: 35px;
        line-height: 40px;
    }

    @media screen and (max-width: 600px){
        font-size: 27px;
        line-height: 30px;
    }
`

const P = styled.p`
    width: 40%;
    height: 100%;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 30px;
    color: rgba(0, 0, 0, 0.5);

    @media screen and (max-width: 1300px){
        font-size: 20px;
        line-height: 25px;
    }

    @media screen and (max-width: 1024px){
        font-size: 18px;
        line-height: 22px;
    }

    @media screen and (max-width: 600px){
        font-size: 14px;
        line-height: 17px;
    }
`

const BoxImg = styled.div`
    width: 100%;
    height: 55%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    @media screen and (max-width: 950px){
        height: 50%;
    }

    @media screen and (max-width: 768px){
        height: 60%;
        display: flex;
        justify-content: space-around;
    }

    @media screen and (max-width: 425px){
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
`

const BottomImg = styled.div`
    width: 350px;
    height: 100%;
    display: flex;
    align-items: flex-end;

    @media screen and (max-width: 2560px){
        width: 550px;
    }

    @media screen and (max-width: 1750px){
        width: 450px;
    }

    @media screen and (max-width: 1440px){
        width: 400px;
    }

    @media screen and (max-width: 1270px){
        width: 350px;
    }

    @media screen and (max-width: 1110px){
        width: 300px;
    }

    @media screen and (max-width: 950px){
        width: 242.5px;
    }

    @media screen and (max-width: 768px){
        height: 50%;
        display: flex;
        align-items: flex-start;
    }

    @media screen and (max-width: 520px){
        width: 200px;
    }

    @media screen and (max-width: 768px){
        height: 33%;
    }
`

const TopImg = styled.div`
    width: 350px;
    height: 100%;
    display: flex;
    align-items: flex-start;

    @media screen and (max-width: 2560px){
        width: 550px;
    }

    @media screen and (max-width: 1750px){
        width: 450px;
    }

    @media screen and (max-width: 1440px){
        width: 400px;
    }

    @media screen and (max-width: 1270px){
        width: 350px;
    }

    @media screen and (max-width: 1110px){
        width: 300px;
    }

    @media screen and (max-width: 950px){
        width: 245px;
    }

    @media screen and (max-width: 768px){
        height: 50%;
    }

    @media screen and (max-width: 520px){
        width: 202px;
    }

    @media screen and (max-width: 768px){
        height: 33%;
    }
`

const Img = styled.img`
    width: 100%;
    height: 85%;

    @media screen and (max-width: 768px){
        height: 100%;
    }
`

const BoxBrands = styled.div`
    width: 100%;
    height: 11%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 2560px){
        height: 15%;
    }

    @media screen and (max-width: 768px){
        height: 10%;
    }

    @media screen and (max-width: 425px){
        height: 7%;
    }
`

const Box = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const BrandImg = styled.img`
    width: 20%;
    height: 100%;
`
