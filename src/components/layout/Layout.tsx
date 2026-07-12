import Footer from './Footer'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="min-h-dvh flex flex-col">
      <NavBar />
      <main className="flex-1 w-11/12 py-4 md:w-4/5 lg:w-3/5 md:py-12 mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
