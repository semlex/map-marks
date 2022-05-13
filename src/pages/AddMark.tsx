import styled from 'styled-components'
import SetMarkCoords from '../components/SetMarkCoords'
import { useState, FC, ChangeEvent, FormEvent } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import { ToastContainer, toast } from 'react-toastify'
import { LatLng } from 'leaflet'
import marks from '../store/marks'
import L from 'leaflet'
import 'react-toastify/dist/ReactToastify.css'
import '../Map.css'

const Container = styled.div`
  max-width: 1100px;
  padding: 10px;
  margin: 0 auto;
`

const Title = styled.h1`
  margin: 0 0 8px 0;
  font-size: 20px;
`

const Form = styled.form``

const Input = styled.input`
  border-radius: 10px;
  color: #111111;
  transition: border-color 0.35s;
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  padding: 8px 18px;
  margin: 5px 0;
  border: 1px solid #d8d8d8;

  &:focus {
    border-color: #999999;
  }
`

const Label = styled.label`
  display: block;
  font-size: 16px;
  margin: 3px 0;
`

const Map = styled(MapContainer)`
    max-height: calc(100vh - 380px);
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 15px 0;
`

const Button = styled.button`
  cursor: pointer;
  border-radius: 50px;
  background: #3a54d6;
  padding: 10px 30px;
  color: #FFFFFF;
  font-weight: 400;
  font-size: 15px;
  text-align: center;
  border: 2px solid transparent;
  transition: 0.35s;
  
  &:hover {
    background: #fff;
    border: 2px solid #0077ff;
    color: #0077ff;
  }
`

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

const AddMark: FC = () => {
    const [name, setName] = useState<string>('')
    const [desc, setDesc] = useState<string>('')
    const [coords, setCoords] = useState<LatLng | null>(null)

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

        if (!name || !desc || !coords) {
            if (!name) {
                toast.error('Введите название')
            }

            if (!desc) {
                toast.error('Введите описание')
            }

            if (!coords) {
                toast.error('Выберите позицию точки')
            }
        } else {
            marks.addMark({
                name,
                desc,
                coords
            })

            setName('')
            setDesc('')
            setCoords(null)
            toast.success('Точка успешно добавлена!')
        }
    }

    return (
        <Container>
            <Title>
                Добавление точки
            </Title>
            <Form onSubmit={handleSubmit}>
                <Label htmlFor={'name'}>
                    Название
                </Label>
                <Input
                    type={'text'}
                    id={'name'}
                    value={name}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                />
                <Label htmlFor={'desc'}>
                    Описание
                </Label>
                <Input
                    type={'text'}
                    id={'desc'}
                    value={desc}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setDesc(e.target.value)}
                />
                <Label>
                    Позиция
                </Label>
                <Map center={[59.942, 30.315]} zoom={12}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <SetMarkCoords
                        coords={coords}
                        setCoords={setCoords}
                    />
                </Map>
                <ButtonWrapper>
                    <Button type={'submit'}>
                        Сохранить
                    </Button>
                </ButtonWrapper>
            </Form>
            <ToastContainer />
        </Container>
    )
}

export default AddMark