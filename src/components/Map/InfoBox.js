// src/components/Map/InfoBox.js

import React, { useRef, useEffect } from 'react';
import L from 'leaflet';

const InfoBox = ({ markerRef, content }) => {
  const infoBoxRef = useRef(null);

  useEffect(() => {
    // Cria uma caixa de informação
    const infoBox = L.popup().setContent(content);

    // Adiciona a caixa de informação ao marcador
    if (markerRef.current) {
      markerRef.current.bindPopup(infoBox);
    }

    infoBoxRef.current = infoBox;

    return () => {
      // Remove a caixa de informação quando o componente é desmontado
      if (markerRef.current) {
        markerRef.current.unbindPopup(infoBoxRef.current);
      }
    };
  }, [content, markerRef]);

  return null; // O componente não renderiza nada, pois a caixa de informação é manipulada diretamente no marcador
};

export default InfoBox;
