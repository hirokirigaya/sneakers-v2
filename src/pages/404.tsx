import Link from "next/link";
import { Error404 } from "../components/reusable/Error404";
import * as Styled from "../styles/pages/404/styles";

const ErrorPage = (): JSX.Element => {
  return (
    <Styled.Container>
      <Error404 />
      <p className="text">Página não encontrada</p>
      <Link href="/">
        <p className="redirect">Voltar para a página inicial</p>
      </Link>
    </Styled.Container>
  );
};

export default ErrorPage;
