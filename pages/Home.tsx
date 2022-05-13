import { FC } from 'react'
import styled from 'styled-components'
import MarksMap from '../components/MarksMap'

const Container = styled.div`
  max-width: 1100px;
  padding: 10px;
  margin: 0 auto;
`

const Title = styled.h1`
  margin: 0 0 15px 0;
  font-size: 24px;
`

const Home: FC = () => {
    return (
        <Container>
            <Title>
                Карта
            </Title>
            <MarksMap/>
        </Container>
    )
}

export default Home