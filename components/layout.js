import Head from 'next/head'
import { useEffect } from "react"

export default ({ children }) => {

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

  return <div>
          <Head>
            <title>How to hub demo</title>
            <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
          </Head>
          { children }
          </div>
}
