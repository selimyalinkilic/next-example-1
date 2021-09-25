import Layout from '../../components/layout'
import Head from 'next/head';
import axios from 'axios';
import ProductContent from '../../components/ProductContent/productcontent';

function ProductDetail({ product }) {      
  return (
    <Layout>
      <Head>
        <title>{product.title}</title>
      </Head>            
      <ProductContent key={product.id} product={product} /> 
    </Layout>
  )
}

export const getStaticPaths = async () => {
   const res = await axios.get('https://fakestoreapi.com/products'); 
   return { 
      paths: res.data.map(item => {
         return { params: { id: `${item.id}` } }
      }),
      fallback: true 
   };   
 }

export const getStaticProps = async ({ params }) => {
  // data fetch    
  const res = await axios.get(`https://fakestoreapi.com/products/${params.id}`);  
  
  return {
    props: {
      product : res.data
    }, 
  }  
}


export default ProductDetail
