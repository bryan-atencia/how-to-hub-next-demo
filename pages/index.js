import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout.js'

export default () => (
        <Layout>
          <Head>
            <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
          </Head>
          <h1>Home</h1>
          <Link href="category"><a>to Category</a></Link>
        </Layout>
)
