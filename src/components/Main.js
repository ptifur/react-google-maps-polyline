import { GoogleMap, Polyline, LoadScript } from '@react-google-maps/api'
import mapStyle from './mapStyle'

const containerStyle = {
    width: '100%',
    height: '65vh'
}

// Hoverla
const center = {
    lat: 48.16,
    lng: 24.50
}

// UI style
const options = {
    styles: mapStyle,
    disableDefaultUI: true,
    zoomControl: true
}

const Main = () => {

    return (
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
            <GoogleMap 
                mapContainerStyle={containerStyle} 
                center={center} 
                zoom={11}
                options={options}
                // mapTypeId={'terrain'}
            >

            </GoogleMap>
        </LoadScript>
    )
}

export default Main