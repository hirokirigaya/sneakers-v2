import Link from "next/link";
import { BackTop } from "../../reusable/BackTop";
import * as Styled from "./styles";

const Footer = (): JSX.Element => {
  return (
    <Styled.Container>
      <div className="logo">
        <Link href="/">
          <h2>sneakers</h2>
        </Link>
        <p>Ande com beleza.</p>
      </div>
      <div className="navigation">
        <nav className="navigation-footer">
          <ul>
            <li>Navegação</li>
            {NavLinks.map((link) => {
              return (
                <li key={link.id}>
                  <Link href={link.path}>{link.name}</Link>
                </li>
              );
            })}
          </ul>
          <ul>
            <li>Contato</li>
            {networks.map((link) => {
              return (
                <li key={link.id}>
                  <Link href={link.path}>{link.name}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <div className="to-top">
        <BackTop />
      </div>
    </Styled.Container>
  );
};

const NavLinks = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Produtos",
    path: "/products",
  },
  {
    id: 3,
    name: "Sobre",
    path: "/",
  },
];

const networks = [
  {
    id: 1,
    name: "Facebook",
    path: "#",
  },
  {
    id: 2,
    name: "Instagram",
    path: "#",
  },
  {
    id: 3,
    name: "Twitter",
    path: "#",
  },
];
export { Footer };
