import { useState, useRef, useCallback } from 'react'
import { GoogleMap, LoadScript, InfoBox } from '@react-google-maps/api'
import { containerStyle, optionsMap } from './mapStyle'
import trailInfo from './trailInfo'
import Line from './Polyline'

import { features as media } from '../data/media.json'
import { features as ultra } from '../data/ultra.json'

// const urlMedia = "https://github.com/ptifur/react-google-maps-polyline/blob/main/src/data/media.json"

const Main = () => {

    // panTo
    const mapRef = useRef()

    const onMapLoad = useCallback((map) => {
        mapRef.current = map
    }, [])

    // get Trail points from file
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

    // select Trail to output Info
    const [selectedTrail, setSelectedTrail] = useState('')

    // switch the buttons
    const displayTrail = trailNumber => {

        if (trailNumber === selectedTrail) {
            setSelectedTrail(null)
        } else {
            setSelectedTrail(trailNumber)
        }

        mapRef.current.panTo(trailInfo[ trailNumber -1 ].position)
    }

    // Info
    const optionsInfoBox = { 
        closeBoxURL: '', 
        enableEventPropagation: true
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

                    <Line 
                        selectedTrail={selectedTrail}
                        trailInfo={trailInfo}
                        pointsUltra={pointsUltra}
                        pointsMedia={pointsMedia}      
                    />

                    {selectedTrail ?
                        <InfoBox
                            options={optionsInfoBox}
                            position={trailInfo[selectedTrail - 1].position}
                        >
                            <div className="info-box">
                                <h2>
                                {selectedTrail ? trailInfo[ selectedTrail - 1 ].name : null }
                                </h2>
                                <p>Distance {trailInfo[ selectedTrail - 1 ].distance} km</p>
                            </div>
                        </InfoBox>
                    : null}

                </GoogleMap>
            </LoadScript>
        </div>
        <div className="buttons">
            <button className="two" onClick={() => displayTrail(2)}>Media</button>
            <button className="one" onClick={() => displayTrail(1)}>Ultra</button>
        </div>
        </>
    )
}

export default Main