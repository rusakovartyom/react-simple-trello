# Simple Trello

A simple trello clone with drag-and-drop, powered by React.js and Redux.

# Features

This app gives you an opportunity to create/delete lists, cards in these lists and rearrange them however you like. For first time visitors it'll create a default version of the board: with two lists, two cards in each of them.

# What I used

This project was built with:

- [React.js](https://reactjs.org), to make this app modular, scalable and simple for adding future features
- [Redux (Redux Toolkit)](https://redux-toolkit.js.org), to manage the global state of the app

I used additional packages:

- [lodash.throttle](https://www.npmjs.com/package/lodash.throttle): for preventing excessive amount of calls of a function
- [react-textarea-autosize](https://github.com/Andarist/react-textarea-autosize): creates a react component that will render a textarea that resizes itself when needed
- [react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd): simple and lightweight library for implementing drag-and-drop functionalities to cards and lists
- [shortid](https://github.com/dylang/shortid): for generating unique ids

Also:

- [Node.js](https://nodejs.org/en) 18.12.0
- [npm](https://www.npmjs.com) 9.1.2

# Future features

- Labels for cards (set of default ones, an opportunity to create custom ones)
- Functionality to add attachments to cards (images, links, documents)
- Timestamps for cards (was created/was edited)
- Authentication (via mail/anonymous)
- Add Firebase for storing data

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
