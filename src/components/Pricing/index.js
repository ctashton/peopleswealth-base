import {
  GiCrystalBars,
  GiCutDiamond,
  GiMoneyStack,
  // GiFloatingCrystal,
} from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature,
} from './PricingElements.js';

function Pricing() {
  // const [hover, setHover] = useState(false);
  // const onHover = () => {
  //   setHover(!hover);
  // };

  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Our Cost</PricingHeading>
          <PricingContainer>
            <PricingCard to="/sign-up">
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiMoneyStack />
                </PricingCardIcon>
                <PricingCardPlan>Silver</PricingCardPlan>
                <PricingCardCost>$29</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>
                    Track your new fully tailored financial plan
                  </PricingCardFeature>
                  <PricingCardFeature>
                    Annual wealth checkups
                  </PricingCardFeature>
                  <PricingCardFeature>
                    Manage your financial accounts on one platform
                  </PricingCardFeature>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to="/sign-up">
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>
                <PricingCardPlan>Gold</PricingCardPlan>
                <PricingCardCost>$39</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>
                    Track your new fully tailored financial plan
                  </PricingCardFeature>
                  <PricingCardFeature>
                    Semi-Annual wealth checkups
                  </PricingCardFeature>
                  <PricingCardFeature>
                    Manage your financial accounts on one platform
                  </PricingCardFeature>
                  <PricingCardFeature>
                    Premium access to advisor forums
                  </PricingCardFeature>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to="/sign-up">
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCutDiamond />
                </PricingCardIcon>
                <PricingCardPlan>Platinum</PricingCardPlan>
                <PricingCardCost>$49</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>
                    Track your new fully tailored financial plan
                  </PricingCardFeature>
                  <PricingCardFeature>
                    Semi-Annual wealth checkups + 1 additional
                  </PricingCardFeature>
                  <PricingCardFeature>
                    Manage your financial accounts on one platform
                  </PricingCardFeature>
                  <PricingCardFeature>
                    Premium access to advisor forums
                  </PricingCardFeature>
                  <PricingCardFeature>Wealth management</PricingCardFeature>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}

export default Pricing;
