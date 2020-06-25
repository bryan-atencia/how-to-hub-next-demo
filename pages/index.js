import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout.js'
import { useEffect } from "react"


export default () => {
  useEffect(()=>{
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
  },[])

  return <Layout>
            <Head>
              <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
            </Head>
            <div>Home</div>
          </Layout>
}
