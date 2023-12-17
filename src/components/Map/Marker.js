// src/components/Map/Marker.js

import React, { useRef, useEffect } from 'react';
import L from 'leaflet';

const Marker = ({ position, popupContent }) => {
  const markerRef = useRef(null);

  useEffect(() => {
    // Cria um marcador
    const marker = L.marker(position);

    // Adiciona um popup ao marcador, se houver conteúdo
    if (popupContent) {
      marker.bindPopup(popupContent);
    }

    // Adiciona o marcador ao mapa
    markerRef.current = marker;
    marker.addTo(map); // Certifique-se de ter uma referência válida para o objeto de mapa

    return () => {
      // Remove o marcador quando o componente é desmontado
      map.removeLayer(markerRef.current);
    };
  }, [position, popupContent]);

  return null; // O componente não renderiza nada, pois o marcador é manipulado diretamente no mapa
};

export default Marker;
