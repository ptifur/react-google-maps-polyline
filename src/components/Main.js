import { useState, useRef, useCallback } from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api'
import { containerStyle, optionsMap } from './mapStyle'
import Line from './Line'
import Info from './Info'
import trailInfo, { pointsMedia, pointsUltra } from './trailInfo'

const Main = () => {

    // panTo
    const mapRef = useRef()

    const onMapLoad = useCallback((map) => {
        mapRef.current = map
    }, [])

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

    return (
        <>
        <div className="map-container">
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

                    <Info 
                        selectedTrail={selectedTrail}
                        trailInfo={trailInfo}
                    />

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