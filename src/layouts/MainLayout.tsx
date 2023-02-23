interface Props {
  title?: string
  children: React.ReactNode
}

export const MainLayout = ({ title, children }: Props) => {
  return (
    <main className='main-container'>
      <section>
        <h2>{title}</h2>
        {children}
      </section>
    </main>
  )
}
