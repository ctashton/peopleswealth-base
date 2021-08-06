import styled from 'styled-components'

export const ServicesContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 0;
background-color: #333;
padding: 100px;
@media screen and (max-width: 960px) {
  margin: 10 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
`
export const ServicesH1 = styled.h1`
margin-bottom: 50px;
font-size: 48px;
line-height: 1.1;
font-weight: 800;
text-align: center;
// color: ${({lightText}) => (lightText ? '#f9f9f9' : '#333333')};
color: #f9f9f9;

@media screen and (max-width: 480px) {
    font-size: 32px;
}
`

export const ServicesWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-bottom: 10px;
@media screen and (max-width: 960px) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
`



export const ServicesCard = styled.div`
background: #fff;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 10px;
padding: 30px;
margin: 20px;
box-shadow: 0 1px 3px rgba(0,0,0,0.2);
transition: all 0.2s ease-in-out;
width: 300px;
height: 300px;

&:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}
`

export const ServicesIcon = styled.img`
 height: auto;
 width: auto;
 margin-bottom: 10px;
`


export const ServicesH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`

export const ServicesP = styled.p`
    font-size: 1rem;
    margin-bottom: 10px
`