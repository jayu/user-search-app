This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Notes for reviewers

I enjoyed the task, it was relatively easy, but I think it helps to compare the level of candidates.

All we know is the mockup and API response, so my solution is based on the following assumptions:

- Project is too small for introducing state management library, I decided to use local state only. If the would be a bit more complex, I would use [overmind](https://overmindjs.org/), which, I think is a great alternative to redux, because of reduced boilerplate code that has to be written.
- List of users contains only 10 entries. In real-world environment I would use [react-virtualized](https://github.com/bvaughn/react-virtualized) to prevent UI lags during renders, especially while searching

I decided to use CSS modules as styling solution since I didn't want to spend time on configuring SCSS only for reusing some color variables. Probably it plays well with CRA anyway...

I tried to keep components reusable, even if they serve only one purpose in this project. I did a small refactoring at the end.

I decided to configure TypeScript and ESlint to have great DX during that short coding session.

I wrote a couple of test also.

You can run `yarn checks` to verify if everything is passing.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

You can use `serve` package to host build application

```sh
yarn global add serve
npx serve -s build
```
