import { useEffect } from "react"

import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout.js'

import getCategories from '../public/admin/functions/getCategories.js'

export default (props) => {

  return <Layout>
            <h1>Home</h1>
              <div>
                {
                  props.data && props.data.map((x, y) => {
                    return <Link href="/category" key={ y }>
                              <a style={{ display:"block", margin:"10px 0" }}>{ x.name }</a>
                            </Link>
                  })
                }
              </div>
          </Layout>
}

export async function getStaticProps() {
  return {
    props: {
      fallback: true,
      data: getCategories()
    }
  }
}
