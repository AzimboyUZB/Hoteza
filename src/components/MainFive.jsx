import React from "react";
import styled from "styled-components";
import { Tabs } from 'antd';

function Main5() {

    const items = [
        {
            key: '1',
            label: `Раз в год`,
        },
        {
            key: '2',
            label: `Каждый месяц`,
        },
    ];

    return (
        <Wrapper>
            <Text>
                <H2>Легко подключим онлайн-оплату через
                    банковские карты, СБП, ApplePay и GooglePay.
                    Возможно использование существующего
                    банковского счёта и системы фискализации.</H2>
            </Text>
            <H3>Платите только за <br />то, что вам нужно</H3>
            <Title>
                <Tabs defaultActiveKey="1" items={items} />
                <H4>Единоразово оплачивается <br />
                    подключение и наполнение <br />
                    контентом вашего отеля – $900</H4>
            </Title>
            <BoxCard>
                <CardOne>
                    <Row>
                        <H5>Тариф Basic</H5>
                        <Name><P>Электронная брошюра услуг</P></Name>
                        <Hr />
                        <CardOneTitle>
                            <P>Система управления веб‑приложением</P>
                            <P>QR-код гостям для быстрого доступа</P>
                            <P>Брендинг приложения</P>
                            <P>Информационные страницы</P>
                            <P>Информационные страницы</P>
                            <P>Многоязычная поддержка</P>
                            <P>Меню ресторанов</P>
                            <P>Фотогалерея</P>
                        </CardOneTitle>

                    </Row>
                    <Price>
                        <H1>$85</H1>
                        <H6>$99<br /><P>/месяц</P></H6>
                    </Price>
                </CardOne>

                <CardTwo>
                    <Row>
                        <H5>Тариф Pro</H5>
                        <Name><P>Приём заказов, персонализация, общение с гостем</P></Name>
                        <Hr />
                        <Span>Всё из тарифа Basic, а также:</Span>
                        <CardTwoTitle>
                            <P>Письмо гостю с QR-кодом</P>
                            <P>Заказ еды в номер</P>
                            <P>Бронирование ресторанов и спа</P>
                            <P>Заказ гостиничных услуг</P>
                            <P>Telegram-бот для персонала</P>
                            <P>Профиль гостя</P>
                            <P>Переписка с гостями</P>
                            <P>Просмотр счёта</P>
                            <P>Экспресс check-out</P>
                            <P>Обратная связь от гостей</P>
                            <P>Маркетинг-модуль</P>
                            <P>Модуль статистики</P>
                        </CardTwoTitle>

                    </Row>
                    <Price>
                        <H1>$209</H1>
                        <H6>$249<br /><P>/месяц</P></H6>
                    </Price>
                </CardTwo>

                <CardThree>
                    <Row>
                        <H5 style={{color: "#A9FF2C"}}>Add-ons</H5>
                        <P>Расширение возможностей Pro-версии за счёт дополнительных интеграций</P>
                        <Hr style={{background: "rgba(255, 255, 255, 0.2)"}}/>
                        <CardThreeTitle>
                            <P>Интеграция с PMS (рекомендуется)</P>
                            <P>Мобильный ТВ-пульт</P>
                            <P>Интеграция с POS и SOS системами</P>
                            <P>Интеграция с GRMS и управление оборудованием номера</P>
                            <P>Интеграция с платёжным шлюзом для приёма онлайн-оплат</P>
                        </CardThreeTitle>
                    </Row>
                    <Price>
                        <PriceText>По запросу</PriceText>
                    </Price>
                </CardThree>
            </BoxCard>
        </Wrapper>
    )
}

export default Main5

const Wrapper = styled.div`
    width: 95%;
    height: 230vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    @media screen and (max-width: 1270px){
        height: 210vh;
    }

    @media screen and (max-width: 800px){
        height: 320vh;
    }

    @media screen and (max-width: 530px){
        height: 420vh;
    }
`

const Text = styled.div`
    width: 100%;
    height: 260px;
    background: #A9FF2C;
    border-radius: 20px;
    padding: 20px 20px;

    @media screen and (max-width: 768px){
        height: 350px;
    }
`

const H2 = styled.h2`
    width: 100%;
    font-style: normal;
    font-weight: 400;
    font-size: 46px;
    line-height: 51px;
    color: #000000;

    @media screen and (max-width: 1110px){
        font-size: 40px;
        line-height: 40px;
    }

    @media screen and (max-width: 768px){
        font-size: 30px;
        line-height: 35px;
    }

    @media screen and (max-width: 425px){
        font-size: 25px;
        line-height: 30px;
    }
`

const H3 = styled.h3`
    width: 100%;
    height: 116px;
    font-style: normal;
    font-weight: 400;
    font-size: 52px;
    line-height: 58px;
    color: #000000;
    display: flex;
    align-items: center;

    @media screen and (max-width: 1024px){
        font-size: 45px;
        line-height: 50px;
    }

    @media screen and (max-width: 768px){
        font-size: 40px;
        line-height: 45px;
    }

    @media screen and (max-width: 470px){
        font-size: 30px;
        line-height: 35px;
    }
`

const Title = styled.div`
    width: 100%;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const H4 = styled.h4`
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 30px;
    text-align: right;
    letter-spacing: 0.5px;
    color: #000000;

    @media screen and (max-width: 1024px){
        font-size: 18px;
        line-height: 25px;
    }

    @media screen and (max-width: 580px){
        font-size: 13px;
        line-height: 20px;
    }

    @media screen and (max-width: 580px){
        font-size: 10px;
        line-height: 15px;
    }
`

const BoxCard = styled.div`
    width: 100%;
    height: 65%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;

    @media screen and (max-width: 950px){
        height: 60%;
    }

    @media screen and (max-width: 800px){
        height: 70%;
        align-items: flex-start;
    }

    @media screen and (max-width: 530px){
        height: 80%;
    }
`

const CardOne = styled.div`
    width: 400px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #FFFFFF;
    border-radius: 20px;
    border: 1px solid #F1F1F1;
    padding: 20px;

    @media screen and (max-width: 1270px){
        width: 300px;
    }

    @media screen and (max-width: 950px){
        width: 250px;
    }

    @media screen and (max-width: 800px){
        width: 250px;
        height: 48%;
    }

    @media screen and (max-width: 530px){
        width: 250px;
        height: 33%;
    }
`

const Row = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    gap: 30px;
`

const H5 = styled.h5`
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    line-height: 41px;
    color: #000000;

    @media screen and (max-width: 1270px){
        font-size: 25px;
        line-height: 30px;
    }
`
const Name = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: flex-start;

    @media screen and (max-width: 800px){
        height: 20px;
    }
`

const P = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    color: #707378; 

    @media screen and (max-width: 1270px){
        font-size: 15px;
        line-height: 17px;
    }

    @media screen and (max-width: 800px){
        font-size: 12px;
        line-height: 17px;
    }
`

const Hr = styled.hr`
    width: 90%;
    height: 1px;
    background: #E2E3E6;
    margin-left: 5%;
`

const CardOneTitle = styled.div`
    width: 80%;
    height: 55%;
    margin-left: 10%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Price = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    gap: 20px;
`

const H1 = styled.h1`
    font-style: normal;
    font-weight: 400;
    font-size: 72px;
    line-height: 74px;
    color: #000000;

    @media screen and (max-width: 1270px){
        font-size: 45px;
        line-height: 70px;
    }

    @media screen and (max-width: 800px){
        font-size: 35px;
        line-height: 70px;
    }
`

const H6 = styled.h6`
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 30px;
    color: #FE6645;
    margin-top: 30px;

    @media screen and (max-width: 1270px){
        font-size: 15px;
        line-height: 20px;
    }

`

const CardTwo = styled.div`
    width: 400px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #F1F1F1;
    border: 1px solid #F1F1F1;
    border-radius: 20px;
    padding: 20px;

    @media screen and (max-width: 1270px){
        width: 300px;
    }

    @media screen and (max-width: 950px){
        width: 250px;
    }

    @media screen and (max-width: 800px){
        width: 250px;
        height: 48%;
    }

    @media screen and (max-width: 530px){
        width: 250px;
        height: 33%;
    }
`

const Span = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    color: #000000;
`

const CardTwoTitle = styled.div`
    width: 86%;
    height: 75%;
    margin-left: 7%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const CardThree = styled.div`
    width: 400px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #000000;
    border: 1px solid #F1F1F1;
    border-radius: 20px;
    padding: 20px;

    @media screen and (max-width: 1270px){
        width: 300px;
    }

    @media screen and (max-width: 950px){
        width: 250px;
    }

    @media screen and (max-width: 800px){
        width: 260px;
        height: 48%;
    }

    @media screen and (max-width: 530px){
        width: 250px;
        height: 33%;
    }
`

const CardThreeTitle = styled.div`
    width: 90%;
    height: 45%;
    margin-left: 5%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const PriceText = styled.h1`
    font-style: normal;
    font-weight: 400;
    font-size: 50px;
    line-height: 74px;
    color: #ffffff;

    @media screen and (max-width: 1270px){
        font-size: 40px;
        line-height: 70px;
    }

    @media screen and (max-width: 950px){
        font-size: 30px;
        line-height: 70px;
    }

    @media screen and (max-width: 800px){
        font-size: 25px;
        line-height: 70px;
    }
`