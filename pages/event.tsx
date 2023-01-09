import { GetStaticProps } from 'next'
import { Events, getAllEvent } from '../lib/event-util'
import Event from '../components/event-page/event'

function EventPage(props: { events: Events }) {
  return (
    <>
      <Event events={props.events} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const events = await getAllEvent()
  return {
    props: { events: events },
    revalidate: 60 * 30,
  }
}

export default EventPage
