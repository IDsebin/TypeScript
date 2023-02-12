import styled from "styled-components";
import React from "react";

interface ContainProps {
  bgcolor: string;
  borderColor?: string;
  text?: string;
}

const Container = styled.div<ContainProps>`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: ${(props) => props.bgcolor};
  border: 1px solid ${(props) => props.borderColor};
`;

interface ColorProps {
  bgcolor: string;
  borderColor?: string;
  text?: string;
}

function Circle({ bgcolor, borderColor, text = "default text" }: ColorProps) {
  return (
    <Container bgcolor={bgcolor} borderColor={borderColor ?? "red"}>
      {text}
    </Container>
  );
}

export default Circle;
