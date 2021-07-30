import React from 'react'
import Icon1 from '../../images/connect.png'
import Icon2 from '../../images/assessment.png'
import Icon3 from '../../images/success.png'
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
                <ServicesH2>Connect to a Wealth Advisor</ServicesH2>
                <ServicesP>We connect you to financial advisors across the U.S. who are here to help you take advantage of your personal wealth process.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                <ServicesIcon src={Icon2} />
                <ServicesH2>Wealth Assessment</ServicesH2>
                <ServicesP>Our agents will assess your situation personally, and create a curated plan to achieve your financial goals helping to bring peace of mind.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                <ServicesIcon src={Icon3} />
                <ServicesH2>Track Success</ServicesH2>
                <ServicesP>Your personal agent will be tracking your success and will be there for you to help make decisions while life's toughest challenges come about.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
