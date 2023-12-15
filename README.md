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

The second way is with created classes. The name is a misnomer as they are not classes and they are, with the advent of components, rarely if ever used anymore. Nonetheless they are supported:

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

This hook can be used comprehensively to share information, most likely methods, between components and the like that are directly related in the DOM. What this means is that in order for one component to share information with another one must be a descendant of the other. Since this hooks leverages contexts, perhaps this is not so surprising. In fact another lifecycle method, namely `childContextSet()`, was added to Reaction in order to support it. At the topmost level of the example component both this lifecycle method and the more commonly known `setChildContext()` lifecycle method are utilised: 

```
getChildContext(context) {
  const openLinkButtonClickHandler = this.openLinkButtonClickHandler,
        closeLinkButtonClickHandler = this.closeLinkButtonClickHandler;

  return({
    openLinkButtonClickHandler,
    closeLinkButtonClickHandler
  });
}

childContextSet(childContext) {
  Object.assign(this, childContext);
}
```

This usage is noteworthy because it does not make use of the `useContext()` hook at all. A more primitive approach is used here to emphasise that the object created in the `createChildContext()` lifecycle method is not only the only that it passed down the components children but is also precisely the one that is passed as an argument to the `childContextSet()` lifecycle method.

A more conventional and indeed the recommended approach is to make use of the `useContetx()` hook in both lifecycle methods in each of its respective guises:

```
getChildContext(context) {
  const openLinkButtonClickHandler = this.openLinkButtonClickHandler,
        closeLinkButtonClickHandler = this.closeLinkButtonClickHandler;

  useContext(this, context, {
    openLinkButtonClickHandler,
    closeLinkButtonClickHandler
  });
  
  return context;
}

childContextSet(childContext) {
  useContext(this. childContext);
}
```
In the `getChildContext()` lifecycle method, two of the topmost component's own methods are assigned to the context, a reference to which is then passed to the component's children. Conversely, in the `childContextSet()` lifecycle method, whatever methods are on the child context at this point, which will have been assigned by the children, are assigned to the topmost component.  

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
