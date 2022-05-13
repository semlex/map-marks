import styled from 'styled-components'
import { FC } from 'react'
import { Link } from 'react-router-dom'

const Container  = styled.div`
  width: 100%;
  background: #424242;
`

const Links = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
`

const LinkText = styled.div`
  font-size: 16px;
  color: #ffffff;
  padding: 15px 8px;
`

const Navigation : FC = () => {
    return (
        <Container>
            <Links>
                <Link to={'/'}>
                    <LinkText>
                        Карта
                    </LinkText>
                </Link>
                <Link to={'/add'}>
                    <LinkText>
                        Добавить точку
                    </LinkText>
                </Link>
                <Link to={'/edit'}>
                    <LinkText>
                        Список точек
                    </LinkText>
                </Link>
            </Links>
        </Container>
    )
}

export default Navigation