import React, { useEffect } from "react";
import styled from "styled-components";
import Image from "../../components/Image/Image";
import ProjectsImage from "../../assets/images/04.png";
import Container from "../../components/Container/Container";
import Hero from "../../components/Hero/Hero";
import Title from "../../components/Title/Title";
import Paragraph from "../../components/Paragraph/Paragraph";
import { ReactComponent as ArrowRightIcon } from "../../assets/icons/arrow-right.svg";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

const SProjects = styled.main`
  width: 100%;

  .placeholder {
    width: 100%;
    background: ${({ theme }) => theme.colors.vein};
    min-height: 300px;
    display: flex;
    margin-bottom: 2rem;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.neutral};
    letter-spacing: 1px;
  }
`;

const Projects = ({ pageTitle }) => {
  const line1 = `Hmm.. projects?`;
  const line2 = `I have done some!`;
  const paragraph = `I delivered more than 50 projects to individuals, startups, small businesses and even established companies, below are some personal projects to review.`;
  // const buttonText = `Check out my resume`;

  useEffect(() => {
    document.title = ` ${pageTitle} · Rofazayn`;
  });

  return (
    <SProjects>
      <Container>
        <div className="top --reverse-row">
          <div className="section">
            <Hero
              pageTitle={pageTitle + "."}
              line1={line1}
              line2={line2}
              paragraph={paragraph}
              buttonText={""}
              buttonPath={"/resume"}
              scroller
              scrollButtonText="Show me the projects"
            />
          </div>
          <div className="section">
            <Image src={ProjectsImage} />
          </div>
        </div>
        <div className="mid" id="mid">
          <Title pageTitle>Showcases.</Title>
          <div className="section">
            <Title sectionTitle>
              <div className="line-wrapper">
                <div className="line">Every project listed</div>
              </div>
              <div className="line-wrapper">
                <div className="line">below is selected carefully!</div>
              </div>
            </Title>
            <Paragraph>
              Each one of the projects listed here is a personal project,
              carefully selected to show certain skills. Feel free to check out
              the code on GitHub or contact me if you have any inquiries.
            </Paragraph>
          </div>
          <div className="section">
            <div className="placeholder">COMING SOON</div>
            <div className="placeholder">COMING SOON</div>
            <div className="placeholder">COMING SOON</div>
            <div className="placeholder">COMING SOON</div>
            <div className="placeholder">COMING SOON</div>
          </div>
        </div>
        <div className="bot">
          <div className="cta">
            <Title sectionTitle>
              <div className="line-wrapper">
                <div className="line">Looking to reach out?</div>
              </div>
              <div className="line-wrapper">
                <div className="line">I made a page for that!</div>
              </div>
            </Title>
            <Paragraph className="text">
              {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus amet pariatur suscipit voluptatem rerum autem neque
              voluptates et praesentium doloremque! */}
              You are welcome to contact me by filling a simple email form, I
              typically reply within a day or two, you can find the form by
              clicking on the button below.
            </Paragraph>
            <Button
              variant="outlined"
              component={Link}
              to="/contact"
              endIcon={<ArrowRightIcon width="16px" />}
              size="large"
              className="custom-button"
            >
              Come and say hello
            </Button>
          </div>
        </div>
      </Container>
    </SProjects>
  );
};

export default Projects;
