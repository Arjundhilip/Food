"use client"
import { MapContainer, TileLayer, Marker, Popup,Polygon,Polyline,PolygonProps } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import Link from 'next/link'

import {statesData} from '../resources/data'


const Map = () => {
  return (
    <div className="container m-0.5 place-content-center">
      <MapContainer center={[11.127123, 78.656891]} zoom={7} scrollWheelZoom={true} style={{ height: "500px", width: "vw", alignItems : "center"}}>
        <Marker
          position={[11.0205, 76.9666]}
          draggable={true}
        >
          <TileLayer
            attribution= '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
            url="https://api.maptiler.com/maps/openstreetmap/256/{z}/{x}/{y}.jpg?key=7i4sP5BRf51l7b2tlZL8"
          />
          <Popup className='font-bold text-lg leading-8 text-gray-600'>
            <Link href="/districts/coimbatore"> Coimbatore</Link>
          </Popup>
        </Marker>
        
        

        

      </MapContainer>
    </div>
  )
}

export default Map