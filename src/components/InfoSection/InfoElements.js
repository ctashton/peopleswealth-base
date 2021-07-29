import styled from 'styled-components'

export const InfoContainer = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '010606')};

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`

export const InfoWrapper = styled.div`
    z-index: 1;
    height: 100%;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 ;
    justify-content: center;
`

export const InfoRow = styled.div`
    margin-top: 80px;
    align-items: center;
    justify-content: center;
`

export const TextWrapper = styled.div`
    padding-top: 0;
    padding-bottom: 60px;
`
export const TopLine = styled.div`
    color: #333;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700px;
    text-align: center;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 800;
    text-align: center;
    color: ${({lightText}) => (lightText ? '#f9f9f9' : '#333333')};

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const Subtitle = styled.p`
    margin-bottom: 40px;
    max-width: 90%;
    font-size: 18px;
    text-align: center;
    line-height: 24px;
    color: ${({lightText}) => (lightText ? '#f9f9f9' : '#333333')};
    // color: ${({darkText}) => (darkText ? '#333333' : "#fff")};
`

