import React from "react";
import ContentPanelContainer from "../ContentPanelContainer/ContentPanelContainer";
import {
  StyledHeaderDiv,
  StyledBlockDivContainer,
  StyledBlockDiv,
  StyledLeftBlockDiv,
  ChildBlockDiv,
  BlockChildContainer,
  BlockParent,
} from "./Instructions.styled";
import { ReactComponent as CBlockSVG } from "../../images/ControlBlocks.svg";
import { ReactComponent as LBlockSVG } from "../../images/LookBlocks.svg";
import { ReactComponent as LBlockChild1SVG } from "../../images/LBlockChild1.svg";
import { ReactComponent as LBlockChild2SVG } from "../../images/LBlockChild2.svg";
import { ReactComponent as MBlockSVG } from "../../images/MotionBlocks.svg";
import { ReactComponent as CBlockChild1SVG } from "../../images/CBlockChild1.svg";
import { ReactComponent as MBlockChildSVG } from "../../images/MBlockChild1.svg";
import PurpleBlock from "../../images/purpleblock.png";
import PurpleBlockChild from "../../images/purpleblockchild.png";
import SideMenu from "../../components/styles/SideMenu/SideMenu";
import Header from '../../components/styles/Header/Header';
import PageLayout from "../../components/styles/PageLayout/PageLayout";
import { StyledMain } from "../../components/styles/PageLayout/PageLayout.styled";
import { StyledFooter, StyledFooterText } from "../../components/styles/PageLayout/PageLayout.styled";
import { useState } from "react";
import { useEffect } from "react";
const Instructions = () => {

  const [InstructionsComponents, setInstructionsComponents] = useState(null);
  const [loading, setLoading] = useState(true)

  async function fetchInstructionsContent() {
    const response = fetch("http://localhost:5000/instructions")
      .then((response) => response.json())
      .then((data) => {
        console.log("this is the data", data);
        setInstructionsComponents(data)
      })
      .finally(() => {
        setLoading(false);
      })
  }

  useEffect(() => {
    const response = fetchInstructionsContent();

  }, []);
  // We know if loading hasn't completed that the studentInfo state hasn't been updated. Therefore we display loading on the screen. Else we have access
  // to all the fields and thus can load the data.

    return (

      <>
        <Header></Header>
        <PageLayout>

          <SideMenu></SideMenu>
          <StyledMain>
            <ContentPanelContainer>
              <StyledHeaderDiv>
                <h1>Explore Scratch blocks</h1>
                <p>
                  Learn the basic function of some basic scratch block as as "say",
                  "wait", "go to" and "hide."
                </p>
              </StyledHeaderDiv>

              <StyledBlockDivContainer>
                <StyledBlockDiv>
                  <img src={PurpleBlock} width={"50%"} height={"85%"}></img>
                  <img src={PurpleBlockChild} width={"25%"} height={"20%"}></img>
                </StyledBlockDiv>
                <StyledBlockDiv>
                  <img src={PurpleBlock} width={"50%"} height={"85%"}></img>
                  <img src={PurpleBlockChild} width={"25%"} height={"20%"}></img>
                </StyledBlockDiv>
                <StyledBlockDiv>
                  <img src={PurpleBlock} width={"50%"} height={"85%"}></img>
                  <img src={PurpleBlockChild} width={"25%"} height={"20%"}></img>
                </StyledBlockDiv>
              </StyledBlockDivContainer>
            </ContentPanelContainer>
          </StyledMain>
        </PageLayout>
        <StyledFooter><StyledFooterText><p>&copy; LevelupWorks</p></StyledFooterText></StyledFooter>
      </>
    );
  };

  export default Instructions;
