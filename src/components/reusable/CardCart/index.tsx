import { CartItem, Item } from "../../../interfaces/CartItem";
import { useContext, useState, useEffect } from "react";
import { cartStore } from "../../../services/useProduct";
import * as Styled from "./styles";
import Link from "next/link";
import { Button } from "../Button";
import { FiMinus, FiPlus } from "react-icons/fi";

interface cardProps {
  item: Item;
}

const CardCart = ({ item }: cardProps) => {
  const [value, setValue] = useState(0);
  const { state, dispatch } = useContext(cartStore);

  const totalInStock = item.countInStock;
  
  const handleSumValue = (item: any) => {
    if (item.quant === totalInStock) {
      return;
    }

    if (totalInStock && item.quant > totalInStock) {
      return;
    }

    dispatch({
      type: "SUM_ITEM_CART",
      payload: {
        id: item.id,
        quant: item.quant + 1,
      },
    });
  };

  const handleSubValue = (item: any) => {
    if (item.quant === 1) {
      return;
    }
    dispatch({
      type: "SUB_ITEM_CART",
      payload: {
        id: item.id,
        quant: item.quant - 1,
      },
    });
  };

  const removeItemCart = (item: Item) => {
    dispatch({
      type: "REMOVE_ITEM_CART",
      payload: {
        id: item.id,
        quant: 0,
      },
    });
  };

  const Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    let change = e.target.value;
    setValue(parseInt(change));
  };

  const oldPrice = item.oldPrice && item.quant && item.oldPrice * item.quant;
  const itemPrice = item.price && item.quant && item.price * item.quant;
  return (
    <Styled.ContainerCardCart>
      <td className="product">
        <img src={item.images[0].url} alt="" />
        <Link href={`/products/${item.slug}`}>
          <p>{item.title}</p>
        </Link>
      </td>
      <td>
        <div className="box-amount">
          <div className="button-amount">
            <Button onClick={() => handleSubValue(item)} variant="tertiary">
              <FiMinus />
            </Button>
            <input type="number" min="0" value={item.quant} onChange={Change} />
            <Button onClick={() => handleSumValue(item)} variant="tertiary">
              <FiPlus />
            </Button>
          </div>
        </div>
      </td>
      <td>
        <div className="price">
          <p className="old-price">
            {oldPrice &&
              oldPrice.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
          </p>
          <p>
            {itemPrice &&
              itemPrice.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
          </p>
        </div>
      </td>
      <td className="trash">
        <div>
          <Button onClick={() => removeItemCart(item)} variant="tertiary">
            Remover
          </Button>
        </div>
      </td>
    </Styled.ContainerCardCart>
  );
};

export { CardCart };
