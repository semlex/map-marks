import styled from 'styled-components'
import MarksList from '../components/MarksList'
import { FC } from 'react'

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 10px;
`

const Title = styled.h1`
  margin: 0 0 15px 0;
  font-size: 24px;
`

const MarksEdit: FC = () => {
    return (
        <Container>
            <Title>
                Список точек
            </Title>
            <MarksList />
        </Container>
    )
}

export default MarksEdit