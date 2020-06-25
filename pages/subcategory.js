import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout.js'

export default () => {
  return <Layout>
            <Head>
              <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
            </Head>
            <h1>subcategory</h1>
            <Link href="/"><a>back home</a></Link>
            <Link href="/category"><a>back to category</a></Link>
          </Layout>
}
