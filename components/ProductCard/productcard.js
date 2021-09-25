import Link from 'next/link';
import styles from './productcard.module.css';

function ProductCard({ product }) {
  return (
    <div className={styles.product_card}>
      <Link href="/product/[id]" as={`/product/${product.id}`}>
         <a rel="noferrerer">
            <div className={styles.image_container}>
               <img src={product.image} alt={product.title} />
            </div>
            <div className={styles.description}>
               <div className={styles.product_title}>                  
                  <h3>{product.title}</h3>
               </div>
               <span className={styles.price}>{product.price}</span>
            </div>            
         </a>         
      </Link>
    </div>
  )
}

export default ProductCard
