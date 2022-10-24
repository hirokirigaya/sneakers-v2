import * as Styled from './styles';

const Error404 = () : JSX.Element => {
  return (
    <Styled.Container>
      <div className="error" data-text="404">404</div>
    </Styled.Container>
  )
}

export { Error404 };
