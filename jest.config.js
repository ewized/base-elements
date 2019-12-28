module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  testEnvironment: 'jsdom',
  rootDir: 'src',
  verbose: true,
  transformIgnorePatterns: [
    '/node_modules/(?!(lit-element|lit-html)).+\\.js$',
  ],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
}
