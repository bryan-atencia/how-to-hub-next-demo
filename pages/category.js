import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout.js'

export default () => {
  return <Layout>
            <h1>Category</h1>
            <Link href="/"><a>Back Home</a></Link>
            <Link href="/subcategory"><a>to subcategory</a></Link>
          </Layout>
}
