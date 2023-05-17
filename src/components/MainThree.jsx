import React from "react";
import styled from "styled-components";
import Photo from "../assets/img/IMAGE (29).png"

function MainThree() {
    return (
        <Wrapper>
            <Text>
                <H1>Мы поможем настроить каналы продвижения вашего
                    веб-приложения, которые действительно работают!
                    Подключим PMS, подготовим приветственный e-mail и
                    печатные материалы, перенаправим гостей со
                    страницы подключения Wi-Fi.
                </H1>
            </Text>
            <Card>
                <Title>
                    <H2>Доступ ко всем<br />
                        заказам в ваших<br />
                        руках. Даже если<br />
                        вы не у ресепшн.</H2>
                    <P>Единая админка позволяет управлять<br />
                        заказами гостей с компьютера и со смартфона.<br />
                        Новые уведомления приходят в Telegram-бот. <br />
                        Вы не пропустите их, даже если на ресепшн<br />
                        никого нет.</P>
                </Title>
                <BoxImg>
                    <Img src={Photo} />
                </BoxImg>
            </Card>
        </Wrapper>
    )
}

export default MainThree

const Wrapper = styled.div`
    width: 95%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 2560px){
        height: 100vh;
    }

    @media screen and (max-width: 1800px){
        height: 130vh;
    }

    @media screen and (max-width: 1440px){
        height: 170vh;
    }

    @media screen and (max-width: 768px){
        height: 250vh;
    }

    @media screen and (max-width: 375px){
        height: 210vh;
    }
`

const Text = styled.div`
    width: 100%;
    height: 310px;
    background: #A9FF2C;
    border-radius: 20px;
    padding: 20px;

    @media screen and (max-width: 2560px){
        height: 310px;
    }

    @media screen and (max-width: 768px){
        height: 380px;
    }
`

const H1 = styled.h1`
    width: 100%;
    font-style: normal;
    font-weight: 400;
    color: #000000;

    @media screen and (max-width: 2560px){
        font-size: 46px;
        line-height: 51px;
    }

    @media screen and (max-width: 1245px){
        font-size: 40px;
        line-height: 45px;
    }

    @media screen and (max-width: 940px){
        font-size: 36px;
        line-height: 40px;
    }

    @media screen and (max-width: 570px){
        font-size: 29px;
        line-height: 32px;
    }

    @media screen and (max-width: 425px){
        font-size: 25px;
        line-height: 30px;
    }

    @media screen and (max-width: 350px){
        font-size: 23px;
        line-height: 30px;
    }
`

const Card = styled.div`
    width: 100%;
    height: 68%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #F1F1F1;
    border-radius: 20px;

    @media screen and (max-width: 768px){
        height: 70%;
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        justify-content: space-between;
    }

    @media screen and (max-width: 375px){
        height: 65%;
    }
`

const Title = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 60px;

    @media screen and (max-width: 768px){
        width: 100%;
        height: 50%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
`

const H2 = styled.h2`
    font-style: normal;
    font-weight: 400;
    text-align: center;
    color: #000000;
    padding: 10px;

    @media screen and (max-width: 980px){
        font-size: 40px;
        line-height: 45px;
    }

    @media screen and (max-width: 768px){
        text-align: start;
    }

    @media screen and (max-width: 375px){
        font-size: 30px;
        line-height: 35px;
    }
`

const P = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 30px;
    text-align: center;
    color: rgba(0, 0, 0, 0.5);
    padding: 10px;

    @media screen and (max-width: 980px){
        font-size: 15px;
        line-height: 20px;
    }

    @media screen and (max-width: 768px){
        text-align: start;
    }
`

const BoxImg = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    @media screen and (max-width: 2560px){
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    @media screen and (max-width: 768px){
        width: 100%;
        height: 50%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
`

const Img = styled.img`

    @media screen and (max-width: 2560px){
        width: 70%;
        height: 100%;
    }

    @media screen and (max-width: 1800px){
        width: 80%;
        height: 90%;
    }

    @media screen and (max-width: 1600px){
        width: 80%;
        height: 80%;
    }

    @media screen and (max-width: 1440px){
        width: 80%;
        height: 80%;
    }

    @media screen and (max-width: 980px){
        width: 100%;
        height: 70%;
    }

    @media screen and (max-width: 768px){
        width: 70%;
        height: 80%;
    }

    @media screen and (max-width: 500px){
        width: 90%;
        height: 90%;
    }

    @media screen and (max-width: 375px){
        width: 70%;
        height: 70%;
    }

`