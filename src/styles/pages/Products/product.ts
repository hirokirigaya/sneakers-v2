import styled from "styled-components";

export const Container = styled.main`
  max-width: 1280px;
  min-height: 80vh;
  margin: 3rem auto;
  display: flex;
  gap: 5rem;
  flex-direction: column;
  margin-top: 7rem;
`;

export const FirstSection = styled.section`
  .box-product {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;

    @media (max-width: 1000px) {
      grid-template-columns: 1fr;
    }

    .box-slider {
      width: 80%;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 370px;
    }
  }
`;

export const SliderImages = styled.div`
  height: 30rem;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
  }
`;

export const DescribreProduct = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  height: 100%;
  width: 100%;
  gap: 2rem;

  @media (max-width: 1000px) {
    align-items: center;
    text-align: center;
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSizes["2xl"]};
    color: ${({ theme }) => theme.colors.text.primary};
    font-weight: 700;
  }

  .desc {
    font-size: ${({ theme }) => theme.fontSizes.md};
    color: ${({ theme }) => theme.colors.gray[900]};
  }

  .price {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    color: ${({ theme }) => theme.colors.text.primary};
    font-weight: 500;
    .old-price {
      font-size: ${({ theme }) => theme.fontSizes.md};
      text-decoration: line-through;
    }
  }

  .frete {
    display: flex;
    gap: 0.5rem;
    align-items: center;

    input[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }

    input {
      border-radius: 0.5rem;
      border: 1px solid ${({ theme }) => theme.colors.text.tertiary};
      padding: 0.5rem;
    }
  }

  .add-cart {
    display: flex;
    align-items: center;
    gap: 1rem;

    .button-amount {
      display: flex;
      border: 1px solid ${({ theme }) => theme.colors.text.tertiary};
      border-radius: 0.5rem;

      input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
      }
      input {
        padding: 0.5rem;
        border: none;
        outline: none;
        width: 2.5rem;
        background-color: transparent;
      }
    }
  }

  .product-out {
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
`;

export const SecondSection = styled.section`
  display: flex;
  padding: 10px 20px;

  .sumary {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const Sizes = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Size = styled.button`
  padding: 0.5rem;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  border: 1px solid ${({ theme }) => theme.colors.text.tertiary};
  background-color: ${({ theme }) => theme.colors.gray[100]};

  &.active {
    background-color: ${({ theme }) => theme.colors.default.black};
    color: ${({ theme }) => theme.colors.default.white};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.default.black};
    color: ${({ theme }) => theme.colors.default.white};
  }
`;
