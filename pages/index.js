import { useEffect } from "react"

import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout.js'

import getHows from '../functions/getHows.js'

export default (props) => {

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
            <h1>Home</h1>
            <div>{
              props.data.map((x, y) => {
                return <Link href="/category" key={ y }><a style={{ display:"block", margin:"10px 0" }}>{ x.name }</a></Link>
              })
            }</div>
          </Layout>
}

export async function getStaticProps() {
  return {
    props: {
      fallback: true,
      data: getHows()
    }
  }
}
