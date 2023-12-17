// customization.js

// Exemplo de função para alterar o estilo de um marcador
export const customizeMarkerStyle = (marker) => {
    // Lógica de personalização do estilo do marcador
    marker.setStyle({
      color: '#00ff00',
      icon: customIcon, // Substitua 'customIcon' com a sua própria definição de ícone personalizado
    });
  };
  
  // Exemplo de função para personalizar a caixa de informação de um marcador
  export const customizeInfoBoxContent = (marker, content) => {
    // Lógica de personalização do conteúdo da caixa de informação
    content.innerHTML = `<div class="custom-info-box">${marker.getLatLng()}</div>`;
  };
  