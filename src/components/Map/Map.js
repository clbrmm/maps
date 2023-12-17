// src/components/Map/Map.js

import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Importa os componentes Marker e InfoBox
import Marker from './Marker';
import InfoBox from './InfoBox';

// Importa os estilos específicos do componente Map
import styles from 'src/styles/Map.module.css'; // Importa os estilos usando CSS Modules

const Map = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    // Cria o mapa
    const map = L.map(mapContainerRef.current).setView([51.505, -0.09], 13);

    // Adiciona camada de mapa padrão do OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(map);

    // Exemplo de marcador no mapa
    const markerPosition = [51.505, -0.09];
    const markerPopupContent = 'Hello World! This is a sample marker.';
    const markerRef = useRef(null);

    // Adiciona o marcador ao mapa
    if (markerPosition && markerPopupContent) {
      markerRef.current = <Marker position={markerPosition} popupContent={markerPopupContent} />;
    }

    // Exemplo de caixa de informação associada ao marcador
    const infoBoxContent = 'This is an example info box.';
    const infoBoxRef = useRef(null);

    // Adiciona a caixa de informação ao marcador
    if (markerRef.current && infoBoxContent) {
      infoBoxRef.current = <InfoBox markerRef={markerRef} content={infoBoxContent} />;
    }
  }, []);

  return <div id="leaflet-map" className="leaflet-map-container" ref={mapContainerRef}></div>;
};

export default Map;
