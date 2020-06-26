import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout.js'

export default () => {
  return <Layout>
            <h1>Subcategory</h1>
            <Link href="/"><a style={{ display:"block", margin:"10px 0" }}>Back home</a></Link>
            <Link href="/category"><a>Back to category</a></Link>
          </Layout>
}
