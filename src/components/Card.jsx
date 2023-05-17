import React from "react";
import styled from "styled-components";
import Icon1 from "../assets/icon/Icon1"
import Icon2 from "../assets/icon/Icon2"

function Card() {
    return (
        <Wrapper>
            <Box>
                <Icon>
                    <Icon1/>
                </Icon>
                <Title>
                    <H1>Действенная мера <br />против COVID-19</H1>
                    <P>Hoteza Web делает пребывание в отеле безопаснее, <br />минимизируя встречи персонала и гостей лицом к<br /> лицу. Все вопросы теперь можно решить <br />в браузере смартфона.</P>
                </Title>
            </Box>

            <Box>
                <Icon>
                    <Icon2/>
                </Icon>
                <Title>
                    <H1>Интеграция <br /> с PMS, POS,<br /> SOS, GRMS</H1>
                    <P>Синхронизация с профилем гостя в PMS,<br /> персональные ссылки и постинг на счёт гостя, лёгкая<br /> интеграция с существующими процессами<br /> исполнения заказов, управление номером и другое.</P>
                </Title>
            </Box>
        </Wrapper>
    )
}

export default Card

const Wrapper = styled.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 2560px){
        height: 700px;
    }

    @media screen and (max-width: 1440px){
        height: 560px;
    }

    @media screen and (max-width: 1024px){
        height: 500px;
    }

    @media screen and (max-width: 768px){
        height: 800px;
        flex-direction: column;
    }
    @media screen and (max-width: 768px){
        height: 700px;
        flex-direction: column;
    }
`

const Box = styled.div`
    width: 48%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #E2E3E6;
    border-radius: 20px;

    @media screen and (max-width: 768px){
        width: 60%;
        height: 48%;
    }

    @media screen and (max-width: 425px){
        width: 95%;
        height: 48%;
    }
`

const Icon = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Title = styled.div`
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 80px;

    @media screen and (max-width: 2560px){
        gap: 80px;
    }

    @media screen and (max-width: 1440px){
        gap: 40px;
    }

    @media screen and (max-width: 768px){
        gap: 30px;
    }
`

const H1 = styled.h1`
    width: 100%;
    font-style: normal;
    font-weight: 400;
    text-align: center;
    color: #000000;


    @media screen and (max-width: 2560px){
        font-size: 65px;
        line-height: 70px;
    }

    @media screen and (max-width: 1440px){
        font-size: 52px;
        line-height: 58px;
    }

    @media screen and (max-width: 1024px){
        font-size: 42px;
        line-height: 50px;
    }

    @media screen and (max-width: 880px){
        font-size: 40px;
        line-height: 45px;
    }

    @media screen and (max-width: 768px){
        font-size: 35px;
        line-height: 40px;
    }

    @media screen and (max-width: 540px){
        font-size: 27px;
        font-weight: 300;
        line-height: 35px;
    }
`

const P = styled.p`
    height: 55%;
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 30px;
    text-align: center;
    color: rgba(0, 0, 0, 0.5);

    @media screen and (max-width: 2560px){
        font-size: 28px;
        line-height: 40px;
    }

    @media screen and (max-width: 1570px){
        font-size: 24px;
        line-height: 35px;
    }

    @media screen and (max-width: 1440px){
        font-size: 20px;
        line-height: 30px;
    }

    @media screen and (max-width: 1024px){
        font-size: 16px;
        line-height: 25px;
    }

    @media screen and (max-width: 768px){
        font-size: 14px;
        line-height: 20px;
    }

    @media screen and (max-width: 540px){
        font-size: 14px;
        line-height: 20px;
    }

    @media screen and (max-width: 490px){
        font-size: 11px;
        line-height: 15px;
    }

`