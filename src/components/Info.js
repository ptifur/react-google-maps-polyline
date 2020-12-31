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

    console.log(props.selectedTrail)
    console.log(positionInfoBox)

    return (
        <>
        {props.selectedTrail ? 
            <InfoBox 
                options={optionsInfoBox} 
                position={positionInfoBox}
            >
                <div className={className}>
                    <h2>
                        {props.trailInfo[ props.selectedTrail - 1 ].name}
                    </h2>
                    <p>Distance {props.trailInfo[ props.selectedTrail - 1 ].distance} km</p>
                </div>
            </InfoBox>
        : null}
        </>
    )
}

export default Info