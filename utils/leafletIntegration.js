// leafletIntegration.js

import L from 'leaflet';

// Função para inicializar o mapa usando a biblioteca Leaflet
export const initializeMap = (mapContainerId) => {
  // Verifica se o contêiner do mapa existe
  const mapContainer = document.getElementById(mapContainerId);

  if (!mapContainer) {
    console.error(`Map container with id '${mapContainerId}' not found.`);
    return null;
  }

  // Cria um mapa e retorna a instância
  const map = L.map(mapContainerId).setView([51.505, -0.09], 13);

  // Adicione provedores de mapa, camadas, marcadores, etc., conforme necessário
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
  }).addTo(map);

  return map;
};

// Função para adicionar um marcador ao mapa
export const addMarkerToMap = (map, latitude, longitude, options = {}) => {
  const marker = L.marker([latitude, longitude], options).addTo(map);
  return marker;
};

// Função para adicionar uma caixa de informação a um marcador
export const addInfoBoxToMarker = (marker, content, options = {}) => {
  const infoBox = L.popup(options).setContent(content);
  marker.bindPopup(infoBox);
};
