# Reaction Hooks

Hooks for [Reaction](https://github.com/djalbat/reaction).

These are inspired by React's hooks but do not follow them slavishly. Three are three available:

* `useState()` A state management hook that does indeed slavishly follow React's hook of the same name. It also supports created classes and components, however.
* `useContext()` A hook that leverages contexts in order to enable directly related components to communicate. Typically component methods are passed via the context so that one component can call the methods of another.
* `useEffects()` A hook based around Reaction's update functionality in order to enable components to communicate no matter how they are related. It is also possible for components to communicate with other parts of an application and vice-versa using effects.

The `useEffects()` hook in fact bears very little resemblance to React's hook of the same name and is more akin to [Inference](https://github.com/djalbat/inference) albeit without the rules.   

## Installation

With [npm](https://www.npmjs.com/):

    npm install reaction-hooks

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/reaction-hooks.git

...then install the dependencies with npm from within the project's root directory:

    npm install

You can also run a development server, see the section on building later on.

## Usage

The hooks are imported thus:

```
import { useState, useContext, useEffects } from "reaction-hooks";
```

The only other function is `emitEffect()`, which can be obtained by destructuring the `useEffects()` hook:

```
const { emitEffect } = useEffects;
```

Detailed usages are outlined in the recommanded patterns section that follows the example section.

## Example

There is a small development server that can be run from within the project's directory with the following command:

    npm start

The example will then be available at the following URL:

http://localhost:8888

The source for the example can be found in the `src/example.js` file and corresponding `src/example` folder. You are encouraged to try the example whilst reading what follows. You can rebuild it on the fly with the following command:

    npm run watch-debug

The development server will reload the page whenever you make changes.

One last thing to bear in mind is that this package is included by way of a relative rather than a package import. If you are importing it into your own application, however, you should use the standard package import.

## Recommended patterns

Each of the hooks are covered in turn with the listings closely matching the example code.

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

Because the `useState()` hook is passed a reference to the corresponding element it can also support created classes and components, which also both have corresponding underlying elements.

To continue, the second way is with created classes. The name is a misnomer as they are not classes at all. With the advent of components they rarely if ever used, nonetheless they continue to be supported:

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

Note that the `useState()` call takes place within the `render()` function.

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

Of course created classes and components support state without the need for a hook.

### `useContext()`

This hook can be used comprehensively to share information, most likely methods, between components and the like that are directly related in the DOM. What this means is that in order for one component to share information with another it must be a descendant of the other or vice-versa. Since this hook leverages contexts, perhaps this is not so surprising. In fact another lifecycle method, namely the `childContextSet()`lifecycle method, was added to Reaction in order to support it. 

At the topmost level of the example component both this lifecycle method and the `setChildContext()` lifecycle method are utilised: 

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

This usage is noteworthy because it does not make use of the `useContext()` hook at all. A more primitive approach is used here to emphasise the fact that the object created in the `createChildContext()` lifecycle method is not only passed down to the component's descendants but is also precisely the one that is passed to the component's own  `childContextSet()` lifecycle method.

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
  useContext(this, childContext);
}
```
In the `getChildContext()` lifecycle method, two of the topmost component's own methods are assigned to the context, which is then passed to the component's descendants. Conversely, in the `childContextSet()` lifecycle method, whatever methods are on the child context at this point, which will have been assigned by the topmost component's descendants, are assigned to the topmost component.

Beginning to look down at the component's descendants, we see that the `GotItHeader` component adds two of its own methods to the context:

```
export default class GotItHeader extends Component {
  getChildContext(context) {
    const showGotItHeader = this.show.bind(this), ///
          hideGotItHeader = this.hide.bind(this); ///

    useContext(this, context, {
      showGotItHeader,
      hideGotItHeader
    });

    return context;
  }

  ...
}
```
These will eventually be picked up by the topmost component in its aforementioned `childContextSet()` lifecycle method. Indeed we can see which methods of the component's descendants it ends up assigning to itself by looking at some of its other methods:

```
close() {
  this.hideGotItDiv();
  this.showGotItHeader();
}

open() {
  this.showGotItDiv();
  this.hideGotItHeader();
}
```

Therefore in order to be explicit we could have written:

```
childContextSet(childContext) {
  useContext(this, childContext, [
    "showGotItDiv",
    "hideGotItDiv",
    "showGotItHeader",
    "hideGotItHeader"
  ]);
}
```

By way of contrast, the descendant `OpenLinkButton` component grabs one of the topmost component's methods from the context and assigns it to itself. The method is then made use of in its own `render()` method:

```
export default class OpenLinkButton extends Component {
  getChildContext(context) {
    useContext(this, context, [
      "openLinkButtonClickHandler"
    ]);
  }

  render(update) {
    const { descendants } = this.props,
          clickHandler = this.openLinkButtonClickHandler;  ///

    return (

      <button className="open link" onClick={clickHandler}>
        {descendants}
      </button>

    );
  }
}
```

To summarise, the `useContext()` hook allows methods and the like to piggy back on the context, so to speak, so that components can pick them up and make use of them. Thus related components can call methods on each other without the need for more complex or indirect mechanisms such as message passing.

### `useEffects()`

This hook was added to solve the problem of communication between components that do not share the same context, or to allow other parts of the application to communicate with components or vice-versa. Essentially an effect is a named object, it can be a plain old JavaScript object, a function, a class instance or whatever, that is emitted by one part of the application and subsequently used by another. 

In the example, primary navigation buttons emit effects that are then picked up by articles, which hide or show themselves depending on whether or not their names match the effects. Specifically, there is a base `Button` component that emits an `articleName` effect...

```
export default class Button extends Component {
  clickHandler = (event) => {
    const { articleName } = this.constructor;

    emitEffect("articleName", articleName);
  }

  render(update) {
    const { text } = this.constructor;

    return (

      <button onClick={this.clickHandler}>
        {text}
      </button>

    );
  }
}
```

...the sub-components of which are configured to correspond to a particular article:

```
import Button from "../button";

export default class HomeButton extends Button {
  static text = "Home";

  static articleName = "home";
}
```

The corresponding `Article` component uses this effect...

```
export default class Article extends Component {
  updateHandler = (update) => {
    const { name } = this.constructor,
          { articleName } = update;

    (name === articleName) ?
      this.show() :
        this.hide();
  }

  componentDidMount() {
    this.discardEffects = useEffects(this.updateHandler, "articleName");
  }

  componentWillUnmount() {
    this.discardEffects();
  }
}
```
...with again its sub-components being configured with specific names:

```
import Article from "../article";

export default class HomeArticle extends Article {
  static name = "home";

  render(update) {
    ...
  }
}
```
It is usual to configure a component to call an `updateHandler()` handler method in response to an effect being used, the reason being that whereas in this case the body of the handler method is benign in the sense that the component is not redrawn, often it is the case that the component does need to be redrawn, in which case Reaction provides a standard mechanism to do so. Precisely:

```
updatehandler(update) {
  this.forceUpdate();
}
```

Underneath the hood the `forceUpdate()` method will unmount the component's descendants and then mount the new descendants returned by invoking the component's `render()` method, which is passed the requisite update. In fact the update is just a plain old JavaScript object the single property of which is named after the effect and its value is the effect itself. 

Finally, note that a component or indeed any part of the application can be configured to listen to several effects as additional arguments to the `useEffects()` hook, hence the use of the plural, in which cases the encapsulation of each effect in a plain old JavaScript object becomes invaluable for ascertaining which effect has been emitted. 

## Building

Automation is thanks to [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Contact

* james.smith@djalbat.com
