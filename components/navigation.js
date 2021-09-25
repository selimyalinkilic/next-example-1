import Link from 'next/link'

function Navigation() {
  return (
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/collections">
        <a>Collections</a>
      </Link>
    </nav>
  )
}

export default Navigation
