import React from "react";
import styled from "styled-components";
import Card from "./components/Card";
import Header from "./components/Header";
import HeaderMain from "./components/HeaderMain";
import MainOne from "./components/MainOne";
import MainTwo from "./components/MainTwo";
import MainThree from "./components/MainThree";
import MainFour from "./components/MainFour";
import MainFive from "./components/MainFive";
import MainSix from "./components/MainSix";
import Footer from "./components/Footer";

function App() {
  return (
    <Wrapper>
      <Header />
      <HeaderMain />
      <Card />
      <MainOne />
      <MainTwo />
      <MainThree />
      <MainFour />
      <MainFive />
      <MainSix />
      <Footer />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;
`
