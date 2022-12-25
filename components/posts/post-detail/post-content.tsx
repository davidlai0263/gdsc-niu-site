import ReactMarkdown from 'react-markdown'
import PostHeader from './post-header'
import { PostDataType } from '../../../lib/posts-util'
import Image from 'next/image'
import { Components } from 'react-markdown'
import { Box } from '@mui/material'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

function PostContent(props: { post: PostDataType }) {
  const { slug, image, title, content } = props.post
  const imagePath = `/images/posts/${slug}/${image}`
  const customComponent: Components = {
    img: ({ alt, src }) => {
      if (!src?.includes('http') || !src?.includes('https')) {
        src = `/images/posts/${slug}/${src}`
      }
      return <img src={src} alt={alt} style={{ display: 'block', maxWidth: '60%' }} />
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
      <Box p={'5% 15% 5% 15%'}>
        <PostHeader title={title} img={imagePath} />
        <ReactMarkdown components={customComponent}>{content}</ReactMarkdown>
      </Box>
    </article>
  )
}

export default PostContent
