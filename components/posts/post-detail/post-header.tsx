import Image from 'next/image'

function PostHeader(props: { title: string; img: string }) {
  const { title, img } = props
  return (
    <header>
      <h1>{title}</h1>
      <Image src={img} alt={title} height={200} width={200} />
    </header>
  )
}

export default PostHeader
