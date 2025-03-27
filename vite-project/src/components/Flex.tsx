import styled from "styled-components";
import { PropsWithChildren } from "react";

type FormFields = {
  bg?: string;
  direction?: string;
  justify?: string;
  align?: string;
  wrap?: string;
  padding?: string;
  minWidth?: string;
  maxWidth?: string;
  gap?: string;
};

const StyledFlex = styled.div<FormFields>`
  background-color: ${({ bg }) => bg || "#1a1a1a"};
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  justify-content: ${({ justify }) => justify || "center"};
  align-items: ${({ align }) => align || "center"};
  flex-wrap: ${({ wrap }) => wrap || "nowrap"};
  padding: ${({ padding }) => padding || "0"};
  min-width: ${({ minWidth }) => minWidth || "auto"};
  max-width: ${({ maxWidth }) => maxWidth || "auto"};
  gap: ${({ gap }) => gap || "0"};
`;

const Flex = (props: PropsWithChildren<FormFields>) => {
  return <StyledFlex {...props} />;
};

export default Flex;
