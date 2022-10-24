import styled from "styled-components";

export const Container = styled.main`
  max-width: 1280px;
  width: 100%;
  min-height: 90vh;
  margin: 4rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  margin-top: 7rem;
`;

export const FilterHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 2rem;
  }
  select {
    border-radius: 0.5rem;
    border: 1px solid ${({ theme }) => theme.colors.text.tertiary};
    padding: 0.5rem;
    min-width: 110px;
    text-align: center;
  }
`;

export const GridProducts = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;

  .container-products {
    display: flex;
    margin: 0 auto;
    gap: 1rem;
    width: 96%;
    flex-wrap: wrap;

    @media (max-width: 1024px) {
      justify-content: center;
    }
  }
`;
