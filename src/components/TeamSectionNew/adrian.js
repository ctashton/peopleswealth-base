import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';
import Img3 from '../../images/Adrian.jpg';
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
          <TeamImg src={Img3} />
          <TeamH2>Adrian Diez</TeamH2>
        </TeamCard>
        <TeamCardBack onClick={this.handleClick}>
          <ModalTeamH1>Adrian Diez</ModalTeamH1>
          <CloseButton src={closeicon} onClick={this.handleClick}></CloseButton>
          <ModalTeamH2>CIO</ModalTeamH2>
          <TeamP>
            Adrian is the Chief Information Officer at People’s Wealth. Adrian’s
            passion for helping people drew him to the company and he was eager
            to begin helping students resolve their financial issues. Outside of
            work, Adrian enjoys traveling, trying new foods, drinking new beers
            and gaming. You can typically catch him cooking a crazy delicious
            meal while dancing to some Latin music; he is not afraid to show his
            moves, good or bad.
          </TeamP>
        </TeamCardBack>
      </ReactCardFlip>
    );
  }
}

export default Adrian;
