import React from 'react'

export default function Location(props) {
    return (
        <div className="location-card-main">
            <div className="location-card">
                    <div className="img-div">
                        <img src={props.imgUrl} className="location-image" />
                    </div>
                    <div className="wrapper">
                        <div className="location-div">
                            <p className="location"><span className="material-icons md-18 md-red">place</span>{props.location}</p>
                            <a href={props.googleMapsUrl} className="google-maps-link">View on Google Maps</a>
                        </div>
                            <h1 className="city-name">{props.title}</h1>
                            <p className="date"><strong>{props.startDate} - {props.endDate}</strong></p>
                            <p className="description">{props.description}</p>
                    </div>
            </div>
            <hr />
        </div>
    )
}