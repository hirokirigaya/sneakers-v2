import styled from "styled-components";

export const Container = styled.main`
  max-width: 1280px;
  min-height: 80vh;
  margin: 3rem auto;
  display: flex;
  gap: 5rem;
  flex-direction: column;
  padding: 0 20px;
  margin-top: 7rem;
`;

export const SliderImages = styled.div`
  height: 25rem;
  width: 100%;
  position: relative;

  .drop-gradient {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 25rem;
    width: 100%;
    padding-right: 6rem;
    position: absolute;
    background-image: linear-gradient(to left, #fff, transparent);

    @media (max-width: 768px) {
      justify-content: center;
      padding-right: 0;
    }

    h2 {
      font-size: ${({ theme }) => theme.fontSizes["4xl"]};
      color: ${({ theme }) => theme.colors.text.primary};
      cursor: pointer;

      @media (max-width: 440px) {
        font-size: ${({ theme }) => theme.fontSizes["2xl"]};
      }
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.5rem;
  }
`;

export const FirstSection = styled.section`
  display: flex;
  align-items: center;
  position: relative;
  z-index: 0;

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

  .next {
    right: 10px;
    z-index: 2;
  }

  .prev {
    left: 10px;
    z-index: 2;
  }
`;

export const SecondSection = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export const ThirdSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  .header {
    display: flex;
    gap: 0.5rem;
    align-items: center;

    p {
      font-size: ${({ theme }) => theme.fontSizes.xl};
      color: ${({ theme }) => theme.colors.text.primary};
      font-weight: 700;
    }
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.blue[500]};
      transition: all 200ms ease-in-out;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .box-slider {
    padding: 0 1rem;
  }
`;
