import styles from './productcontent.module.css';

function ProductContent({ product }) {
  const {title, price, rating, category, description, image} = product;
  return (
    <div className={styles.product_detail_container}>
       <div className={styles.product_image}>
         <img src={image} alt={title} />         
       </div>
       <div className={styles.description}>
          <h2><strong>Title :</strong> {title}</h2>
          <p><strong>Price :</strong> {price}</p>
          <p><strong>Rating :</strong> {rating.rate}</p>
          <p><strong>Category :</strong> {category}</p>
          <p><strong>Description :</strong> {description}</p>
       </div>
    </div>
  )
}

export default ProductContent
