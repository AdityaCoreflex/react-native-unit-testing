module.exports = {
  preset: 'react-native',
  setupFiles: ['<rootDir>/jest/setup.js'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  
  transformIgnorePatterns: [
  'node_modules/(?!(react-native' +
    '|@react-native' +
    '|react-native-reanimated' +
    '|react-native-ui-lib' +
    '|uilib-native' + 
    '|@react-navigation' +
    '|react-redux'+
  ')/)',
],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
