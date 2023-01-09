import { GetStaticProps } from 'next'
import About from '../../components/about-page/about'
import { getAllMember, CardDetail } from '../../lib/about-util'

function AboutPage(props: { cardDetails: CardDetail[] }) {
  return <About cardDetails={props.cardDetails} />
}

export const getStaticProps: GetStaticProps = async () => {
  const cardDetails = await getAllMember()
  return {
    props: {
      cardDetails: cardDetails,
    },
    revalidate: 10800,
  }
}

export default AboutPage
