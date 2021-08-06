import React, { Component, useState} from 'react'
import ReactCardFlip from 'react-card-flip'
// import Modal from 'styled-react-modal'
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
TeamCardBack,
TeamImg,
TeamH2,
TeamP,
StyledModal,
StyledModal2,
ModalTeamH1,
ModalTeamH2,
CloseButton} from './TeamSectionNewElements'


class Adrian extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isFlipped: false
      };
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
      event.preventDefault();
      this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }
    render() {
      return (
          <ReactCardFlip isFlipped={this.state.isFlipped}>
            <TeamCard onClick={this.handleClick}>
              <TeamImg src={Img5} />
              <TeamH2>Corey Thomas</TeamH2>
            </TeamCard>
            <TeamCardBack onClick={this.handleClick}>
              <ModalTeamH1>Corey Thomas</ModalTeamH1>
              <CloseButton src={closeicon} onClick={this.handleClick}></CloseButton>
                <ModalTeamH2>Lead Engineer</ModalTeamH2>
                <TeamP>Corey is a lead Software Engineer at People’s Wealth. Corey’s passion for helping others achieve their goals drew him into the project.  As someone who struggled with student loan debt, Corey empathizes with the mission of People’s Wealth. Outside of work, Corey enjoys spending time with his family, camping, travelling, soccer, gathering collectibles and playing music.</TeamP>
            </TeamCardBack>
          </ReactCardFlip>
          
    )
    }
    
}

export default Adrian
