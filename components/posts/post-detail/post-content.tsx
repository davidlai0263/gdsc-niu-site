import ReactMarkdown from 'react-markdown'
import PostHeader from './post-header'

const DUMMY_POST = { title: 'test01', img: 'img01.webp', excerpt: '第一次集會和成員們一同探討無限可能...', date: new Date(Date.now()), slug: 'post01', content: '# This is a first post' }

function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.img}`

  return (
    <article>
      <PostHeader title={DUMMY_POST.title} img={imagePath} />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  )
}

export default PostContent
