import React from "react";
import styled from "styled-components";
import IconBooking from "../assets/icon/IconBooking";
import IconTripadvision from "../assets/icon/IconTripadvison";
import Photo1 from "../assets/img/IMAGE (34).png"
import Photo2 from "../assets/img/IMAGE (35).png"
import Photo3 from "../assets/img/IMAGE (36).png"
import Photo4 from "../assets/img/IMAGE (37).png"
import Photo5 from "../assets/img/IMAGE (38).png"
import Photo6 from "../assets/img/IMAGE (39).png"

function Footer() {
    return (
        <Wrapper>
            <H1>Что говорят гости отелей</H1>
            <BoxCard>
                <Box>
                    <CardOne>
                        <Logo>
                            <Img src={Photo1} />
                            <Title>
                                <H5>Emilly Barrett</H5>
                                <IconBooking />
                            </Title>
                        </Logo>
                        <Text>
                            <H4>Я вегетарианка. Мне понравилось, что можно не уточнять состав каждого блюда в меню, а ознакомиться и заказать всё
                                через смартфон. Везде бы так.</H4>
                        </Text>
                    </CardOne>

                    <CardFour>
                        <Logo>
                            <Img src={Photo4} />
                            <Title>
                                <H5>Christopher Doyle</H5>
                                <IconTripadvision />
                            </Title>
                        </Logo>
                        <Text>
                            <H4>Спасибо, что теперь совсем не нужно общаться с людьми! Во время командировок это спасает. А ещё понравилось
                                переключать телек с телефона</H4>
                        </Text>
                    </CardFour>
                </Box>

                <Box>
                    <CardTwo>
                        <Logo>
                            <Img src={Photo2} />
                            <Title>
                                <H5>Margaret Sims</H5>
                                <IconBooking />
                            </Title>
                        </Logo>
                        <Text>
                            <H4>О приложении я узнал из письма, которое пришло на мою почту. Приложение залогинило сразу, мне не пришлось вбивать
                                свои данные. Пользовался услугами доставки в номер и оплачивал через ApplePay. Удобно.</H4>
                        </Text>
                    </CardTwo>

                    <CardFive>
                        <Logo>
                            <Img src={Photo5} />
                            <Title>
                                <H5>Clare Hamilton</H5>
                                <IconTripadvision />
                            </Title>
                        </Logo>
                        <Text>
                            <H4>Первый раз была в отеле и ни разу не пообщалась ни с кем из стафа. Все мои прихоти выполняли как по велению
                                волшебной палочки. Хочу ещё!</H4>
                        </Text>
                    </CardFive>
                </Box>

                <Box>
                    <CardThree>
                        <Logo>
                            <Img src={Photo3} />
                            <Title>
                                <H5>Thomas Fletcher</H5>
                                <IconTripadvision />
                            </Title>
                        </Logo>
                        <Text>
                            <H4>Очень классно, когда у отеля такой удобный сайт и не нужно никуда звонить, чтобы записаться в SPA.</H4>
                        </Text>
                    </CardThree>

                    <CardSix>
                        <Logo>
                            <Img src={Photo6} />
                            <Title>
                                <H5>Benedict French</H5>
                                <IconBooking />
                            </Title>
                        </Logo>
                        <Text>
                            <H4>в номере и далее на протяжении всего проживания постоянно заказывал еду и услуги в номер прямо со своего телефона.
                                Даже ещё находясь у бассейна, заказывал ужин, поднимался в номер, а еду уже принесли!</H4>
                        </Text>
                    </CardSix>
                </Box>
            </BoxCard>
        </Wrapper>
    )
}

export default Footer

const Wrapper = styled.div`
    width: 95%;
    height: 140vh;
    display: flex;
    flex-direction: column;
    gap: 70px;

    @media screen and (max-width: 1350px){
        height: 300vh;
    }

    @media screen and (max-width: 886px){
        height: 400vh;
    }
`

const H1 = styled.h1`
    width: 100%;
    height: 8%;
    font-style: normal;
    font-weight: 400;
    font-size: 52px;
    line-height: 58px;
    color: #000000;

    @media screen and (max-width: 1350px){
        height: 5%;
    }

    @media screen and (max-width: 450px){
        height: 4%;
        font-size: 40px;
        line-height: 45px;
    }

    @media screen and (max-width: 375px){
        font-size: 35px;
        line-height: 40px;
    }
`

const BoxCard = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
`

const Box = styled.div`
    width: 404px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    @media screen and (max-width: 1350px){
        height: 50%;
    }

    @media screen and (max-width: 886px){
        height: 33%;
    }
`

const CardOne = styled.div`
    width: 404px;
    height: 290px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #F1F1F1;
    border-radius: 20px;
    padding: 10px 20px;

    @media screen and (max-width: 440px){
        width: 300px;
    }
`

const Logo = styled.div`
    width: 90%;
    height: 60px;
    display: flex;
    gap: 10px;
`

const Img = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
`

const Title = styled.div`
    width: 200px;
    height: 60px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
`

const H5 = styled.h5`
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 30px;
    letter-spacing: 0.35px;
    color: #000000;
`

const Text = styled.div`
    width: 100%;
    height: 180px;
`

const H4 = styled.h4`
    width: 100%;
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 30px;
    letter-spacing: 0.35px;
    color: #000000;

    @media screen and (max-width: 440px){
        font-size: 15px;
        line-height: 20px;
    }
`

const CardTwo = styled.div`
    width: 404px;
    height: 350px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    background: #F1F1F1;
    border-radius: 20px;
    padding: 10px 20px;

    @media screen and (max-width: 440px){
        width: 300px;
    }
`

const CardThree = styled.div`
    width: 404px;
    height: 230px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    background: #F1F1F1;
    border-radius: 20px;
    padding: 10px 20px;

    @media screen and (max-width: 440px){
        width: 300px;
    }
`

const CardFour = styled.div`
    width: 404px;
    height: 290px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    background: #F1F1F1;
    border-radius: 20px;
    padding: 10px 20px;

    @media screen and (max-width: 440px){
        width: 300px;
    }
`

const CardFive = styled.div`
    width: 404px;
    height: 290px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    background: #F1F1F1;
    border-radius: 20px;
    padding: 10px 20px;

    @media screen and (max-width: 440px){
        width: 300px;
    }
`

const CardSix = styled.div`
    width: 404px;
    height: 380px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    background: #F1F1F1;
    border-radius: 20px;
    padding: 10px 20px;

    @media screen and (max-width: 440px){
        width: 300px;
    }
`