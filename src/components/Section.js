import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
function Section({
  title,
  description,
  leftBtnText,
  rigthBtnText,
  backgroundImg,
}) {
  return (
    <Wrap bgImage={backgroundImg}>
      <Fade direction="up">
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <Buttons top>
        <Fade direction="up">
          <ButtonGroup>
            <LeftButton>{leftBtnText}</LeftButton>
            {rigthBtnText && <RightButton>{rigthBtnText}</RightButton>}
          </ButtonGroup>
        </Fade>
      </Buttons>
    </Wrap>
  );
}

export default Section;
const Wrap = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url("/images/model-s.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between; // for vertical alignment
  align-items: center; //for horizontal alignment
  background-image: ${(props) => `url("/images/${props.bgImage}") `};
`;
const ItemText = styled.div`
  text-align: center;
  padding-top: 15vh;
`;
const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  text-align: center;
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: black;
`;
const Buttons = styled.div``;
