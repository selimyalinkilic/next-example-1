import Link from 'next/link'
import Layout from '../components/layout'
import Head from 'next/head';
import axios from 'axios';

export const getStaticProps = async () => {
  // data fetch  
  const {data} = await axios.get('https://fakestoreapi.com/products');  
  
  if(!data){
    return {
      notFound: true,
    }
  }

  return {
    props: {
      products: data || {}
    }, // will be passed to the page component as props
  }  
}

function HomePage({ products }) {    
  return (
    <Layout>
      <Head>
        <title>Anasayfa</title>
      </Head>      
      <div>
        {
          products.map(product => (
            <div key={product.id}>{product.title}</div>
          ))
        }        
      </div>
    </Layout>
  )
}

export default HomePage
