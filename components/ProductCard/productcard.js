import Link from 'next/link';
import styles from './productcard.module.css';

function ProductCard({ id, title, image, price }) {
  return (
    <div className={styles.product_card}>
      <Link href="/product/[id]" as={`/product/${id}`}>
         <a rel="noferrerer">
            <div className={styles.image_container}>
               <img src={image} alt={title} />
            </div>
            <div className={styles.description}>
               <div className={styles.product_title}>                  
                  <h3>{title}</h3>
               </div>
               <span className={styles.price}>{price}</span>
            </div>            
         </a>         
      </Link>
    </div>
  )
}

export default ProductCard
