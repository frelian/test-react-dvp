module.exports = {
    presets: [

      // Para las características de JavaScript moderno
      '@babel/preset-env',

      // Para soportar JSX en los componentes de React
      ['@babel/preset-react', { runtime: 'automatic' }]
    ],
  };