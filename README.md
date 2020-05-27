 # ElfsightInc test task
 ### Task[1]
Description: By link https://jsfiddle.net/elfsight_ivanenko/cza8v6ej/ there is a car booking form that has a number of artificially created problems. You need to test the form and fix all the problems found in it.
### Result:
Bugs fixed:
> - Fixed translate to `translate ($ {- formWrapperRect.width * state.step} px, 0)`, since this block was not visible.
> - in async function fixed "recapcha" on `recaptcha`
> - formBannerElement.classList.toggle ('form__banner - visible', state.success) was `added to render ()`,
since the banner did not appear, as well as in handleFormSubmit, event.preventDefault () was added,
so that there is no reload after submit form
- Link - https://jsfiddle.net/sieugene/bzhgkon8/latest/

 ### Task[2]
Description: You need to develop a web application on React, which is a simple photo gallery.
The user must have the following features:

- View the author’s album list, where each album consists of a cover, title and number of photos in it
- View a list of photos inside an album
- Open the photo in the popup for detailed viewing
- Flick through album photos inside popup
- Return from a specific album to the album list

As a data source, you must use the service https://jsonplaceholder.typicode.com/ (albums, photos, users).
To build a UI, we ask you not to use ready-made components and libraries, since we want to see your development and layout skills.

### Result:

- Photos are displayed on the main page
- When clicked, the transition to the album related to this photo will also be displayed in the first block, the photo on which the click was made
- When you click on the image, a modal window will open in which you can view photos, to exit, you can press "X" or click outside the window.
- When you click on the user’s album view, it will go to the page with albums related to the current user.
- Being in the user's albums, when you click on an album, there will be a transition to an album in which there are photos.

### `Not solved`:
- There is a problem with CORS policies for gh-pages
- No store cleaning on transitions
- Not cleared request delay

![demo](https://github.com/sieugene/ElfsightInc/blob/master/src/assets/images/1.png?raw=true) 
![demo](https://github.com/sieugene/ElfsightInc/blob/master/src/assets/images/2.png?raw=true)
![demo](https://github.com/sieugene/ElfsightInc/blob/master/src/assets/images/3.png?raw=true)
![demo](https://github.com/sieugene/ElfsightInc/blob/master/src/assets/images/4.png?raw=true)
![demo](https://github.com/sieugene/ElfsightInc/blob/master/src/assets/images/5.png?raw=true)



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

