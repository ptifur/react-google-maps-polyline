import { useState } from 'react'
import { GoogleMap, Polyline, LoadScript } from '@react-google-maps/api'
import mapStyle from './mapStyle'

const containerStyle = {
    width: '100%',
    height: '65vh'
}

// Hoverla
const center = {
    lat: 48.31,
    lng: 24.62
}

const optionsMap = {
    styles: mapStyle,
    disableDefaultUI: true,
    zoomControl: true
}

const optionsLine = {
    strokeColor: '#ffffff',
    strokeWeight: 3
    // strokeOpacity: 0.8,
}
  
const path = [
    {lat: 48.16, lng: 24.50},
    {lat: 48.26, lng: 24.65},
    {lat: 48.45, lng: 24.72},
    {lat: 48.16, lng: 24.85}
]

const Main = () => {

    const [visible, setVisible] = useState(false)

    const togglePathVisibility = () => {
        if (visible) {
            setVisible(false)
        } else {
            setVisible(true)
        }
    }

    return (
        <>
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
            <GoogleMap 
                mapContainerStyle={containerStyle} 
                center={center} 
                zoom={10.5}
                options={optionsMap}
                mapTypeId={'terrain'}
            >
            <Polyline
                // onLoad={onLoad}
                path={path}
                options={optionsLine}
                visible={visible}
            />
            </GoogleMap>
        </LoadScript>
        <button onClick={() => togglePathVisibility()}>Display track</button>
        </>
    )
}

export default Main