// Topics Covered
// Review callback style flow control
// Working with promises to convert a callback style to promises
// Returning promises to create a promise chain
// How to gracefully catch errors thrown in promises with .catch()
// How to return Promise.reject() to pass the error down the pipeline
// Run promises in parallel with Promise.all()
// Create our own promise with new Promise()
/*
Overview
Promise allow us to pass around a chain of asynchronous tasks that will be fired off as soon as the promise is created. We use Promises as a better way to deal with writing async flow control compared to callback style. Doing so allows us to reason about what is happening within our codebase by isolating logic that starts off asynchronous operations.

Review callback style flow control
Callback style is great only for one level compared to nested callbacks. Trying to understand what is available to us within a callback can be challenging with we’re more than one callback deep.

Working with promises to convert a callback style to promises
A promise object simply has a .then that we can invoke with our callback. You can think of a promise like a gift wrapped present that is opened once we reached a certain time or event. We can only open the present once to get it’s value. The .then() callbacks are actions that we fire off after the initial promise is resolved (in our analogy our present is resolved once we reached a certain date).

Returning promises to create a promise chain
The best feature of promises are the chains we can create. We create a promise chain by simply invoking .then() and providing a callback. We can also return another promise that needs to be resolved before continuing down our promise chain

How to gracefully catch errors thrown in promises with .catch()
Catching error is another great aspect of promises because it gives us a standard way of interacting with errors. If we include a .catch in the middle of our promise chain then any errors thrown before it will be caught. We can now choose to rethrow to continue to the next .catch call or handle the error and pass a value that will continue the chain.

How to return Promise.reject() to pass the error down the pipeline
We can also return other values rather than using throw by returning a wrapped value withPromise.reject()

Run promises in parallel withPromise.all()
We can also fire off many async tasks and wait until they are all done before running another task. Composing promises are great because Promise.all() also returns another promise.

Create our own promise with new Promise()
We can create our own promise to wrap other async interfaces or any custom asynchronous tasks that we want to create a standard way of interacting with.

Example Code
*/

function done() {
  console.log('I have all the titles', '\n');
}
getRandomSpaceTitle(function(data) {
  console.log('Space Tilte: ', data, '\n')
  throw new Error('hi again');
})
getRandomCatTitle(function(data) {
  console.log('Cat Tilte: ', data, '\n')
})
getRandomKittenTitle(function(data) {
  console.log('Kitten Tilte: ', data, '\n')
})
done();

// callback style
function getRandomSpaceTitle(callback) {
  getTitle('space')
    .then(json => {
      callback(json)
    });
}
function getRandomCatTitle(callback) {
  getTitle('cat')
    .then(json => {
      callback(json)
    });
}
function getRandomKittenTitle(callback) {
  getTitle('kitten')
    .then(json => {
      callback(json)
    });
}

// Promises
function getRandomSpaceTitlePromise() {
  return getTitle('space')
}
function getRandomCatTitlePromise() {
  return getTitle('cat')
}
function getRandomKittenTitlePromise() {
  return getTitle('kitten');
}

// fetch example with promises
function getTitle(title) {
  return fetch('https://www.reddit.com/r/' + title + '.json')
    .then(res => res.json())
    .then(json => json.data.children)
    .then(posts => posts.map(post => post.data.title))
    .then(json => {
      var len = json.length;
      var randomIndex = Math.floor(Math.random() * len);
      return json[randomIndex];
      //var toStringJson = JSON.stringify(json, null, 2);
      //console.log('Reddit posts', toStringJson);
    });
}
