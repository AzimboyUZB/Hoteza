import React from "react";
import styled from "styled-components";
import Img1 from "../assets/img/IMAGE (25).png"
import Img2 from "../assets/img/IMAGE (26).png"
import Img3 from "../assets/img/IMAGE (27).png"
import Img4 from "../assets/img/IMAGE (28).png"

function MainTwo() {

    const routers1 = [
        {
            id: 1,
            img: Img1,
            name: "Печатные материалы",
            title: "QR-коды можно разместить на печатных и электронных носителях в любом месте отеля. Например, на стойке регистрации, в лифте, в номерах или на пластиковых ключах."
        },
        {
            id: 2,
            img: Img3,
            name: "ТВ в номере",
            title: "Персональный QR-код появится на экране телевизора. На него нужно просто навести камеру телефона и гостю не придётся вводить номер комнаты и фамилию — вся информация о нём уже будет в системе."
        },
    ]

    const routers2 = [
        {
            id: 1,
            img: Img2,
            name: "Письмо гостю",
            title: "Приветственное письмо с персональной ссылкой и приглашением. Гостю не придётся вводить номер комнаты и фамилию — вся информация о нем уже будет в системе."
        },
        {
            id: 2,
            img: Img4,
            name: "После подключения интернета",
            title: "После успешного подключения к Wi-Fi отеля гость увидит приглашение перейти в приложение."
        },
    ]

    return (
        <Wrapper>
            <Text>
                <H1>Услуги отеля, заказ еды в номер, бронирование спа и ресторанов, управление номером — всё это доступно гостю в браузере его смартфона</H1>
            </Text>

            <Title>
                <H2>Поможем в продвижении приложения</H2>
                <P>Ваши гости могут получить<br /> доступ к веб‑приложению<br /> следующими способами</P>
            </Title>

            <CardContainer>
                <CardBox>
                    {routers1.map((item) => (
                        <Card key={item.id}>
                            <BoxImg>
                                <Img src={item.img}/>
                            </BoxImg>
                            <H3>{item.name}</H3>
                            <H6>{item.title}</H6>
                        </Card>
                    ))}
                </CardBox>
                <CardBox>
                    {routers2.map((item) => (
                        <Card key={item.id}>
                            <BoxImg>
                                <Img src={item.img}/>
                            </BoxImg>
                            <H3>{item.name}</H3>
                            <H6>{item.title}</H6>
                        </Card>
                    ))}
                </CardBox>
            </CardContainer>
        </Wrapper>
    )
}

export default MainTwo

const Wrapper = styled.div`
    width: 95%;
    height: 320vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 60px;

    @media screen and (max-width: 2560px){
        height: 210vh;
    }

    @media screen and (max-width: 1800px){
        height: 220vh;
    }

    @media screen and (max-width: 1440px){
        height: 320vh;
    }

    @media screen and (max-width: 768px){
        height: 255vh;
    }

    @media screen and (max-width: 570px){
        height: 420vh;
    }
`

const Text = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const H1 = styled.h1`
    width: 806px;
    height: 290px;
    font-style: normal;
    font-weight: 400;
    color: #000000;

    @media screen and (max-width: 2560px){
        font-size: 52px;
        line-height: 58px;
    }

    @media screen and (max-width: 840px){
        font-size: 42px;
        line-height: 48px;
    }

    @media screen and (max-width: 510px){
        font-size: 35px;
        line-height: 35px;
    }

    @media screen and (max-width: 375px){
        height: 200px;
        font-size: 27px;
        line-height: 30px;
    }
`

const Title = styled.div`
    width: 100%;
    height: 15%;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 2560px){
        height: 7%;
    }

    @media screen and (max-width: 1440px){
        height: 15%;
    }

    @media screen and (max-width: 425px){
        height: 8%;
    }
`

const H2 = styled.h2`
    width: 383px;
    height: 100%;
    font-style: normal;
    font-weight: 400;
    color: #000000;

    @media screen and (max-width: 2560px){
        font-size: 52px;
        line-height: 58px;
    }

    @media screen and (max-width: 768px){
        font-size: 35px;
        line-height: 35px;
    }

    @media screen and (max-width: 550px){
        font-size: 25px;
        line-height: 30px;
    }

    @media screen and (max-width: 375px){
        font-size: 20px;
        line-height: 25px;
    }
`

const P = styled.p`
    width: 50%;
    height: 100%;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 30px;
    color: rgba(0, 0, 0, 0.5);

    @media screen and (max-width: 2560px){
        font-size: 24px;
        line-height: 30px;
    }

    @media screen and (max-width: 768px){
        font-size: 20px;
        line-height: 20px;
    }

    @media screen and (max-width: 550px){
        font-size: 15px;
        line-height: 20px;
    }

    @media screen and (max-width: 375px){
        font-size: 12px;
        line-height: 15px;
    }
`

const CardContainer = styled.div`
    width: 100%;
    height: 75%;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 570px){
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }
`

const CardBox = styled.div`
    width: 48%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (max-width: 570px){
        width: 100%;
        height: 50%;
    }
`

const Card = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const BoxImg = styled.div`
    width: 100%;
    border-radius: 10px;

    @media screen and (max-width: 2560px){
        height: 70%;
    }

    @media screen and (max-width: 1800px){
        height: 60%;
    }

    @media screen and (max-width: 1440px){
        height: 60%;
    }

    @media screen and (max-width: 768px){
        height: 50%;
    }

    @media screen and (max-width: 570px){
        height: 60%;
    }
`

const Img = styled.img`
    width: 100%;
    height: 100%;
`

const H3 = styled.h3`
    font-style: normal;
    font-weight: 400;
    color: #000000;

    @media screen and (max-width: 2560px){
        font-size: 36px;
        line-height: 41px;
    }

    @media screen and (max-width: 768px){
        font-size: 30px;
        line-height: 35px;
    }

    @media screen and (max-width: 425px){
        font-size: 27px;
        line-height: 30px;
    }

    @media screen and (max-width: 375px){
        font-size: 25px;
        line-height: 30px;
    }
` 

const H6 = styled.h6`
    font-style: normal;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.5);

    @media screen and (max-width: 2560px){
        font-size: 20px;
        line-height: 30px;
    }

    @media screen and (max-width: 768px){
        font-size: 17px;
        line-height: 20px;
    }

    @media screen and (max-width: 425px){
        font-size: 14px;
        line-height: 20px;
    }

    @media screen and (max-width: 375px){
        font-size: 12px;
        line-height: 15px;
    }
`