import { FC, ReactElement, useEffect } from 'react'
import Container from '../../../Container'
import { useAppSelector } from '../../../hooks/store'

const Home: FC = (): ReactElement => {
  const galleryState = useAppSelector((state) => state.gallery)

  useEffect(() => {
    console.log(galleryState)
  }, [galleryState])

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
