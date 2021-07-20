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
        <TeamH1>Our Team</TeamH1>
        <TeamWrapper>
            <TeamCard>
            <TeamImg src={Img1} />
            <TeamH2>Lorem Ipsum</TeamH2>
            <TeamP>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.</TeamP>
            </TeamCard>
            <TeamCard>
            <TeamImg src={Img2} />
            <TeamH2>Lorem Ipsum</TeamH2>
            <TeamP>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.</TeamP>
            </TeamCard>
            <TeamCard>
            <TeamImg src={Img3} />
            <TeamH2>Lorem Ipsum</TeamH2>
            <TeamP>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.</TeamP>
            </TeamCard>
            <TeamCard>
            <TeamImg src={Img4} />
            <TeamH2>Lorem Ipsum</TeamH2>
            <TeamP>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.</TeamP>
            </TeamCard>
            <TeamCard>
            <TeamImg src={Img5} />
            <TeamH2>Lorem Ipsum</TeamH2>
            <TeamP>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.</TeamP>
            </TeamCard>
            
        </TeamWrapper>
    </TeamContainer>
    )
}

export default TeamSection
