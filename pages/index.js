import React from "react"
import regeneratorRuntime from "regenerator-runtime";

import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout.js'

import getCategories from '../public/admin/functions/getCategories.js'

import { Grid, Typography, withStyles } from "@material-ui/core"

@withStyles((theme) => ({
  image: {
    background:"grey",
    height:"250px",
    width:"250px",
    borderRadius:"50%",
    backgroundColor:"#ffe5b4"
  },
  actionText: {
    textTransform:"uppercase",
    textAlign:"center",
    borderBottom:"1px solid",
    width:"fit-content",
    margin:"10px auto",
    color:"black"
  },
  actionLink: {
    color:"black",
    textDecoration:"none"
  },
  mainGrid: {
    maxWidth:"775px",
    margin:"50px 0"
  }
}))

export default class Main extends React.Component {

  renderCategories = () => {

    const { data, classes } = this.props

    return <Grid container justify="space-between" alignItems="center">
            {
                data && data.map((x, y) => {
                  return <Grid item key={ y }>
                            <Grid className={ classes.image }></Grid>
                              <Link href={`/category/${x.name.split(" ").join("")}`}>
                                <Typography className={ classes.actionText }>{ x.name }</Typography>
                              </Link>
                            </Grid>
                })
            }
          </Grid>
  }

  render() {
    const { data, classes } = this.props

    return <Layout>
              <Grid className={ classes.mainGrid }>
                <Typography variant="h2" gutterBottom>The Bartender</Typography>
                <Typography variant="h6">Your complete guide to men’s apparel and accessories. Browse style tips, size guides, and steps to master tying a necktie, tying a bow tie, folding a pocket square, and more.</Typography>
              </Grid>
              {this.renderCategories()}
            </Layout>
  }
}

export async function getStaticProps() {
  return {
    props: {
      fallback: true,
      data: getCategories()
    }
  }
}
