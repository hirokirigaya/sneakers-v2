import styled from "styled-components";

export const Container = styled.main`
  max-width: 1280px;
  width: 100%;
  min-height: 80vh;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 0 20px;
  margin-top: 7rem;

  .container-cart {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  .container-table {
    width: 100%;
    overflow-x: auto;
    
    .table {
      min-width: 1120px;
      width: 100%;

      thead,
      tbody {
        width: 100%;
      }

      thead {
        tr.header {
          text-align: left;
          th {
            width: 300px;
          }

          th.quant {
            text-align: center;
          }
        }
      }
    }
  }


  .checkout {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 0 20px;
  }

}
.cart-out {
  color: ${({ theme }) => theme.colors.text.primary};
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  min-height: 450px;
}

`;
