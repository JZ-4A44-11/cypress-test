import { FC, ReactElement } from 'react'
import Container from '../../../Container'

const Home: FC = (): ReactElement => {
  return (
    <main>
      <Container>
        <h1>The Show Must Go On</h1>
        <figure>
          <img src="static/images/ayaka.webp" alt="Kamisato Ayaka" width="400px" />
          <figcaption>Kamisato Ayaka</figcaption>
        </figure>
      </Container>
    </main>
  )
}
export default Home
