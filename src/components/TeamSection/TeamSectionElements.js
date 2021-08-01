import styled from 'styled-components'
import Modal from 'styled-react-modal'

export const StyledModal = Modal.styled`
  width: 30rem;
  height: 30rem;
  display: flex;
  align-items: left;
  justify-content: left;
  background-color: #f9f9f9;
  position: static;
  flex-direction: column;

`
export const StyledModal2 = Modal.styled`
  width: 30rem;
  height: 30rem;
  display: flex;
  align-items: left;
  justify-content: left;
  background-color: #f9f9f9;
  position: static;
  flex-direction: column;

`
export const CloseButton = styled.img`
height: 40px;
width: 40px;
margin-top: -350px;
margin-left: 400px;
cursor: pointer;
`

export const TeamContainer = styled.div`
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #F9F9F9;


`
export const TeamH1 = styled.h1`
bottom: 0;
margin-bottom:-400px;
padding-top: 220px;
padding-bottom: 220px;
margin-left: 40px;
line-height: 1.1;
text-align: left;
color: ${({lightText}) => (lightText ? '#f9f9f9' : '#333333')};
font-size: 20px;
font-weight: 800;

@media screen and (max-width: 480px) {
    font-size: 32px;
}
`

export const TeamWrapper = styled.div`
    // max-width: 1100px;
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

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 0px;
    }
`



export const TeamCard = styled.div`
background: #F9F9F9;
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
    // transform: scale(1.02);
    // transition: all 0.2s ease-in-out;
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
    margin-left: 50px;
    margin-bottom: 50px;
    margin-right: 50px;
`
export const ModalTeamH1 = styled.h2`
    font-size: 28px;
    font-weight: 800;
    color: #333;
    bottom: 0;
    margin-top: 100px;
    margin-left: 50px;
    margin-bottom: 0px;
    
`

export const ModalTeamH2 = styled.p`
    font-size: 24px;
    font-weight: 600;
    color: #333;
    bottom: 0;
    margin-top: 0px;
    margin-left: 50px;
    margin-bottom: 0px;
    
`