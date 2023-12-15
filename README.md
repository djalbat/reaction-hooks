# Reaction Hooks

Hooks for [Reaction](https://github.com/djalbat/reaction).

These are inspired by React's hooks but do not follow them slavishly. Three are three available:

* `useState()` A state management hook that does indeed closely follow React's hook of the same name. It also supports created classes and components, however.
* `useContext()` A hook that leverages contexts in order to enable components directly related to one another in the DOM to communicate. Typically component methods are passed via the context so that one component can call the methods of another.
* `useEffects()` A hook that use Reaction's in-built updates functionality in order to enable components to communicate no matter their relative positions in the DOM. It is also possible to communicate with other parts of an application in this manner.

The `useEffects()` hook in fact bears very little resemblance to React's hook of the same name and is more akin to [Inference](https://github.com/djalbat/inference) but without the rules.   

## Installation

With [npm](https://www.npmjs.com/):

    npm install reaction-hooks

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/reaction-hooks.git

...then install the dependencies with npm from within the project's root directory:

    npm install

You can also run a development server, see the section on building later on.

## Usage

The three hooks are imported thus:

```
import { useState, useContext, useEffects } from "reaction-hooks";
```

The only other function is `emitEffect()`, which can be obtained by destructuring the `useEffects()` hook:

```
const { emitEffect } = useEffects;
```

Detailed usages are outlined in the recommanded patterns section that follows the example section.

## Example

Launch the `example.html` file. There is a single hooks example which encapsulates all of the hooks.

## Recommended patterns

Each of the hooks are covered with the listings closely matching the example code.

### `useState()`

There are three ways to use the `useState()` hook. 

The first will be familiar to React users as it enables functional elements to maintain state:

```
const initialCount = 0;

const FunctionUseStateParagraph = (props, context, update, element) => {
  const [ count, setCount ] = useState(element, initialCount);

  return (

    <p onClick={(event) => setCount(count + 1)}>
      Function state: {`${count}`}
    </p>

  );
};
```
Note that the last of the four function arguments is a reference to the function's corresponding element. The details are unimportant, however this reference must be passed as the first argument of the `useState()` call. Otherwise the usage is entirely analogous to the corresponding React hook.

Because the `useState()` hook is passed a reference to the corresponding element under the hood, so to speak, it should come as no surprise that can also support created classes and components, which also both have corresponding underlying elements.

The second way is with created classes. The name is a misnomer as they are not classes at all and rarely if ever utilised. They are supported for the sake of completeness, however:

```
const { createClass } = React;

let initialCount = 0;

const CreateClassUseStateParagraph = createClass({
  render: function(update) {
    const [ count, setCount ] = useState(this, initialCount);

    return (

      <p onClick={(event) => setCount(count + 1)}>
        createClass state: {`${count}`}
      </p>

    );
  }
});
```

Essentially the only difference between this usage and the functional usage is that the `useState()` call takes place within the `render()` function.

Lastly, genuine components, which are treated identically:

```
const { Component } = React;

let initialCount = 0;

export default class ComponentUseStateParagraph extends Component {
  render(update, element) {
    const [ count, setCount ] = useState(element, initialCount);

    return (

      <p onClick={(event) => setCount(count + 1)}>
        Component state: {`${count}`}
      </p>

    );
  }
}
```

Of course created classes and components support state without the need for a hook. At the risk of repetition, support for the `useState()` hook cost virtually nothing and is included more for the sake of completeness than for anything else.

### `useContext()`

### `useEffects()`

## Building

Automation is thanks to [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

You can also start a small development server:

    npm start

The example will then be available at http://localhost:8888 and will reload automatically when changes are made.

## Contact

- james.smith@djalbat.com
