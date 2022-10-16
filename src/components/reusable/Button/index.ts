import styled from "styled-components";
import {
  alignItems,
  AlignItemsProps,
  buttonStyle,
  ButtonStyleProps,
  color,
  ColorProps,
  flex,
  FlexProps,
  grid,
  GridProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from "styled-system";

type ButtonProps = ButtonStyleProps &
  FlexProps &
  ColorProps &
  LayoutProps &
  SpaceProps &
  TypographyProps &
  AlignItemsProps &
  GridProps;

export const Button = styled("button")<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: none;
  cursor: pointer;
  font-weight: 600;
  padding: .8rem;
  border-radius: 0.5rem;
  transition: filter 0.2s;
  ${typography}
  ${flex}
  ${space}
  ${color}
  ${layout}
  ${buttonStyle}
  ${alignItems}
  ${grid}
`;

Button.defaultProps = {
  variant: "primary",
};
