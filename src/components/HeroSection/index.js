import React, {useState} from 'react'
import {HeroContainer, HeroBg, ImageBg, HeroContent, HeroH1, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'
import { Button } from '../ButtonElements'
const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }


    return (
        <HeroContainer>
            <HeroBg>
                <ImageBg>
                <HeroContent> 
                <HeroH1>Build everlasting fortunes.</HeroH1>
                <HeroBtnWrapper>
                <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}>
                    Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
                </HeroBtnWrapper>
                </HeroContent>
                </ImageBg>
            </HeroBg>
        </HeroContainer>
    )
}

export default HeroSection
