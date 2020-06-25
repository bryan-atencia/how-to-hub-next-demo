import Head from 'next/head'

export default ({ children }) => {
  return <div>
          <Head>
            <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
          </Head>
          { children }
          </div>
}
