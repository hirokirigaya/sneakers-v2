import Cookies from "js-cookie";
import { createContext, useReducer } from "react";
import { CartItem, Item } from "../interfaces/CartItem";

const initialState = {
  cart: {
    cartItems: Cookies.get("cartItems")
      ? JSON.parse(Cookies.get("cartItems")!)
      : [],
  },
};

interface ContextProps {
  state: State;
  dispatch: React.Dispatch<Action>;
  addItemCart: (item: Item) => void;
}



type State = {
  cart: {
    cartItems: CartItem[];
  };
};

type Action = {
  type: string;
  payload: {
    id: number;
    quant: number;
    title?: string;
    price?: number;
    images?: {
      url: string;
      id: number;
    }[];
    oldPrice?: number;
    slug?: string;
    countInStock?: number;
  };
};

export const cartStore = createContext<ContextProps>({
  dispatch: () => null,
  state: initialState,
  addItemCart: () => null,
});

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADD_ITEM_CART": {
      const itemExist = state.cart.cartItems.find(
        (item) => item.id === action.payload.id
      );

      const newCartItems = itemExist
        ? state.cart.cartItems.map((item) => {
            if (item.id === action.payload.id) {
              return {
                ...item,
                quant: item.quant && item.quant + action.payload.quant,
              };
            }
            return item;
          })
        : [...state.cart.cartItems, action.payload];

      Cookies.set("cartItems", JSON.stringify(newCartItems));
      return {
        ...state,
        cart: {
          cartItems: newCartItems,
        },
      };
    }
    case "SUM_ITEM_CART": {
      const newCartItems = state.cart.cartItems.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            quant: action.payload.quant,
          };
        }
        return item;
      });
      Cookies.set("cartItems", JSON.stringify(newCartItems));
      return {
        ...state,
        cart: {
          cartItems: [...newCartItems],
        },
      };
    }
    case "REMOVE_ITEM_CART": {
      const newCartItems = state.cart.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      Cookies.set("cartItems", JSON.stringify(newCartItems));
      return {
        ...state,
        cart: { cartItems: [...newCartItems] },
      };
    }
    case "SUB_ITEM_CART": {
      const newCartItems = state.cart.cartItems.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            quant: action.payload.quant,
          };
        }
        return item;
      });
      Cookies.set("cartItems", JSON.stringify(newCartItems));
      return {
        ...state,
        cart: {
          cartItems: [...newCartItems],
        },
      };
    }
  }
  return state;
}

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addItemCart = ({
    quant,
    id,
    title,
    price,
    images,
    oldPrice,
    slug,
    countInStock,
  }: {
    quant?: number;
    id: number;
    title?: string;
    price?: number;
    images?: {
      url: string;
      id: number;
    }[];
    oldPrice?: number;
    slug?: string;
    countInStock?: number;
  }) => {
    dispatch({
      type: "ADD_ITEM_CART",
      payload: {
        id: id,
        quant: quant ? quant : 1,
        title: title,
        price: price,
        images: images,
        oldPrice: oldPrice,
        slug: slug,
        countInStock: countInStock,
      },
    });
  };

  return (
    <cartStore.Provider value={{ state, dispatch, addItemCart }}>
      {children}
    </cartStore.Provider>
  );
};
