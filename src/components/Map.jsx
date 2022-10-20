import React from 'react'
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup
}
  from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const Map = () => {

  const position = [31.634933216235996, -8.058749888120538]

  return (
    <div>
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false} 
        style={{ height: '100vh', width: '100%' }}
        doubleClickZoom
      >
        <TileLayer
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
          url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=G0WmjLZBVuGTwsHq6fWb"
        />
        <Marker position={position}>
          <Popup>
            your location popup
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default Map;