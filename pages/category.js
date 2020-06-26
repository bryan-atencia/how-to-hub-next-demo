import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout.js'

export default () => {
  return <Layout>
            <h1>Category</h1>
            <Link href="/"><a style={{ display:"block", margin:"10px 0" }}>Back Home</a></Link>
            <Link href="/subcategory"><a>To subcategory</a></Link>
          </Layout>
}
