import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.text.primary};
  align-items: center;
  border: none;
  background: transparent;
  gap: .5rem;
  transition: all 200ms ease-in-out;
  min-height: 80px;
  svg {
    font-size: ${({ theme }) => theme.fontSizes["4xl"]};
  }
  p {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
  &:hover {
  color: ${({ theme }) => theme.colors.gray[900]};
    gap: 1.5rem;
  }
`