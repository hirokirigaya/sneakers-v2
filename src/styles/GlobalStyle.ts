import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body, button, input, textarea {
    font-family: 'Kumbh Sans', 'Arial', sans-serif;
    font-size: 1rem;
  }

  body {
    background: ${({ theme }) => theme.colors.gray[100]};
  }

  button {
    cursor: pointer;
  }

  .swiper-button-next:after,
  .swiper-button-prev:after {
    color: ${({ theme }) => theme.colors.text.secondary};
  }

  .swiper-button-prev.swiper-button-disabled,
  .swiper-button-next.swiper-button-disabled {
    display: none;
  }

`;
