import { Fragment, ReactNode, useContext } from 'react'
import ResponsiveAppBar from './main-navigation'
import Head from 'next/head'  

function Layout(props: { children: ReactNode }) {
  return (
    <>
      <Head>
        <title>GDSC NIU</title>
        <meta name="description" content="National Ilan University, Google Developer Student Club, 國立宜蘭大學, 資訊工程系, 學生開發者社群" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link href="https://fonts.googleapis.com/css2?family=Google+Sans" rel="stylesheet"/>
      </Head>
      <ResponsiveAppBar />
      <main>{props.children}</main>
    </>
  )
}

export default Layout
