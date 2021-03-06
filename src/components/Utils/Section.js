import React from "react";
import styled from "styled-components";

const Section = (props) => {
  return (
    <SectionWrapper>
      <Title>{props.title}</Title>
      {props.children}
    </SectionWrapper>
  );
};

const SectionWrapper = styled.section`
  display: grid;
  grid-gap: 0.5rem;
  margin-bottom: 3rem;
`;

const Title = styled.h2`
  padding: 0.5rem;
`;

export default Section;