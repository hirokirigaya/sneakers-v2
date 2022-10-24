import * as Styled from "./styles";
import { BiCartAlt, BiUser } from "react-icons/bi";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { cartStore } from "../../../services/useProduct";
import { Button } from "../../reusable/Button";
import { FiMenu } from "react-icons/fi";

const Header = (): JSX.Element => {
  const { state } = useContext(cartStore);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const cartItems = state.cart.cartItems;

  useEffect(() => {
    setLoading(false);
  }, []);

  const handleClickToggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Styled.Overlay
        className={isOpen ? "active" : ""}
        onClick={handleClickToggleMenu}
      />
      <Styled.NavMobile className={isOpen ? "active" : ""}>
        <nav>
          <ul>
            {navLinks.map((link) => {
              return (
                <li key={link.id} onClick={handleClickToggleMenu}>
                  <Link href={link.path}>{link.title}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </Styled.NavMobile>
      <Styled.Container>
        {!loading && (
          <>
            <Button
              variant="tertiary"
              className="btn-burger"
              onClick={handleClickToggleMenu}
            >
              <FiMenu />
            </Button>
            <Styled.Navigation>
              <Link href="/">
                <h1 className="title">sneakers</h1>
              </Link>
              <nav>
                <ul>
                  {navLinks.map((link) => {
                    return (
                      <li key={link.id}>
                        <Link href={link.path}>{link.title}</Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </Styled.Navigation>
            <Styled.SettingsContainer>
              <Link href="/cart">
                <button>
                  {cartItems.length > 0 && <p className="notfication"></p>}
                  <BiCartAlt />
                </button>
              </Link>
              <BiUser className="user" />
            </Styled.SettingsContainer>
          </>
        )}
      </Styled.Container>
    </>
  );
};

const navLinks = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "Produtos",
    path: "/products",
  },
  {
    id: 3,
    title: "Sobre",
    path: "/about",
  },
];
export { Header };
