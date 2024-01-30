// import React from 'react'
import { useSearchParams,useNavigate } from 'react-router-dom';
import styles from './Map.module.css';
import {MapContainer, TileLayer,Marker, Popup} from '@leaflet';

export default function Map() {

  const navigate = useNavigate();

  const [searchParams] =useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  let position = {lat,lng};

  return (
    <div className={styles.mapContainer} onClick={()=>navigate("form")}>
       
       <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
    </div>
  )
}
