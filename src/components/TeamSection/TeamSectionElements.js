import styled from 'styled-components'
import Modal from 'styled-react-modal'

export const StyledModal = Modal.styled`
  width: 30rem;
  height: 30rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
  position: static;

`


export const TeamContainer = styled.div`
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #FFF;


`
export const TeamH1 = styled.h1`
margin-bottom: 30px;
line-height: 1.1;
text-align: center;
color: ${({lightText}) => (lightText ? '#f9f9f9' : '#333333')};
font-size: 20px;
font-weight: 800;

@media screen and (max-width: 480px) {
    font-size: 32px;
}
`

export const TeamWrapper = styled.div`
    // max-width: 1000px;
    margin: 0 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    height: auto;
    align-items: center;
    grid-gap: 0px;
    padding: auto;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    } 

    @media screen and (max-width: 768) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`



export const TeamCard = styled.div`
background: #fff;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: left;
border-radius: 0px;
padding: 0px;
//box-shadow: 0 1px 3px rgba(0,0,0,0.2);
transition: all 0.2s ease-in-out;
margin: 0 0;
&:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}
`

export const TeamImg = styled.img`
width: 480px;
height: 480px;
background-color: #fff;

object-fit: cover;
`


export const TeamH2 = styled.h2`
    font-size: 20px;
    font-weight: 800;
    color: #f9f9f9;
    bottom: 0;
    margin-top: -45px;
    margin-left: 20px;
    margin-bottom: 20px;
    
`

export const TeamP = styled.p`
    font-size: 1rem;
    margin-bottom: 10px
`