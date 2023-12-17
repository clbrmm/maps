// next.config.js

module.exports = {
    // Configurações específicas do Next.js
    reactStrictMode: true,
  
    // Adiciona mapeamento de caminhos (path mapping) para importações absolutas
    webpack: (config, { dev, isServer }) => {
      // Adapte conforme necessário
      if (!dev && isServer) {
        // Configurações específicas para produção no servidor
      }
  
      // Exemplo de mapeamento de caminho para importações absolutas
      config.resolve.modules.push(__dirname);
  
      return config;
    },
  };
  