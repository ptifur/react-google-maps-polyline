import { features as media } from './media.json'
import { features as ultra } from './ultra.json'

let pointsMedia = []
let pointsUltra = []

media.map(point => {
    let pointLatLng = {
        lat: point.geometry.coordinates[1],
        lng: point.geometry.coordinates[0]
    }
    return pointsMedia.push(pointLatLng)
})

ultra.map(point => {
    let pointLatLng = {
        lat: point.geometry.coordinates[1],
        lng: point.geometry.coordinates[0]
    }
    return pointsUltra.push(pointLatLng)
})

export { pointsMedia, pointsUltra }

const trailInfo = [
    {
        name: 'Ultra',
        distance: 103,
        time: 24,
        position: {
            lat: 28.25,
            lng: -16.58
        },
        colour: '#2ed3f9'
    },
    {
        name: 'Media',
        distance: 20,
        time: 4,
        position: {
            lat: 28.36,
            lng: -16.56
        },
        colour: '#ba4bff'
    }
]

export default trailInfo