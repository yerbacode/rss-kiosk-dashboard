import { useContext, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Clock from "./components/Clock";
import QrCode from "./components/QrCode";
import RssParser from "./components/RssParser";
import Weather from "./components/Weather";
import { WallpaperDataContext } from "./context/WallpaperContext";
import defaultwallpaper from'./images/defaultwallpaper.jpg';

const HeaderContainer = styled.div `
background-color: rgba(255,255,255,0.5);
height: 200px;
width: 100%;
margin-top: 0px;
display: flex;
justify-content: space-between;
align-items: center;
.container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 768px) {
    width: 750px;
  }
  @media (min-width: 992px) {
    width: 970px;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }
}
`;


function App() {

  const { wallpapers, rss } = useContext(WallpaperDataContext);

  const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: grey;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    background: url(${defaultwallpaper}) no-repeat center center fixed; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    font-family: 'Lato', sans-serif;
  `;

  return (
    <div className="App">
      <GlobalStyle/>
      <HeaderContainer>
        <div className="container">
          <Clock/>
          <Weather/>
          <QrCode/>
        </div>
      </HeaderContainer>
      <RssParser/>
    </div>
  );
}

export default App;