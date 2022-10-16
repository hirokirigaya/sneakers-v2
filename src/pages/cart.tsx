import { useContext, useEffect, useRef, useState } from "react";
import { Button } from "../components/reusable/Button";
import { CardCart } from "../components/reusable/CardCart";
import { cartStore } from "../services/useProduct";
import * as Styled from "../styles/pages/Cart/styles";

const Cart = (): JSX.Element => {
  const { state } = useContext(cartStore);
  const [loading, setLoading] = useState(true);
  const container = useRef<HTMLDivElement>(null)

  const cartItems = state.cart.cartItems;

  useEffect(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    const animatedContainer = async () => {
      if (container.current) {
        const scrollReveal = (await import("scrollreveal")).default;
        scrollReveal().reveal(container.current, {
          duration: 800,
          delay: 100,
          easing: "ease-in-out",
          reset: false,
          origin: "bottom",
          distance: "10px",
        });
      }
    };
    animatedContainer();
  }, []);

  return (
    <Styled.Container ref={container}>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {cartItems.length > 0 ? (
            <div className="container-cart">
              <div className="container-table">
                <table className="table" cellSpacing={0} cellPadding={0}>
                  <thead>
                    <tr className="header">
                      <th>Produto</th>
                      <th className="quant">Quantidade</th>
                      <th>Preço</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <CardCart item={item} key={item.id} />
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="checkout">
                <Button variant="secondary">Continuar</Button>
              </div>
            </div>
          ) : (
            <div className="cart-out">
              <h1>Carrinho vazio</h1>
            </div>
          )}
        </>
      )}
    </Styled.Container>
  );
};

export default Cart;
