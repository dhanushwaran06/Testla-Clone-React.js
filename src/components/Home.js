import React from "react";
import styled from "styled-components";
import Section from "./Section";
function Home() {
  return (
    <Container>
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        leftBtnText="Custom Order"
        rigthBtnText="Existing Inventory"
        backgroundImg="../images/model-3.jpg"

      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        leftBtnText="Custom Order"
        rigthBtnText="Existing Inventory"
        backgroundImg="../images/model-y.jpg"
      />
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        leftBtnText="Custom Order"
        rigthBtnText="Existing Inventory"
        backgroundImg="../images/model-s.jpg"
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        leftBtnText="Custom Order"
        rigthBtnText="Existing Inventory"
        backgroundImg="../images/model-x.jpg"
      />
      <Section
        title="Lowest Cost Solar Panels in America"
        description="Money-back guarantee"
        leftBtnText="Order now"
        rigthBtnText="Learn more"
        backgroundImg="../images/solar-panel.jpg"
      />
      <Section
        title="Solar for New Roofs"
        description="Solar Roof Costs Less Than a New Roof plus Solar Panels"
        leftBtnText="Order now"
        rigthBtnText="Learn more"
        backgroundImg="../images/solar-roof.jpg"
      />
      <Section
        title="Accessories"
        description=""
        leftBtnText="Order now"
        backgroundImg="../images/accessories.jpg"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  color: red;
  height: 100vh;
`;
