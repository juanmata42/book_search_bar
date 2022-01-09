# book_search_bar
For TaxScouts interview
 
It detects your country based on your ip with this and changes the language and the amazon link accordingly.
(NOTE: not all domains are in use, complete list here https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/registrar-tld-list-geographic.html)

The placeholder text on the search input was translated first to 4 of the 5 languages I speak (spa,eng,fr,port), then used deepGL, stopped at countries with languages that weren't an option there. I couldn't translate text to spanish sign language because...well

This is the link to the trello I used to set tasks and track progress
trello   https://trello.com/b/xJvsG4m0/searchbar

Typing into the search bar has a debounce timer of 500ms. This is not a random number, 
I had 10 friends writing words with different times and after asking them, this was the timer that gave the best user experience

I limited the results to 10 because the user's experience was best on average with that number(with their different internet speeds).
More than 10 gave either too many results that were left unseen or got a slow api response/loading time. 
Less could, sometimes, exclude wanted results.

I decided to filter some api results because it shows sometimes merchandise instead of books, which can't be found on amazon.

Redux is used to store country and search results, both from APIs, so as to improve performance and avoid redundant calls.
It is ready to be expanded for a bigger project, if needed.

If you wish to see jest tests's coverage, go to coverage/Icov-report/index.html. It looks a little higher than the sonarqube's one.
The things I left untested were related to changes in style, such as an after element with a gradient mask, and I thought them 
unimportant, since they worked as expected with different users, phones, computers and internet speeds. 
I believe it's important to mention it to you because in a future project, I would ask you about this "final decisions" and change
things accordingly.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
