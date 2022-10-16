import styled from "styled-components";

export const Container = styled.header`
  max-width: 1280px;
  height: 5rem;
  margin: 0 auto;
  padding: 10px 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  background-color: ${({ theme }) => theme.colors.gray[100]};

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 100%;
    height: 1px;
    background: ${({ theme }) => theme.colors.gray[500]};
  }

  .btn-burger {
    display: none;
  }
  @media (max-width: 1024px) {
    .btn-burger {
      display: block;
      font-size: ${({ theme }) => theme.fontSizes.lg};
    }
  }
`;

export const Navigation = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;

  .title {
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: ${({ theme }) => theme.fontSizes["3xl"]};
    line-height: 5rem;
    text-decoration: none;
    transition: all 200ms ease-in-out;
    cursor: pointer;

    @media (max-width: 600px) {
      font-size: ${({ theme }) => theme.fontSizes.xl};
    }

    &:hover {
      filter: brightness(1.2);
    }
  }

  ul {
    display: flex;
    align-items: center;
    gap: 2rem;
    list-style: none;
    @media (max-width: 1024px) {
      display: none;
    }

    li {
      line-height: 5rem;
      transition: all 200ms ease-in-out;
      border-bottom: 3px solid transparent;

      a {
        color: ${({ theme }) => theme.colors.text.primary};
        font-size: ${({ theme }) => theme.fontSizes.lg};
        text-decoration: none;
        font-weight: 600;
        transition: all 200ms ease-in-out;
      }

      &:hover {
        border-bottom: 3px solid ${({ theme }) => theme.colors.red[500]};
        a {
          color: ${({ theme }) => theme.colors.red[500]};
        }
      }
    }
  }
`;

export const SettingsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  line-height: 6rem;

  button {
    background: transparent;
    border: none;
    position: relative;

    .notfication {
      position: absolute;
      top: -5px;
      right: -5px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: ${({ theme }) => theme.colors.red[500]};
    }

    svg {
      font-size: ${({ theme }) => theme.fontSizes["3xl"]};
      color: ${({ theme }) => theme.colors.text.primary};
      transition: all 200ms ease-in-out;

      &:hover {
        color: ${({ theme }) => theme.colors.red[500]};
      }
    }
  }

  svg.user {
    font-size: ${({ theme }) => theme.fontSizes["3xl"]};
    color: ${({ theme }) => theme.colors.text.primary};
    transition: all 200ms ease-in-out;
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.colors.red[500]};
    }
  }
`;

export const NavMobile = styled.div`
  background-color: ${({ theme }) => theme.colors.default.white};
  position: fixed;
  top: 0;
  width: 60%;
  height: 100vh;
  z-index: 999;
  transition: all 600ms cubic-bezier(0.49,-0.02, 0.17, 1);
  opacity: 0;
  left: -100vw;

  nav {
    width: 100%;
    padding: 2rem;
    ul {
      width: 100%;
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 2rem;

      li {
        a {
          color: ${({ theme }) => theme.colors.text.primary};
          font-size: ${({ theme }) => theme.fontSizes.xl};
          font-weight: 600;
          text-decoration: none;
        }
      }
    }
  }
  
  &.active {
    left: 0;
    opacity: 1;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: -100vw;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 998;
  opacity: 0;
  transition: all 600ms cubic-bezier(0.49,-0.02, 0.17, 1);

  &.active {
    left: 0;
    opacity: 1;
  }
`;
