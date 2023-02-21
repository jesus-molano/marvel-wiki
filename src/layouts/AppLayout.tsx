import { Footer, Header } from '@components/index'

interface Props {
  children: React.ReactNode
}

export const AppLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
