import Link from "next/link";
import { useContext } from "react";
import { Product } from "../../../interfaces/Product";
import { cartStore } from "../../../services/useProduct";
import { Button } from "../Button";
import * as Styled from "./styles";

const CardProduct = ({ product }: { product: Product }) => {
  const { addItemCart } = useContext(cartStore);
  return (
    <Styled.ContainerCard>
      <Link href={"/products/" + product.slug}>
        <img src={product.images[0].url} alt={product.name} />
      </Link>
      <div className="desc">
        <div className="desc-price">
          <p className="price">
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(product.price)}
            <span>
              Em até 5x de{" "}
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(product.price / 5)}{" "}
              sem juros
            </span>
          </p>
          <Link href={"/products/" + product.slug}>
            <p className="name">{product.name}</p>
          </Link>
        </div>
        {product.countInStock ? (
          <Button
            variant="secondary"
            padding=".5rem"
            onClick={() =>
              addItemCart({
                id: Number(product.id),
                quant: 1,
                images: product.images,
                title: product.name,
                price: product.price,
                oldPrice: product.oldPrice,
                slug: product.slug,
                countInStock: product.countInStock,
              })
            }
          >
            Add Cart
          </Button>
        ) : (
          <Button
            variant="secondary"
            padding=".5rem"
            style={{ background: "#a5a5a5", cursor: "not-allowed" }}
          >
            Produto Indisponível
          </Button>
        )}
      </div>
    </Styled.ContainerCard>
  );
};

export { CardProduct };
