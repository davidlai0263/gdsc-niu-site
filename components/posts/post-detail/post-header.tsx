import Image from 'next/image'
import { Divider } from '@mui/material'

function PostHeader(props: { title: string; img: string }) {
  const { title, img } = props
  return (
    <header>
      <Image src={img} alt={title} height={200} width={200} />
      <h1>{title}</h1>
      <Divider />
    </header>
  )
}

export default PostHeader
