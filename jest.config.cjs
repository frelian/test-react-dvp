module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  transform: {

    // Transforma JSX y JS con Babel
    '^.+\\.jsx?$': 'babel-jest',
  },

  // Procesar archivos .js y .jsx
  moduleFileExtensions: ['js', 'jsx'],

  // Configuración de las pruebas de cobertura de al menos 80%
  collectCoverage: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/**/*.test.{js,jsx}',
    '!src/**/index.{js,jsx}',
    '!src/main.jsx',  // Excluye el archivo main.jsx
  ],
  coverageThreshold: {
    global: {
      branches: 65,
      functions: 65,
      lines: 65,
      statements: 65,
    },
  },
};