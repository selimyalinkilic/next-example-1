import Navigation from './Navigation/navigation'

function Layout({ children }) {
  return (
    <div>
      <Navigation />
      <main>{children}</main>
    </div>
  )
}

export default Layout
