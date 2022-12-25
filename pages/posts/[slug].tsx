import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import PostContent from '../../components/posts/post-detail/post-content'
import { getPostData, getPostFiles, PostDataType } from '../../lib/posts-util'

function PostDetailPage(props: { post: PostDataType }) {
  return <PostContent post={props.post} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const postFilenames = getPostFiles()
  const slugs = postFilenames.map((filename) => filename.replace(/\.md$/, ''))

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (content: GetStaticPropsContext) => {
  const { params } = content
  const slug = params?.slug
  const postData = getPostData(slug as string)

  //TODO check revalidate time
  return {
    props: { post: postData },
    revalidate: 60,
  }
}

export default PostDetailPage
