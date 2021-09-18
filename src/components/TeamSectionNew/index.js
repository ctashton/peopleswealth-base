import React, { Component } from 'react';
import Adrian from './adrian';
import Sharon from './sharon';
import Piero from './piero';
import Corey from './corey';
import Bryan from './bryan';
import {
  TeamContainer,
  TeamH1,
  TeamWrapper,
  TeamCard,
} from './TeamSectionNewElements';

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
    );
  }
}

export default TeamSection;
