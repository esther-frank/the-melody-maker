import NavBar from './NavBar'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavBar />
      <main className="min-h-screen w-11/12 md:w-4/5 lg:w-3/5 xl:w-1/2 mx-auto py-12">
        {children}
      </main>
    </>
  )
}

export default Layout
