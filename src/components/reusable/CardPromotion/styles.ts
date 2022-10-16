import styled from "styled-components";

export const CardPromotion = styled.div`
  height: 26rem;
  position: relative;
  transition: all 200ms ease-in-out;

  .hover-price {
    position: absolute;
    top: 0;
    opacity: 0;
    display: flex;
    flex-direction: column;
    text-align: center;
    color: ${({ theme }) => theme.colors.default.white};
    cursor: pointer;
    gap: 1rem;
    padding: 0 20px;
    h2 {
      color: ${({ theme }) => theme.colors.text.tertiary};
    }

    p {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      font-size: ${({ theme }) => theme.fontSizes["2xl"]};
      font-weight: 600;
      color: ${({ theme }) => theme.colors.text.tertiary};

      span {
        font-size: ${({ theme }) => theme.fontSizes["xl"]};
        text-decoration: line-through;
      }
    }
  }

  &:hover {
    .hover-price {
      opacity: 1;
      position: absolute;
      background-color: rgba(0, 0, 0, 0.5);
      width: 100%;
      height: 100%;
      display: flex;
      top: 0;
      justify-content: center;
      border-radius: 0.5rem;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.5rem;
  }
`;
