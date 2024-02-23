"use client"
import { MapContainer, TileLayer, Marker, Popup, Polygon, Polyline, PolygonProps, CircleMarker } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import Link from 'next/link'
import Leaflet from "leaflet";
import { Icon, divIcon, point } from "leaflet";

import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
  ShoppingBagIcon,
  UserIcon
} from '@heroicons/react/24/outline'

import { statesData } from '../resources/data'


const CustomIcon = Leaflet.divIcon({
  html: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M19.1 19.16C19.69 18.26 19.91 17.8 20.36 16.79C17.04 15.53 16.51 10.8 19.79 8.98999C18.79 7.72999 17.38 7 16.05 7C15.09 7 14.43 7.25001 13.84 7.48001C13.34 7.67001 12.89 7.84 12.33 7.84C11.73 7.84 11.2 7.65001 10.64 7.45001C10.03 7.23001 9.39 7 8.59 7C7.1 7 5.51001 7.91 4.50001 9.47C3.08001 11.67 3.33001 15.79 5.62001 19.31C6.44001 20.57 7.54001 21.98 8.97001 22C9.57001 22.01 9.96 21.83 10.39 21.64C10.88 21.42 11.41 21.18 12.34 21.18C13.27 21.17 13.79 21.42 14.28 21.64C14.7 21.83 15.08 22.01 15.67 22C17.12 21.98 18.28 20.42 19.1 19.16Z" fill="#30AF5B"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M15.84 2C16 3.1 15.55 4.19001 14.96 4.95001C14.33 5.77001 13.23 6.41 12.17 6.37C11.98 5.31 12.47 4.21999 13.07 3.48999C13.74 2.68999 14.87 2.07 15.84 2Z" fill="#30AF5B"/>
  </svg>`,
  iconSize : [50, 50],
  iconAnchor : [50/2, 50],
  className: 'aspect-auto',



});

const Map = () => {
  

  return (
    <div className="container m-0.5 place-content-center">
      <MapContainer center={[11.127123, 78.656891]} zoom={7} scrollWheelZoom={true} style={{ height: "500px", width: "vw", alignItems: "center" }}>
        
        <Marker
          position={[11.0205, 76.9666]}
          icon={CustomIcon}
        >

          <TileLayer
            attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
            url="https://api.maptiler.com/maps/dataviz/256/{z}/{x}/{y}.png?key=7i4sP5BRf51l7b2tlZL8"
          />

          <Popup className='font-bold text-lg leading-8 text-gray-600'>
            <Link href="/districts/coimbatore"> Coimbatore</Link>
          </Popup>

        </Marker>

        <Marker
          position={[13.0827, 80.2707]}
          icon={CustomIcon}
        >

          <TileLayer
            attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
            url="https://api.maptiler.com/maps/dataviz/256/{z}/{x}/{y}.png?key=7i4sP5BRf51l7b2tlZL8"
          />

          <Popup className='font-bold text-lg leading-8 text-gray-600'>
            <Link href="/districts/coimbatore"> Chennai</Link>
          </Popup>

        </Marker>

        <Marker
          position={[11.6643, 78.1460]}
          icon={CustomIcon}
        >

          <TileLayer
            attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
            url="https://api.maptiler.com/maps/dataviz/256/{z}/{x}/{y}.png?key=7i4sP5BRf51l7b2tlZL8"
          />

          <Popup className='font-bold text-lg leading-8 text-gray-600'>
            <Link href="/districts/coimbatore"> Salem</Link>
          </Popup>

        </Marker>

      </MapContainer>
    </div>
  )
}

export default Map