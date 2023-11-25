# React

## Redux

- Install
  - @reduxjs/toolkit
  - react-redux
- Build out store
- Integrate store with app
- Create slice (cartSlice)
- dispatch (action)
- Subscribe to selectors

## Testing

- Unit testing
- Integration testing
- End to end testing - e2e testing

Steps to integrate testing framework

- Setting up Testing in our app
- Install React Testing Library
- Installed jest
- Installed Babel dependencies
- Configure Babel
- Configure Parcel Config file to disable default babel transpilation
- Jest - npx jest --init
- Install jsdom library
- Install @babel/preset-react - to make JSX work in test cases
- Include @babel/preset-react inside my babel config
  ['@babel/preset-react', { runtime: 'automatic' }]
- npm i -D @testing-library/jest-dom
  - Install @testing-library/jest-dom and @types/jest
