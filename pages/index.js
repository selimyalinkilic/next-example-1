import Link from 'next/link'
import Layout from '../components/layout'
import Head from 'next/head';

export const getStaticProps = async () => {
  // data fetch  
  const res = await fetch('https://fakestoreapi.com/products');
  const data = await res.json();

  return {
    props: {
      products: data
    }, // will be passed to the page component as props
  }  
}

function HomePage({ products }) {  
  console.log(products);
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
