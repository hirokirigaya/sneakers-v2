import styled from "styled-components";

export const SliderContainer = styled.div`
  min-width: 350px;
  max-width: 350px;
  min-height: 350px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;

  @media (min-width: 524px) {
    min-width: 480px;
    max-width: 480px;
    min-height: 480px;
  }

  @media (min-width: 1000px) {
    max-width: 576px;
    max-height: 576px;
    min-height: 576px;
  }

  .slide {
    opacity: 0;
    transition: opacity 0.2s;
    position: absolute;
    width: 100%;
    border-radius: 10px;
  }

  .on {
    opacity: 1;
  }

  button {
    position: absolute;
    z-index: 1;
    border: none;
    background: ${({ theme }) => theme.colors.text.primary};
    border-radius: 99999px;
    padding: 0.5rem;
    color: #fff;
    display: flex;
    align-items: center;

    svg {
      font-size: ${({ theme }) => theme.fontSizes.lg};
    }
  }

  .dots {
    display: flex;
    z-index: 2;
    position: absolute;
    bottom: 30px;
    gap: 1rem;
    justify-content: center;
    left: 0;
    right: 0;

    @media (min-width: 1000px) {
      bottom: 60px;
    }

    @media (min-width: 1320px) {
      bottom: 50px;
    }

    .dot {
      position: relative;
      border-radius: 9999px;
      background-color: #00000060;
      width: 10px;
      height: 10px;
      cursor: pointer;
    }

    .active {
      position: relative;
      border-radius: 9999px;
      background-color: #00000060;
      width: 10px;
      height: 10px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      vertical-align: middle;

      &::before {
        content: "";
        background-color: ${({ theme }) => theme.colors.blue[500]};
        border-radius: 9999px;
        width: 7px;
        height: 7px;
        vertical-align: middle;
        display: inline-block;
      }
    }
  }

  .next {
    right: 10px;
    z-index: 2;
  }

  .prev {
    left: 10px;
    z-index: 2;
  }
`;
