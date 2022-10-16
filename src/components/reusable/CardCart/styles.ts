import styled from "styled-components";

export const ContainerCardCart = styled.tr`
  width: 100%;

  td {
    padding-top: 10px;
  }

  td.product {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    max-width: 450px;
    img {
      border-radius: 0.5rem;
      width: 100px;
      height: 100px;
      object-fit: cover;
    }

    p {
      font-size: ${({ theme }) => theme.fontSizes.md};
      color: ${({ theme }) => theme.colors.text.primary};
      cursor: pointer;
    }
  }

  td {
    .box-amount {
      display: flex;
      align-items: center;
      justify-content: center;
      .button-amount {
        width: 8rem;
        display: flex;
        justify-content: center;
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

    .price {
      font-size: ${({ theme }) => theme.fontSizes.xl};
      display: flex;
      flex-direction: column;

      .old-price {
        font-size: ${({ theme }) => theme.fontSizes.md};
        text-decoration: line-through;
      }
    }
  }
  .trash {
    width: 50px;
    div {
      display: flex;
      justify-content: center;
    }
  }
`;
