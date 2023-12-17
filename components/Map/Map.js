// Map.js
import React from 'react';
import Marker from './Marker';
import InfoBox from './InfoBox';

const Map = () => {
  // Lógica do mapa aqui

  return (
    <div>
      {/* Renderização do mapa */}
      <Marker />
      <InfoBox />
    </div>
  );
};

export default Map;
