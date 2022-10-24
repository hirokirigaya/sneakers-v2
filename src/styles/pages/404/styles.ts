import styled from "styled-components";

export const Container = styled.main`
  max-width: 1280px;
  min-height: 60vh;
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  margin-top: 7rem;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  p.text {
    font-size: ${({ theme }) => theme.fontSizes["3xl"]};
    color: ${({ theme }) => theme.colors.text.primary};
    text-align: center;
  }

  p.redirect {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    color: ${({ theme }) => theme.colors.blue[500]};
    text-align: center;
    cursor: pointer;
  }
`;