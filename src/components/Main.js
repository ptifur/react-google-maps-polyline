import { useState, useRef, useCallback } from 'react'
import { GoogleMap, Polyline, LoadScript, InfoBox, Marker } from '@react-google-maps/api'
import mapStyle from './mapStyle'
import trailInfo from './trailInfo'

import { features } from '../data/ultra.json'
import { features as media } from '../data/media.json'

// const urlMedia = "https://github.com/ptifur/react-google-maps-polyline/blob/main/src/data/media.json"

// console.log(trailInfo[1].position)

const containerStyle = {
    width: '100%',
    height: '100%'
}

const optionsMap = {
    styles: mapStyle,
    disableDefaultUI: true,
    zoomControl: true,
    mapTypeId: "terrain",
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

const Main = () => {

    // panTo
    const mapRef = useRef()

    const onMapLoad = useCallback((map) => {
        mapRef.current = map
    }, [])

    // select the trail to output info
    const [selectedTrail, setSelectedTrail] = useState('')

    const displayTrail = (trailName) => {

        if (trailName === 'Media') {
            mapRef.current.panTo(positionStartMedia)
            // simplify this
            togglePathVisibilityMedia()        
        }

        if (trailName === 'Ultra') {
            mapRef.current.panTo(trailInfo[0].position)
            togglePathVisibilityUltra()        
        }

        // fix this
        setDisplayInfo(!displayInfo)
        setSelectedTrail(trailName)
    }

    // REWRITE THIS SECTION

    // display polyline
    const [visibleUltra, setVisibleUltra] = useState(false)
    const [visibleMedia, setVisibleMedia] = useState(false)

    // display Info
    const [displayInfo, setDisplayInfo] = useState(false)

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

    // marker position
    const positionStartUltra = {
        lat: features[1].geometry.coordinates[1],
        lng: features[1].geometry.coordinates[0]
    }

    const positionStartMedia = {
        lat: media[0].geometry.coordinates[1],
        lng: media[0].geometry.coordinates[0]
    }

    return (
        <>
        <div className="container">
            <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
                <GoogleMap 
                    mapContainerStyle={containerStyle} 
                    center={trailInfo[0].position} 
                    zoom={11}
                    options={optionsMap}
                    onLoad={onMapLoad}
                >
                    <Polyline
                        path={pointsUltra}
                        options={optionsLineUltra}
                        visible={visibleUltra}
                    />

                    <Polyline
                        path={pointsMedia}
                        options={optionsLineMedia}
                        visible={visibleMedia}
                    />

                    {displayInfo ?
                        <InfoBox
                            options={optionsInfoBox}
                            position={trailInfo[1].position}
                        >
                            <div style={infoBoxStyle}>
                                <h2>
                                    {selectedTrail} trail
                                </h2>
                                20 km
                            </div>
                        </InfoBox>
                    : null}

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

                </GoogleMap>
            </LoadScript>
        </div>
        <div className="buttons">
            <button className="one" onClick={() => displayTrail('Ultra')}>Ultra</button>
            <button className="two" onClick={() => displayTrail('Media')}>Media</button>
        </div>
        </>
    )
}

export default Main