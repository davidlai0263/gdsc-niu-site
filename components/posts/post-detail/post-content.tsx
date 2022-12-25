import ReactMarkdown from 'react-markdown'
import PostHeader from './post-header'
import { PostDataType } from '../../../lib/posts-util'
import Image from 'next/image'
import { maxHeight } from '@mui/system'
import { Components } from 'react-markdown'

function PostContent(props: { post: PostDataType }) {
  const { slug, image, title, content } = props.post
  const imagePath = `/images/posts/${slug}/${image}`
  //TODO Configure Next Image Domain Settings
  const customComponent: Components = { img: ({ alt, src }) => (src?.includes('http') || src?.includes('https') ? <img src={src} alt={alt} width={'60%'} /> : <Image src={`/images/posts/${slug}/${src}`} alt={alt ?? title} width={600} height={300} />) }

  return (
    <article>
      <PostHeader title={title} img={imagePath} />
      <ReactMarkdown components={customComponent}>{content}</ReactMarkdown>
    </article>
  )
}

export default PostContent
