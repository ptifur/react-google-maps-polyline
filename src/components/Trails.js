import '../Trails.css'

const Trails = () => {
    return (
        <div className="wrapper">
            <div className="top">

            </div>
            <div className="about-the-project">
                <h2>Running Trails on Tenerife</h2>
                <p>
                    <em>Tenerife Blue Trail</em> is a running event they hold each year on Tenerife island
                </p>
                <p>
                    The Trails have various distance. Here is the decription for the two of them
                </p>
            </div>
            <div className="trails">
                <div className="trail">
                    <h3>Media</h3>
                    <p>
                        20 km
                    </p>
                    <img src="/tenerife-chinyero.jpg" alt="1" width="100%" />
                </div>
                <div className="trail">
                    <h3>Ultra</h3>
                    <p>
                        177 km
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default Trails