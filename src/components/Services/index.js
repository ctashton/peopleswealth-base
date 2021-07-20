import React from 'react'
import Icon1 from '../../images/assess.png'
import Icon2 from '../../images/phone.png'
import Icon3 from '../../images/global-connection.png'
import { ServicesContainer,
ServicesH1,
ServicesWrapper,
ServicesCard,
ServicesIcon,
ServicesH2,
ServicesP} from './ServicesElements'
const Services = () => {
    return (
        <ServicesContainer>
            <ServicesH1>Our Process</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                <ServicesIcon src={Icon1} />
                <ServicesH2>Lorem Ipsum</ServicesH2>
                <ServicesP>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                <ServicesIcon src={Icon2} />
                <ServicesH2>Lorem Ipsum</ServicesH2>
                <ServicesP>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                <ServicesIcon src={Icon3} />
                <ServicesH2>Lorem Ipsum</ServicesH2>
                <ServicesP>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
