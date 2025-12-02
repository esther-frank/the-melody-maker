import NavBar from './NavBar'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavBar />
      <main className="min-h-screen w-11/12 py-4 md:w-4/5 lg:w-3/5 xl:w-1/2 md:py-12 mx-auto">
        {children}
      </main>
    </>
  )
}

export default Layout
