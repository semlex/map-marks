import { makeAutoObservable } from 'mobx'
import { makePersistable } from 'mobx-persist-store'
import { IMark } from '../types/types'
import { LatLng } from 'leaflet'
import createID from '../utils/createID'

interface INewMark {
    name: string,
    desc: string,
    coords: LatLng
}

class Marks {
    marksList: IMark[] = []

    constructor() {
        makeAutoObservable(this)
        makePersistable(this, {
            name: 'Marks',
            properties: ['marksList'],
            storage: window.localStorage
        })
    }

    addMark(newMark: INewMark) {
        this.marksList.push({
            id: createID(),
            ...newMark,
            createdAt: new Date()
        })
    }

    removeMark(id: string) {
        this.marksList = this.marksList.filter(mark => mark.id !== id)
    }
}

export default new Marks()