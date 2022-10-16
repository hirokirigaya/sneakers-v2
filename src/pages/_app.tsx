import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { ContainerLayout } from '../components/layout'
import { CartProvider } from '../services/useProduct'
import GlobalStyle from '../styles/GlobalStyle'
import { theme } from '../styles/variables'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <ThemeProvider theme={theme}>
        <ContainerLayout>
          <GlobalStyle />
          <Component {...pageProps} />
        </ContainerLayout>
      </ThemeProvider>
    </CartProvider>
  )
}

export default MyApp
