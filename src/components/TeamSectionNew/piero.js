import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';
import Img1 from '../../images/Piero.jpg';
import closeicon from '../../images/closeicon.png';
import {
  TeamCard,
  TeamCardBack,
  TeamImg,
  TeamH2,
  TeamP,
  ModalTeamH1,
  ModalTeamH2,
  CloseButton,
} from './TeamSectionNewElements';

class Adrian extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
  }
  render() {
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped}>
        <TeamCard onClick={this.handleClick}>
          <TeamImg src={Img1} />
          <TeamH2>Piero Wong</TeamH2>
        </TeamCard>
        <TeamCardBack onClick={this.handleClick}>
          <ModalTeamH1>Piero Wong</ModalTeamH1>
          <CloseButton src={closeicon} onClick={this.handleClick}></CloseButton>
          <ModalTeamH2>CEO</ModalTeamH2>
          <TeamP>
            Piero is the founder, owner and CEO of People’s Wealth. He started
            this company to change the financial industry in the United States
            after watching borrowers fall victim to the sharks in a murky
            financial industry. In his spare time, Piero has a passion for the
            level of intensity and concentration that a gym session can bring.
            Recently, he has been looking to get into golf and hoping to develop
            a perfect swing.
          </TeamP>
        </TeamCardBack>
      </ReactCardFlip>
    );
  }
}

export default Adrian;
