import styles from './productcontent.module.css';

function ProductContent({ product }) {
  return (
    <div className={styles.product_detail_container}>
       <div className={styles.product_image}>
         <img src={product.image} alt={product.title} />         
       </div>
       <div className={styles.description}>
          <h2><strong>Title :</strong> {product.title}</h2>
          <p><strong>Price :</strong> {product.price}</p>
          <p><strong>Rating :</strong> {product.rating.rate}</p>
          <p><strong>Category :</strong> {product.category}</p>
          <p><strong>Description :</strong> {product.description}</p>
       </div>
    </div>
  )
}

export default ProductContent
