import { api } from "../../api/Api";
import { useEffect, useRef, useState } from "react";
import * as Styled from "../../styles/pages/Products/styles";
import { Product } from "../../interfaces/Product";
import { CardProduct } from "../../components/reusable/CardProduct";
import { Button } from "../../components/reusable/Button";
import { FiX } from "react-icons/fi";

const Products = (): JSX.Element => {
  const [products, setProducts] = useState<Product[]>([]);
  const [methodFilter, setMethodFilter] = useState("");
  const [search, setSearch] = useState("");
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

  const setDataFilter = (method: string, search: string) => {
    setMethodFilter(method);
    setSearch(search);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (search !== "" && methodFilter !== "") {
        await api
          .get(`/products/filter?${methodFilter}=${search}`)
          .then((response) => {
            return setProducts(response.data);
          });
      } else {
        await api.get("/products").then((response) => {
          return setProducts(response.data);
        });
      }
    };
    fetchData();
  }, [methodFilter, search]);

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
          <option value="categoria-1">Categoria 1</option>
          <option value="categoria-2">Categoria 2</option>
          <option value="categoria-3">Categoria 3</option>
        </select>
        <select
          name="genero"
          id="genero"
          onChange={(e) => setDataFilter("genre", e.target.value)}
        >
          <option selected disabled>
            Gênero
          </option>
          <option value="masculino">Masculino</option>
          <option value="femenino">Femenino</option>
          <option value="infantil">Infantil</option>
        </select>
        <select
          name="colecao"
          id="colecao"
          onChange={(e) => setDataFilter("category", e.target.value)}
        >
          <option selected disabled>
            Coleção
          </option>
          <option value="esporte">Esporte</option>
          <option value="casual">Casual</option>
        </select>
        {methodFilter && (
          <Button
            variant="secondary"
            padding=".5rem 1rem"
            onClick={() => setDataFilter("", "")}
            width="110px"
          >
            Limpar <FiX fontWeight="bold" />
          </Button>
        )}
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
