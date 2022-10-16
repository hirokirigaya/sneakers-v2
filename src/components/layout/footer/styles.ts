import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  max-width: 1280px;
  min-height: 10rem;
  margin: 0 auto;
  padding: 50px 20px;
  width: 100%;
  align-items: flex-start;
  position: relative;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 5rem;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 100%;
    height: 1px;
    background: ${({ theme }) => theme.colors.gray[500]};
  }

  .logo {
    display: flex;
    align-items: center;
    flex-direction: column;
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }

  .navigation {
    .navigation-footer {
      display: flex;
      gap: 5rem;

      ul {
        list-style: none;
        display: flex;
        gap: 0.5rem;
        flex-direction: column;

        li {
          font-size: ${({ theme }) => theme.fontSizes.md};
          color: ${({ theme }) => theme.colors.text.primary};
          font-weight: 700;

          a {
            font-size: ${({ theme }) => theme.fontSizes.md};
            color: ${({ theme }) => theme.colors.text.primary};
            text-decoration: none;
            font-weight: 500;
          }
        }
      }
    }
  }
`;
