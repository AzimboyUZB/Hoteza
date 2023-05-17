import React from "react";
import styled from "styled-components";

function HeaderMain() {
    return (
        <Wrapper className="headerMain">
            <Container>
                <H1>Все услуги вашег<br />
                    отеля сразу в <br />
                    телефоне гостя.<br />
                    Без установок.</H1>
                <H5>
                    Попробуйте демо<br />
                    <P>Наведите камеру <br />
                        смартфона на QR-код</P>
                </H5>
            </Container>
        </Wrapper>
    )
}

export default HeaderMain

const Wrapper = styled.div`
    @media screen and (max-width: 2560px){
        width: 95%;
        height: 1000px;
        margin-top: -40px;
        padding: 0 40px;
    }

    @media screen and (max-width: 1440px){
        height: 720px;
    }

    @media screen and (max-width: 768px){
        width: 100%;
        height: 580px;
    }

    @media screen and (max-width: 550px){
        width: 100%;
        height: 500px;
    }

    @media screen and (max-width: 425px){
        width: 100%;
        height: 400px;
        padding: 10px;
        margin-top: -60px;
    }

    @media screen and (max-width: 320px){
        width: 100%;
        height: 300px;
    }
`

const Container = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const H1 = styled.h1`
    width: 100%;
    height: 60%;
    font-style: normal;
    font-weight: 100;
    line-height: 74px;
    color: #FFFFFF;

    @media screen and (max-width: 2560px){
        font-size: 90px;
    }

    @media screen and (max-width: 1440px){
        font-size: 72px;
    }

    @media screen and (max-width: 1024px){
        font-size: 50px;
        line-height: 55px;
    }

    @media screen and (max-width: 768px){
        font-size: 38px;
        line-height: 40px;
    }

    @media screen and (max-width: 425px){
        font-size: 38px;
        line-height: 35px;
    }

    @media screen and (max-width: 375px){
        font-size: 28px;
        line-height: 28px;
    }
`

const H5 = styled.h5`
    width: 265px;
    height: 60px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0.5px;
    color: #FFFFFF;

    @media screen and (max-width: 2560px){
        font-size: 26px;
        line-height: 34px;
    }

    @media screen and (max-width: 768px){
        font-size: 20px;
        line-height: 34px;
    }

    @media screen and (max-width: 425px){
        font-size: 17px;
        line-height: 25px;
    }
`

const P = styled.p`
    font-style: normal;
    font-weight: 100;
    font-size: 21px;
    line-height: 30px;
    letter-spacing: 0.5px;
    color: rgba(255, 255, 255, 0.8);

    @media screen and (max-width: 2560px){
        font-size: 21px;
        line-height: 30px;
    }

    @media screen and (max-width: 768px){
        font-size: 11px;
        line-height: 15px;
    }

    @media screen and (max-width: 425px){
        font-size: 10px;
        line-height: 13px;
    }
`