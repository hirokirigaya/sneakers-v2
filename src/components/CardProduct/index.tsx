import Link from "next/link";
import { Product } from "../../interfaces/Product";
import * as Styled from "./styles";

const CardProduct = ({ product }: { product: Product }) => {
  return (
    <Styled.ContainerCard>
      <Link href={"/products/" + product.slug}>
        <img src={product.images[0].url} alt={product.name} />
      </Link>
      <div className="desc">
        <div className="desc-price">
          <p className="price">
          {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}
            <span>Em até 5x de  {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price / 5)} sem juros</span>
          </p>
          <p className="product-name">{product.name}</p>
        </div>
        <button>Add Cart</button>
      </div>
    </Styled.ContainerCard>
  );
};

export { CardProduct };
