import styled from 'styled-components'
import { FC } from 'react'
import { observer } from 'mobx-react-lite'
import moment from 'moment'
import marks from '../store/marks'

const Container = styled.div`
  width: 100%;
  padding: 0 10px
`

const Mark = styled.div`
  border: 1px solid #b6b6b6;
  border-radius: 8px;
  margin: 5px 0;
  padding: 8px 12px;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

const Button = styled.button`
  cursor: pointer;
  border-radius: 50px;
  background: #d63a3a;
  padding: 5px 10px;
  color: #FFFFFF;
  font-weight: 400;
  font-size: 11px;
  text-align: center;
  border: 2px solid transparent;
  transition: 0.35s;

  &:hover {
    background: #fff;
    border: 2px solid #d63a3a;
    color: #d63a3a;
  }
`

const Title = styled.h2`
  font-size: 20px;
  margin-top: 0;
  word-break: break-word;
  overflow: hidden;
`

const Info = styled.div`
  margin: 0 auto;
  width: 98%;
`

const InfoTitle = styled.h3`
  font-size: 16px;
  margin: 5px 0;
`

const InfoText = styled.p`
  font-size: 14px;
  margin: 8px 0;
`

const NoMarks = styled.div`
  width: 100%;
  height: calc(100vh - 300px);
  display: flex;
  justify-content: center;
  align-items: center;
`

const NoMarksText = styled.div`
  font-size: 23px;
  color: #6C6C6CFF;
`

const MarksList: FC = observer(() => {
    return (
        <Container>
            {marks.marksList.length > 0 &&
            marks.marksList.map((mark) => (
                <Mark key={mark.id}>
                    <ButtonWrapper>
                        <Button onClick={() => marks.removeMark(mark.id)}>
                            Удалить
                        </Button>
                    </ButtonWrapper>
                    <Title>
                        Точка {mark.id}
                    </Title>
                    <Info>
                        <InfoTitle>
                            Название
                        </InfoTitle>
                        <InfoText>
                            {mark.name}
                        </InfoText>
                        <InfoTitle>
                            Описание
                        </InfoTitle>
                        <InfoText>
                            {mark.desc}
                        </InfoText>
                        <InfoTitle>
                            Дата и время создания
                        </InfoTitle>
                        <InfoText>
                            {moment(mark.createdAt).format('DD.MM.YYYY HH:mm')}
                        </InfoText>
                        <InfoTitle>
                            Координаты
                        </InfoTitle>
                        <InfoText>
                            {mark.coords.lat}, {mark.coords.lng}
                        </InfoText>
                    </Info>
                </Mark>
            ))}
            {marks.marksList.length === 0 &&
            <NoMarks>
               <NoMarksText>
                  Точек нет.
               </NoMarksText>
            </NoMarks>
            }
        </Container>
    )
})

export default MarksList