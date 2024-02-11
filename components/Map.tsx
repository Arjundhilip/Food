"use client"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import Link from 'next/link'


const Map = () => {
  return (
    <div className="container mx-auto content-center">
      <MapContainer center={[11.0205, 76.9666]} zoom={14} scrollWheelZoom={false} style={{ height: "500px", width: "90%", }}>
        <Marker
          position={[11.0205, 76.9666]}
          draggable={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Popup>
            <Link href="https://www.youtube.com/watch?v=WtoyIiOp5Awa"> Hey Fathima</Link>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default Map