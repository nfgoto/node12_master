const { Observable, interval, from } = require("rxjs");
const { map, filter, buffer, flatMap, concatMap } = require("rxjs/operators");
const axios = require("axios");

// $ used to denote that something is subscribable
/* let observable$ = new Observable(subscriber => {
  let i = 0;
  let cancellationToken = setInterval(() => {
    subscriber.next(i);
    i++;
  }, 1000);

  setTimeout(() => {
    clearInterval(cancellationToken);
    subscriber.complete();
  }, 10000);
}); */

// observable$ = interval(1000).pipe(
//   map(v => v + 10),
//   filter(v => v % 2 === 0),
//   // transform stream of int into stream of int[]
//   buffer(interval(5000))
// );

// observable$.subscribe(
//   // event handler
//   console.log,
//   // error handler
//   console.error,
//   // stream completion handler
//   console.log
// );

// will create an observable that when resolved will emit username
function fetchUserName(id) {
  return from(
    axios.default.get(`https://jsonplaceholder.typicode.com/users/${id}`)
  ).pipe(
    map(res => res.data),
    map(user => user.name)
  );
}

// transform promise into observable
from(
  axios.default
    .get("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.data)
)
  .pipe(
    // to get each item as an event instead of the whole array as a single event
    flatMap(posts => posts),
    // concat two streams, stream of posts + stream of fetched usernames in the second func argument
    concatMap(
      post => fetchUserName(post.userId),
      (post, username) => {
        post.username = username;
        return post;
      }
    )
  )
  .subscribe(posts => console.log(posts));
