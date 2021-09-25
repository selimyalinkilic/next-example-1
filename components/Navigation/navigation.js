import Link from 'next/link';
import styles from './navigation.module.css';

function Navigation() {
  return (
    <nav className={styles.nav}>
      <Link href="/" >
        <a className={styles.link}>Home</a>
      </Link>
      <Link href="/collections" >
        <a className={styles.link}>Collections</a>
      </Link>
      <Link href="/about" >
        <a className={styles.link}>About</a>
      </Link>
      <Link href="/contact" >
        <a className={styles.link}>Contact</a>
      </Link>
    </nav>
  )
}

export default Navigation
