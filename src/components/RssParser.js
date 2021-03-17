import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { RssDataContext } from "../context/RssContext";

const StyledParser = styled.div `
height: 200px;
background-color: rgba(255,255,255,0.5);
width: 100%;
font-size: 35px;
display: flex;
align-items: center;
position: absolute;
bottom: 0px;
.StyledParser__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    @media (min-width: 768px) {
        width: 750px;
    }
    @media (min-width: 992px) {
        width: 970px;
    }
    @media (min-width: 1200px) {
        width: 1170px;
    }
    .rss__thumb {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
            height: 180px;
            object-fit: contain;
        }
    }
    .rss__qrcode_container {
        position: fixed;
        top: 0;
        height: 200px;
        width: 100%;
        left: 0;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
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
}
`;


const RssParser = () => {
    const { rss, count, setCount } = useContext(RssDataContext);

    useEffect(() => {
      const interval = setInterval(() => {
        if (count < 9) {
            setCount(count + 1);
        } else {
            setCount(0)
        }
      }, 10000);
      return () => clearInterval(interval);
    });

    const RssLoader = () => {
        if (rss === undefined) {
            return (
                <div>Loading!</div>
            )
        } else {
            return (
                <div className="StyledParser__container">
                    <div className="rss__title">{rss[count].title}</div>
                    <div className="rss__thumb"><img src={rss[count].thumbnail} alt="article thumbnail"/></div>
                </div>
            )
        }
    }
    return (
        <StyledParser>{RssLoader()}</StyledParser>
    )
}

export default RssParser;