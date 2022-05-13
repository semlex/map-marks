import { LatLng } from 'leaflet'

export interface IMark {
    id: string,
    name: string,
    desc: string,
    coords: LatLng,
    createdAt: Date,
}