import Link from 'next/link'
import Layout from '../components/layout'
import Head from 'next/head';
import ProductCard from '../components/ProductCard/productcard';
import axios from 'axios';
import styles from './index.module.css';

function HomePage({ products }) {   
  return (
    <Layout>
      <Head>
        <title>Anasayfa</title>
      </Head>      
      <div className={styles.product_list}>
        {
          products.map(product => (
            <ProductCard 
              key={product.id} 
              product={product}
            />
          ))
        }        
      </div>
    </Layout>
  )
}

export const getStaticProps = async () => {
  // data fetch    
  const res = await axios.get(`https://fakestoreapi.com/products`);  
  
  if(!res.data){
    return {
      notFound: true,
    }
  }

  return {
    props: {
      products: res.data || {}
    }, // will be passed to the page component as props
  }  
}

export default HomePage
