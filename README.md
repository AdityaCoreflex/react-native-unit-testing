# React Native UI Component Integration & Testing

This project is a demonstration of building modular UI components in React Native and writing unit tests using Jest and React Native Testing Library.

## Features

- Modular and reusable UI components
- Custom Hooks
- Redux Toolkit integration
- Context API usage
- REST API integration using Axios
- Unit test coverage for all components and screens

## Folder Structure

src/
├── components/ # All UI components (Button, Modal, etc.)
├── context/ # Context API files
├── customHooks/ # Custom hooks like useToggle
├── reduxStore/ # Redux Toolkit store and slices
├── screens/ # Screens integrating components
└── utils/ # Static data

**tests**/
├── components/ # Component-level test cases
└── screens/ # Screen-level and integration tests

## Components Covered

- Button
- TextField (with keyboard and password support)
- Accordion
- ToggleSwitch
- Chip
- Card
- Modal

## Test Cases Covered

- Rendering and visibility of components
- Button press events
- Text input and secure entry
- Accordion toggle state
- Switch toggle state
- Modal open/close behavior
- Chip selection
- Redux state update (Counter)
- Context value toggling (Theme)
- API call mocking (Axios)
- Custom hook (`useToggle`) state behavior

## Running Tests

# Run all test suites

npm test

# Run a specific test file

npx jest **tests**/components/Button.test.tsx

# Run tests by name

npx jest -t "Accordion"
