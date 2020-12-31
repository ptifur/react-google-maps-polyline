import { InfoBox } from '@react-google-maps/api'

const Info = props => {

    const optionsInfoBox = { 
        closeBoxURL: '', 
        enableEventPropagation: true
    }

    let positionInfoBox
    let className

    if (props.selectedTrail) {
        positionInfoBox = props.trailInfo[props.selectedTrail - 1].position
        className = `info-box-${props.selectedTrail}`
    }

    // console.log(props.selectedTrail)
    // console.log(positionInfoBox)

    return (
        <>
        {props.selectedTrail ? 
            <InfoBox 
                options={optionsInfoBox} 
                position={positionInfoBox}
            >
                <div className={className}>
                    <div className="info-title">
                        {props.trailInfo[ props.selectedTrail - 1 ].name}
                    </div>
                    <p className="info-text">Distance {props.trailInfo[ props.selectedTrail - 1 ].distance} km</p>
                </div>
            </InfoBox>
        : null}
        </>
    )
}

export default Info