import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native-reanimated', () =>
  require('react-native-reanimated/mock'),
);
// Add this mock for StatusBarManager
jest.mock('react-native', () => {
  const RN = jest.requireActual('react-native');

  RN.NativeModules.StatusBarManager = {
    getHeight: jest.fn((callback) => {
      callback({ height: 20 }); // mock status bar height
    }),
    // iOS uses height in callback; Android may use a promise — cover both
    HEIGHT: 20,
  };

  return RN;
});
