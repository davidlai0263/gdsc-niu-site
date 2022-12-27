import { Fragment, ReactNode, useContext } from 'react'
import ResponsiveAppBar from './main-navigation'
import Head from 'next/head'
import Script from 'next/script'

function Layout(props: { children: ReactNode }) {
  return (
    <>
      <Head>
        <title>GDSC NIU</title>
        <meta name="description" content="National Ilan University, Google Developer Student Club, 國立宜蘭大學, 資訊工程系, 學生開發者社群" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link href="https://fonts.googleapis.com/css2?family=Google+Sans" rel="stylesheet" />

        {/* <!-- Google tag (gtag.js) --> */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-RGQQK3H2Z5"></Script>
        <Script src='../google-analyzer/google-tag.js'></Script>
        <Script src='../google-analyzer/google-tag-manager.js'></Script>

      </Head>
      {/* <!-- Google Tag Manager (noscript) --> */}
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MWV4WWJ"
        height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>
      {/* <!-- End Google Tag Manager (noscript) --> */}
      <ResponsiveAppBar />
      <main>{props.children}</main>
    </>
  )
}

export default Layout
