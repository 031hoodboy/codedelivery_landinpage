import React from 'react';
import styled from 'styled-components';
import Example1 from '../images/example1.png';
import Example2 from '../images/example2.png';
import Example3 from '../images/example3.png';
import Example4 from '../images/example4.png';
import Example5 from '../images/example5.png';
import Example6 from '../images/example6.png';
import Example7 from '../images/example7.png';
import Example8 from '../images/example8.png';

const PortfolioContentBlock = styled.div`
    width: 100vw;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const Content1 = styled.div`
    width: 25vw;
    height: 25vh;
    background: yellow;
    min-width: 374px;
    min-height: 214px;
    background-image: url(${Example1});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; 
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

const Content2 = styled(Content1)`
    background-image: url(${Example2});
`;
const Content3 = styled(Content1)`
    background-image: url(${Example3});
`;
const Content4 = styled(Content1)`
    background-image: url(${Example4});
`;

const Content5 = styled(Content1)`
    background-image: url(${Example5});
`;

const Content6 = styled(Content1)`
    background-image: url(${Example6});
`;

const Content7 = styled(Content1)`
    background-image: url(${Example7});
`;

const Content8 = styled(Content1)`
    background-image: url(${Example8});
`;


const PortfolioContent = () => {
    return (
        <PortfolioContentBlock>
            <ContentWrapper>
                <Content1></Content1>
                <Content2></Content2>
                <Content3></Content3>
                <Content4></Content4>
                <Content5></Content5>
                <Content6></Content6>
                <Content7></Content7>
                <Content8></Content8>
            </ContentWrapper>            
        </PortfolioContentBlock>

    );
}

export default PortfolioContent;