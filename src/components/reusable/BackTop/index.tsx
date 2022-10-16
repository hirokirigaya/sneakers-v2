import { FiArrowUp } from "react-icons/fi"
import * as Styled from './styles'
const BackTop = () : JSX.Element => {

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <Styled.Container onClick={handleScrollToTop}>
      <FiArrowUp />
      <p>Voltar para o topo</p>
    </Styled.Container>
  )
}

export { BackTop };