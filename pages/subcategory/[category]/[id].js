import React from "react"
import regeneratorRuntime from "regenerator-runtime";

import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../../components/layout.js'

import getSubcategories from "../../../public/admin/functions/getSubcategories.js"

import { Grid, Typography, withStyles } from "@material-ui/core"

@withStyles( (theme) => ({
  image: {
    height:"250px",
    width:"250px",
    borderRadius:"50%",
    backgroundColor:"#d5d5d5"
  },
  stepsGrid: {
    width:"100%",
    margin:"50px auto"
  },
  tileActionText: {
    borderBottom:"1px solid",
    width:"fit-content",
    margin:"20px 10px 0 0",
    textTransform:"uppercase"
  },
  tileTitle: {
    margin:"15px auto 0",
    fontWeight:"bold"
  },
  tileSubTitle:{
    margin:"15px 0"
  }
}))

export default class Subcategory extends React.Component {

  renderSteps = () => {

    const { subcategoryData } = this.props
    const { classes } = this.props

    return <Grid container className={ classes.stepsGrid }>
            {
              subcategoryData.steps && subcategoryData.steps.map((x, y) => {
                  return <Grid item xs={ 12 } sm={ 4 } key={ y }>
                            <Grid>
                              <Grid className={ classes.image }></Grid>
                            </Grid>
                            <Grid>
                              <Typography className={ classes.tileTitle }>{ x.title }</Typography>
                              <Typography className={ classes.tileSubTitle } style={{ width:"200px" }}>{ x.description }</Typography>
                            </Grid>
                         </Grid>
              })
            }
           </Grid>
  }

  render() {
    const { subcategoryData, classes, category } = this.props

    return <Layout>
            {
              subcategoryData && <>
                                  <Grid style={{ maxWidth:"900px" }}>
                                      <Typography variant="h2">{ subcategoryData.pageTitle }</Typography>
                                      <Typography variant="h6">{ subcategoryData.pageDescription }</Typography>
                                      <Grid container>
                                        <Typography className={ classes.tileActionText } style={{ marginRight:"20px" }}>{ subcategoryData.pageActionLink }</Typography>
                                        <Link href="/">
                                          <Typography variant="body1" className={ classes.tileActionText }>HOME</Typography>
                                        </Link>
                                        <Link href={category ? `/category/${category}` : "/"}>
                                          <Typography variant="body1" className={ classes.tileActionText }>BACK TO CATEGORY</Typography>
                                        </Link>
                                      </Grid>
                                     </Grid>
                                    <Grid>{ this.renderSteps() }</Grid>
                                  </>
                                  }

            </Layout>
  }
}

export async function getStaticPaths() {

  let paths = getSubcategories()
  paths = paths.map(x => {
    return {
      params: {
        category:"neckties",
        id: x.title.split(" ").join(""),
      }
    }
  })

  return  {
            paths,
            fallback:true
          }
}

export async function getStaticProps({ params }) {
  return {
    props: {
      subcategoryData: getSubcategories().filter(x => x.title.split(" ").join("") == params.id)[0]
    }
  }
}
