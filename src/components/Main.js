import { useState } from 'react'
import { GoogleMap, Polyline, LoadScript, InfoBox, InfoWindow, Marker } from '@react-google-maps/api'
// import mapStyle from './mapStyle'
import mapStyle from './mapStylePropia'
import { features } from '../data/ultra.json'
import { features as media } from '../data/media.json'

const containerStyle = {
    width: '100%',
    height: '75vh'
}

const center = {
    lat: 28.26,
    lng: -16.60
}

const optionsMap = {
    styles: mapStyle,
    disableDefaultUI: true,
    zoomControl: true,
    mapTypeId: "terrain"
    // mapTypeId: "satellite"
}

// P O L Y L I N E S
const optionsLineUltra = {
    strokeColor: '#2ed3f9',
    strokeWeight: 3,
    strokeOpacity: 0.8
}

const optionsLineMedia = {
    strokeColor: '#ba4bff',
    strokeWeight: 4,
    strokeOpacity: 0.8
}

// I N F O B O X

// what does it do
const optionsInfoBox = { 
    closeBoxURL: '', 
    enableEventPropagation: true 
}

const infoBoxStyle = { 
        backgroundColor: 'yellow', 
        opacity: 0.75, 
        padding: 12 
    }

const infoBoxStyleDiv = { 
        fontSize: 16, 
        fontColor: `#08233B` 
    }

const position = {
    lat: 28.31, // vertical
    lng: -16.50 // horizontal
}

// I N F O W I N D O W
const infoWindowStyle = {
  background: `white`,
  padding: 15
}

const Main = () => {

    // display polyline
    const [visibleUltra, setVisibleUltra] = useState(false)
    const [visibleMedia, setVisibleMedia] = useState(false)

    const [displayWindow, setDisplayWindow] = useState(false)

    const togglePathVisibilityUltra = () => {

            if (visibleUltra) { 
                setVisibleUltra(false)
            } else { 
                setVisibleUltra(true)
            }
    }

    const togglePathVisibilityMedia = () => {

            if (visibleMedia) { 
                setVisibleMedia(false)
            } else { 
                setVisibleMedia(true)
            }
    }

    // ultra
    let pointsUltra = []

    for (let i = 0; i < features.length; i++) {
        let pointLat = features[i].geometry.coordinates[1]
        let pointLng = features[i].geometry.coordinates[0]
        let pointLatLng = {
            lat: pointLat,
            lng: pointLng
        }
        pointsUltra.push(pointLatLng)
    }

    // M A R K E R
    const positionStartUltra = {
        lat: features[1].geometry.coordinates[1],
        lng: features[1].geometry.coordinates[0]
    }

    const positionStartMedia = {
        lat: media[1].geometry.coordinates[1],
        lng: media[1].geometry.coordinates[0]
    }

    // media
    let pointsMedia = []

    for (let i = 0; i < media.length; i++) {
        let pointLat = media[i].geometry.coordinates[1]
        let pointLng = media[i].geometry.coordinates[0]
        let pointLatLng = {
            lat: pointLat,
            lng: pointLng
        }
        pointsMedia.push(pointLatLng)
    }

    const displayTrailInfo = e => {
        console.log(e.domEvent)
    }

    return (
        <>
        <div className="header">
            <h1>Running tracks</h1>
        </div>
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
            <GoogleMap 
                mapContainerStyle={containerStyle} 
                center={center} 
                zoom={11}
                options={optionsMap}
            >
                <Polyline
                    path={pointsUltra}
                    options={optionsLineUltra}
                    visible={visibleUltra}
                    onClick={(e) => displayTrailInfo(e)}
                />

                <Polyline
                    path={pointsMedia}
                    options={optionsLineMedia}
                    visible={visibleMedia}
                    onClick={() => setDisplayWindow(!displayWindow)}
                />
                            
                <InfoBox
                    options={optionsInfoBox}
                    position={center}
                >
                    <div style={infoBoxStyle}>
                    <div style={infoBoxStyleDiv}>
                        Click the trail
                    </div>
                </div>
                </InfoBox>

                <Marker
                    position={positionStartUltra}
                    visible={visibleUltra}
                    // icon={{
                    //     url: '/bear.svg',
                    //     scaledSize: new window.google.maps.Size(30, 30),
                    //     origin: new window.google.maps.Point(0, 0),
                    //     anchor: new window.google.maps.Point(15, 15)
                    // }}
                ></Marker>

                <Marker
                    position={positionStartMedia}
                    visible={visibleMedia}
                />

                {displayWindow ?
                <InfoWindow
                    position={position}
                    open={false}
                >
                    <div style={infoWindowStyle}>
                        <h1>Media</h1>
                        <p>21 km</p>
                    </div>
                </InfoWindow>
                : null}

            </GoogleMap>
        </LoadScript>
        <div className="buttons">
            <button className="one" onClick={() => togglePathVisibilityUltra()}>Ultra</button>
            <button className="two" onClick={() => togglePathVisibilityMedia()}>Media</button>
            <button className="two" onClick={() => setDisplayWindow(!displayWindow)}>Open</button>
        </div>
        </>
    )
}

export default Main