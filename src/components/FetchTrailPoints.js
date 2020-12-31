import { features as media } from '../data/media.json'
import { features as ultra } from '../data/ultra.json'

const FetchTrailPoints = () => {

    let pointsUltra = []

    ultra.map(point => {
        let pointLatLng = {
            lat: point.geometry.coordinates[1],
            lng: point.geometry.coordinates[0]
        }
        return pointsUltra.push(pointLatLng)
    })

    let pointsMedia = []

    media.map(point => {
        let pointLatLng = {
            lat: point.geometry.coordinates[1],
            lng: point.geometry.coordinates[0]
        }
        return pointsMedia.push(pointLatLng)
    })

    return null
}

export default FetchTrailPoints