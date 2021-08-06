import React, { Component, useState} from 'react'
import ReactCardFlip from 'react-card-flip'
// import Modal from 'styled-react-modal'
import Img1 from '../../images/Piero.jpg'
import Img2 from '../../images/Sharon.jpg'
import Img3 from '../../images/Adrian.jpg'
import Img4 from '../../images/Bryan.jpg'
import Img5 from '../../images/Corey.jpg'
import closeicon from '../../images/closeicon.png'
import Adrian from './adrian'
import Sharon from './sharon'
import Piero from './piero'
import Corey from './corey'
import Bryan from './bryan'
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


class TeamSection extends Component {
    // constructor(props) {
    //   super(props);
    //   this.state = {
    //     isFlipped: false
    //   };
    //   this.handleClick = this.handleClick.bind(this);
    // }

    // handleClick(event) {
    //   event.preventDefault();
    //   this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    // }
    render() {
      return (
        <TeamContainer>
        <TeamWrapper>
          <TeamCard>
            <TeamH1>Meet the Team</TeamH1>
          </TeamCard>
          <Piero />
          <Sharon />
          <Adrian />
          <Bryan />
          <Corey />
        </TeamWrapper>
    </TeamContainer>
    )
    }
    
}

export default TeamSection
