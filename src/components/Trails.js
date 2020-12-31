import '../Trails.css'
import pic1 from '../images/tenerife-chinyero.jpg'
import pic2 from '../images/tenerife-trail.jpg'

const Trails = () => {
    
    return (
        <div className="wrapper">
            <div className="top">
            </div>
            <div className="about-the-project">
                <h2>Running Trails on Tenerife</h2>
                <p>
                    <em>Tenerife Blue Trail</em> is a running event they hold each year on Tenerife island.
                </p>
                <p>
                    The Trails have various distance. Here is the decription for the two of them.
                </p>
                <p>
                    <em>Please note.</em> As this is a practice project, presented numbers may not be accurate. For the correct information refer to the official wesbite.
                </p>
            </div>
            <div className="trails">
                <div className="trail">
                    <h3>Ultra</h3>
                    <p>Distance: 103 km</p>
                    <p>Time limit: 24 hours</p>
                    <p>The race is distributed into paths (70%), tracks (17) and asphalt (13%)</p>
                    <img src={pic1} alt="1" width="100%" />
                </div>
                <div className="trail">
                    <h3>Media</h3>
                    <p>Distance: 20 km</p>
                    <p>Time limit: 4 hours</p>
                    <p>This race will comprise paths (32%), tracks (18%) and asphalt (50%)</p>
                    <img src={pic2} alt="1" width="100%" />
                </div>
            </div>
        </div>
    )
}

export default Trails