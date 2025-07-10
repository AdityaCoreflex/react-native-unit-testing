# React Native Component Testing – Jest & React Native Testing Library

This project showcases how to unit test reusable React Native components using **Jest** and **React Native Testing Library (RNTL)**.

---

## Thought Process Before Writing Test Cases

Before writing a test case, consider the following:

1. **What is the component's primary responsibility?**

   - Identify what the component is expected to render and how it should behave.

2. **What are the different states the component can be in?**

   - e.g., loading, success, error, open/closed (like modals or accordions), etc.

3. **What are the possible user interactions?**

   - Button press, text input, switch toggle, modal open/close, etc.

4. **What are the expected side effects or outputs?**

   - API calls, callbacks, state updates, conditional renders, etc.

5. **Are there props or context dependencies?**
   - Ensure to mock or wrap your components appropriately if required.

---

## Jest & React Native Testing Library (RNTL) Basics

This section introduces key concepts and utilities used in our test cases for React Native components.

---

### Basic Setup

We use:

- `jest` — JavaScript testing framework
- `@testing-library/react-native` — For testing React Native UI
- `axios` (mocked with `jest.mock`) — For simulating API calls

---

## Jest Concepts & Functions ( You can also refer https://devhints.io/jest)

| Term / Function                                   | Purpose                                            |
| ------------------------------------------------- | -------------------------------------------------- |
| `describe(name, fn)`                              | Groups related test cases                          |
| `it(name, fn)` or `test(name, fn)`                | Defines a single test case                         |
| `expect(value)`                                   | Used for writing assertions                        |
| `toBe`, `toEqual`, `toBeTruthy`, `toBeNull`, etc. | Matchers used with `expect` to verify outcomes     |
| `jest.fn()`                                       | Creates a mock function                            |
| `jest.mock('module')`                             | Mocks a module (e.g., axios)                       |
| `jest.Mocked<typeof module>`                      | Typesafe mock of a module (useful with TypeScript) |
| `beforeEach` / `afterEach`                        | Setup/cleanup before or after each test            |

---

## React Native Testing Library (RNTL) Functions

| Function            | Purpose                                                               |
| ------------------- | --------------------------------------------------------------------- |
| `render(component)` | Renders a component for testing                                       |
| `getByTestId(id)`   | Gets an element by its `testID` (throws error if not found)           |
| `queryByTestId(id)` | Same as `getByTestId`, but returns `null` if not found (non-throwing) |
| `getByText(text)`   | Finds element by visible text                                         |
| `fireEvent(event)`  | Simulates user interactions like presses, input changes               |
| `waitFor(fn)`       | Waits for asynchronous code to finish (used for API/mounted updates)  |

---

## Summary of above

- Use `testID` on interactive elements to make them testable.
- Prefer `queryByTestId` for optional elements (like modals or loaders) and the elements which are getting rendered conditionally.
- Use `waitFor()` when working with async logic or state updates.
- Use `jest.fn()` for mocking callbacks and checking if they are called.

---

# Unit test cases that are covered in this project

## Features

- Modular and reusable UI components
- Custom Hooks
- Redux Toolkit integration
- Context API usage
- REST API integration using Axios
- Unit test coverage for all components and screens

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

## Snapshot Test Coverage

Snapshot tests are used to capture and validate the UI structure of components across different states. This ensures the UI does not change unexpectedly during development or refactoring.

---

### LoginScreen

| Scenario                            | Description                                             |
| ----------------------------------- | ------------------------------------------------------- |
| `default`                           | Initial render with empty input fields                  |
| `after entering email and password` | Inputs are filled, no error or navigation triggered     |
| `with invalid credentials`          | Displays error message for invalid login attempt        |
| `after pressing Theme button`       | Snapshot taken after triggering Theme screen navigation |

---

### Accordion Component

| Scenario                               | Description                                       |
| -------------------------------------- | ------------------------------------------------- |
| `initially closed`                     | Renders only the accordion header                 |
| `after opening`                        | Displays both the header and the expanded content |
| `after toggling open and closed again` | Content is hidden again; back to initial state    |

---

### Button Component

| Scenario               | Description                                            |
| ---------------------- | ------------------------------------------------------ |
| `default`              | Renders the default button with basic props            |
| `disabled`             | Renders the button in a disabled state                 |
| `with loading`         | Renders a loader/spinner if loading state is active    |
| `with onPress handler` | Confirms snapshot does not change with functional prop |

## Test Coverage Summary

| Metric         | Percentage | Description                                   |
| -------------- | ---------- | --------------------------------------------- |
| **Statements** | 95.23%     | % of all executable code covered by tests     |
| **Branches**   | 97.36%     | % of all conditional branches (if/else, etc.) |
| **Functions**  | 86.04%     | % of all declared functions covered           |
| **Lines**      | 95%        | % of code lines executed during tests         |

---

## File-wise Coverage Details

| File                               | % Stmts   | % Branch  | % Funcs   | % Lines | Uncovered Lines |
| ---------------------------------- | --------- | --------- | --------- | ------- | --------------- |
| **All files**                      | **95.23** | **97.36** | **86.04** | **95**  |                 |
| components/Accordian.tsx           | 100       | 100       | 100       | 100     |                 |
| components/Button.tsx              | 75        | 100       | 50        | 75      | 14              |
| components/Card.tsx                | 100       | 100       | 100       | 100     |                 |
| components/Chip.tsx                | 100       | 100       | 100       | 100     |                 |
| components/Modal.tsx               | 100       | 100       | 100       | 100     |                 |
| components/TextField.tsx           | 100       | 100       | 100       | 100     |                 |
| components/ToggleSwitch.tsx        | 100       | 100       | 100       | 100     |                 |
| context/ThemeContext.tsx           | 100       | 50        | 80        | 100     | 9               |
| customHooks/useToggle.ts           | 100       | 100       | 100       | 100     |                 |
| reduxStore/counterSlice.ts         | 100       | 100       | 100       | 100     |                 |
| screens/HomeScreen.tsx             | 100       | 100       | 100       | 100     |                 |
| screens/LoginScreen.tsx            | 86.66     | 100       | 60        | 86.66   | 57–62           |
| screens/Redux_Integration.tsx      | 100       | 100       | 100       | 100     |                 |
| screens/RestAPI_Integration.tsx    | 100       | 100       | 100       | 100     |                 |
| screens/CustomHook_Integration.tsx | 100       | 100       | 100       | 100     |                 |
| screens/ContextAPI_Integration.tsx | 100       | 100       | 100       | 100     |                 |
| screens/Component_Integration.tsx  | 85.71     | 100       | 71.42     | 85.71   | 26–31           |

---

## Running Tests

```bash
# Run all test suites
npm test

# Run a specific test file
npx jest __tests__/components/Button.test.tsx

# Run tests by name
npx jest -t "Accordion"
```
