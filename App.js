import React from 'react'
import ReactDOM from 'react-dom'
import data from './data'
import Header from './components/Header'
import Location from './components/Location'

export default function App() {
    const locationData = data.map(loc => {
        return (
            <Location 
                key={loc.title}
                location={loc.location}
                googleMapsUrl={loc.googleMapsUrl}
                startDate={loc.startDate}
                endDate={loc.endDate}
                imgUrl={loc.imageUrl}
                description={loc.description}
            />
        )
    })
    
    
    return (
        <div className="container">
            <Header />
            {locationData}
        </div>
    )
}