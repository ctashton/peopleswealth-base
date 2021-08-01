import React from 'react'
import Img1 from '../../images/Piero.jpg'
import Img2 from '../../images/Sharon.jpg'
import Img3 from '../../images/Adrian.jpg'
import Img4 from '../../images/Bryan.jpg'
import Img5 from '../../images/Corey.jpg'
import { TeamContainer,
TeamH1,
TeamWrapper,
TeamCard,
TeamImg,
TeamH2,
TeamP} from './TeamSectionElements'


const TeamSection = () => {
    return (
        <TeamContainer>
        <TeamWrapper>
            <TeamCard>

            <TeamH1>Meet the Team</TeamH1>
            </TeamCard>
            <TeamCard>
            <TeamImg src={Img1} />
            <TeamH2>Piero Wong</TeamH2>
            </TeamCard>
            <TeamCard>
            <TeamImg src={Img2} />
            <TeamH2>Sharon Wong</TeamH2>
            </TeamCard>
            <TeamCard>
            <TeamImg src={Img3} />
            <TeamH2>Adrien Diez</TeamH2>
            </TeamCard>
            <TeamCard>
            <TeamImg src={Img4} />
            <TeamH2>Bryan Varra</TeamH2>
            </TeamCard>
            <TeamCard>
            <TeamImg src={Img5} />
            <TeamH2>Corey Thomas</TeamH2>
            </TeamCard>
            
        </TeamWrapper>
    </TeamContainer>
    )
}

export default TeamSection
