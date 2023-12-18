// src/components/Map/Map.js

import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import Marker from './Marker';
import InfoBox from './InfoBox';

import styles from 'src/styles/Map.module.css';

const Map = () => {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      style={{ height: '400px' }}
      className={styles['leaflet-map-container']}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='© OpenStreetMap contributors'
      />

      {/* Adicione outros componentes relacionados ao mapa aqui, se necessário */}
    </MapContainer>
  );
};

export default Map;
