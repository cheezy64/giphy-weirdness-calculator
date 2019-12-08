# Introduction
This calculates your "weirdness" based on what GIFs you ultimately like

# Installation
* Run `npm install` and replace my GIPHY key with yours in the `.env` file
* Run `npm start` and navigate to `http://localhost:3000`

# Thought Process
## State
Most state is local to the components.  I used Redux to share which GIFs the user "likes" since that is the only common state between all components
## Classes, Functional Components, and Hooks
I did a mix of these components to mimic how an old project may evolve into using the newest features of React
## Naming Convention
I split `views` and `state`.  This allows for a better separation of concerns between the whole program.  Anything that has state will be suffixed with `Container` as a hint to the developer.

The `state` folder may seem complex, but it will be easier to manage as the app grows.  The idea is that each folder contains state related to a specific feature

# Testing
In the interest of time, I have not created any tests.  In the future, I may add some.
## React
For React components, I would use `enzyme` to mount the components and test that certain buttons are disabled (e.g. search is disabled when there's no input, like is disabled when the search term has been liked already).
I'd also test that the "remaining" likes counts as necessary.
## Redux
Very easy to test since it's testing that certain inputs produce certain states.

# TODO
* Fix up CSS so that images are bound to certain dimensions
* Write tests
* Cache images.  I originally thought I could leverage the browser to cache it, but it doesn't seem to be a guarantee.