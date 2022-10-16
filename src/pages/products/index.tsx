import { api } from "../../api/Api";
import { useEffect, useRef, useState } from "react";
import * as Styled from "../../styles/pages/Products/styles";
import { Product } from "../../interfaces/Product";
import { CardProduct } from "../../components/reusable/CardProduct";

const Products = (): JSX.Element => {
  const [products, setProducts] = useState<Product[]>([]);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridProducts = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      await api.get("/products").then((response) => {
        return setProducts(response.data);
      });
    };
    fetchData();
  }, []);

  useEffect(() => {
    const animatedContainer = async () => {
      if (headerRef.current && gridProducts.current) {
        const scrollReveal = (await import("scrollreveal")).default;
        scrollReveal().reveal(headerRef.current, {
          duration: 800,
          delay: 300,
          easing: "ease-in-out",
          reset: false,
          origin: "bottom",
          distance: "10px",
        });
        scrollReveal().reveal(gridProducts.current, {
          duration: 800,
          delay: 500,
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
    <Styled.Container>
      <Styled.FilterHeader ref={headerRef}>
        <select name="category" id="category">
          <option value="1">Categoria 1</option>
          <option value="2">Categoria 2</option>
          <option value="3">Categoria 3</option>
        </select>
        <select name="genero" id="genero">
          <option value="1">Genero</option>
          <option value="2">Masculino</option>
          <option value="3">Femenino</option>
        </select>
        <select name="colecao" id="colecao">
          <option value="1">Coleção</option>
          <option value="3">Primavera</option>
          <option value="3">Verão</option>
          <option value="3">Inverno</option>
          <option value="2">Outono</option>
        </select>
      </Styled.FilterHeader>
      <Styled.GridProducts ref={gridProducts}>
        <div className="container-products">
          {products.map((product) => {
            return <CardProduct product={product} key={product.id} />;
          })}
        </div>
      </Styled.GridProducts>
    </Styled.Container>
  );
};

export default Products;
