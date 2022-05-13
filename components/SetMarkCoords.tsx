import { FC, SetStateAction, Dispatch } from 'react'
import { Marker, useMapEvents } from 'react-leaflet'
import { LatLng, LeafletMouseEvent } from 'leaflet'
import '../Map.css'

interface SetMarkCoordsProps {
    coords: LatLng | null,
    setCoords: Dispatch<SetStateAction<LatLng | null>>
}

const SetMarkCoords: FC<SetMarkCoordsProps> = ({coords, setCoords}) => {
    useMapEvents({
        click(e: LeafletMouseEvent) {
            setCoords(e.latlng)
        }
    })

    return coords === null ? null : (
        <Marker position={coords}/>
    )
}

export default SetMarkCoords