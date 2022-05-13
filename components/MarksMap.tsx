import styled from 'styled-components'
import { FC } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { observer } from 'mobx-react-lite'
import marks from '../store/marks'
import moment from 'moment'
import '../Map.css'
import L from 'leaflet'

const Container = styled.div`
  width: 100%;
  min-height: 200px;
  overflow: hidden;
`

const Name = styled.h3`
  font-size: 14px;
  margin: 0;
`

const Desc = styled.div`
  margin: 3px 0;
`

const Date = styled.div`
    font-size: 12px;
`

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

const MarksMap: FC = observer(() => {


    return (
        <Container>
            <MapContainer center={[59.942, 30.315]} zoom={11}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {marks.marksList.map((mark) => (
                    <Marker
                        key={mark.id}
                        position={mark.coords}>
                        <Popup>
                            <Name>
                                {mark.name}
                            </Name>
                            <Desc>
                                {mark.desc}
                            </Desc>
                            <Date>
                                {moment(mark.createdAt).format('DD.MM.YYYY HH:mm')}
                            </Date>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </Container>
    )
})

export default MarksMap