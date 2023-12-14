# Reaction Hooks

Hooks for [Reaction](https://github.com/djalbat/reaction).

These are inspired by React's hooks but do not follow them slavishly. There are three hooks:

* `useState()` A state management hook that closely follows React's hook of the same name but also supports components.
* `useContext()` A hook that leverages contexts in order to enable components closely related to each other in the DOM to communicate.
* `useEffects()` A hook that leverages Reaction's in-built update functionality in order to enable communication right across the DOM.

The `useEffects()` hook in fact bears very little resemblance to React's hook of the same name and is more akin to [Inference](https://github.com/djalbat/inference). It could be said to be like Inference but without the rules.   

## Installation

With [npm](https://www.npmjs.com/):

    npm install reaction-hooks

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/reaction-hooks.git

...then install the dependencies with npm from within the project's root directory:

    npm install

You can also run a development server, see the section on building later on.

## Building

Automation is thanks to [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

You can also start a small development server:

    npm start

The example will then be available at http://localhost:8888 and will reload automatically when changes are made.

## Contact

- james.smith@djalbat.com
