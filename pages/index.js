import Link from 'next/link'
import Layout from '../components/layout'
import Head from 'next/head'

function HomePage({ products }) {    
  return (
    <Layout>
      <Head>
        <title>Anasayfa</title>
      </Head>      
    </Layout>
  )
}

export async function getStaticProps(context) {
  // data fetch
  const res = await fetch(`https://fakestoreapi.com/products`)
  const data = await res.json()
  return {
    props: {
      products:[data]
    }, // will be passed to the page component as props
  }
}

export default HomePage
