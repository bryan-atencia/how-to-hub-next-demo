import Head from 'next/head'
import Link from 'next/link'

import getCategories from "../../public/admin/functions/getCategories.js"

import Layout from '../../components/layout.js'
import { Grid, Typography, makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    heroImage: {
      background:"grey",
      height:"600px",
      width:"600px",
      borderRadius:"50%",
      backgroundColor:"#ffe5b4",
      margin:"0 auto"
    },
    image: {
      height:"250px",
      width:"250px",
      borderRadius:"50%",
      backgroundColor:"#ffe5b4"
    },
    mainGrid: {
      maxWidth:"775px",
      margin:"50px 0"
    },
    tileTitle: {
      margin:"15px auto 0",
      fontWeight:"bold"
    },
    tileSubTitle:{
      margin:"15px auto"
    },
    tileActionText: {
      borderBottom:"1px solid",
      width:"fit-content"
    },
    heroTitle: {
      fontWeight:"bold"
    },
    heroDescription: {
      margin:"15px 0"
    },
    homeLink: {
      color:"black",
      textDecoration:"none"
    },
    actionLink: {
      color:"black",
      textDecoration:"none"
    }
}))

export default (props) => {

  const classes = useStyles()
  const { data } = props
  const descrip = data.heroDescription ? data.heroDescription.split("<b>") : []

  const renderSubCategories = () => {
    return <Grid container style={{ textAlign:"center" }}>
              {
                  subcategory.subcategories.map((x, y) => {
                    return <Grid container item key={ y } xs={12} sm={3} alignItems="center" direction="column">
                              <Grid className={ classes.image }></Grid>
                              <Grid container direction="column" alignItems="center" justify="center">
                                <Typography variant="h6" className={ classes.tileTitle }>{ x.title }</Typography>
                                <Typography variant="subtitle1" className={ classes.tileSubTitle } style={{ width:"270px" }}>{ x.description }</Typography>
                                <Link href={ `/subcategory/${x.id}` }>
                                  <Typography variant="body1" className={ classes.tileActionText }>{ x.actionText }</Typography>
                                </Link>
                              </Grid>
                           </Grid>
                  })
              }
           </Grid>
  }

  return <Layout>
            <Grid className={ classes.mainGrid }>
              <Typography variant="h2" >{ data.title }</Typography>
              <Typography variant="h6" style={{ margin:"15px 0" }}>{ data.subtitle }</Typography>
              <Grid container justify="flex-start">
                <Typography className={ classes.tileActionText } style={{ marginRight:"20px" }}>{ data.actionText }</Typography>
                <Link href="/">
                  <Typography variant="body1" className={ classes.tileActionText }>HOME</Typography>
                </Link>
              </Grid>
            </Grid>
            { data.subcategories && renderSubCategories() }
            <Grid container style={{ margin:"50px auto" }}>
              <Grid item xs={ 12 } sm={ 7 }>
                <Grid className={ classes.heroImage }></Grid>
              </Grid>
              <Grid item xs={ 12 } sm={ 5 } container justify="center" alignItems="flex-start" direction="column">
                <Typography variant="h6" className={ classes.heroTitle }>{ data.heroTitle }</Typography>
                {
                  descrip && descrip.map((x, y) => <Typography key={ y } variant="subtitle1" className={ classes.heroDescription }>{ x }</Typography>)
                }
                <Typography variant="body1" className={ classes.tileActionText }>{ data.heroActionLink }</Typography>
              </Grid>
            </Grid>
          </Layout>
}

export async function getStaticPaths() {

  let paths = getCategories()
  paths = paths.map(x => {
    return {
      params: {
        id: x.name.split(" ").join("")
      }
    }
  })

  return  {
            paths,
            fallback:false
          }
}

export async function getStaticProps({ params }) {
  return {
    props: {
      data: getCategories().filter(x => x.name.split(" ").join("") == params.id)[0]
    }
  }
}
