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

        <Script dangerouslySetInnerHTML={{__html:`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-RGQQK3H2Z5');`}}/>
        <Script dangerouslySetInnerHTML={{
          __html: `<!-- Google Tag Manager -->
          <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MWV4WWJ');</script>
          <!-- End Google Tag Manager -->`
        }}/>
      </Head>
      <noscript dangerouslySetInnerHTML={{__html: `<!-- Google Tag Manager (noscript) -->
<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MWV4WWJ"
height="0" width="0" style="display:none;visibility:hidden"></iframe>
<!-- End Google Tag Manager (noscript) -->`}}/>
      <ResponsiveAppBar />
      <main>{props.children}</main>
    </>
  )
}

export default Layout
