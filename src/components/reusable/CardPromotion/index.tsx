import Link from "next/link";
import { Product } from "../../../interfaces/Product";
import * as Styled from "./styles";

interface CardPromotionProps {
  product: Product;
  title: string;
}
const CardPromotion = ({ product, title }: CardPromotionProps): JSX.Element => {
  return (
    <Styled.CardPromotion>
      <img src={product?.images[0].url} />
      <Link href={`/products/${product?.slug}`}>
        <div className="hover-price">
          <h2>{title}</h2>
          <h3>{product?.name}</h3>
          <p className="price">
            <span>
              {product?.oldPrice.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
            {product?.price.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </div>
      </Link>
    </Styled.CardPromotion>
  );
};

export { CardPromotion };
