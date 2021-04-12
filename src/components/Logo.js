import React from 'react';
import styled from 'styled-components';
import CodedeliveryMainlogo from '../images/codedelivery_mainlogo_white.png';
import Portfolio from '../components/Portfolio';
import PortfolioContent from '../components/PortfolioContent';

const LogoImg = styled.div`
    background-image: url(${CodedeliveryMainlogo});
    max-width: 450px;
    max-height: 450px;
    width: 40vw;
    height: 40vw;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center; 
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

const LogoBlock1 =styled.div`
    width: 100vw;
    background-color: rgb(48, 54, 213);
    background: linear-gradient(to bottom right, blue, #8f91d1);
`;

const LogoBlock = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;

const Content = styled.div`
    min-width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Techpartner = styled.div`
    /* color: rgb(222, 221, 221); */
    color: #fff;
    font-size: 2.5vw;
    font-weight: 600;
`;

const Codedelivery = styled.div`
    color: #fff;
    font-size: 2.5vw;
    font-weight: 600;
`;

const Logo = () => {
    return(
        <LogoBlock1>
            <LogoBlock>
                <LogoImg/>
                <Content>
                    <Techpartner>당신의 비즈니스의 든든한 테크 파트너.</Techpartner>
                    <Codedelivery>코드딜리버리 CodeDelivery</Codedelivery>
                </Content>
            </LogoBlock>
            <Portfolio/>
        </LogoBlock1>
    );
}

export default Logo;
