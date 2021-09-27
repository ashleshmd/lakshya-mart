import React from "react";
import Head from "next/head";
import useStyles from '../utils/styles'
import {
    AppBar,
    Toolbar,
    Typography,
    Container
} from "@material-ui/core";
export default function Layout({
    children
}) {
  const classes = useStyles();
    return ( <div className={classes.div}>
        <Head>
        <title className={classes.title}> Lakshya Mart < /title>
        </Head >
        <AppBar position = "static" className={classes.navbar}>
        <Toolbar>
        <Typography> Lakshya Mart< /Typography>
        </Toolbar >
        </AppBar>
        <Container className = {classes.main}>
        {children}
        </Container>
        <footer className={classes.footer}>
        <Typography> All Rights Reserverd @Lakshya Mart.< /Typography>
        </footer>
        </div >
    )
}
