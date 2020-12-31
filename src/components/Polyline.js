import React from 'react'
import { Polyline } from '@react-google-maps/api'

const Line = props => {

    const optionsLine1 = {
        strokeColor: '#2ed3f9',
        strokeWeight: 3,
        strokeOpacity: 0.8,
        clickable: false
    }

    const optionsLine2 = {
        strokeColor: '#ba4bff',
        strokeWeight: 3,
        strokeOpacity: 0.8,
        clickable: false
    }

    let options
    let points

    if (props.selectedTrail === 1) {
        options = optionsLine1
        points = props.pointsUltra
        
    }

    if (props.selectedTrail === 2) {
        options = optionsLine2
        points = props.pointsMedia
    }

    return (
        <>
        {props.selectedTrail ? 
            <Polyline
                path={points}
                options={options}
            />
        : null}
        </>
    )
}

export default Line