import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import PostContent from '../../components/posts/post-detail/post-content'
import { getPostData, getShortId } from '../../lib/posts-util'
import { posts as PostType } from '@prisma/client'

function PostDetailPage(props: { post: PostType }) {
  return <PostContent post={props.post} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const shortId = await getShortId()

  return {
    paths: shortId.map((item) => ({ params: { shortId: item.shortId } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (content: GetStaticPropsContext) => {
  const { params } = content
  const shortId = params?.shortId
  const postData = await getPostData(shortId as string)

  //TODO check revalidate time
  return {
    props: { post: postData },
    revalidate: 7200,
  }
}

export default PostDetailPage
