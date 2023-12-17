// src/utils/responsiveness.js

// Função para ajustar o comportamento do mapa com base no tamanho da tela
export const handleResponsiveMap = (map) => {
  const onResize = () => {
    // Lógica de ajuste responsivo aqui
    if (window.innerWidth < 600) {
      // Modificações específicas para telas menores
      map.setView([51.505, -0.09], 10);
    } else {
      // Restaura o comportamento padrão para telas maiores
      map.setView([51.505, -0.09], 13);
    }
  };

  // Adiciona um ouvinte de redimensionamento para ajustar o mapa conforme necessário
  window.addEventListener('resize', onResize);

  // Chama a função inicialmente para configurar o mapa no carregamento da página
  onResize();
};

// Limpar ouvintes de redimensionamento ao desmontar o componente ou quando não for mais necessário
export const cleanupResponsiveMap = () => {
  window.removeEventListener('resize', onResize);
};
