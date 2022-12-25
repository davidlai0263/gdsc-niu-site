import ReactMarkdown from 'react-markdown'
import PostHeader from './post-header'
import { PostDataType } from '../../../lib/posts-util'

function PostContent(props: { post: PostDataType }) {
  const { slug, image, title, content } = props.post
  const imagePath = `/images/posts/${slug}/${image}`

  return (
    <article>
      <PostHeader title={title} img={imagePath} />
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  )
}

export default PostContent
