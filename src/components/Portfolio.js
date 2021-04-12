import React from 'react';
import styled from 'styled-components';

const PortfolioBlock = styled.div`
    width: 80vw;
    height: 30vh;
    margin: 0 auto;
`;

const ContentWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-weight: 600;
    color: #fff;
`;

const Title = styled.div`
    margin-bottom:10px;
    font-size: 2vw;
`;

const Explain = styled.div`
    font-size: 1vw;
    font-weight: 300;
`;

const Portfolio = () => {
    return(
        <PortfolioBlock>
            <ContentWrapper>
                <Title>Portfolio</Title>
                <Explain>
                    서비스가 바라보는 <br />
                    목표와 지향점을 이해하고<br />    
                    그 안에 있는 미션으로 <br />
                    사업의 시작과 끝, 도약을 함께합니다.<br />
                </Explain>
            </ContentWrapper>
        </PortfolioBlock>
    );
}

export default Portfolio;