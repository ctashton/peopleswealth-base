import styled from 'styled-components';
import heroImage from '../../images/Hero.jpg'
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md';

export const HeroContainer = styled.div`
    background: #EEEEE;
    Display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 720px;
    position: relative;
    z-index: 1;

    // Add :before styles
`
 

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-size: cover;
    background-position: center;
    background-color: #E3e3e3;
    background-image: url(${heroImage})
`

export const ImageBg = styled.div`
    width: 100%
    height: 100%;
    background-size: cover;

    backround-position: center;

`
export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 125px 55px;
    display: flex;
    flex-direction: column;
    align-items: left;
    margin: 12% 0% 3% 0%;

    @media screen and (max-width: 768px) {
        align-items: center;
    }
`

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const HeroBtnWrapper = styled.div`
margin-top: 0px;
max-width: 210px;
max-height: 65px
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px
`