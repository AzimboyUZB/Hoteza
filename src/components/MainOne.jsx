import React from "react";
import styled from "styled-components";
import Img1 from "../assets/img/IMAGE (19).png"
import Img2 from "../assets/img/IMAGE (20).png"
import Img3 from "../assets/img/IMAGE (21).png"
import Img4 from "../assets/img/IMAGE (22).png"
import Img5 from "../assets/img/IMAGE (23).png"
import Img6 from "../assets/img/IMAGE (24).png"

function MainOne() {

    const routrs1 = [
        {
            id: 1,
            img: Img1,
            name: "Еда в номер",
            title: "Ознакомиться с меню, выбрать и оплатить блюда онлайн."
        },
        {
            id: 2,
            img: Img3,
            name: "Профиль гостя, счёт и экспресс check-out",
            title: "Посмотреть дату и время выезда, счёт за услуги, а также быстро выехать, не создавая очереди на ресепшн. "
        },
        {
            id: 3,
            img: Img5,
            name: "Мобильный пульт ТВ",
            title: "Управлять телевизором в номере прямо со смартфона"
        },
    ]

    const routrs2 = [
        {
            id: 1,
            img: Img2,
            name: "Гостиничные услуги и бронирование",
            title: "Заказать уборку номера или постельные принадлежности. Забронировать столик в ресторане или сеанс в спа."
        },
        {
            id: 2,
            img: Img4,
            name: "Мессенджер с персоналом",
            title: "Задать любой вопрос сотрудникам отеля с помощью встроенного мессенджера"
        },
        {
            id: 3,
            img: Img6,
            name: "«Умный» номер (GRMS)",
            title: "Настроить температуру и степень освещенности в номере"
        },
    ]

    return (
        <Wrapper>
            <Text>
                <H3>
                    Избавьтесь от устаревших бумажных папок гостя.
                    Один QR-код заменяет всё. Гость может заказать и
                    оплатить любую услугу онлайн, что значительно
                    ускоряет работу ресепшн.
                </H3>
            </Text>

            <Title>
                <H2>Работает прямо в браузере смартфона</H2>
                <P>Все услуги отеля доступны сразу. Гостю не нужно ничего скачивать и устанавливать на свой смартфон.</P>
            </Title>

            <CardContainer>
                <CardBox>
                    {routrs1.map((item) => (
                        <Card key={item.id}>
                            <BoxImg>
                                <Img src={item.img} />
                            </BoxImg>
                            <H5>{item.name}</H5>
                            <H6>{item.title}</H6>
                        </Card>
                    ))}
                </CardBox>

                <CardBox>
                    {routrs2.map((item) => (
                        <Card key={item.id}>
                            <BoxImg>
                                <Img src={item.img} />
                            </BoxImg>
                            <H5>{item.name}</H5>
                            <H6>{item.title}</H6>
                        </Card>
                    ))}
                </CardBox>
            </CardContainer>
        </Wrapper>
    )
}

export default MainOne

const Wrapper = styled.div`
    width: 95%;
    height: 400vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 2560px){
        height: 200vh;
    }

    @media screen and (max-width: 1440px){
        height: 390vh;
    } 

    @media screen and (max-width: 768px){
        height: 320vh;
    } 

    @media screen and (max-width: 570px){
        height: 620vh;
    }
`

const Text = styled.div`
    width: 100%;
    height: 260px;
    background: #A9FF2C;
    border-radius: 20px;
    padding: 13px 82px 43px 30px;
    
    @media screen and (max-width: 1175px){
        height: 300px;
    }

    @media screen and (max-width: 768px){
        padding: 10px;
    }
`

const H3 = styled.h3`
    font-style: normal;
    font-weight: 400;
    font-size: 46px;
    line-height: 51px;
    color: #000000;

    @media screen and (max-width: 1024px){
        font-size: 37px;
        line-height: 45px;
    }

    @media screen and (max-width: 768px){
        font-size: 32px;
        line-height: 40px;
    }

    @media screen and (max-width: 535px){
        font-size: 31px;
        line-height: 40px;
    }

    @media screen and (max-width: 425px){
        font-size: 25px;
        line-height: 30px;
    }
`

const Title = styled.div`
    width: 100%;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;

    @media screen and (max-width: 768px){
        height: 150px;
    }
`

const H2 = styled.h2`
    width: 48%;
    height: 100%;
    font-style: normal;
    font-weight: 400;
    font-size: 52px;
    line-height: 58px;
    color: #000000;

    @media screen and (max-width: 1120px){
        font-size: 45px;
        line-height: 45px;
    }

    @media screen and (max-width: 768px){
        font-size: 35px;
        line-height: 35px;
    }

    @media screen and (max-width: 580px){
        font-size: 25px;
        line-height: 30px;
    }

    @media screen and (max-width: 425px){
        font-size: 20px;
        line-height: 23px;
    }
`

const P = styled.p`
    width: 48%;
    height: 100%;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 30px;
    color: rgba(0, 0, 0, 0.5);

    @media screen and (max-width: 1120px){
        font-size: 18px;
        line-height: 25px;
    }

    @media screen and (max-width: 768px){
        font-size: 15px;
        line-height: 20px;
    }

    @media screen and (max-width: 580px){
        font-size: 12px;
        line-height: 15px;
    }
`

const CardContainer = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 2560px){
        display: flex;
        justify-content: space-between;
    }

    @media screen and (max-width: 2560px){
        height: 70%;
    }

    @media screen and (max-width: 1024px){
        height: 80%;
    }

    @media screen and (max-width: 570px){
        height: 88%;
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
    gap: 10px;

    @media screen and (max-width: 2560px){
        width: 48%;
        height: 100%;
    }

    @media screen and (max-width: 570px){
        width: 100%;
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`

const Card = styled.div`
    width: 100%;
    height: 33%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`

const BoxImg = styled.div`
    width: 100%;
    height: 70%;
    display: flex;
    justify-content: center;
    background: #F1F1F1;
    border-radius: 20px;
`

const Img = styled.img`
`

const H5 = styled.h5`
    height: 10%;
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 34px;
    text-align: center;
    color: #000000;

    @media screen and (max-width: 1024px){
        font-size: 23px;
        line-height: 30px;
    }
    

    @media screen and (max-width: 768px){
        font-size: 20px;
        line-height: 30px;
    }
`

const H6 = styled.h6`
    height: 20%;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    color: #000000;

    @media screen and (max-width: 768px){
        height: 10%;
        font-size: 16px;
        line-height: 20px;
    }
`