import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';
import Img2 from '../../images/Sharon.jpg';
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

class Sharon extends Component {
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
          <TeamImg src={Img2} />
          <TeamH2>Sharon Wong</TeamH2>
        </TeamCard>
        <TeamCardBack onClick={this.handleClick}>
          <ModalTeamH1>Sharon Wong</ModalTeamH1>
          <CloseButton src={closeicon} onClick={this.handleClick}></CloseButton>
          <ModalTeamH2>Vice President</ModalTeamH2>
          <TeamP>
            Sharon is the Co-founder and the Executive Vice President of
            Operations at People’s Wealth. Sharon joined People’s Wealth in
            order to maximize awareness among students of helpful student loan
            programs that exist in the hopes of bringing them financial relief.
            In her spare time, Sharon enjoys traveling, going on roadtrips,
            building PCs, and riding her longboard around town while frequenting
            new places. Her goal is to eventually cook a mean meal without
            burning one of the dish components.
          </TeamP>
        </TeamCardBack>
      </ReactCardFlip>
    );
  }
}

export default Sharon;
