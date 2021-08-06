import React, {useState} from 'react'
import Modal from 'styled-react-modal'
import Img1 from '../../images/Piero.jpg'
import Img2 from '../../images/Sharon.jpg'
import Img3 from '../../images/Adrian.jpg'
import Img4 from '../../images/Bryan.jpg'
import Img5 from '../../images/Corey.jpg'
import closeicon from '../../images/closeicon.png'
import { TeamContainer,
TeamH1,
TeamWrapper,
TeamCard,
TeamImg,
TeamH2,
TeamP,
StyledModal,
StyledModal2,
ModalTeamH1,
ModalTeamH2,
CloseButton} from './TeamSectionNewElements'


const TeamSection = () => {
    const [isOpen, setIsOpen] = useState(false)

  function toggleModal(e) {
    setIsOpen(!isOpen)
  }

    return (
        <TeamContainer>
        <TeamWrapper>
            <TeamCard>

            <TeamH1>Meet the Team</TeamH1>
            </TeamCard>
            <TeamCard onClick={toggleModal}>
            <StyledModal
                isOpen={isOpen}
                onBackgroundClick={toggleModal}
                onEscapeKeydown={toggleModal}>

          <ModalTeamH1>Piero Wong</ModalTeamH1>
          <ModalTeamH2>CEO</ModalTeamH2>
          <TeamP>Piero is the founder, owner and CEO of People’s Wealth. He started this company to change the financial industry in the United States after watching borrowers fall victim to the sharks in a murky financial industry. In his spare time, Piero has a passion for the level of intensity and concentration that a gym session can bring. Recently, he has been looking to get into golf and hoping to develop a perfect swing.</TeamP>
          <CloseButton src={closeicon} onClick={toggleModal}></CloseButton>
        </StyledModal>
            <TeamImg src={Img1} />
            <TeamH2>Piero Wong</TeamH2>
            </TeamCard>
            <TeamCard onClick={toggleModal}>
            <StyledModal2
                isOpen={isOpen}
                onBackgroundClick={toggleModal}
                onEscapeKeydown={toggleModal}>

          <ModalTeamH1>Sharon Wong</ModalTeamH1>
          <ModalTeamH2>CEO</ModalTeamH2>
          <TeamP>Piero is the founder, owner and CEO of People’s Wealth. He started this company to change the financial industry in the United States after watching borrowers fall victim to the sharks in a murky financial industry. In his spare time, Piero has a passion for the level of intensity and concentration that a gym session can bring. Recently, he has been looking to get into golf and hoping to develop a perfect swing.</TeamP>
          <CloseButton src={closeicon} onClick={toggleModal}></CloseButton>
        </StyledModal2>
            <TeamImg src={Img2} />
            <TeamH2>Sharon Wong</TeamH2>
            </TeamCard>
            <TeamCard onClick={toggleModal}>
            <TeamImg src={Img3} />
            <TeamH2>Adrien Diez</TeamH2>
            </TeamCard>
            <TeamCard onClick={toggleModal}>
            <TeamImg src={Img4} />
            <TeamH2>Bryan Varra</TeamH2>
            </TeamCard>
            <TeamCard onClick={toggleModal}>
            <TeamImg src={Img5} />
            <TeamH2>Corey Thomas</TeamH2>
            </TeamCard>
            
        </TeamWrapper>
    </TeamContainer>
    )
}

export default TeamSection
