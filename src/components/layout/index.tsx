import { ReactNode } from "react"
import { Footer } from "./footer";
import { Header } from "./header";

const ContainerLayout = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export { ContainerLayout };