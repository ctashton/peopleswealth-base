import axios from "axios";
import { useEffect, useState } from "react";
import {
  GiMoneyStack,
  GiCrystalBars,
  GiCutDiamond,
  // GiFloatingCrystal,
} from "react-icons/gi";
import { IconContext } from "react-icons/lib";
// import { AiFillThunderbolt } from 'react-icons/ai';
// import { GiFloatingCrystal } from 'react-icons/gi';

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
  // ArrowForward,
  // ArrowRight
} from "./PricingElements.js";
// import { Button } from '../ButtonElements'

const strapiURL = process.env.STRAPI_URL || "http://localhost:1337";

function Pricing() {
  const [pricingData, setPricingData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`${strapiURL}/pricings`);
      setPricingData(result.data);
    };
    fetchData();
  }, []);

  const renderPlanIcon = (param) => {
    switch (param) {
      case "Silver":
        return <GiMoneyStack />;
      case "Gold":
        return <GiCrystalBars />;
      case "Platinum":
        return <GiCutDiamond />;
      default:
        return <GiMoneyStack />;
    }
  };

  // const [hover, setHover] = useState(false)
  // const onHover = () => {
  //     setHover(!hover)
  // }

  return (
    <IconContext.Provider value={{ color: "#fff", size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Our Cost</PricingHeading>
          <PricingContainer>
            {pricingData.map((pricing) => (
              <PricingCard key={pricing.id} to="/sign-up">
                <PricingCardInfo>
                  <PricingCardIcon>
                    {renderPlanIcon(pricing.plan)}
                  </PricingCardIcon>
                  <PricingCardPlan>{pricing.plan}</PricingCardPlan>
                  <PricingCardCost>${pricing.cost}</PricingCardCost>
                  <PricingCardLength>{pricing.duration}</PricingCardLength>
                  <PricingCardFeatures>
                    {pricing.features.map((feature, index) => (
                      <PricingCardFeature key={"feature-" + index}>
                        {feature}
                      </PricingCardFeature>
                    ))}
                  </PricingCardFeatures>
                </PricingCardInfo>
              </PricingCard>
            ))}
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;
