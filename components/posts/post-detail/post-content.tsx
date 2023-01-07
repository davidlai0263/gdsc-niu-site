import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { posts as PostType } from '@prisma/client'
import Image from 'next/image'
import { Components } from 'react-markdown'
import { Box, Divider } from '@mui/material'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import Head from 'next/head'

function PostContent(props: { post: PostType }) {
  const { shortId, titleImage, title, content, description } = props.post
  const imagePath = titleImage.length > 0 ? titleImage : undefined
  const customComponent: Components = {
    img: ({ alt, src }) => {
      // if (!src?.includes('http') || !src?.includes('https')) {
      //   src = `/images/posts/${shortId}/${src}`
      // }
      return <img src={src} alt={alt} style={{ display: 'block', width: '100%', maxWidth: '500px' }} />
    },
    code: ({ node, inline, className, children, ...props }) => {
      const match = /language-(\w+)/.exec(className || '')

      return !inline && match ? (
        <SyntaxHighlighter style={atomDark} language={match[1]} PreTag="div">
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      )
    },
  }
  //TODO Configure Next Image Domain Settings and Sizes
  // const customComponent: Components = {
  //   img: ({ alt, src }) =>
  //     src?.includes('http') || src?.includes('https') ? (
  //       <img src={src} alt={alt} width={'60%'} />
  //     ) : (
  //       <Box position="relative" width={'60%'} height={300}>
  //         <Image src={`/images/posts/${slug}/${src}`} alt={alt ?? title} fill sizes="" />
  //       </Box>
  //     ),
  // }

  return (
    <article>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Box sx={{ p: { xl: '4rem 30rem', lg: '4rem 20rem', md: '4rem 15rem', sm: '5rem', xs: '3rem' }, maxWidth: '1536px' }}>
        <header>
          {imagePath ? <img src={imagePath} alt={title} style={{ display: 'block', margin: 'auto', maxWidth: '100%' }} /> : null}
          <h1>{title}</h1>
          <Divider />
        </header>
        <ReactMarkdown components={customComponent} rehypePlugins={[rehypeRaw]}>
          {content}
        </ReactMarkdown>
      </Box>
    </article>
  )
}

export default PostContent
