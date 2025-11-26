import NavBar from './NavBar'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavBar />
      <main className="min-h-screen px-72 py-12">{children}</main>
    </>
  )
}

export default Layout
