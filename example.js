(() => {
  var __defProp = Object.defineProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
  var __commonJS = (cb, mod) => () => (mod || cb((mod = {exports: {}}).exports, mod), mod.exports);
  var __publicField = (obj, key, value) => {
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
  };

  // node_modules/reaction/lib/reactClass.js
  var require_reactClass = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return ReactClass;
      }
    });
    var ReactClass = class {
      constructor(render, getInitialState, getChildContext, componentDidMount, componentWillUnmount, mixins) {
        this.render = render;
        if (getInitialState) {
          this.getInitialState = getInitialState;
        }
        if (getChildContext) {
          this.getChildContext = getChildContext;
        }
        if (componentDidMount) {
          this.componentDidMount = componentDidMount;
        }
        if (componentWillUnmount) {
          this.componentWillUnmount = componentWillUnmount;
        }
        this.mixins = mixins;
      }
      getInitialState() {
        return {};
      }
      getChildContext(context) {
        return context;
      }
      childContextSet(childContext) {
      }
      componentDidMount() {
      }
      componentWillUnmount() {
      }
      static create(object) {
        const {render, getInitialState, getChildContext, componentDidMount, componentWillUnmount, mixins} = object;
        return new ReactClass(render, getInitialState, getChildContext, componentDidMount, componentWillUnmount, mixins);
      }
    };
  });

  // node_modules/reaction/lib/utilities/array.js
  var require_array = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get first() {
        return first;
      },
      get flatten() {
        return flatten;
      },
      get guarantee() {
        return guarantee;
      },
      get remaining() {
        return remaining;
      }
    });
    function first(array) {
      return array[0];
    }
    function flatten(array) {
      return array.reduce((array2, element) => {
        array2 = array2.concat(element);
        return array2;
      }, []);
    }
    function guarantee(arrayOrElement) {
      arrayOrElement = arrayOrElement || [];
      return arrayOrElement instanceof Array ? arrayOrElement : [
        arrayOrElement
      ];
    }
    function remaining(element, array) {
      if (element === null) {
        return array;
      }
      const index = indexOf(element, array);
      return array.slice(index + 1);
    }
    function indexOf(element, array) {
      let index = null;
      array.some((currentElement, currentElementIndex) => {
        if (currentElement === element) {
          index = currentElementIndex;
          return true;
        }
      });
      return index;
    }
  });

  // node_modules/reaction/lib/virtualDOMElement.js
  var require_virtualDOMElement = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return VirtualDOMElement;
      }
    });
    var _array = require_array();
    var VirtualDOMElement = class {
      constructor(props) {
        this.props = props;
        this.parent = null;
        this.children = props.children;
      }
      getProps() {
        return this.props;
      }
      getParent() {
        return this.parent;
      }
      getChildren() {
        return this.children;
      }
      getFirstChild() {
        const firstChild = (0, _array.first)(this.children) || null;
        return firstChild;
      }
      mount(parent, children) {
        this.parent = parent;
        this.children = children;
      }
      unmount() {
        this.parent = null;
        this.children = null;
      }
    };
  });

  // node_modules/reaction/lib/mixins/reactElement.js
  var require_reactElement = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
    function on(eventType, handler) {
      const firstChild = this.getFirstChild();
      return firstChild.on(eventType, handler);
    }
    function off(eventType, handler) {
      const firstChild = this.getFirstChild();
      return firstChild.off(eventType, handler);
    }
    function setAttribute(name, value) {
      const firstChild = this.getFirstChild();
      return firstChild.setAttribute(name, value);
    }
    function getAttribute(name) {
      const firstChild = this.getFirstChild();
      return firstChild.getAttribute(name);
    }
    function clearAttribute(name) {
      const firstChild = this.getFirstChild();
      firstChild.clearAttribute(name);
    }
    function addAttribute(name, value) {
      const firstChild = this.getFirstChild();
      firstChild.addAttribute(name, value);
    }
    function removeAttribute(name) {
      const firstChild = this.getFirstChild();
      firstChild.removeAttribute(name);
    }
    function hasAttribute(name) {
      const firstChild = this.getFirstChild();
      return firstChild.hasAttribute(name);
    }
    function setClass(className) {
      const firstChild = this.getFirstChild();
      firstChild.setClass(className);
    }
    function addClass(className) {
      const firstChild = this.getFirstChild();
      firstChild.addClass(className);
    }
    function removeClass(className) {
      const firstChild = this.getFirstChild();
      firstChild.removeClass(className);
    }
    function toggleClass(className) {
      const firstChild = this.getFirstChild();
      firstChild.toggleClass(className);
    }
    function hasClass(className) {
      const firstChild = this.getFirstChild();
      return firstChild.hasClass(className);
    }
    function hasClasses(classNames) {
      const firstChild = this.getFirstChild();
      return firstChild.hasClasses(classNames);
    }
    function clearClasses() {
      const firstChild = this.getFirstChild();
      firstChild.clearClasses();
    }
    function getTagName() {
      return null;
    }
    function getStyle(name) {
      const firstChild = this.getFirstChild();
      return firstChild.getStyle(name);
    }
    function setStyle(name, value) {
      const firstChild = this.getFirstChild();
      firstChild.setStyle(name, value);
    }
    var _default = {
      on,
      off,
      setAttribute,
      getAttribute,
      clearAttribute,
      addAttribute,
      removeAttribute,
      hasAttribute,
      setClass,
      addClass,
      removeClass,
      toggleClass,
      hasClass,
      hasClasses,
      clearClasses,
      getTagName,
      getStyle,
      setStyle
    };
  });

  // node_modules/reaction/lib/virtualDOM/react.js
  var require_react = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
    var _virtualDOMElement = /* @__PURE__ */ _interop_require_default(require_virtualDOMElement());
    var _reactElement = /* @__PURE__ */ _interop_require_default(require_reactElement());
    var _array = require_array();
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var ReactElement = class extends _virtualDOMElement.default {
      constructor(props) {
        super(props);
        this.state = null;
        this.context = null;
      }
      getState() {
        return this.state;
      }
      getContext() {
        return this.context;
      }
      getDOMElement() {
        return null;
      }
      getChildReference() {
        const parent = this.getParent(), child = this;
        return reference(parent, child);
      }
      setState(state) {
        this.state = state;
        this.redraw();
      }
      updateState(state) {
        const oldState = this.state, newState = state;
        this.state = Object.assign(oldState, newState);
        this.redraw();
      }
      setInitialState(initialState) {
        this.state = initialState;
      }
      forceUpdate(update) {
        this.redraw(update);
      }
      mount(parent, reference2, context) {
        this.context = context;
        const childContext = this.getChildContext(context) || null;
        const update = null, children = (0, _array.guarantee)(this.render(update, this));
        super.mount(parent, children);
        children.forEach((child) => {
          const childParent = this, childReference = reference2;
          child.mount(childParent, childReference, childContext);
        });
        this.childContextSet(childContext);
        this.componentDidMount();
      }
      unmount() {
        this.componentWillUnmount();
        const children = this.getChildren();
        children.forEach((child) => {
          child.unmount();
        });
        super.unmount();
      }
      redraw(update) {
        const childContext = this.getChildContext(this.context) || null;
        this.children.forEach((child) => {
          child.unmount();
        });
        this.children = (0, _array.guarantee)(this.render(update, this));
        this.children.forEach((child) => {
          const childParent = this, childReference = this.getChildReference();
          child.mount(childParent, childReference, childContext);
        });
        this.childContextSet(childContext);
      }
    };
    Object.assign(ReactElement.prototype, _reactElement.default);
    var _default = ReactElement;
    function reference(parent, child) {
      let reference2 = findReference(parent, child), parentDOMElement = parent.getDOMElement();
      while (reference2 === null && parentDOMElement === null) {
        child = parent;
        parent = parent.getParent();
        reference2 = findReference(parent, child);
        parentDOMElement = parent.getDOMElement();
      }
      return reference2;
    }
    function findReference(parent, child) {
      const children = parent.getChildren(), remainingChildren = (0, _array.remaining)(child, children);
      return remainingChildren.reduce((reference2, remainingChild) => {
        if (reference2 === null) {
          const remainingChildDOMElement = remainingChild.getDOMElement();
          if (remainingChildDOMElement !== null) {
            reference2 = remainingChild;
          } else {
            child = null;
            parent = remainingChild;
            reference2 = findReference(parent, child);
          }
        }
        return reference2;
      }, null);
    }
  });

  // node_modules/reaction/lib/reactComponent.js
  var require_reactComponent = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return ReactComponent;
      }
    });
    var _react = /* @__PURE__ */ _interop_require_default(require_react());
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var ReactComponent = class extends _react.default {
      constructor(props) {
        super(props);
        const initialState = this.getInitialState();
        this.setInitialState(initialState);
      }
      getInitialState() {
        return {};
      }
      getChildContext(context) {
        return context;
      }
      childContextSet(childContext) {
      }
      componentDidMount() {
      }
      componentWillUnmount() {
      }
    };
  });

  // node_modules/reaction/lib/virtualDOM/container.js
  var require_container = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return ContainerElement;
      }
    });
    var _virtualDOMElement = /* @__PURE__ */ _interop_require_default(require_virtualDOMElement());
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var ContainerElement = class extends _virtualDOMElement.default {
      constructor(props, domElement) {
        super(props);
        this.domElement = domElement;
      }
      getDOMElement() {
        return this.domElement;
      }
      mount(parent, reference) {
        const children = this.getChildren();
        super.mount(parent, children);
        parentDOMElement(parent).insertBefore(this.domElement, referenceDOMElement(reference));
        return this.domElement;
      }
      unmount() {
        this.domElement.parentElement.removeChild(this.domElement);
        super.unmount();
      }
      static fromDOMElement(domElement) {
        const children = [], props = {
          children
        }, virtualDOMNode = new ContainerElement(props, domElement);
        return virtualDOMNode;
      }
    };
    function parentDOMElement(parent) {
      let parentDOMElement2 = parent.getDOMElement();
      while (parentDOMElement2 === null) {
        parent = parent.getParent();
        parentDOMElement2 = parent.getDOMElement();
      }
      return parentDOMElement2;
    }
    function referenceDOMElement(reference) {
      const referenceDOMElement2 = reference !== null ? reference.getDOMElement() : null;
      return referenceDOMElement2;
    }
  });

  // node_modules/reaction/lib/constants.js
  var require_constants = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get BOOLEAN() {
        return BOOLEAN;
      },
      get CLASS() {
        return CLASS;
      },
      get CLASS_NAME() {
        return CLASS_NAME;
      },
      get EMPTY_STRING() {
        return EMPTY_STRING;
      },
      get FOR() {
        return FOR;
      },
      get FUNCTION() {
        return FUNCTION;
      },
      get HTML_FOR() {
        return HTML_FOR;
      },
      get HTTP_WWW_W3_ORG_2000_SVG() {
        return HTTP_WWW_W3_ORG_2000_SVG;
      },
      get OBJECT() {
        return OBJECT;
      },
      get REF() {
        return REF;
      },
      get STRING() {
        return STRING;
      }
    });
    var FOR = "for";
    var REF = "ref";
    var CLASS = "class";
    var STRING = "string";
    var OBJECT = "object";
    var BOOLEAN = "boolean";
    var FUNCTION = "function";
    var HTML_FOR = "htmlFor";
    var CLASS_NAME = "className";
    var EMPTY_STRING = "";
    var HTTP_WWW_W3_ORG_2000_SVG = "http://www.w3.org/2000/svg";
  });

  // node_modules/reaction/lib/mixins/containerElement.js
  var require_containerElement = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
    var _constants = require_constants();
    function on(eventType, handler) {
      this.domElement.addEventListener(eventType, handler);
    }
    function off(eventType, handler) {
      this.domElement.removeEventListener(eventType, handler);
    }
    function setAttribute(name, value) {
      if (name === _constants.CLASS_NAME) {
        name = _constants.CLASS;
      }
      if (name === _constants.HTML_FOR) {
        name = _constants.FOR;
      }
      if (typeof value === _constants.OBJECT) {
        const keys = Object.keys(value);
        keys.forEach((key) => {
          this.domElement[name][key] = value[key];
        });
      } else if (typeof value === _constants.BOOLEAN) {
        if (value) {
          value = name;
          this.domElement.setAttribute(name, value);
        }
      } else {
        this.domElement.setAttribute(name, value);
      }
    }
    function getAttribute(name) {
      return this.domElement.getAttribute(name);
    }
    function clearAttribute(name) {
      this.domElement.removeAttribute(name);
    }
    function addAttribute(name, value) {
      this.setAttribute(name, value);
    }
    function removeAttribute(name) {
      this.domElement.removeAttribute(name);
    }
    function hasAttribute(name) {
      return this.domElement.hasAttribute(name);
    }
    function setClass(className) {
      this.domElement.className = className;
    }
    function addClass(className) {
      this.domElement.classList.add(className);
    }
    function removeClass(className) {
      this.domElement.classList.remove(className);
    }
    function toggleClass(className) {
      this.domElement.classList.toggle(className);
    }
    function hasClass(className) {
      return this.domElement.classList.contains(className);
    }
    function hasClasses(classNames) {
      return classNames.every((className) => {
        if (this.hasClass(className)) {
          return true;
        }
      });
    }
    function clearClasses() {
      this.domElement.className = _constants.EMPTY_STRING;
    }
    function getTagName() {
      return this.domElement.tagName;
    }
    function getStyle(name) {
      return this.domElement.style[name];
    }
    function setStyle(name, value) {
      this.domElement.style[name] = value;
    }
    var _default = {
      on,
      off,
      setAttribute,
      getAttribute,
      clearAttribute,
      addAttribute,
      removeAttribute,
      hasAttribute,
      setClass,
      addClass,
      removeClass,
      toggleClass,
      hasClass,
      hasClasses,
      clearClasses,
      getTagName,
      getStyle,
      setStyle
    };
  });

  // node_modules/reaction/lib/virtualDOM/container/element.js
  var require_element = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
    var _container = /* @__PURE__ */ _interop_require_default(require_container());
    var _containerElement = /* @__PURE__ */ _interop_require_default(require_containerElement());
    var _constants = require_constants();
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var Element = class extends _container.default {
      mount(parent, reference, context) {
        super.mount(parent, reference);
        const childParent = this, childReference = null, childContext = context, children = this.getChildren();
        children.forEach((child) => {
          child.mount(childParent, childReference, childContext);
        });
        this.applyProps();
      }
      unmount(context) {
        const childContext = context, children = this.getChildren();
        children.forEach((child) => {
          child.unmount(childContext);
        });
        super.unmount();
      }
      applyProps() {
        const names = Object.keys(this.props);
        names.forEach((name) => {
          const value = this.props[name];
          if (false) {
          } else if (this.isHandlerName(name)) {
            this.setHandler(name, value);
          } else if (this.isAttributeName(name)) {
            this.setAttribute(name, value);
          } else if (name === _constants.REF) {
            const callback = value;
            callback(this.domElement);
          }
        });
      }
      setHandler(name, value) {
        const eventType = name.substr(2).toLowerCase(), handler = value;
        this.domElement.addEventListener(eventType, handler);
      }
      isHandlerName(name) {
        return /^on/.test(name);
      }
    };
    Object.assign(Element.prototype, _containerElement.default);
    var _default = Element;
  });

  // node_modules/reaction/lib/utilities/name.js
  var require_name = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get isHTMLAttributeName() {
        return isHTMLAttributeName;
      },
      get isSVGAttributeName() {
        return isSVGAttributeName;
      },
      get isSVGTagName() {
        return isSVGTagName;
      }
    });
    function isSVGTagName(tagName) {
      return svgTagNames.includes(tagName);
    }
    function isSVGAttributeName(attributeName) {
      return svgAttributeNames.includes(attributeName);
    }
    function isHTMLAttributeName(attributeName) {
      return htmlAttributeNames.includes(attributeName);
    }
    var svgTagNames = [
      "altGlyph",
      "animate",
      "animateColor",
      "animateMotion",
      "animateTransform",
      "animation",
      "audio",
      "circle",
      "clipPath",
      "color-profile",
      "cursor",
      "defs",
      "desc",
      "discard",
      "ellipse",
      "feBlend",
      "feColorMatrix",
      "feComponentTransfer",
      "feComposite",
      "feConvolveMatrix",
      "feDiffuseLighting",
      "feDisplacementMap",
      "feDistantLight",
      "feDropShadow",
      "feFlood",
      "feFuncA",
      "feFuncB",
      "feFuncG",
      "feFuncR",
      "feGaussianBlur",
      "feImage",
      "feMerge",
      "feMergeNode",
      "feMorphology",
      "feOffset",
      "fePointLight",
      "feSpecularLighting",
      "feSpotLight",
      "feTile",
      "feTurbulence",
      "filter",
      "font",
      "font-face",
      "font-face-format",
      "font-face-name",
      "font-face-uri",
      "foreignObject",
      "g",
      "glyph",
      "glyphRef",
      "handler",
      "hatch",
      "hatchpath",
      "hkern",
      "image",
      "line",
      "linearGradient",
      "listener",
      "marker",
      "mask",
      "mesh",
      "meshgradient",
      "meshpatch",
      "meshrow",
      "metadata",
      "missing-glyph",
      "mpath",
      "path",
      "pattern",
      "polygon",
      "polyline",
      "prefetch",
      "radialGradient",
      "rect",
      "script",
      "set",
      "solidcolor",
      "stop",
      "style",
      "svg",
      "switch",
      "symbol",
      "tbreak",
      "text",
      "textArea",
      "textPath",
      "title",
      "tref",
      "tspan",
      "unknown",
      "use",
      "video",
      "view",
      "vkern"
    ];
    var svgAttributeNames = [
      "accent-height",
      "accumulate",
      "additive",
      "alignment-baseline",
      "alphabetic",
      "amplitude",
      "arabic-form",
      "ascent",
      "attributeName",
      "attributeType",
      "azimuth",
      "bandwidth",
      "baseFrequency",
      "baseProfile",
      "baseline-shift",
      "bbox",
      "begin",
      "bias",
      "by",
      "calcMode",
      "cap-height",
      "clip",
      "className",
      "clip-path",
      "clip-rule",
      "clipPathUnits",
      "color",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "contentScriptType",
      "contentStyleType",
      "crossorigin",
      "cursor",
      "cx",
      "cy",
      "d",
      "defaultAction",
      "descent",
      "diffuseConstant",
      "direction",
      "display",
      "divisor",
      "dominant-baseline",
      "download",
      "dur",
      "dx",
      "dy",
      "edgeMode",
      "editable",
      "elevation",
      "enable-background",
      "end",
      "event",
      "exponent",
      "externalResourcesRequired",
      "fill",
      "fill-opacity",
      "fill-rule",
      "filter",
      "filterRes",
      "filterUnits",
      "flood-color",
      "flood-opacity",
      "focusHighlight",
      "focusable",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "format",
      "fr",
      "from",
      "fx",
      "fy",
      "g1",
      "g2",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "glyphRef",
      "gradientTransform",
      "gradientUnits",
      "handler",
      "hanging",
      "hatchContentUnits",
      "hatchUnits",
      "height",
      "horiz-adv-x",
      "horiz-origin-x",
      "horiz-origin-y",
      "href",
      "hreflang",
      "id",
      "ideographic",
      "image-rendering",
      "in",
      "in2",
      "initialVisibility",
      "intercept",
      "k",
      "k1",
      "k2",
      "k3",
      "k4",
      "kernelMatrix",
      "kernelUnitLength",
      "kerning",
      "keyPoints",
      "keySplines",
      "keyTimes",
      "lengthAdjust",
      "letter-spacing",
      "lighting-color",
      "limitingConeAngle",
      "local",
      "marker-end",
      "marker-mid",
      "marker-start",
      "markerHeight",
      "markerUnits",
      "markerWidth",
      "mask",
      "maskContentUnits",
      "maskUnits",
      "mathematical",
      "max",
      "media",
      "mediaCharacterEncoding",
      "mediaContentEncodings",
      "mediaSize",
      "mediaTime",
      "method",
      "min",
      "mode",
      "name",
      "nav-down",
      "nav-down-left",
      "nav-down-right",
      "nav-left",
      "nav-next",
      "nav-prev",
      "nav-right",
      "nav-up",
      "nav-up-left",
      "nav-up-right",
      "numOctaves",
      "observer",
      "offset",
      "opacity",
      "operator",
      "order",
      "orient",
      "orientation",
      "origin",
      "overflow",
      "overlay",
      "overline-position",
      "overline-thickness",
      "panose-1",
      "path",
      "pathLength",
      "patternContentUnits",
      "patternTransform",
      "patternUnits",
      "phase",
      "pitch",
      "playbackOrder",
      "playbackorder",
      "pointer-events",
      "points",
      "pointsAtX",
      "pointsAtY",
      "pointsAtZ",
      "preserveAlpha",
      "preserveAspectRatio",
      "primitiveUnits",
      "propagate",
      "r",
      "radius",
      "refX",
      "refY",
      "rendering-intent",
      "repeatCount",
      "repeatDur",
      "requiredExtensions",
      "requiredFeatures",
      "requiredFonts",
      "requiredFormats",
      "restart",
      "result",
      "rotate",
      "rx",
      "ry",
      "scale",
      "seed",
      "shape-rendering",
      "side",
      "slope",
      "snapshotTime",
      "spacing",
      "specularConstant",
      "specularExponent",
      "spreadMethod",
      "src",
      "startOffset",
      "stdDeviation",
      "stemh",
      "stemv",
      "stitchTiles",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "string",
      "stroke",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "style",
      "surfaceScale",
      "syncBehavior",
      "syncBehaviorDefault",
      "syncMaster",
      "syncTolerance",
      "syncToleranceDefault",
      "systemLanguage",
      "tableValues",
      "target",
      "targetX",
      "targetY",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "textLength",
      "timelineBegin",
      "timelinebegin",
      "title",
      "to",
      "transform",
      "transformBehavior",
      "type",
      "u1",
      "u2",
      "underline-position",
      "underline-thickness",
      "unicode",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "values",
      "version",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "viewBox",
      "viewTarget",
      "visibility",
      "width",
      "widths",
      "word-spacing",
      "writing-mode",
      "x",
      "x-height",
      "x1",
      "x2",
      "xChannelSelector",
      "y",
      "y1",
      "y2",
      "yChannelSelector",
      "z",
      "zoomAndPan"
    ];
    var htmlAttributeNames = [
      "accept",
      "acceptCharset",
      "accessKey",
      "action",
      "allow",
      "allowFullScreen",
      "allowTransparency",
      "alt",
      "async",
      "autoComplete",
      "autoFocus",
      "autoPlay",
      "capture",
      "cellPadding",
      "cellSpacing",
      "challenge",
      "charSet",
      "checked",
      "cite",
      "classID",
      "className",
      "colSpan",
      "cols",
      "content",
      "contentEditable",
      "contextMenu",
      "controls",
      "coords",
      "crossOrigin",
      "data",
      "dateTime",
      "default",
      "defer",
      "dir",
      "disabled",
      "download",
      "draggable",
      "encType",
      "form",
      "formAction",
      "formEncType",
      "formMethod",
      "formNoValidate",
      "formTarget",
      "frameBorder",
      "headers",
      "height",
      "hidden",
      "high",
      "href",
      "hrefLang",
      "htmlFor",
      "httpEquiv",
      "icon",
      "id",
      "inputMode",
      "integrity",
      "is",
      "keyParams",
      "keyType",
      "kind",
      "label",
      "lang",
      "list",
      "loop",
      "low",
      "manifest",
      "marginHeight",
      "marginWidth",
      "max",
      "maxLength",
      "media",
      "mediaGroup",
      "method",
      "min",
      "minLength",
      "multiple",
      "muted",
      "name",
      "noValidate",
      "nonce",
      "open",
      "optimum",
      "pattern",
      "placeholder",
      "poster",
      "preload",
      "profile",
      "radioGroup",
      "readOnly",
      "rel",
      "required",
      "reversed",
      "role",
      "rowSpan",
      "rows",
      "sandbox",
      "scope",
      "scoped",
      "scrolling",
      "seamless",
      "selected",
      "shape",
      "size",
      "sizes",
      "span",
      "spellCheck",
      "src",
      "srcDoc",
      "srcLang",
      "srcSet",
      "start",
      "step",
      "style",
      "summary",
      "tabIndex",
      "target",
      "title",
      "type",
      "useMap",
      "value",
      "width",
      "wmode",
      "wrap"
    ];
  });

  // node_modules/reaction/lib/virtualDOM/container/element/svg.js
  var require_svg = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return SVGElement;
      }
    });
    var _element = /* @__PURE__ */ _interop_require_default(require_element());
    var _name = require_name();
    var _constants = require_constants();
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var SVGElement = class extends _element.default {
      constructor(tagName, props) {
        const domElement = document.createElementNS(_constants.HTTP_WWW_W3_ORG_2000_SVG, tagName);
        super(props, domElement);
      }
      isAttributeName(name) {
        return (0, _name.isSVGAttributeName)(name);
      }
    };
  });

  // node_modules/reaction/lib/virtualDOM/container/element/html.js
  var require_html = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return HTMLElement;
      }
    });
    var _element = /* @__PURE__ */ _interop_require_default(require_element());
    var _name = require_name();
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var HTMLElement = class extends _element.default {
      constructor(tagName, props) {
        const domElement = document.createElement(tagName);
        super(props, domElement);
      }
      isAttributeName(name) {
        return (0, _name.isHTMLAttributeName)(name);
      }
    };
  });

  // node_modules/reaction/lib/virtualDOM/react/class.js
  var require_class = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return ReactClassElement;
      }
    });
    var _react = /* @__PURE__ */ _interop_require_default(require_react());
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var ReactClassElement = class extends _react.default {
      constructor(reactClass, props) {
        super(props);
        this.reactClass = reactClass;
        const initialState = this.getInitialState();
        this.setInitialState(initialState);
      }
      render(update) {
        return this.reactClass.render.call(this, update, this);
      }
      getInitialState() {
        return this.reactClass.getInitialState.call(this);
      }
      getChildContext(context) {
        return this.reactClass.getChildContext.call(this, context);
      }
      childContextSet(childContext) {
        this.reactClass.childContextSet.call(this, childContext);
      }
      componentDidMount() {
        this.reactClass.componentDidMount.call(this);
      }
      componentWillUnmount() {
        this.reactClass.componentWillUnmount.call(this);
      }
    };
  });

  // node_modules/reaction/lib/virtualDOM/react/function.js
  var require_function = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return ReactFunctionElement;
      }
    });
    var _react = /* @__PURE__ */ _interop_require_default(require_react());
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var ReactFunctionElement = class extends _react.default {
      constructor(reactFunction, props) {
        super(props);
        this.reactFunction = reactFunction;
      }
      render(update) {
        return this.reactFunction(this.props, this.context, update, this);
      }
      getInitialState() {
      }
      getChildContext(context) {
        return context;
      }
      childContextSet(childContext) {
      }
      componentDidMount() {
      }
      componentWillUnmount() {
      }
    };
  });

  // node_modules/reaction/lib/virtualDOM/container/textElement.js
  var require_textElement = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return TextElement;
      }
    });
    var _container = /* @__PURE__ */ _interop_require_default(require_container());
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var TextElement = class extends _container.default {
      constructor(text) {
        const domElement = document.createTextNode(text), children = [], props = {
          children
        };
        super(props, domElement);
      }
      mount(parent, reference, context) {
        super.mount(parent, reference);
      }
      unmount(context) {
        super.unmount();
      }
      getText() {
        const nodeValue = this.domElement.nodeValue, text = nodeValue;
        return text;
      }
      setText(text) {
        const nodeValue = text;
        this.domElement.nodeValue = nodeValue;
      }
    };
  });

  // node_modules/reaction/lib/utilities/sanitiise.js
  var require_sanitiise = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get removeFalseyChildren() {
        return removeFalseyChildren;
      },
      get replaceStringsWithTextChildren() {
        return replaceStringsWithTextChildren;
      }
    });
    var _textElement = /* @__PURE__ */ _interop_require_default(require_textElement());
    var _constants = require_constants();
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function removeFalseyChildren(children) {
      children = children.reduce((children2, child) => {
        if (child) {
          children2.push(child);
        }
        return children2;
      }, []);
      return children;
    }
    function replaceStringsWithTextChildren(children) {
      children = children.map((child) => {
        if (typeof child === _constants.STRING) {
          const text = child, textElement = new _textElement.default(text);
          child = textElement;
        }
        return child;
      });
      return children;
    }
  });

  // node_modules/reaction/lib/react.js
  var require_react2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
    var _reactClass = /* @__PURE__ */ _interop_require_default(require_reactClass());
    var _reactComponent = /* @__PURE__ */ _interop_require_default(require_reactComponent());
    var _svg = /* @__PURE__ */ _interop_require_default(require_svg());
    var _html = /* @__PURE__ */ _interop_require_default(require_html());
    var _class = /* @__PURE__ */ _interop_require_default(require_class());
    var _function = /* @__PURE__ */ _interop_require_default(require_function());
    var _array = require_array();
    var _name = require_name();
    var _constants = require_constants();
    var _sanitiise = require_sanitiise();
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function createClass(object) {
      return _reactClass.default.create(object);
    }
    function createElement(firstArgument, properties, ...children) {
      let element = null;
      if (firstArgument) {
        children = sanitiseChildren(children);
        const props = Object.assign({}, properties, {
          children
        });
        if (false) {
        } else if (typeof firstArgument === _constants.STRING) {
          const tagName = firstArgument;
          element = (0, _name.isSVGTagName)(tagName) ? new _svg.default(tagName, props) : new _html.default(tagName, props);
        } else if (firstArgument instanceof _reactClass.default) {
          const reactClass = firstArgument, reactClassElement = new _class.default(reactClass, props);
          element = reactClassElement;
          const {mixins} = reactClass;
          assignMixins(mixins, element);
        } else if (isSubclassOf(firstArgument, _reactComponent.default)) {
          const ReactComponentSubClass = firstArgument, reactComponent = new ReactComponentSubClass(props);
          element = reactComponent;
          assignReactComponentMixins(ReactComponentSubClass, element);
        } else if (typeof firstArgument === _constants.FUNCTION) {
          const reactFunction = firstArgument, reactFunctionElement = new _function.default(reactFunction, props);
          element = reactFunctionElement;
        }
      }
      return element;
    }
    var Component = _reactComponent.default;
    var React2 = {
      Component,
      createClass,
      createElement
    };
    var _default = React2;
    function sanitiseChildren(children) {
      children = (0, _array.flatten)(children);
      children = (0, _sanitiise.removeFalseyChildren)(children);
      children = (0, _sanitiise.replaceStringsWithTextChildren)(children);
      return children;
    }
    function assignReactComponentMixins(ReactComponentSubClass, element) {
      const {mixins} = ReactComponentSubClass;
      const ReactComponentSubClassPrototype = Object.getPrototypeOf(ReactComponentSubClass);
      if (ReactComponentSubClassPrototype !== _reactComponent.default) {
        ReactComponentSubClass = ReactComponentSubClassPrototype;
        assignReactComponentMixins(ReactComponentSubClass, element);
      }
      assignMixins(mixins, element);
    }
    function assignMixins(mixins, element) {
      if (mixins) {
        mixins.forEach((mixin) => {
          const {name} = mixin;
          element[name] = mixin.bind(element);
        });
      }
    }
    function isSubclassOf(argument, Class) {
      const subclassOf = argument.prototype instanceof Class;
      return subclassOf;
    }
  });

  // node_modules/reaction/lib/reactDOM.js
  var require_reactDOM = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return ReactDOM;
      }
    });
    var _container = /* @__PURE__ */ _interop_require_default(require_container());
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var ReactDOM = class {
      static render(element, parentDOMElement) {
        const parent = _container.default.fromDOMElement(parentDOMElement), reference = null, context = {};
        element.mount(parent, reference, context);
      }
    };
  });

  // node_modules/reaction/lib/index.js
  var require_lib = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get React() {
        return _react.default;
      },
      get ReactDOM() {
        return _reactDOM.default;
      }
    });
    var _react = /* @__PURE__ */ _interop_require_default(require_react2());
    var _reactDOM = /* @__PURE__ */ _interop_require_default(require_reactDOM());
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
  });

  // lib/example/hooksApp/preamble.js
  var require_preamble = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _reaction = require_lib();
    Object.assign(window, {
      React: _reaction.React
    });
  });

  // lib/hooks.js
  var require_hooks = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get useContext() {
        return useContext;
      },
      get useEffects() {
        return useEffects;
      },
      get useState() {
        return useState;
      }
    });
    var listeners = [];
    var elementToStateWeakMap = new WeakMap();
    function emitEffect(effect, action) {
      const update = {
        [effect]: action
      };
      listeners.forEach((listener) => {
        const {effects} = listener, effectsIncludesEffect = effects.includes(effect);
        if (effectsIncludesEffect) {
          listener(update);
        }
      });
    }
    Object.assign(useEffects, {
      emitEffect
    });
    function useState(element, initialState) {
      let state;
      if (elementToStateWeakMap.has(element)) {
        state = elementToStateWeakMap.get(element);
      } else {
        state = initialState;
        elementToStateWeakMap.set(element, state);
      }
      return [
        state,
        (updatedState) => {
          state = updatedState;
          elementToStateWeakMap.set(element, state);
          const update = null;
          element.redraw(update);
        }
      ];
    }
    function useContext(element, context, mapOrNames) {
      if (mapOrNames === void 0) {
        mapOrNames = Object.keys(context);
      }
      if (mapOrNames instanceof Array) {
        const names = mapOrNames;
        names.forEach((name) => {
          element[name] = context[name];
          delete context[name];
        });
      } else {
        const map = mapOrNames;
        Object.assign(context, map);
      }
    }
    function useEffects(listener, ...effects) {
      Object.assign(listener, {
        effects
      });
      listeners.push(listener);
      return function() {
        const discardedListener = listener;
        listeners = listeners.filter((listener2) => {
          if (listener2 !== discardedListener) {
            return true;
          }
        });
      };
    }
  });

  // lib/index.js
  var require_lib2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get useContext() {
        return _hooks.useContext;
      },
      get useEffects() {
        return _hooks.useEffects;
      },
      get useState() {
        return _hooks.useState;
      }
    });
    var _hooks = require_hooks();
  });

  // lib/example/hooksApp/useEffects/constants.js
  var require_constants2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get BLOCK() {
        return BLOCK;
      },
      get DISPLAY() {
        return DISPLAY;
      },
      get NONE() {
        return NONE;
      }
    });
    var NONE = "none";
    var BLOCK = "block";
    var DISPLAY = "display";
  });

  // lib/example/hooksApp/useEffects/component.js
  var require_component = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
    var _constants = require_constants2();
    var {Component} = React;
    var _default = class extends Component {
      show(displayStyle = _constants.BLOCK) {
        this.setStyle(_constants.DISPLAY, displayStyle);
      }
      hide() {
        this.setStyle(_constants.DISPLAY, _constants.NONE);
      }
    };
  });

  // lib/example/hooksApp/useEffects/button.js
  var require_button = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return Button;
      }
    });
    var _index = require_lib2();
    var _component = /* @__PURE__ */ _interop_require_default(require_component());
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var {emitEffect} = _index.useEffects;
    var Button = class extends _component.default {
      clickHandler = (event) => {
        const {articleName} = this.constructor;
        emitEffect("articleName", articleName);
      };
      render(update) {
        const {text} = this.constructor;
        return /* @__PURE__ */ React.createElement("button", {
          onClick: this.clickHandler
        }, text);
      }
    };
  });

  // lib/example/hooksApp/useEffects/button/home.js
  var require_home = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return HomeButton;
      }
    });
    var _button = /* @__PURE__ */ _interop_require_default(require_button());
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var HomeButton = class extends _button.default {
    };
    __publicField(HomeButton, "text", "Home");
    __publicField(HomeButton, "articleName", "home");
  });

  // lib/example/hooksApp/useEffects/article.js
  var require_article = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return Article;
      }
    });
    var _index = require_lib2();
    var _component = /* @__PURE__ */ _interop_require_default(require_component());
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var Article = class extends _component.default {
      updateHandler = (update) => {
        const {name} = this.constructor, {articleName} = update;
        name === articleName ? this.show() : this.hide();
      };
      componentDidMount() {
        this.discardEffects = (0, _index.useEffects)(this.updateHandler, "articleName");
      }
      componentWillUnmount() {
        this.discardEffects();
      }
    };
  });

  // lib/example/hooksApp/useEffects/article/home.js
  var require_home2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return HomeArticle;
      }
    });
    var _article = /* @__PURE__ */ _interop_require_default(require_article());
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var HomeArticle = class extends _article.default {
      render(update) {
        return /* @__PURE__ */ React.createElement("article", {
          className: "home"
        }, /* @__PURE__ */ React.createElement("h1", null, "Home"));
      }
    };
    __publicField(HomeArticle, "name", "home");
  });

  // lib/example/hooksApp/useEffects/article/settings.js
  var require_settings = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return SettingsArticle;
      }
    });
    var _article = /* @__PURE__ */ _interop_require_default(require_article());
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var SettingsArticle = class extends _article.default {
      render(update) {
        return /* @__PURE__ */ React.createElement("article", {
          className: "settings"
        }, /* @__PURE__ */ React.createElement("h1", null, "Settings"));
      }
    };
    __publicField(SettingsArticle, "name", "settings");
  });

  // lib/example/hooksApp/useEffects/section/articles.js
  var require_articles = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
    var _home = /* @__PURE__ */ _interop_require_default(require_home2());
    var _settings = /* @__PURE__ */ _interop_require_default(require_settings());
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var ArticlesSection = (props) => /* @__PURE__ */ React.createElement("section", {
      className: "articles"
    }, /* @__PURE__ */ React.createElement(_home.default, null), /* @__PURE__ */ React.createElement(_settings.default, null));
    var _default = ArticlesSection;
  });

  // lib/example/hooksApp/useEffects/button/settings.js
  var require_settings2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return SettingsButton;
      }
    });
    var _button = /* @__PURE__ */ _interop_require_default(require_button());
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var SettingsButton = class extends _button.default {
    };
    __publicField(SettingsButton, "text", "Settings");
    __publicField(SettingsButton, "articleName", "settings");
  });

  // lib/example/hooksApp/useEffects/navigation/primary.js
  var require_primary = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
    var _home = /* @__PURE__ */ _interop_require_default(require_home());
    var _settings = /* @__PURE__ */ _interop_require_default(require_settings2());
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var PrimaryNavigation = (props) => /* @__PURE__ */ React.createElement("nav", {
      className: "primary"
    }, /* @__PURE__ */ React.createElement(_home.default, null), /* @__PURE__ */ React.createElement(_settings.default, null));
    var _default = PrimaryNavigation;
  });

  // lib/example/hooksApp/useEffects/section/main.js
  var require_main = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return MainSection;
      }
    });
    var _index = require_lib2();
    var _component = /* @__PURE__ */ _interop_require_default(require_component());
    var _home = /* @__PURE__ */ _interop_require_default(require_home());
    var _articles = /* @__PURE__ */ _interop_require_default(require_articles());
    var _primary = /* @__PURE__ */ _interop_require_default(require_primary());
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var {emitEffect} = _index.useEffects;
    var MainSection = class extends _component.default {
      componentDidMount() {
        const {articleName} = _home.default;
        emitEffect("articleName", articleName);
      }
      componentWillUnmount() {
      }
      render(update) {
        return /* @__PURE__ */ React.createElement("section", {
          className: "main"
        }, /* @__PURE__ */ React.createElement(_primary.default, null), /* @__PURE__ */ React.createElement(_articles.default, null));
      }
    };
  });

  // lib/example/hooksApp/useContext/constants.js
  var require_constants3 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _export(target, all) {
      for (var name in all)
        Object.defineProperty(target, name, {
          enumerable: true,
          get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
      get BLOCK() {
        return BLOCK;
      },
      get DISPLAY() {
        return DISPLAY;
      },
      get NONE() {
        return NONE;
      }
    });
    var NONE = "none";
    var BLOCK = "block";
    var DISPLAY = "display";
  });

  // lib/example/hooksApp/useContext/component.js
  var require_component2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
    var _constants = require_constants3();
    var {Component} = React;
    var _default = class extends Component {
      show(displayStyle = _constants.BLOCK) {
        this.setStyle(_constants.DISPLAY, displayStyle);
      }
      hide() {
        this.setStyle(_constants.DISPLAY, _constants.NONE);
      }
    };
  });

  // lib/example/hooksApp/useContext/button/link/close.js
  var require_close = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return CloseLinkButton;
      }
    });
    var _index = require_lib2();
    var {Component} = React;
    var CloseLinkButton = class extends Component {
      getChildContext(context) {
        (0, _index.useContext)(this, context, [
          "closeLinkButtonClickHandler"
        ]);
      }
      render(update) {
        const clickHandler = this.closeLinkButtonClickHandler;
        return /* @__PURE__ */ React.createElement("button", {
          className: "close link",
          onClick: clickHandler
        }, "Got it");
      }
    };
  });

  // lib/example/hooksApp/useContext/span/gotIt.js
  var require_gotIt = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
    var _close = /* @__PURE__ */ _interop_require_default(require_close());
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var GotItSpan = (props) => {
      return /* @__PURE__ */ React.createElement("span", {
        className: "got-it"
      }, "[", /* @__PURE__ */ React.createElement(_close.default, null), "]");
    };
    var _default = GotItSpan;
  });

  // lib/example/hooksApp/useContext/div/gotIt.js
  var require_gotIt2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return GotItDiv;
      }
    });
    var _component = /* @__PURE__ */ _interop_require_default(require_component2());
    var _gotIt = /* @__PURE__ */ _interop_require_default(require_gotIt());
    var _index = require_lib2();
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var GotItDiv = class extends _component.default {
      getChildContext(context) {
        const showGotItDiv = this.show.bind(this), hideGotItDiv = this.hide.bind(this);
        (0, _index.useContext)(this, context, {
          showGotItDiv,
          hideGotItDiv
        });
        return context;
      }
      render(update) {
        const {children} = this.props;
        return /* @__PURE__ */ React.createElement("div", {
          className: "got-it"
        }, /* @__PURE__ */ React.createElement(_gotIt.default, null), /* @__PURE__ */ React.createElement("p", null, children));
      }
    };
  });

  // lib/example/hooksApp/useContext/button/link/open.js
  var require_open = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return OpenLinkButton;
      }
    });
    var _index = require_lib2();
    var {Component} = React;
    var OpenLinkButton = class extends Component {
      getChildContext(context) {
        (0, _index.useContext)(this, context, [
          "openLinkButtonClickHandler"
        ]);
      }
      render(update) {
        const {children} = this.props, clickHandler = this.openLinkButtonClickHandler;
        return /* @__PURE__ */ React.createElement("button", {
          className: "open link",
          onClick: clickHandler
        }, children);
      }
    };
  });

  // lib/example/hooksApp/useContext/header/gotIt.js
  var require_gotIt3 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return GotItHeader;
      }
    });
    var _component = /* @__PURE__ */ _interop_require_default(require_component2());
    var _open = /* @__PURE__ */ _interop_require_default(require_open());
    var _index = require_lib2();
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var GotItHeader = class extends _component.default {
      getChildContext(context) {
        const showGotItHeader = this.show.bind(this), hideGotItHeader = this.hide.bind(this);
        (0, _index.useContext)(this, context, {
          showGotItHeader,
          hideGotItHeader
        });
        return context;
      }
      render(update) {
        const {children} = this.props;
        return /* @__PURE__ */ React.createElement("header", {
          className: "got-it"
        }, "[", /* @__PURE__ */ React.createElement(_open.default, null, children), "]");
      }
    };
  });

  // lib/example/hooksApp/useContext/section/gotIt.js
  var require_gotIt4 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return GotItSection;
      }
    });
    var _gotIt = /* @__PURE__ */ _interop_require_default(require_gotIt2());
    var _component = /* @__PURE__ */ _interop_require_default(require_component2());
    var _gotIt1 = /* @__PURE__ */ _interop_require_default(require_gotIt3());
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var GotItSection = class extends _component.default {
      closeLinkButtonClickHandler = (event) => {
        this.close();
      };
      openLinkButtonClickHandler = (event) => {
        this.open();
      };
      close() {
        this.hideGotItDiv();
        this.showGotItHeader();
      }
      open() {
        this.showGotItDiv();
        this.hideGotItHeader();
      }
      getChildContext(context) {
        const openLinkButtonClickHandler = this.openLinkButtonClickHandler, closeLinkButtonClickHandler = this.closeLinkButtonClickHandler;
        return {
          openLinkButtonClickHandler,
          closeLinkButtonClickHandler
        };
      }
      childContextSet(childContext) {
        Object.assign(this, childContext);
      }
      componentDidMount() {
        this.close();
      }
      componentWillUnmount() {
      }
      render(update) {
        return /* @__PURE__ */ React.createElement("section", {
          className: "got-it"
        }, /* @__PURE__ */ React.createElement(_gotIt1.default, null, "An example of a more complex view element"), /* @__PURE__ */ React.createElement(_gotIt.default, null, "This is an example of a more complex view element, where descendant elements need to interact with their ascendant elements and vice-versa."));
      }
    };
  });

  // lib/example/hooksApp/useState/function.js
  var require_function2 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
    var _index = require_lib2();
    var initialCount = 0;
    var FunctionUseStateParagraph = (props, context, update, element) => {
      const [count, setCount] = (0, _index.useState)(element, initialCount);
      return /* @__PURE__ */ React.createElement("p", {
        onClick: (event) => setCount(count + 1)
      }, "Function state: ", `${count}`);
    };
    var _default = FunctionUseStateParagraph;
  });

  // lib/example/hooksApp/useState/component.js
  var require_component3 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return ComponentUseStateParagraph;
      }
    });
    var _index = require_lib2();
    var {Component} = React;
    var initialCount = 0;
    var ComponentUseStateParagraph = class extends Component {
      render(update, element) {
        const [count, setCount] = (0, _index.useState)(element, initialCount);
        return /* @__PURE__ */ React.createElement("p", {
          onClick: (event) => setCount(count + 1)
        }, "Component state: ", `${count}`);
      }
    };
  });

  // lib/example/hooksApp/useState/createClass.js
  var require_createClass = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _default;
      }
    });
    var _index = require_lib2();
    var {createClass} = React;
    var initialCount = 0;
    var CreateClassUseStateParagraph = createClass({
      render: function(update) {
        const [count, setCount] = (0, _index.useState)(this, initialCount);
        return /* @__PURE__ */ React.createElement("p", {
          onClick: (event) => setCount(count + 1)
        }, "createClass state: ", `${count}`);
      }
    });
    var _default = CreateClassUseStateParagraph;
  });

  // lib/example/hooksApp/view.js
  var require_view = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return View;
      }
    });
    var _main = /* @__PURE__ */ _interop_require_default(require_main());
    var _gotIt = /* @__PURE__ */ _interop_require_default(require_gotIt4());
    var _function = /* @__PURE__ */ _interop_require_default(require_function2());
    var _component = /* @__PURE__ */ _interop_require_default(require_component3());
    var _createClass = /* @__PURE__ */ _interop_require_default(require_createClass());
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var {Component} = React;
    var View = class extends Component {
      render(update) {
        return /* @__PURE__ */ React.createElement("div", {
          className: "view"
        }, /* @__PURE__ */ React.createElement("h2", null, "useState"), /* @__PURE__ */ React.createElement(_function.default, null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(_createClass.default, null), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(_component.default, null), /* @__PURE__ */ React.createElement("h2", null, "useContext"), /* @__PURE__ */ React.createElement(_gotIt.default, null), /* @__PURE__ */ React.createElement("h2", null, "useEffects"), /* @__PURE__ */ React.createElement(_main.default, null));
      }
    };
  });

  // lib/example/hooksApp/constants.js
  var require_constants4 = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "ROOT", {
      enumerable: true,
      get: function() {
        return ROOT;
      }
    });
    var ROOT = "root";
  });

  // lib/example/hooksApp.js
  var require_hooksApp = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return hooksApp;
      }
    });
    var _reaction = require_lib();
    require_preamble();
    var _view = /* @__PURE__ */ _interop_require_default(require_view());
    var _constants = require_constants4();
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    function hooksApp() {
      const rootDOMElement = document.getElementById(_constants.ROOT);
      _reaction.ReactDOM.render(/* @__PURE__ */ React.createElement(_view.default, null), rootDOMElement);
    }
  });

  // lib/example.js
  var require_example = __commonJS((exports) => {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _hooksApp = /* @__PURE__ */ _interop_require_default(require_hooksApp());
    function _interop_require_default(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    Object.assign(window, {
      hooksApp: _hooksApp.default
    });
  });
  require_example();
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzL3JlYWN0aW9uL3NyYy9yZWFjdENsYXNzLmpzIiwgIm5vZGVfbW9kdWxlcy9yZWFjdGlvbi9zcmMvdXRpbGl0aWVzL2FycmF5LmpzIiwgIm5vZGVfbW9kdWxlcy9yZWFjdGlvbi9zcmMvdmlydHVhbERPTUVsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzL3JlYWN0aW9uL3NyYy9taXhpbnMvcmVhY3RFbGVtZW50LmpzIiwgIm5vZGVfbW9kdWxlcy9yZWFjdGlvbi9zcmMvdmlydHVhbERPTS9yZWFjdC5qcyIsICJub2RlX21vZHVsZXMvcmVhY3Rpb24vc3JjL3JlYWN0Q29tcG9uZW50LmpzIiwgIm5vZGVfbW9kdWxlcy9yZWFjdGlvbi9zcmMvdmlydHVhbERPTS9jb250YWluZXIuanMiLCAibm9kZV9tb2R1bGVzL3JlYWN0aW9uL3NyYy9jb25zdGFudHMuanMiLCAibm9kZV9tb2R1bGVzL3JlYWN0aW9uL3NyYy9taXhpbnMvY29udGFpbmVyRWxlbWVudC5qcyIsICJub2RlX21vZHVsZXMvcmVhY3Rpb24vc3JjL3ZpcnR1YWxET00vY29udGFpbmVyL2VsZW1lbnQuanMiLCAibm9kZV9tb2R1bGVzL3JlYWN0aW9uL3NyYy91dGlsaXRpZXMvbmFtZS5qcyIsICJub2RlX21vZHVsZXMvcmVhY3Rpb24vc3JjL3ZpcnR1YWxET00vY29udGFpbmVyL2VsZW1lbnQvc3ZnLmpzIiwgIm5vZGVfbW9kdWxlcy9yZWFjdGlvbi9zcmMvdmlydHVhbERPTS9jb250YWluZXIvZWxlbWVudC9odG1sLmpzIiwgIm5vZGVfbW9kdWxlcy9yZWFjdGlvbi9zcmMvdmlydHVhbERPTS9yZWFjdC9jbGFzcy5qcyIsICJub2RlX21vZHVsZXMvcmVhY3Rpb24vc3JjL3ZpcnR1YWxET00vcmVhY3QvZnVuY3Rpb24uanMiLCAibm9kZV9tb2R1bGVzL3JlYWN0aW9uL3NyYy92aXJ0dWFsRE9NL2NvbnRhaW5lci90ZXh0RWxlbWVudC5qcyIsICJub2RlX21vZHVsZXMvcmVhY3Rpb24vc3JjL3V0aWxpdGllcy9zYW5pdGlpc2UuanMiLCAibm9kZV9tb2R1bGVzL3JlYWN0aW9uL3NyYy9yZWFjdC5qcyIsICJub2RlX21vZHVsZXMvcmVhY3Rpb24vc3JjL3JlYWN0RE9NLmpzIiwgIm5vZGVfbW9kdWxlcy9yZWFjdGlvbi9zcmMvaW5kZXguanMiLCAic3JjL2V4YW1wbGUvaG9va3NBcHAvcHJlYW1ibGUuanMiLCAic3JjL2hvb2tzLmpzIiwgInNyYy9pbmRleC5qcyIsICJzcmMvZXhhbXBsZS9ob29rc0FwcC91c2VFZmZlY3RzL2NvbnN0YW50cy5qcyIsICJzcmMvZXhhbXBsZS9ob29rc0FwcC91c2VFZmZlY3RzL2NvbXBvbmVudC5qcyIsICJzcmMvZXhhbXBsZS9ob29rc0FwcC91c2VFZmZlY3RzL2J1dHRvbi5qcyIsICJzcmMvZXhhbXBsZS9ob29rc0FwcC91c2VFZmZlY3RzL2J1dHRvbi9ob21lLmpzIiwgInNyYy9leGFtcGxlL2hvb2tzQXBwL3VzZUVmZmVjdHMvYXJ0aWNsZS5qcyIsICJzcmMvZXhhbXBsZS9ob29rc0FwcC91c2VFZmZlY3RzL2FydGljbGUvaG9tZS5qcyIsICJzcmMvZXhhbXBsZS9ob29rc0FwcC91c2VFZmZlY3RzL2FydGljbGUvc2V0dGluZ3MuanMiLCAic3JjL2V4YW1wbGUvaG9va3NBcHAvdXNlRWZmZWN0cy9zZWN0aW9uL2FydGljbGVzLmpzIiwgInNyYy9leGFtcGxlL2hvb2tzQXBwL3VzZUVmZmVjdHMvYnV0dG9uL3NldHRpbmdzLmpzIiwgInNyYy9leGFtcGxlL2hvb2tzQXBwL3VzZUVmZmVjdHMvbmF2aWdhdGlvbi9wcmltYXJ5LmpzIiwgInNyYy9leGFtcGxlL2hvb2tzQXBwL3VzZUVmZmVjdHMvc2VjdGlvbi9tYWluLmpzIiwgInNyYy9leGFtcGxlL2hvb2tzQXBwL3VzZUNvbnRleHQvY29uc3RhbnRzLmpzIiwgInNyYy9leGFtcGxlL2hvb2tzQXBwL3VzZUNvbnRleHQvY29tcG9uZW50LmpzIiwgInNyYy9leGFtcGxlL2hvb2tzQXBwL3VzZUNvbnRleHQvYnV0dG9uL2xpbmsvY2xvc2UuanMiLCAic3JjL2V4YW1wbGUvaG9va3NBcHAvdXNlQ29udGV4dC9zcGFuL2dvdEl0LmpzIiwgInNyYy9leGFtcGxlL2hvb2tzQXBwL3VzZUNvbnRleHQvZGl2L2dvdEl0LmpzIiwgInNyYy9leGFtcGxlL2hvb2tzQXBwL3VzZUNvbnRleHQvYnV0dG9uL2xpbmsvb3Blbi5qcyIsICJzcmMvZXhhbXBsZS9ob29rc0FwcC91c2VDb250ZXh0L2hlYWRlci9nb3RJdC5qcyIsICJzcmMvZXhhbXBsZS9ob29rc0FwcC91c2VDb250ZXh0L3NlY3Rpb24vZ290SXQuanMiLCAic3JjL2V4YW1wbGUvaG9va3NBcHAvdXNlU3RhdGUvZnVuY3Rpb24uanMiLCAic3JjL2V4YW1wbGUvaG9va3NBcHAvdXNlU3RhdGUvY29tcG9uZW50LmpzIiwgInNyYy9leGFtcGxlL2hvb2tzQXBwL3VzZVN0YXRlL2NyZWF0ZUNsYXNzLmpzIiwgInNyYy9leGFtcGxlL2hvb2tzQXBwL3ZpZXcuanMiLCAic3JjL2V4YW1wbGUvaG9va3NBcHAvY29uc3RhbnRzLmpzIiwgInNyYy9leGFtcGxlL2hvb2tzQXBwLmpzIiwgInNyYy9leGFtcGxlLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhY3RDbGFzcyB7XG4gIGNvbnN0cnVjdG9yKHJlbmRlciwgZ2V0SW5pdGlhbFN0YXRlLCBnZXRDaGlsZENvbnRleHQsIGNvbXBvbmVudERpZE1vdW50LCBjb21wb25lbnRXaWxsVW5tb3VudCwgbWl4aW5zKSB7XG4gICAgdGhpcy5yZW5kZXIgPSByZW5kZXI7XG5cbiAgICBpZiAoZ2V0SW5pdGlhbFN0YXRlKSB7IHRoaXMuZ2V0SW5pdGlhbFN0YXRlID0gZ2V0SW5pdGlhbFN0YXRlOyB9XG4gICAgaWYgKGdldENoaWxkQ29udGV4dCkgeyB0aGlzLmdldENoaWxkQ29udGV4dCA9IGdldENoaWxkQ29udGV4dDsgfVxuICAgIGlmIChjb21wb25lbnREaWRNb3VudCkgeyB0aGlzLmNvbXBvbmVudERpZE1vdW50ID0gY29tcG9uZW50RGlkTW91bnQ7IH1cbiAgICBpZiAoY29tcG9uZW50V2lsbFVubW91bnQpIHsgdGhpcy5jb21wb25lbnRXaWxsVW5tb3VudCA9IGNvbXBvbmVudFdpbGxVbm1vdW50OyB9XG5cbiAgICB0aGlzLm1peGlucyA9IG1peGlucztcbiAgfVxuXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge307XG4gIH1cblxuICBnZXRDaGlsZENvbnRleHQoY29udGV4dCkge1xuICAgIHJldHVybiBjb250ZXh0O1xuICB9XG5cbiAgY2hpbGRDb250ZXh0U2V0KGNoaWxkQ29udGV4dCkge1xuICAgIC8vL1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8vXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAvLy9cbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGUob2JqZWN0KSB7XG4gICAgY29uc3QgeyByZW5kZXIsIGdldEluaXRpYWxTdGF0ZSwgZ2V0Q2hpbGRDb250ZXh0LCBjb21wb25lbnREaWRNb3VudCwgY29tcG9uZW50V2lsbFVubW91bnQsIG1peGlucyB9ID0gb2JqZWN0O1xuXG4gICAgcmV0dXJuIG5ldyBSZWFjdENsYXNzKHJlbmRlciwgZ2V0SW5pdGlhbFN0YXRlLCBnZXRDaGlsZENvbnRleHQsIGNvbXBvbmVudERpZE1vdW50LCBjb21wb25lbnRXaWxsVW5tb3VudCwgbWl4aW5zKTtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZmlyc3QoYXJyYXkpIHsgcmV0dXJuIGFycmF5WzBdOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBmbGF0dGVuKGFycmF5KSB7XG4gIHJldHVybiBhcnJheS5yZWR1Y2UoKGFycmF5LCBlbGVtZW50KSA9PiB7XG4gICAgYXJyYXkgPSBhcnJheS5jb25jYXQoZWxlbWVudCk7ICAvLy9cbiAgICBcbiAgICByZXR1cm4gYXJyYXk7XG4gIH0sIFtdKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGd1YXJhbnRlZShhcnJheU9yRWxlbWVudCkge1xuICBhcnJheU9yRWxlbWVudCA9IGFycmF5T3JFbGVtZW50IHx8IFtdO1xuXG4gIHJldHVybiAoYXJyYXlPckVsZW1lbnQgaW5zdGFuY2VvZiBBcnJheSkgP1xuICAgICAgICAgICAgYXJyYXlPckVsZW1lbnQgOlxuICAgICAgICAgICAgICBbYXJyYXlPckVsZW1lbnRdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtYWluaW5nKGVsZW1lbnQsIGFycmF5KSB7XG4gIGlmIChlbGVtZW50ID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGFycmF5O1xuICB9XG5cbiAgY29uc3QgaW5kZXggPSBpbmRleE9mKGVsZW1lbnQsIGFycmF5KTtcblxuICByZXR1cm4gYXJyYXkuc2xpY2UoaW5kZXggKyAxKTtcbn1cblxuZnVuY3Rpb24gaW5kZXhPZihlbGVtZW50LCBhcnJheSkge1xuICBsZXQgaW5kZXggPSBudWxsO1xuXG4gIGFycmF5LnNvbWUoKGN1cnJlbnRFbGVtZW50LCBjdXJyZW50RWxlbWVudEluZGV4KSA9PiB7XG4gICAgaWYgKGN1cnJlbnRFbGVtZW50ID09PSBlbGVtZW50KSB7XG4gICAgICBpbmRleCA9IGN1cnJlbnRFbGVtZW50SW5kZXg7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGluZGV4O1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaXJ0dWFsRE9NRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgIHRoaXMucGFyZW50ID0gbnVsbDtcbiAgICB0aGlzLmNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47ICAvLy9cbiAgfVxuXG4gIGdldFByb3BzKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzO1xuICB9XG5cbiAgZ2V0UGFyZW50KCkge1xuICAgIHJldHVybiB0aGlzLnBhcmVudDtcbiAgfVxuXG4gIGdldENoaWxkcmVuKCkge1xuICAgIHJldHVybiB0aGlzLmNoaWxkcmVuO1xuICB9XG5cbiAgZ2V0Rmlyc3RDaGlsZCgpIHtcbiAgICBjb25zdCBmaXJzdENoaWxkID0gZmlyc3QodGhpcy5jaGlsZHJlbikgfHwgbnVsbDtcblxuICAgIHJldHVybiBmaXJzdENoaWxkO1xuICB9XG5cbiAgbW91bnQocGFyZW50LCBjaGlsZHJlbikge1xuICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICAgIHRoaXMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgfVxuXG4gIHVubW91bnQoKSB7XG4gICAgdGhpcy5wYXJlbnQgPSBudWxsO1xuICAgIHRoaXMuY2hpbGRyZW4gPSBudWxsO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cblxuXG5mdW5jdGlvbiBvbihldmVudFR5cGUsIGhhbmRsZXIpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpO1xuXG4gIHJldHVybiBmaXJzdENoaWxkLm9uKGV2ZW50VHlwZSwgaGFuZGxlcik7XG59XG5cbmZ1bmN0aW9uIG9mZihldmVudFR5cGUsIGhhbmRsZXIpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpO1xuXG4gIHJldHVybiBmaXJzdENoaWxkLm9mZihldmVudFR5cGUsIGhhbmRsZXIpO1xufVxuXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpO1xuXG4gIHJldHVybiBmaXJzdENoaWxkLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIGdldEF0dHJpYnV0ZShuYW1lKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmdldEZpcnN0Q2hpbGQoKTtcblxuICByZXR1cm4gZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUobmFtZSk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyQXR0cmlidXRlKG5hbWUpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpO1xuXG4gIGZpcnN0Q2hpbGQuY2xlYXJBdHRyaWJ1dGUobmFtZSk7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkge1xuICBjb25zdCBmaXJzdENoaWxkID0gdGhpcy5nZXRGaXJzdENoaWxkKCk7XG5cbiAgZmlyc3RDaGlsZC5hZGRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVBdHRyaWJ1dGUobmFtZSkge1xuICBjb25zdCBmaXJzdENoaWxkID0gdGhpcy5nZXRGaXJzdENoaWxkKCk7XG5cbiAgZmlyc3RDaGlsZC5yZW1vdmVBdHRyaWJ1dGUobmFtZSlcbn1cblxuZnVuY3Rpb24gaGFzQXR0cmlidXRlKG5hbWUpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpO1xuXG4gIHJldHVybiBmaXJzdENoaWxkLmhhc0F0dHJpYnV0ZShuYW1lKTtcbn1cblxuZnVuY3Rpb24gc2V0Q2xhc3MoY2xhc3NOYW1lKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmdldEZpcnN0Q2hpbGQoKTtcblxuICBmaXJzdENoaWxkLnNldENsYXNzKGNsYXNzTmFtZSk7XG59XG5cbmZ1bmN0aW9uIGFkZENsYXNzKGNsYXNzTmFtZSkge1xuICBjb25zdCBmaXJzdENoaWxkID0gdGhpcy5nZXRGaXJzdENoaWxkKCk7XG5cbiAgZmlyc3RDaGlsZC5hZGRDbGFzcyhjbGFzc05hbWUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpO1xuXG4gIGZpcnN0Q2hpbGQucmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlQ2xhc3MoY2xhc3NOYW1lKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmdldEZpcnN0Q2hpbGQoKTtcblxuICBmaXJzdENoaWxkLnRvZ2dsZUNsYXNzKGNsYXNzTmFtZSk7XG59XG5cbmZ1bmN0aW9uIGhhc0NsYXNzKGNsYXNzTmFtZSkge1xuICBjb25zdCBmaXJzdENoaWxkID0gdGhpcy5nZXRGaXJzdENoaWxkKCk7XG5cbiAgcmV0dXJuIGZpcnN0Q2hpbGQuaGFzQ2xhc3MoY2xhc3NOYW1lKTtcbn1cblxuZnVuY3Rpb24gaGFzQ2xhc3NlcyhjbGFzc05hbWVzKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmdldEZpcnN0Q2hpbGQoKTtcblxuICByZXR1cm4gZmlyc3RDaGlsZC5oYXNDbGFzc2VzKGNsYXNzTmFtZXMpO1xufVxuXG5mdW5jdGlvbiBjbGVhckNsYXNzZXMoKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmdldEZpcnN0Q2hpbGQoKTtcblxuICBmaXJzdENoaWxkLmNsZWFyQ2xhc3NlcygpO1xufVxuXG5mdW5jdGlvbiBnZXRUYWdOYW1lKCkge1xuICByZXR1cm4gbnVsbDsgIC8vL1xufVxuXG5mdW5jdGlvbiBnZXRTdHlsZShuYW1lKSB7XG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSB0aGlzLmdldEZpcnN0Q2hpbGQoKTtcblxuICByZXR1cm4gZmlyc3RDaGlsZC5nZXRTdHlsZShuYW1lKTtcbn1cblxuZnVuY3Rpb24gc2V0U3R5bGUobmFtZSwgdmFsdWUpIHtcbiAgY29uc3QgZmlyc3RDaGlsZCA9IHRoaXMuZ2V0Rmlyc3RDaGlsZCgpO1xuXG4gIGZpcnN0Q2hpbGQuc2V0U3R5bGUobmFtZSwgdmFsdWUpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG9uLFxuICBvZmYsXG4gIHNldEF0dHJpYnV0ZSxcbiAgZ2V0QXR0cmlidXRlLFxuICBjbGVhckF0dHJpYnV0ZSxcbiAgYWRkQXR0cmlidXRlLFxuICByZW1vdmVBdHRyaWJ1dGUsXG4gIGhhc0F0dHJpYnV0ZSxcbiAgc2V0Q2xhc3MsXG4gIGFkZENsYXNzLFxuICByZW1vdmVDbGFzcyxcbiAgdG9nZ2xlQ2xhc3MsXG4gIGhhc0NsYXNzLFxuICBoYXNDbGFzc2VzLFxuICBjbGVhckNsYXNzZXMsXG4gIGdldFRhZ05hbWUsXG4gIGdldFN0eWxlLFxuICBzZXRTdHlsZVxufTtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFZpcnR1YWxET01FbGVtZW50IGZyb20gXCIuLi92aXJ0dWFsRE9NRWxlbWVudFwiO1xuaW1wb3J0IHJlYWN0RWxlbWVudE1peGlucyBmcm9tIFwiLi4vbWl4aW5zL3JlYWN0RWxlbWVudFwiO1xuXG5pbXBvcnQgeyBndWFyYW50ZWUsIHJlbWFpbmluZyB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuY2xhc3MgUmVhY3RFbGVtZW50IGV4dGVuZHMgVmlydHVhbERPTUVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBcbiAgICB0aGlzLnN0YXRlID0gbnVsbDtcbiAgICB0aGlzLmNvbnRleHQgPSBudWxsO1xuICB9XG5cbiAgZ2V0U3RhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGU7XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBnZXRET01FbGVtZW50KCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZ2V0Q2hpbGRSZWZlcmVuY2UoKSB7XG4gICAgY29uc3QgcGFyZW50ID0gdGhpcy5nZXRQYXJlbnQoKSxcbiAgICAgICAgICBjaGlsZCA9IHRoaXM7IC8vL1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKTtcbiAgfVxuXG4gIHNldFN0YXRlKHN0YXRlKSB7XG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuXG4gICAgdGhpcy5yZWRyYXcoKTtcbiAgfVxuXG4gIHVwZGF0ZVN0YXRlKHN0YXRlKSB7XG4gICAgY29uc3Qgb2xkU3RhdGUgPSB0aGlzLnN0YXRlLCAgLy8vXG4gICAgICAgICAgbmV3U3RhdGUgPSBzdGF0ZTsgLy8vXG5cbiAgICB0aGlzLnN0YXRlID0gT2JqZWN0LmFzc2lnbihvbGRTdGF0ZSwgbmV3U3RhdGUpO1xuXG4gICAgdGhpcy5yZWRyYXcoKTtcbiAgfVxuXG4gIHNldEluaXRpYWxTdGF0ZShpbml0aWFsU3RhdGUpIHtcbiAgICB0aGlzLnN0YXRlID0gaW5pdGlhbFN0YXRlOyAgLy8vXG4gIH1cblxuICBmb3JjZVVwZGF0ZSh1cGRhdGUpIHtcbiAgICB0aGlzLnJlZHJhdyh1cGRhdGUpO1xuICB9XG5cbiAgbW91bnQocGFyZW50LCByZWZlcmVuY2UsIGNvbnRleHQpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXG4gICAgY29uc3QgY2hpbGRDb250ZXh0ID0gdGhpcy5nZXRDaGlsZENvbnRleHQoY29udGV4dCkgfHwgbnVsbDtcblxuICAgIGNvbnN0IHVwZGF0ZSA9IG51bGwsXG4gICAgICAgICAgY2hpbGRyZW4gPSBndWFyYW50ZWUodGhpcy5yZW5kZXIodXBkYXRlLCB0aGlzKSk7XG5cbiAgICBzdXBlci5tb3VudChwYXJlbnQsIGNoaWxkcmVuKTtcblxuICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZFBhcmVudCA9IHRoaXMsXG4gICAgICAgICAgICBjaGlsZFJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcblxuICAgICAgY2hpbGQubW91bnQoY2hpbGRQYXJlbnQsIGNoaWxkUmVmZXJlbmNlLCBjaGlsZENvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jaGlsZENvbnRleHRTZXQoY2hpbGRDb250ZXh0KTtcblxuICAgIHRoaXMuY29tcG9uZW50RGlkTW91bnQoKTtcbiAgfVxuXG4gIHVubW91bnQoKSB7XG4gICAgdGhpcy5jb21wb25lbnRXaWxsVW5tb3VudCgpO1xuXG4gICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLmdldENoaWxkcmVuKCk7XG5cbiAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgY2hpbGQudW5tb3VudCgpO1xuICAgIH0pO1xuXG4gICAgc3VwZXIudW5tb3VudCgpO1xuICB9XG5cbiAgcmVkcmF3KHVwZGF0ZSkge1xuICAgIGNvbnN0IGNoaWxkQ29udGV4dCA9IHRoaXMuZ2V0Q2hpbGRDb250ZXh0KHRoaXMuY29udGV4dCkgfHwgbnVsbDtcblxuICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGNoaWxkLnVubW91bnQoKTtcbiAgICB9KTtcblxuICAgIHRoaXMuY2hpbGRyZW4gPSBndWFyYW50ZWUodGhpcy5yZW5kZXIodXBkYXRlLCB0aGlzKSk7XG5cbiAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZFBhcmVudCA9IHRoaXMsXG4gICAgICAgICAgICBjaGlsZFJlZmVyZW5jZSA9IHRoaXMuZ2V0Q2hpbGRSZWZlcmVuY2UoKTtcblxuICAgICAgY2hpbGQubW91bnQoY2hpbGRQYXJlbnQsIGNoaWxkUmVmZXJlbmNlLCBjaGlsZENvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jaGlsZENvbnRleHRTZXQoY2hpbGRDb250ZXh0KTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKFJlYWN0RWxlbWVudC5wcm90b3R5cGUsIHJlYWN0RWxlbWVudE1peGlucyk7XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0RWxlbWVudDtcblxuZnVuY3Rpb24gcmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpIHtcbiAgbGV0IHJlZmVyZW5jZSA9IGZpbmRSZWZlcmVuY2UocGFyZW50LCBjaGlsZCksXG4gICAgICBwYXJlbnRET01FbGVtZW50ID0gcGFyZW50LmdldERPTUVsZW1lbnQoKTtcblxuICB3aGlsZSAoKHJlZmVyZW5jZSA9PT0gbnVsbCkgJiYgKHBhcmVudERPTUVsZW1lbnQgPT09IG51bGwpKSB7XG4gICAgY2hpbGQgPSBwYXJlbnQ7IC8vL1xuXG4gICAgcGFyZW50ID0gcGFyZW50LmdldFBhcmVudCgpO1xuXG4gICAgcmVmZXJlbmNlID0gZmluZFJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKTtcblxuICAgIHBhcmVudERPTUVsZW1lbnQgPSBwYXJlbnQuZ2V0RE9NRWxlbWVudCgpO1xuICB9XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZnVuY3Rpb24gZmluZFJlZmVyZW5jZShwYXJlbnQsIGNoaWxkKSB7XG4gIGNvbnN0IGNoaWxkcmVuID0gcGFyZW50LmdldENoaWxkcmVuKCksXG4gICAgICAgIHJlbWFpbmluZ0NoaWxkcmVuID0gcmVtYWluaW5nKGNoaWxkLCBjaGlsZHJlbik7XG5cbiAgcmV0dXJuIHJlbWFpbmluZ0NoaWxkcmVuLnJlZHVjZSgocmVmZXJlbmNlLCByZW1haW5pbmdDaGlsZCkgPT4ge1xuICAgIGlmIChyZWZlcmVuY2UgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHJlbWFpbmluZ0NoaWxkRE9NRWxlbWVudCA9IHJlbWFpbmluZ0NoaWxkLmdldERPTUVsZW1lbnQoKTtcblxuICAgICAgaWYgKHJlbWFpbmluZ0NoaWxkRE9NRWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICByZWZlcmVuY2UgPSByZW1haW5pbmdDaGlsZDsgLy8vXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZCA9IG51bGw7XG5cbiAgICAgICAgcGFyZW50ID0gcmVtYWluaW5nQ2hpbGQ7ICAvLy9cblxuICAgICAgICByZWZlcmVuY2UgPSBmaW5kUmVmZXJlbmNlKHBhcmVudCwgY2hpbGQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH0sIG51bGwpO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUmVhY3RFbGVtZW50IGZyb20gXCIuL3ZpcnR1YWxET00vcmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVhY3RDb21wb25lbnQgZXh0ZW5kcyBSZWFjdEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGNvbnN0IGluaXRpYWxTdGF0ZSA9IHRoaXMuZ2V0SW5pdGlhbFN0YXRlKCk7XG5cbiAgICB0aGlzLnNldEluaXRpYWxTdGF0ZShpbml0aWFsU3RhdGUpO1xuICB9XG5cbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuICBcbiAgZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHtcbiAgICByZXR1cm4gY29udGV4dDtcbiAgfVxuXG4gIGNoaWxkQ29udGV4dFNldChjaGlsZENvbnRleHQpIHtcbiAgICAvLy9cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vL1xuICB9XG4gXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIC8vL1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWaXJ0dWFsRE9NRWxlbWVudCBmcm9tIFwiLi4vdmlydHVhbERPTUVsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGFpbmVyRWxlbWVudCBleHRlbmRzIFZpcnR1YWxET01FbGVtZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMsIGRvbUVsZW1lbnQpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgXG4gICAgdGhpcy5kb21FbGVtZW50ID0gZG9tRWxlbWVudDtcbiAgfVxuXG4gIGdldERPTUVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZG9tRWxlbWVudDtcbiAgfVxuXG4gIG1vdW50KHBhcmVudCwgcmVmZXJlbmNlKSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLmdldENoaWxkcmVuKCk7XG4gICAgXG4gICAgc3VwZXIubW91bnQocGFyZW50LCBjaGlsZHJlbik7XG5cbiAgICBwYXJlbnRET01FbGVtZW50KHBhcmVudCkuaW5zZXJ0QmVmb3JlKHRoaXMuZG9tRWxlbWVudCwgcmVmZXJlbmNlRE9NRWxlbWVudChyZWZlcmVuY2UpKTtcblxuICAgIHJldHVybiB0aGlzLmRvbUVsZW1lbnQ7XG4gIH1cblxuICB1bm1vdW50KCkge1xuICAgIHRoaXMuZG9tRWxlbWVudC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKHRoaXMuZG9tRWxlbWVudCk7XG5cbiAgICBzdXBlci51bm1vdW50KCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbURPTUVsZW1lbnQoZG9tRWxlbWVudCkge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gW10sXG4gICAgICAgICAgcHJvcHMgPSB7XG4gICAgICAgICAgICBjaGlsZHJlblxuICAgICAgICAgIH0sXG4gICAgICAgICAgdmlydHVhbERPTU5vZGUgPSBuZXcgQ29udGFpbmVyRWxlbWVudChwcm9wcywgZG9tRWxlbWVudCk7XG5cbiAgICByZXR1cm4gdmlydHVhbERPTU5vZGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gcGFyZW50RE9NRWxlbWVudChwYXJlbnQpIHtcbiAgbGV0IHBhcmVudERPTUVsZW1lbnQgPSBwYXJlbnQuZ2V0RE9NRWxlbWVudCgpO1xuXG4gIHdoaWxlIChwYXJlbnRET01FbGVtZW50ID09PSBudWxsKSB7XG4gICAgcGFyZW50ID0gcGFyZW50LmdldFBhcmVudCgpO1xuXG4gICAgcGFyZW50RE9NRWxlbWVudCA9IHBhcmVudC5nZXRET01FbGVtZW50KCk7XG4gIH1cblxuICByZXR1cm4gcGFyZW50RE9NRWxlbWVudDtcbn1cblxuZnVuY3Rpb24gcmVmZXJlbmNlRE9NRWxlbWVudChyZWZlcmVuY2UpIHtcbiAgY29uc3QgcmVmZXJlbmNlRE9NRWxlbWVudCA9IChyZWZlcmVuY2UgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmZXJlbmNlLmdldERPTUVsZW1lbnQoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICByZXR1cm4gcmVmZXJlbmNlRE9NRWxlbWVudDtcbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IEZPUiA9IFwiZm9yXCI7XG5leHBvcnQgY29uc3QgUkVGID0gXCJyZWZcIjtcbmV4cG9ydCBjb25zdCBDTEFTUyA9IFwiY2xhc3NcIjtcbmV4cG9ydCBjb25zdCBTVFJJTkcgPSBcInN0cmluZ1wiO1xuZXhwb3J0IGNvbnN0IE9CSkVDVCA9IFwib2JqZWN0XCI7XG5leHBvcnQgY29uc3QgQk9PTEVBTiA9IFwiYm9vbGVhblwiO1xuZXhwb3J0IGNvbnN0IEZVTkNUSU9OID0gXCJmdW5jdGlvblwiO1xuZXhwb3J0IGNvbnN0IEhUTUxfRk9SID0gXCJodG1sRm9yXCI7XG5leHBvcnQgY29uc3QgQ0xBU1NfTkFNRSA9IFwiY2xhc3NOYW1lXCI7XG5leHBvcnQgY29uc3QgRU1QVFlfU1RSSU5HID0gXCJcIjtcbmV4cG9ydCBjb25zdCBIVFRQX1dXV19XM19PUkdfMjAwMF9TVkcgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEZPUiwgQ0xBU1MsIE9CSkVDVCwgQk9PTEVBTiwgQ0xBU1NfTkFNRSwgSFRNTF9GT1IsIEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZnVuY3Rpb24gb24oZXZlbnRUeXBlLCBoYW5kbGVyKSB7IHRoaXMuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgaGFuZGxlcik7IH0gLy8vXG5cbmZ1bmN0aW9uIG9mZihldmVudFR5cGUsIGhhbmRsZXIpIHsgdGhpcy5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBoYW5kbGVyKTsgfVxuXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHtcbiAgaWYgKG5hbWUgPT09IENMQVNTX05BTUUpIHtcbiAgICBuYW1lID0gQ0xBU1M7XG4gIH1cblxuICBpZiAobmFtZSA9PT0gSFRNTF9GT1IpIHtcbiAgICBuYW1lID0gRk9SO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gT0JKRUNUKSB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKTtcblxuICAgIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICB0aGlzLmRvbUVsZW1lbnRbbmFtZV1ba2V5XSA9IHZhbHVlW2tleV07XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBCT09MRUFOKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB2YWx1ZSA9IG5hbWU7IC8vL1xuXG4gICAgICB0aGlzLmRvbUVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5kb21FbGVtZW50LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0QXR0cmlidXRlKG5hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5nZXRBdHRyaWJ1dGUobmFtZSk7IH1cblxuZnVuY3Rpb24gY2xlYXJBdHRyaWJ1dGUobmFtZSkgeyB0aGlzLmRvbUVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKG5hbWUpOyB9XG5cbmZ1bmN0aW9uIGFkZEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkgeyB0aGlzLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7IH1cblxuZnVuY3Rpb24gcmVtb3ZlQXR0cmlidXRlKG5hbWUpIHsgdGhpcy5kb21FbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShuYW1lKTsgfVxuXG5mdW5jdGlvbiBoYXNBdHRyaWJ1dGUobmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50Lmhhc0F0dHJpYnV0ZShuYW1lKTsgfVxuXG5mdW5jdGlvbiBzZXRDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTsgfVxuXG5mdW5jdGlvbiBhZGRDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTsgfVxuXG5mdW5jdGlvbiByZW1vdmVDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTsgfVxuXG5mdW5jdGlvbiB0b2dnbGVDbGFzcyhjbGFzc05hbWUpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoY2xhc3NOYW1lKTsgfVxuXG5mdW5jdGlvbiBoYXNDbGFzcyhjbGFzc05hbWUpIHsgcmV0dXJuIHRoaXMuZG9tRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTsgfVxuXG5mdW5jdGlvbiBoYXNDbGFzc2VzKGNsYXNzTmFtZXMpIHtcbiAgcmV0dXJuIGNsYXNzTmFtZXMuZXZlcnkoKGNsYXNzTmFtZSkgPT4ge1xuICAgIGlmICh0aGlzLmhhc0NsYXNzKGNsYXNzTmFtZSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyQ2xhc3NlcygpIHsgdGhpcy5kb21FbGVtZW50LmNsYXNzTmFtZSA9IEVNUFRZX1NUUklORzsgfVxuXG5mdW5jdGlvbiBnZXRUYWdOYW1lKCkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnRhZ05hbWU7IH1cblxuZnVuY3Rpb24gZ2V0U3R5bGUobmFtZSkgeyByZXR1cm4gdGhpcy5kb21FbGVtZW50LnN0eWxlW25hbWVdOyB9XG5cbmZ1bmN0aW9uIHNldFN0eWxlKG5hbWUsIHZhbHVlKSB7IHRoaXMuZG9tRWxlbWVudC5zdHlsZVtuYW1lXSA9IHZhbHVlOyB9XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgb24sXG4gIG9mZixcbiAgc2V0QXR0cmlidXRlLFxuICBnZXRBdHRyaWJ1dGUsXG4gIGNsZWFyQXR0cmlidXRlLFxuICBhZGRBdHRyaWJ1dGUsXG4gIHJlbW92ZUF0dHJpYnV0ZSxcbiAgaGFzQXR0cmlidXRlLFxuICBzZXRDbGFzcyxcbiAgYWRkQ2xhc3MsXG4gIHJlbW92ZUNsYXNzLFxuICB0b2dnbGVDbGFzcyxcbiAgaGFzQ2xhc3MsXG4gIGhhc0NsYXNzZXMsXG4gIGNsZWFyQ2xhc3NlcyxcbiAgZ2V0VGFnTmFtZSxcbiAgZ2V0U3R5bGUsXG4gIHNldFN0eWxlXG59O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQ29udGFpbmVyRWxlbWVudCBmcm9tIFwiLi4vY29udGFpbmVyXCI7XG5pbXBvcnQgY29udGFpbmVyRWxlbWVudE1peGlucyBmcm9tIFwiLi4vLi4vbWl4aW5zL2NvbnRhaW5lckVsZW1lbnRcIjtcblxuaW1wb3J0IHsgUkVGIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5jbGFzcyBFbGVtZW50IGV4dGVuZHMgQ29udGFpbmVyRWxlbWVudCB7XG4gIG1vdW50KHBhcmVudCwgcmVmZXJlbmNlLCBjb250ZXh0KSB7XG4gICAgc3VwZXIubW91bnQocGFyZW50LCByZWZlcmVuY2UpO1xuXG4gICAgY29uc3QgY2hpbGRQYXJlbnQgPSB0aGlzLFxuICAgICAgICAgIGNoaWxkUmVmZXJlbmNlID0gbnVsbCxcbiAgICAgICAgICBjaGlsZENvbnRleHQgPSBjb250ZXh0LFxuICAgICAgICAgIGNoaWxkcmVuID0gdGhpcy5nZXRDaGlsZHJlbigpO1xuXG4gICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgIGNoaWxkLm1vdW50KGNoaWxkUGFyZW50LCBjaGlsZFJlZmVyZW5jZSwgY2hpbGRDb250ZXh0KTtcbiAgICB9KTtcblxuICAgIHRoaXMuYXBwbHlQcm9wcygpO1xuICB9XG5cbiAgdW5tb3VudChjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGRDb250ZXh0ID0gY29udGV4dCxcbiAgICAgICAgICBjaGlsZHJlbiA9IHRoaXMuZ2V0Q2hpbGRyZW4oKTtcblxuICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICBjaGlsZC51bm1vdW50KGNoaWxkQ29udGV4dCk7XG4gICAgfSk7XG5cbiAgICBzdXBlci51bm1vdW50KCk7XG4gIH1cblxuICBhcHBseVByb3BzKCkge1xuICAgIGNvbnN0IG5hbWVzID0gT2JqZWN0LmtleXModGhpcy5wcm9wcyk7XG5cbiAgICBuYW1lcy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMucHJvcHNbbmFtZV07XG5cbiAgICAgIGlmIChmYWxzZSkge1xuXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuaXNIYW5kbGVyTmFtZShuYW1lKSkge1xuICAgICAgICB0aGlzLnNldEhhbmRsZXIobmFtZSwgdmFsdWUpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmlzQXR0cmlidXRlTmFtZShuYW1lKSkge1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKG5hbWUgPT09IFJFRikge1xuICAgICAgICBjb25zdCBjYWxsYmFjayA9IHZhbHVlOyAvLy9cbiAgICAgICAgXG4gICAgICAgIGNhbGxiYWNrKHRoaXMuZG9tRWxlbWVudCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzZXRIYW5kbGVyKG5hbWUsIHZhbHVlKSB7XG4gICAgY29uc3QgZXZlbnRUeXBlID0gbmFtZS5zdWJzdHIoMikudG9Mb3dlckNhc2UoKSwgLy8vXG4gICAgICAgICAgaGFuZGxlciA9IHZhbHVlOyAgLy8vXG5cbiAgICB0aGlzLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsICBoYW5kbGVyKTtcbiAgfVxuXG5cdGlzSGFuZGxlck5hbWUobmFtZSkge1xuXHRcdHJldHVybiAvXm9uLy50ZXN0KG5hbWUpO1xuXHR9XG59XG5cbk9iamVjdC5hc3NpZ24oRWxlbWVudC5wcm90b3R5cGUsIGNvbnRhaW5lckVsZW1lbnRNaXhpbnMpO1xuXG5leHBvcnQgZGVmYXVsdCBFbGVtZW50O1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNTVkdUYWdOYW1lKHRhZ05hbWUpIHtcbiAgcmV0dXJuIHN2Z1RhZ05hbWVzLmluY2x1ZGVzKHRhZ05hbWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTVkdBdHRyaWJ1dGVOYW1lKGF0dHJpYnV0ZU5hbWUpIHtcbiAgcmV0dXJuIHN2Z0F0dHJpYnV0ZU5hbWVzLmluY2x1ZGVzKGF0dHJpYnV0ZU5hbWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNIVE1MQXR0cmlidXRlTmFtZShhdHRyaWJ1dGVOYW1lKSB7XG4gIHJldHVybiBodG1sQXR0cmlidXRlTmFtZXMuaW5jbHVkZXMoYXR0cmlidXRlTmFtZSk7XG59XG5cbmNvbnN0IHN2Z1RhZ05hbWVzID0gW1xuICAgICAgICBcImFsdEdseXBoXCIsIFwiYW5pbWF0ZVwiLCBcImFuaW1hdGVDb2xvclwiLCBcImFuaW1hdGVNb3Rpb25cIiwgXCJhbmltYXRlVHJhbnNmb3JtXCIsIFwiYW5pbWF0aW9uXCIsIFwiYXVkaW9cIixcbiAgICAgICAgXCJjaXJjbGVcIiwgXCJjbGlwUGF0aFwiLCBcImNvbG9yLXByb2ZpbGVcIiwgXCJjdXJzb3JcIixcbiAgICAgICAgXCJkZWZzXCIsIFwiZGVzY1wiLCBcImRpc2NhcmRcIixcbiAgICAgICAgXCJlbGxpcHNlXCIsXG4gICAgICAgIFwiZmVCbGVuZFwiLCBcImZlQ29sb3JNYXRyaXhcIiwgXCJmZUNvbXBvbmVudFRyYW5zZmVyXCIsIFwiZmVDb21wb3NpdGVcIiwgXCJmZUNvbnZvbHZlTWF0cml4XCIsIFwiZmVEaWZmdXNlTGlnaHRpbmdcIiwgXCJmZURpc3BsYWNlbWVudE1hcFwiLCBcImZlRGlzdGFudExpZ2h0XCIsIFwiZmVEcm9wU2hhZG93XCIsIFwiZmVGbG9vZFwiLCBcImZlRnVuY0FcIiwgXCJmZUZ1bmNCXCIsIFwiZmVGdW5jR1wiLCBcImZlRnVuY1JcIiwgXCJmZUdhdXNzaWFuQmx1clwiLCBcImZlSW1hZ2VcIiwgXCJmZU1lcmdlXCIsIFwiZmVNZXJnZU5vZGVcIiwgXCJmZU1vcnBob2xvZ3lcIiwgXCJmZU9mZnNldFwiLCBcImZlUG9pbnRMaWdodFwiLCBcImZlU3BlY3VsYXJMaWdodGluZ1wiLCBcImZlU3BvdExpZ2h0XCIsIFwiZmVUaWxlXCIsIFwiZmVUdXJidWxlbmNlXCIsIFwiZmlsdGVyXCIsIFwiZm9udFwiLCBcImZvbnQtZmFjZVwiLCBcImZvbnQtZmFjZS1mb3JtYXRcIiwgXCJmb250LWZhY2UtbmFtZVwiLCBcImZvbnQtZmFjZS11cmlcIiwgXCJmb3JlaWduT2JqZWN0XCIsXG4gICAgICAgIFwiZ1wiLCBcImdseXBoXCIsIFwiZ2x5cGhSZWZcIixcbiAgICAgICAgXCJoYW5kbGVyXCIsIFwiaGF0Y2hcIiwgXCJoYXRjaHBhdGhcIiwgXCJoa2VyblwiLFxuICAgICAgICBcImltYWdlXCIsIFwibGluZVwiLCBcImxpbmVhckdyYWRpZW50XCIsXG4gICAgICAgIFwibGlzdGVuZXJcIixcbiAgICAgICAgXCJtYXJrZXJcIiwgXCJtYXNrXCIsIFwibWVzaFwiLCBcIm1lc2hncmFkaWVudFwiLCBcIm1lc2hwYXRjaFwiLCBcIm1lc2hyb3dcIiwgXCJtZXRhZGF0YVwiLCBcIm1pc3NpbmctZ2x5cGhcIiwgXCJtcGF0aFwiLFxuICAgICAgICBcInBhdGhcIiwgXCJwYXR0ZXJuXCIsIFwicG9seWdvblwiLCBcInBvbHlsaW5lXCIsIFwicHJlZmV0Y2hcIixcbiAgICAgICAgXCJyYWRpYWxHcmFkaWVudFwiLCBcInJlY3RcIixcbiAgICAgICAgXCJzY3JpcHRcIiwgXCJzZXRcIiwgXCJzb2xpZGNvbG9yXCIsIFwic3RvcFwiLCBcInN0eWxlXCIsIFwic3ZnXCIsIFwic3dpdGNoXCIsIFwic3ltYm9sXCIsXG4gICAgICAgIFwidGJyZWFrXCIsIFwidGV4dFwiLCBcInRleHRBcmVhXCIsIFwidGV4dFBhdGhcIiwgXCJ0aXRsZVwiLCBcInRyZWZcIiwgXCJ0c3BhblwiLFxuICAgICAgICBcInVua25vd25cIiwgXCJ1c2VcIixcbiAgICAgICAgXCJ2aWRlb1wiLCBcInZpZXdcIiwgXCJ2a2VyblwiXG4gICAgICBdLFxuICAgICAgc3ZnQXR0cmlidXRlTmFtZXMgPSBbXG4gICAgICAgIFwiYWNjZW50LWhlaWdodFwiLCBcImFjY3VtdWxhdGVcIiwgXCJhZGRpdGl2ZVwiLCBcImFsaWdubWVudC1iYXNlbGluZVwiLCBcImFscGhhYmV0aWNcIiwgXCJhbXBsaXR1ZGVcIiwgXCJhcmFiaWMtZm9ybVwiLCBcImFzY2VudFwiLCBcImF0dHJpYnV0ZU5hbWVcIiwgXCJhdHRyaWJ1dGVUeXBlXCIsIFwiYXppbXV0aFwiLFxuICAgICAgICBcImJhbmR3aWR0aFwiLCBcImJhc2VGcmVxdWVuY3lcIiwgXCJiYXNlUHJvZmlsZVwiLCBcImJhc2VsaW5lLXNoaWZ0XCIsIFwiYmJveFwiLCBcImJlZ2luXCIsIFwiYmlhc1wiLCBcImJ5XCIsXG4gICAgICAgIFwiY2FsY01vZGVcIiwgXCJjYXAtaGVpZ2h0XCIsIFwiY2xpcFwiLCBcImNsYXNzTmFtZVwiLCBcImNsaXAtcGF0aFwiLCBcImNsaXAtcnVsZVwiLCBcImNsaXBQYXRoVW5pdHNcIiwgXCJjb2xvclwiLCBcImNvbG9yLWludGVycG9sYXRpb25cIiwgXCJjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnNcIiwgXCJjb2xvci1wcm9maWxlXCIsIFwiY29sb3ItcmVuZGVyaW5nXCIsIFwiY29udGVudFNjcmlwdFR5cGVcIiwgXCJjb250ZW50U3R5bGVUeXBlXCIsIFwiY3Jvc3NvcmlnaW5cIiwgXCJjdXJzb3JcIiwgXCJjeFwiLCBcImN5XCIsXG4gICAgICAgIFwiZFwiLCBcImRlZmF1bHRBY3Rpb25cIiwgXCJkZXNjZW50XCIsIFwiZGlmZnVzZUNvbnN0YW50XCIsIFwiZGlyZWN0aW9uXCIsIFwiZGlzcGxheVwiLCBcImRpdmlzb3JcIiwgXCJkb21pbmFudC1iYXNlbGluZVwiLCBcImRvd25sb2FkXCIsIFwiZHVyXCIsIFwiZHhcIiwgXCJkeVwiLFxuICAgICAgICBcImVkZ2VNb2RlXCIsIFwiZWRpdGFibGVcIiwgXCJlbGV2YXRpb25cIiwgXCJlbmFibGUtYmFja2dyb3VuZFwiLCBcImVuZFwiLCBcImV2ZW50XCIsIFwiZXhwb25lbnRcIiwgXCJleHRlcm5hbFJlc291cmNlc1JlcXVpcmVkXCIsXG4gICAgICAgIFwiZmlsbFwiLCBcImZpbGwtb3BhY2l0eVwiLCBcImZpbGwtcnVsZVwiLCBcImZpbHRlclwiLCBcImZpbHRlclJlc1wiLCBcImZpbHRlclVuaXRzXCIsIFwiZmxvb2QtY29sb3JcIiwgXCJmbG9vZC1vcGFjaXR5XCIsIFwiZm9jdXNIaWdobGlnaHRcIiwgXCJmb2N1c2FibGVcIiwgXCJmb250LWZhbWlseVwiLCBcImZvbnQtc2l6ZVwiLCBcImZvbnQtc2l6ZS1hZGp1c3RcIiwgXCJmb250LXN0cmV0Y2hcIiwgXCJmb250LXN0eWxlXCIsIFwiZm9udC12YXJpYW50XCIsIFwiZm9udC13ZWlnaHRcIiwgXCJmb3JtYXRcIiwgXCJmclwiLCBcImZyb21cIiwgXCJmeFwiLCBcImZ5XCIsXG4gICAgICAgIFwiZzFcIiwgXCJnMlwiLCBcImdseXBoLW5hbWVcIiwgXCJnbHlwaC1vcmllbnRhdGlvbi1ob3Jpem9udGFsXCIsIFwiZ2x5cGgtb3JpZW50YXRpb24tdmVydGljYWxcIiwgXCJnbHlwaFJlZlwiLCBcImdyYWRpZW50VHJhbnNmb3JtXCIsIFwiZ3JhZGllbnRVbml0c1wiLFxuICAgICAgICBcImhhbmRsZXJcIiwgXCJoYW5naW5nXCIsIFwiaGF0Y2hDb250ZW50VW5pdHNcIiwgXCJoYXRjaFVuaXRzXCIsIFwiaGVpZ2h0XCIsIFwiaG9yaXotYWR2LXhcIiwgXCJob3Jpei1vcmlnaW4teFwiLCBcImhvcml6LW9yaWdpbi15XCIsIFwiaHJlZlwiLCBcImhyZWZsYW5nXCIsXG4gICAgICAgIFwiaWRcIiwgXCJpZGVvZ3JhcGhpY1wiLCBcImltYWdlLXJlbmRlcmluZ1wiLCBcImluXCIsIFwiaW4yXCIsIFwiaW5pdGlhbFZpc2liaWxpdHlcIiwgXCJpbnRlcmNlcHRcIixcbiAgICAgICAgXCJrXCIsIFwiazFcIiwgXCJrMlwiLCBcImszXCIsIFwiazRcIiwgXCJrZXJuZWxNYXRyaXhcIiwgXCJrZXJuZWxVbml0TGVuZ3RoXCIsIFwia2VybmluZ1wiLCBcImtleVBvaW50c1wiLCBcImtleVNwbGluZXNcIiwgXCJrZXlUaW1lc1wiLFxuICAgICAgICBcImxlbmd0aEFkanVzdFwiLCBcImxldHRlci1zcGFjaW5nXCIsIFwibGlnaHRpbmctY29sb3JcIiwgXCJsaW1pdGluZ0NvbmVBbmdsZVwiLCBcImxvY2FsXCIsXG4gICAgICAgIFwibWFya2VyLWVuZFwiLCBcIm1hcmtlci1taWRcIiwgXCJtYXJrZXItc3RhcnRcIiwgXCJtYXJrZXJIZWlnaHRcIiwgXCJtYXJrZXJVbml0c1wiLCBcIm1hcmtlcldpZHRoXCIsIFwibWFza1wiLCBcIm1hc2tDb250ZW50VW5pdHNcIiwgXCJtYXNrVW5pdHNcIiwgXCJtYXRoZW1hdGljYWxcIiwgXCJtYXhcIiwgXCJtZWRpYVwiLCBcIm1lZGlhQ2hhcmFjdGVyRW5jb2RpbmdcIiwgXCJtZWRpYUNvbnRlbnRFbmNvZGluZ3NcIiwgXCJtZWRpYVNpemVcIiwgXCJtZWRpYVRpbWVcIiwgXCJtZXRob2RcIiwgXCJtaW5cIiwgXCJtb2RlXCIsXG4gICAgICAgIFwibmFtZVwiLCBcIm5hdi1kb3duXCIsIFwibmF2LWRvd24tbGVmdFwiLCBcIm5hdi1kb3duLXJpZ2h0XCIsIFwibmF2LWxlZnRcIiwgXCJuYXYtbmV4dFwiLCBcIm5hdi1wcmV2XCIsIFwibmF2LXJpZ2h0XCIsIFwibmF2LXVwXCIsIFwibmF2LXVwLWxlZnRcIiwgXCJuYXYtdXAtcmlnaHRcIiwgXCJudW1PY3RhdmVzXCIsXG4gICAgICAgIFwib2JzZXJ2ZXJcIiwgXCJvZmZzZXRcIiwgXCJvcGFjaXR5XCIsIFwib3BlcmF0b3JcIiwgXCJvcmRlclwiLCBcIm9yaWVudFwiLCBcIm9yaWVudGF0aW9uXCIsIFwib3JpZ2luXCIsIFwib3ZlcmZsb3dcIiwgXCJvdmVybGF5XCIsIFwib3ZlcmxpbmUtcG9zaXRpb25cIiwgXCJvdmVybGluZS10aGlja25lc3NcIixcbiAgICAgICAgXCJwYW5vc2UtMVwiLCBcInBhdGhcIiwgXCJwYXRoTGVuZ3RoXCIsIFwicGF0dGVybkNvbnRlbnRVbml0c1wiLCBcInBhdHRlcm5UcmFuc2Zvcm1cIiwgXCJwYXR0ZXJuVW5pdHNcIiwgXCJwaGFzZVwiLCBcInBpdGNoXCIsIFwicGxheWJhY2tPcmRlclwiLCBcInBsYXliYWNrb3JkZXJcIiwgXCJwb2ludGVyLWV2ZW50c1wiLCBcInBvaW50c1wiLCBcInBvaW50c0F0WFwiLCBcInBvaW50c0F0WVwiLCBcInBvaW50c0F0WlwiLCBcInByZXNlcnZlQWxwaGFcIiwgXCJwcmVzZXJ2ZUFzcGVjdFJhdGlvXCIsIFwicHJpbWl0aXZlVW5pdHNcIiwgXCJwcm9wYWdhdGVcIixcbiAgICAgICAgXCJyXCIsIFwicmFkaXVzXCIsIFwicmVmWFwiLCBcInJlZllcIiwgXCJyZW5kZXJpbmctaW50ZW50XCIsIFwicmVwZWF0Q291bnRcIiwgXCJyZXBlYXREdXJcIiwgXCJyZXF1aXJlZEV4dGVuc2lvbnNcIiwgXCJyZXF1aXJlZEZlYXR1cmVzXCIsIFwicmVxdWlyZWRGb250c1wiLCBcInJlcXVpcmVkRm9ybWF0c1wiLCBcInJlc3RhcnRcIiwgXCJyZXN1bHRcIiwgXCJyb3RhdGVcIiwgXCJyeFwiLCBcInJ5XCIsXG4gICAgICAgIFwic2NhbGVcIiwgXCJzZWVkXCIsIFwic2hhcGUtcmVuZGVyaW5nXCIsIFwic2lkZVwiLCBcInNsb3BlXCIsIFwic25hcHNob3RUaW1lXCIsIFwic3BhY2luZ1wiLCBcInNwZWN1bGFyQ29uc3RhbnRcIiwgXCJzcGVjdWxhckV4cG9uZW50XCIsIFwic3ByZWFkTWV0aG9kXCIsIFwic3JjXCIsIFwic3RhcnRPZmZzZXRcIiwgXCJzdGREZXZpYXRpb25cIiwgXCJzdGVtaFwiLCBcInN0ZW12XCIsIFwic3RpdGNoVGlsZXNcIiwgXCJzdG9wLWNvbG9yXCIsIFwic3RvcC1vcGFjaXR5XCIsIFwic3RyaWtldGhyb3VnaC1wb3NpdGlvblwiLCBcInN0cmlrZXRocm91Z2gtdGhpY2tuZXNzXCIsIFwic3RyaW5nXCIsIFwic3Ryb2tlXCIsIFwic3Ryb2tlLWRhc2hhcnJheVwiLCBcInN0cm9rZS1kYXNob2Zmc2V0XCIsIFwic3Ryb2tlLWxpbmVjYXBcIiwgXCJzdHJva2UtbGluZWpvaW5cIiwgXCJzdHJva2UtbWl0ZXJsaW1pdFwiLCBcInN0cm9rZS1vcGFjaXR5XCIsIFwic3Ryb2tlLXdpZHRoXCIsIFwic3R5bGVcIiwgXCJzdXJmYWNlU2NhbGVcIiwgXCJzeW5jQmVoYXZpb3JcIiwgXCJzeW5jQmVoYXZpb3JEZWZhdWx0XCIsIFwic3luY01hc3RlclwiLCBcInN5bmNUb2xlcmFuY2VcIiwgXCJzeW5jVG9sZXJhbmNlRGVmYXVsdFwiLCBcInN5c3RlbUxhbmd1YWdlXCIsXG4gICAgICAgIFwidGFibGVWYWx1ZXNcIiwgXCJ0YXJnZXRcIiwgXCJ0YXJnZXRYXCIsIFwidGFyZ2V0WVwiLCBcInRleHQtYW5jaG9yXCIsIFwidGV4dC1kZWNvcmF0aW9uXCIsIFwidGV4dC1yZW5kZXJpbmdcIiwgXCJ0ZXh0TGVuZ3RoXCIsIFwidGltZWxpbmVCZWdpblwiLCBcInRpbWVsaW5lYmVnaW5cIiwgXCJ0aXRsZVwiLCBcInRvXCIsIFwidHJhbnNmb3JtXCIsIFwidHJhbnNmb3JtQmVoYXZpb3JcIiwgXCJ0eXBlXCIsXG4gICAgICAgIFwidTFcIiwgXCJ1MlwiLCBcInVuZGVybGluZS1wb3NpdGlvblwiLCBcInVuZGVybGluZS10aGlja25lc3NcIiwgXCJ1bmljb2RlXCIsIFwidW5pY29kZS1iaWRpXCIsIFwidW5pY29kZS1yYW5nZVwiLCBcInVuaXRzLXBlci1lbVwiLFxuICAgICAgICBcInYtYWxwaGFiZXRpY1wiLCBcInYtaGFuZ2luZ1wiLCBcInYtaWRlb2dyYXBoaWNcIiwgXCJ2LW1hdGhlbWF0aWNhbFwiLCBcInZhbHVlc1wiLCBcInZlcnNpb25cIiwgXCJ2ZXJ0LWFkdi15XCIsIFwidmVydC1vcmlnaW4teFwiLCBcInZlcnQtb3JpZ2luLXlcIiwgXCJ2aWV3Qm94XCIsIFwidmlld1RhcmdldFwiLCBcInZpc2liaWxpdHlcIixcbiAgICAgICAgXCJ3aWR0aFwiLCBcIndpZHRoc1wiLCBcIndvcmQtc3BhY2luZ1wiLCBcIndyaXRpbmctbW9kZVwiLFxuICAgICAgICBcInhcIiwgXCJ4LWhlaWdodFwiLCBcIngxXCIsIFwieDJcIiwgXCJ4Q2hhbm5lbFNlbGVjdG9yXCIsXG4gICAgICAgIFwieVwiLCBcInkxXCIsIFwieTJcIiwgXCJ5Q2hhbm5lbFNlbGVjdG9yXCIsXG4gICAgICAgIFwielwiLCBcInpvb21BbmRQYW5cIlxuICAgICAgXSxcbiAgICAgIGh0bWxBdHRyaWJ1dGVOYW1lcyA9IFtcbiAgICAgICAgXCJhY2NlcHRcIiwgXCJhY2NlcHRDaGFyc2V0XCIsIFwiYWNjZXNzS2V5XCIsIFwiYWN0aW9uXCIsIFwiYWxsb3dcIiwgXCJhbGxvd0Z1bGxTY3JlZW5cIiwgXCJhbGxvd1RyYW5zcGFyZW5jeVwiLCBcImFsdFwiLCBcImFzeW5jXCIsIFwiYXV0b0NvbXBsZXRlXCIsIFwiYXV0b0ZvY3VzXCIsIFwiYXV0b1BsYXlcIixcbiAgICAgICAgXCJjYXB0dXJlXCIsIFwiY2VsbFBhZGRpbmdcIiwgXCJjZWxsU3BhY2luZ1wiLCBcImNoYWxsZW5nZVwiLCBcImNoYXJTZXRcIiwgXCJjaGVja2VkXCIsIFwiY2l0ZVwiLCBcImNsYXNzSURcIiwgXCJjbGFzc05hbWVcIiwgXCJjb2xTcGFuXCIsIFwiY29sc1wiLCBcImNvbnRlbnRcIiwgXCJjb250ZW50RWRpdGFibGVcIiwgXCJjb250ZXh0TWVudVwiLCBcImNvbnRyb2xzXCIsIFwiY29vcmRzXCIsIFwiY3Jvc3NPcmlnaW5cIixcbiAgICAgICAgXCJkYXRhXCIsIFwiZGF0ZVRpbWVcIiwgXCJkZWZhdWx0XCIsIFwiZGVmZXJcIiwgXCJkaXJcIiwgXCJkaXNhYmxlZFwiLCBcImRvd25sb2FkXCIsIFwiZHJhZ2dhYmxlXCIsXG4gICAgICAgIFwiZW5jVHlwZVwiLFxuICAgICAgICBcImZvcm1cIiwgXCJmb3JtQWN0aW9uXCIsIFwiZm9ybUVuY1R5cGVcIiwgXCJmb3JtTWV0aG9kXCIsIFwiZm9ybU5vVmFsaWRhdGVcIiwgXCJmb3JtVGFyZ2V0XCIsIFwiZnJhbWVCb3JkZXJcIixcbiAgICAgICAgXCJoZWFkZXJzXCIsIFwiaGVpZ2h0XCIsIFwiaGlkZGVuXCIsIFwiaGlnaFwiLCBcImhyZWZcIiwgXCJocmVmTGFuZ1wiLCBcImh0bWxGb3JcIiwgXCJodHRwRXF1aXZcIixcbiAgICAgICAgXCJpY29uXCIsIFwiaWRcIiwgXCJpbnB1dE1vZGVcIiwgXCJpbnRlZ3JpdHlcIiwgXCJpc1wiLFxuICAgICAgICBcImtleVBhcmFtc1wiLCBcImtleVR5cGVcIiwgXCJraW5kXCIsXG4gICAgICAgIFwibGFiZWxcIiwgXCJsYW5nXCIsIFwibGlzdFwiLCBcImxvb3BcIiwgXCJsb3dcIixcbiAgICAgICAgXCJtYW5pZmVzdFwiLCBcIm1hcmdpbkhlaWdodFwiLCBcIm1hcmdpbldpZHRoXCIsIFwibWF4XCIsIFwibWF4TGVuZ3RoXCIsIFwibWVkaWFcIiwgXCJtZWRpYUdyb3VwXCIsIFwibWV0aG9kXCIsIFwibWluXCIsIFwibWluTGVuZ3RoXCIsIFwibXVsdGlwbGVcIiwgXCJtdXRlZFwiLFxuICAgICAgICBcIm5hbWVcIiwgXCJub1ZhbGlkYXRlXCIsIFwibm9uY2VcIixcbiAgICAgICAgXCJvcGVuXCIsIFwib3B0aW11bVwiLFxuICAgICAgICBcInBhdHRlcm5cIiwgXCJwbGFjZWhvbGRlclwiLCBcInBvc3RlclwiLCBcInByZWxvYWRcIiwgXCJwcm9maWxlXCIsXG4gICAgICAgIFwicmFkaW9Hcm91cFwiLCBcInJlYWRPbmx5XCIsIFwicmVsXCIsIFwicmVxdWlyZWRcIiwgXCJyZXZlcnNlZFwiLCBcInJvbGVcIiwgXCJyb3dTcGFuXCIsIFwicm93c1wiLFxuICAgICAgICBcInNhbmRib3hcIiwgXCJzY29wZVwiLCBcInNjb3BlZFwiLCBcInNjcm9sbGluZ1wiLCBcInNlYW1sZXNzXCIsIFwic2VsZWN0ZWRcIiwgXCJzaGFwZVwiLCBcInNpemVcIiwgXCJzaXplc1wiLCBcInNwYW5cIiwgXCJzcGVsbENoZWNrXCIsIFwic3JjXCIsIFwic3JjRG9jXCIsIFwic3JjTGFuZ1wiLCBcInNyY1NldFwiLCBcInN0YXJ0XCIsIFwic3RlcFwiLCBcInN0eWxlXCIsIFwic3VtbWFyeVwiLFxuICAgICAgICBcInRhYkluZGV4XCIsIFwidGFyZ2V0XCIsIFwidGl0bGVcIiwgXCJ0eXBlXCIsXG4gICAgICAgIFwidXNlTWFwXCIsXG4gICAgICAgIFwidmFsdWVcIixcbiAgICAgICAgXCJ3aWR0aFwiLFxuICAgICAgICBcIndtb2RlXCIsXG4gICAgICAgIFwid3JhcFwiXG4gICAgICBdO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuXG5pbXBvcnQgeyBpc1NWR0F0dHJpYnV0ZU5hbWUgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbGl0aWVzL25hbWVcIjtcbmltcG9ydCB7IEhUVFBfV1dXX1czX09SR18yMDAwX1NWRyB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU1ZHRWxlbWVudCBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcih0YWdOYW1lLCBwcm9wcykge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoSFRUUF9XV1dfVzNfT1JHXzIwMDBfU1ZHLCB0YWdOYW1lKTtcblxuICAgIHN1cGVyKHByb3BzLCBkb21FbGVtZW50KTtcbiAgfVxuXG4gIGlzQXR0cmlidXRlTmFtZShuYW1lKSB7XG4gICAgcmV0dXJuIGlzU1ZHQXR0cmlidXRlTmFtZShuYW1lKTtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuXG5pbXBvcnQgeyBpc0hUTUxBdHRyaWJ1dGVOYW1lIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxpdGllcy9uYW1lXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhUTUxFbGVtZW50IGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHRhZ05hbWUsIHByb3BzKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG5cbiAgICBzdXBlcihwcm9wcywgZG9tRWxlbWVudCk7XG4gIH1cblxuICBpc0F0dHJpYnV0ZU5hbWUobmFtZSkge1xuICAgIHJldHVybiBpc0hUTUxBdHRyaWJ1dGVOYW1lKG5hbWUpO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZWFjdEVsZW1lbnQgZnJvbSBcIi4uL3JlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlYWN0Q2xhc3NFbGVtZW50IGV4dGVuZHMgUmVhY3RFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocmVhY3RDbGFzcywgcHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnJlYWN0Q2xhc3MgPSByZWFjdENsYXNzO1xuXG4gICAgY29uc3QgaW5pdGlhbFN0YXRlID0gdGhpcy5nZXRJbml0aWFsU3RhdGUoKTtcblxuICAgIHRoaXMuc2V0SW5pdGlhbFN0YXRlKGluaXRpYWxTdGF0ZSk7XG4gIH1cblxuICByZW5kZXIodXBkYXRlKSB7XG4gICAgcmV0dXJuIHRoaXMucmVhY3RDbGFzcy5yZW5kZXIuY2FsbCh0aGlzLCB1cGRhdGUsIHRoaXMpO1xuICB9XG5cbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB0aGlzLnJlYWN0Q2xhc3MuZ2V0SW5pdGlhbFN0YXRlLmNhbGwodGhpcyk7XG4gIH1cblxuICBnZXRDaGlsZENvbnRleHQoY29udGV4dCkge1xuICAgIHJldHVybiB0aGlzLnJlYWN0Q2xhc3MuZ2V0Q2hpbGRDb250ZXh0LmNhbGwodGhpcywgY29udGV4dCk7XG4gIH1cblxuICBjaGlsZENvbnRleHRTZXQoY2hpbGRDb250ZXh0KSB7XG4gICAgdGhpcy5yZWFjdENsYXNzLmNoaWxkQ29udGV4dFNldC5jYWxsKHRoaXMsIGNoaWxkQ29udGV4dCk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnJlYWN0Q2xhc3MuY29tcG9uZW50RGlkTW91bnQuY2FsbCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMucmVhY3RDbGFzcy5jb21wb25lbnRXaWxsVW5tb3VudC5jYWxsKHRoaXMpO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZWFjdEVsZW1lbnQgZnJvbSBcIi4uL3JlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlYWN0RnVuY3Rpb25FbGVtZW50IGV4dGVuZHMgUmVhY3RFbGVtZW50IHtcbiAgY29uc3RydWN0b3IocmVhY3RGdW5jdGlvbiwgcHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnJlYWN0RnVuY3Rpb24gPSByZWFjdEZ1bmN0aW9uO1xuICB9XG4gXG4gIHJlbmRlcih1cGRhdGUpIHtcbiAgICByZXR1cm4gdGhpcy5yZWFjdEZ1bmN0aW9uKHRoaXMucHJvcHMsIHRoaXMuY29udGV4dCwgdXBkYXRlLCB0aGlzKTtcbiAgfVxuXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICAvLy9cbiAgfVxuXG4gIGdldENoaWxkQ29udGV4dChjb250ZXh0KSB7XG4gICAgcmV0dXJuIGNvbnRleHQ7XG4gIH1cblxuICBjaGlsZENvbnRleHRTZXQoY2hpbGRDb250ZXh0KSB7XG4gICAgLy8vXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLy9cbiAgfVxuIFxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAvLy9cbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQ29udGFpbmVyRWxlbWVudCBmcm9tIFwiLi4vY29udGFpbmVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRFbGVtZW50IGV4dGVuZHMgQ29udGFpbmVyRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHRleHQpIHtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dCksXG4gICAgICAgICAgY2hpbGRyZW4gPSBbXSxcbiAgICAgICAgICBwcm9wcyA9IHtcbiAgICAgICAgICAgIGNoaWxkcmVuXG4gICAgICAgICAgfTtcblxuICAgIHN1cGVyKHByb3BzLCBkb21FbGVtZW50KTtcbiAgfVxuXG4gIG1vdW50KHBhcmVudCwgcmVmZXJlbmNlLCBjb250ZXh0KSB7XG4gICAgc3VwZXIubW91bnQocGFyZW50LCByZWZlcmVuY2UpO1xuICB9XG4gIFxuICB1bm1vdW50KGNvbnRleHQpIHtcbiAgICBzdXBlci51bm1vdW50KCk7XG4gIH1cblxuICBnZXRUZXh0KCkge1xuICAgIGNvbnN0IG5vZGVWYWx1ZSA9IHRoaXMuZG9tRWxlbWVudC5ub2RlVmFsdWUsXG4gICAgICAgICAgdGV4dCA9IG5vZGVWYWx1ZTsgLy8vXG5cbiAgICByZXR1cm4gdGV4dDtcbiAgfVxuXG4gIHNldFRleHQodGV4dCkge1xuICAgIGNvbnN0IG5vZGVWYWx1ZSA9IHRleHQ7IC8vL1xuXG4gICAgdGhpcy5kb21FbGVtZW50Lm5vZGVWYWx1ZSA9IG5vZGVWYWx1ZTtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVGV4dEVsZW1lbnQgZnJvbSBcIi4uL3ZpcnR1YWxET00vY29udGFpbmVyL3RleHRFbGVtZW50XCI7XG5cbmltcG9ydCB7IFNUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUZhbHNleUNoaWxkcmVuKGNoaWxkcmVuKSB7XG4gIGNoaWxkcmVuID0gY2hpbGRyZW4ucmVkdWNlKChjaGlsZHJlbiwgY2hpbGQpID0+IHtcbiAgICBpZiAoY2hpbGQpIHtcbiAgICAgIGNoaWxkcmVuLnB1c2goY2hpbGQpO1xuICAgIH1cblxuICAgIHJldHVybiBjaGlsZHJlbjtcbiAgfSwgW10pO1xuXG4gIHJldHVybiBjaGlsZHJlbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VTdHJpbmdzV2l0aFRleHRDaGlsZHJlbihjaGlsZHJlbikge1xuICBjaGlsZHJlbiA9IGNoaWxkcmVuLm1hcCgoY2hpbGQpID0+IHsgIC8vL1xuICAgIGlmICh0eXBlb2YgY2hpbGQgPT09IFNUUklORykge1xuICAgICAgY29uc3QgdGV4dCA9IGNoaWxkLCAgLy8vXG4gICAgICAgICAgICB0ZXh0RWxlbWVudCA9IG5ldyBUZXh0RWxlbWVudCh0ZXh0KTtcblxuICAgICAgY2hpbGQgPSB0ZXh0RWxlbWVudDsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIGNoaWxkO1xuICB9KTtcblxuICByZXR1cm4gY2hpbGRyZW47XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSZWFjdENsYXNzIGZyb20gXCIuL3JlYWN0Q2xhc3NcIjtcbmltcG9ydCBSZWFjdENvbXBvbmVudCBmcm9tIFwiLi9yZWFjdENvbXBvbmVudFwiO1xuXG5pbXBvcnQgU1ZHRWxlbWVudCBmcm9tIFwiLi92aXJ0dWFsRE9NL2NvbnRhaW5lci9lbGVtZW50L3N2Z1wiO1xuaW1wb3J0IEhUTUxFbGVtZW50IGZyb20gXCIuL3ZpcnR1YWxET00vY29udGFpbmVyL2VsZW1lbnQvaHRtbFwiO1xuaW1wb3J0IFJlYWN0Q2xhc3NFbGVtZW50IGZyb20gXCIuL3ZpcnR1YWxET00vcmVhY3QvY2xhc3NcIjtcbmltcG9ydCBSZWFjdEZ1bmN0aW9uRWxlbWVudCBmcm9tIFwiLi92aXJ0dWFsRE9NL3JlYWN0L2Z1bmN0aW9uXCI7XG5cbmltcG9ydCB7IGZsYXR0ZW4gfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IGlzU1ZHVGFnTmFtZSB9IGZyb20gXCIuL3V0aWxpdGllcy9uYW1lXCI7XG5pbXBvcnQgeyBTVFJJTkcsIEZVTkNUSU9OIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyByZW1vdmVGYWxzZXlDaGlsZHJlbiwgcmVwbGFjZVN0cmluZ3NXaXRoVGV4dENoaWxkcmVuIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3Nhbml0aWlzZVwiO1xuXG5mdW5jdGlvbiBjcmVhdGVDbGFzcyhvYmplY3QpIHtcbiAgcmV0dXJuIFJlYWN0Q2xhc3MuY3JlYXRlKG9iamVjdCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoZmlyc3RBcmd1bWVudCwgcHJvcGVydGllcywgLi4uY2hpbGRyZW4pIHtcbiAgbGV0IGVsZW1lbnQgPSBudWxsO1xuXG4gIGlmIChmaXJzdEFyZ3VtZW50KSB7XG4gICAgY2hpbGRyZW4gPSBzYW5pdGlzZUNoaWxkcmVuKGNoaWxkcmVuKTtcblxuICAgIGNvbnN0IHByb3BzID0gT2JqZWN0LmFzc2lnbih7fSwgcHJvcGVydGllcywge1xuICAgICAgY2hpbGRyZW5cbiAgICB9KTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RBcmd1bWVudCA9PT0gU1RSSU5HKSB7XG4gICAgICBjb25zdCB0YWdOYW1lID0gZmlyc3RBcmd1bWVudDsgIC8vL1xuXG4gICAgICBlbGVtZW50ID0gaXNTVkdUYWdOYW1lKHRhZ05hbWUpID9cbiAgICAgICAgICAgICAgICAgIG5ldyBTVkdFbGVtZW50KHRhZ05hbWUsIHByb3BzKSA6XG4gICAgICAgICAgICAgICAgICAgIG5ldyBIVE1MRWxlbWVudCh0YWdOYW1lLCBwcm9wcyk7XG4gICAgfSBlbHNlIGlmIChmaXJzdEFyZ3VtZW50IGluc3RhbmNlb2YgUmVhY3RDbGFzcykge1xuICAgICAgY29uc3QgcmVhY3RDbGFzcyA9IGZpcnN0QXJndW1lbnQsIC8vL1xuICAgICAgICAgICAgcmVhY3RDbGFzc0VsZW1lbnQgPSBuZXcgUmVhY3RDbGFzc0VsZW1lbnQocmVhY3RDbGFzcywgcHJvcHMpO1xuXG4gICAgICBlbGVtZW50ID0gcmVhY3RDbGFzc0VsZW1lbnQ7ICAvLy9cblxuICAgICAgY29uc3QgeyBtaXhpbnMgfSA9IHJlYWN0Q2xhc3M7XG5cbiAgICAgIGFzc2lnbk1peGlucyhtaXhpbnMsIGVsZW1lbnQpO1xuICAgIH0gZWxzZSBpZiAoaXNTdWJjbGFzc09mKGZpcnN0QXJndW1lbnQsIFJlYWN0Q29tcG9uZW50KSkge1xuICAgICAgY29uc3QgUmVhY3RDb21wb25lbnRTdWJDbGFzcyA9IGZpcnN0QXJndW1lbnQsICAvLy9cbiAgICAgICAgICAgIHJlYWN0Q29tcG9uZW50ID0gbmV3IFJlYWN0Q29tcG9uZW50U3ViQ2xhc3MocHJvcHMpO1xuXG4gICAgICBlbGVtZW50ID0gcmVhY3RDb21wb25lbnQ7IC8vL1xuXG4gICAgICBhc3NpZ25SZWFjdENvbXBvbmVudE1peGlucyhSZWFjdENvbXBvbmVudFN1YkNsYXNzLCBlbGVtZW50KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdEFyZ3VtZW50ID09PSBGVU5DVElPTikge1xuICAgICAgY29uc3QgcmVhY3RGdW5jdGlvbiA9IGZpcnN0QXJndW1lbnQsICAvLy9cbiAgICAgICAgICAgIHJlYWN0RnVuY3Rpb25FbGVtZW50ID0gbmV3IFJlYWN0RnVuY3Rpb25FbGVtZW50KHJlYWN0RnVuY3Rpb24sIHByb3BzKTtcblxuICAgICAgZWxlbWVudCA9IHJlYWN0RnVuY3Rpb25FbGVtZW50OyAvLy9cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuY29uc3QgQ29tcG9uZW50ID0gUmVhY3RDb21wb25lbnQsIC8vL1xuICAgICAgUmVhY3QgPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgY3JlYXRlQ2xhc3MsXG4gICAgICAgIGNyZWF0ZUVsZW1lbnRcbiAgICAgIH07XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0O1xuXG5mdW5jdGlvbiBzYW5pdGlzZUNoaWxkcmVuKGNoaWxkcmVuKSB7XG4gIGNoaWxkcmVuID0gZmxhdHRlbihjaGlsZHJlbik7XG5cbiAgY2hpbGRyZW4gPSByZW1vdmVGYWxzZXlDaGlsZHJlbihjaGlsZHJlbik7XG5cbiAgY2hpbGRyZW4gPSByZXBsYWNlU3RyaW5nc1dpdGhUZXh0Q2hpbGRyZW4oY2hpbGRyZW4pO1xuXG4gIHJldHVybiBjaGlsZHJlbjtcbn1cblxuZnVuY3Rpb24gYXNzaWduUmVhY3RDb21wb25lbnRNaXhpbnMoUmVhY3RDb21wb25lbnRTdWJDbGFzcywgZWxlbWVudCkge1xuICBjb25zdCB7IG1peGlucyB9ID0gUmVhY3RDb21wb25lbnRTdWJDbGFzcztcblxuICBjb25zdCBSZWFjdENvbXBvbmVudFN1YkNsYXNzUHJvdG90eXBlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKFJlYWN0Q29tcG9uZW50U3ViQ2xhc3MpOyAvLy9cblxuICBpZiAoUmVhY3RDb21wb25lbnRTdWJDbGFzc1Byb3RvdHlwZSAhPT0gUmVhY3RDb21wb25lbnQpIHtcbiAgICBSZWFjdENvbXBvbmVudFN1YkNsYXNzID0gUmVhY3RDb21wb25lbnRTdWJDbGFzc1Byb3RvdHlwZTsgLy8vXG5cbiAgICBhc3NpZ25SZWFjdENvbXBvbmVudE1peGlucyhSZWFjdENvbXBvbmVudFN1YkNsYXNzLCBlbGVtZW50KTtcbiAgfVxuXG4gIGFzc2lnbk1peGlucyhtaXhpbnMsIGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBhc3NpZ25NaXhpbnMobWl4aW5zLCBlbGVtZW50KSB7XG4gIGlmIChtaXhpbnMpIHtcbiAgICBtaXhpbnMuZm9yRWFjaCgobWl4aW4pID0+IHtcbiAgICAgIGNvbnN0IHsgbmFtZSB9ID0gbWl4aW47XG5cbiAgICAgIGVsZW1lbnRbbmFtZV0gPSBtaXhpbi5iaW5kKGVsZW1lbnQpO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzU3ViY2xhc3NPZihhcmd1bWVudCwgQ2xhc3MpIHtcbiAgY29uc3Qgc3ViY2xhc3NPZiA9IChhcmd1bWVudC5wcm90b3R5cGUgaW5zdGFuY2VvZiBDbGFzcyk7XG5cbiAgcmV0dXJuIHN1YmNsYXNzT2Y7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDb250YWluZXJFbGVtZW50IGZyb20gXCIuL3ZpcnR1YWxET00vY29udGFpbmVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlYWN0RE9NIHtcbiAgc3RhdGljIHJlbmRlcihlbGVtZW50LCBwYXJlbnRET01FbGVtZW50KSB7XG4gICAgY29uc3QgcGFyZW50ID0gQ29udGFpbmVyRWxlbWVudC5mcm9tRE9NRWxlbWVudChwYXJlbnRET01FbGVtZW50KSxcbiAgICAgICAgICByZWZlcmVuY2UgPSBudWxsLFxuICAgICAgICAgIGNvbnRleHQgPSB7fTtcblxuICAgIGVsZW1lbnQubW91bnQocGFyZW50LCByZWZlcmVuY2UsIGNvbnRleHQpO1xuICB9XG59XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIFJlYWN0IH0gZnJvbSBcIi4vcmVhY3RcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUmVhY3RET00gfSBmcm9tIFwiLi9yZWFjdERPTVwiO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBSZWFjdCB9IGZyb20gXCJyZWFjdGlvblwiO1xuXG5PYmplY3QuYXNzaWduKHdpbmRvdywge1xuICBSZWFjdFxufSk7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmxldCBsaXN0ZW5lcnMgPSBbXTtcblxuY29uc3QgZWxlbWVudFRvU3RhdGVXZWFrTWFwID0gbmV3IFdlYWtNYXAoKTtcblxuZnVuY3Rpb24gZW1pdEVmZmVjdChlZmZlY3QsIGFjdGlvbikgIHtcbiAgY29uc3QgdXBkYXRlID0ge1xuICAgIFtlZmZlY3RdOiBhY3Rpb25cbiAgfTtcblxuICBsaXN0ZW5lcnMuZm9yRWFjaCgobGlzdGVuZXIpID0+IHtcbiAgICBjb25zdCB7IGVmZmVjdHMgfSA9IGxpc3RlbmVyLFxuICAgICAgICAgIGVmZmVjdHNJbmNsdWRlc0VmZmVjdCA9IGVmZmVjdHMuaW5jbHVkZXMoZWZmZWN0KTtcblxuICAgIGlmIChlZmZlY3RzSW5jbHVkZXNFZmZlY3QpIHtcbiAgICAgIGxpc3RlbmVyKHVwZGF0ZSk7XG4gICAgfVxuICB9KTtcbn1cblxuT2JqZWN0LmFzc2lnbih1c2VFZmZlY3RzLCB7XG4gIGVtaXRFZmZlY3Rcbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlU3RhdGUoZWxlbWVudCwgaW5pdGlhbFN0YXRlKSB7XG4gIGxldCBzdGF0ZTtcblxuICBpZiAoZWxlbWVudFRvU3RhdGVXZWFrTWFwLmhhcyhlbGVtZW50KSkge1xuICAgIHN0YXRlID0gZWxlbWVudFRvU3RhdGVXZWFrTWFwLmdldChlbGVtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBzdGF0ZSA9IGluaXRpYWxTdGF0ZTsgLy8vXG5cbiAgICBlbGVtZW50VG9TdGF0ZVdlYWtNYXAuc2V0KGVsZW1lbnQsIHN0YXRlKTtcbiAgfVxuXG4gIHJldHVybiAoWyBzdGF0ZSwgKHVwZGF0ZWRTdGF0ZSkgPT4ge1xuICAgIHN0YXRlID0gdXBkYXRlZFN0YXRlOyAgLy8vXG5cbiAgICBlbGVtZW50VG9TdGF0ZVdlYWtNYXAuc2V0KGVsZW1lbnQsIHN0YXRlKTtcblxuICAgIGNvbnN0IHVwZGF0ZSA9IG51bGw7XG5cbiAgICBlbGVtZW50LnJlZHJhdyh1cGRhdGUpO1xuICB9XSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VDb250ZXh0KGVsZW1lbnQsIGNvbnRleHQsIG1hcE9yTmFtZXMpIHtcbiAgaWYgKG1hcE9yTmFtZXMgPT09IHVuZGVmaW5lZCkge1xuICAgIG1hcE9yTmFtZXMgPSBPYmplY3Qua2V5cyhjb250ZXh0KTsgIC8vL1xuICB9XG5cbiAgaWYgKG1hcE9yTmFtZXMgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgIGNvbnN0IG5hbWVzID0gbWFwT3JOYW1lczsgLy8vXG5cbiAgICBuYW1lcy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICBlbGVtZW50W25hbWVdID0gY29udGV4dFtuYW1lXTtcblxuICAgICAgZGVsZXRlIGNvbnRleHRbbmFtZV07XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgbWFwID0gbWFwT3JOYW1lczsgLy8vXG5cbiAgICBPYmplY3QuYXNzaWduKGNvbnRleHQsIG1hcCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUVmZmVjdHMobGlzdGVuZXIsIC4uLmVmZmVjdHMpIHtcbiAgT2JqZWN0LmFzc2lnbihsaXN0ZW5lciwge1xuICAgIGVmZmVjdHNcbiAgfSk7XG5cbiAgbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuXG4gIHJldHVybiAoZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZGlzY2FyZGVkTGlzdGVuZXIgPSBsaXN0ZW5lcjsgLy8vXG5cbiAgICBsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMuZmlsdGVyKChsaXN0ZW5lcikgPT4ge1xuICAgICAgaWYgKGxpc3RlbmVyICE9PSBkaXNjYXJkZWRMaXN0ZW5lcikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG4iLCAiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0cyB9IGZyb20gXCIuL2hvb2tzXCI7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBOT05FID0gXCJub25lXCI7XG5leHBvcnQgY29uc3QgQkxPQ0sgPSBcImJsb2NrXCI7XG5leHBvcnQgY29uc3QgRElTUExBWSA9IFwiZGlzcGxheVwiO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCB7IENvbXBvbmVudCB9ID0gUmVhY3Q7XG5cbmltcG9ydCB7IE5PTkUsIEJMT0NLLCBESVNQTEFZIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc2hvdyhkaXNwbGF5U3R5bGUgPSBCTE9DSykge1xuICAgIHRoaXMuc2V0U3R5bGUoRElTUExBWSwgZGlzcGxheVN0eWxlKTtcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgdGhpcy5zZXRTdHlsZShESVNQTEFZLCBOT05FKTtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyB1c2VFZmZlY3RzIH0gZnJvbSBcIi4uLy4uLy4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRcIjtcblxuY29uc3QgeyBlbWl0RWZmZWN0IH0gPSB1c2VFZmZlY3RzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXR0b24gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjbGlja0hhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB7IGFydGljbGVOYW1lIH0gPSB0aGlzLmNvbnN0cnVjdG9yO1xuXG4gICAgZW1pdEVmZmVjdChcImFydGljbGVOYW1lXCIsIGFydGljbGVOYW1lKTtcbiAgfVxuXG4gIHJlbmRlcih1cGRhdGUpIHtcbiAgICBjb25zdCB7IHRleHQgfSA9IHRoaXMuY29uc3RydWN0b3I7XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuY2xpY2tIYW5kbGVyfT5cbiAgICAgICAge3RleHR9XG4gICAgICA8L2J1dHRvbj5cblxuICAgICk7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vYnV0dG9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWVCdXR0b24gZXh0ZW5kcyBCdXR0b24ge1xuICBzdGF0aWMgdGV4dCA9IFwiSG9tZVwiO1xuXG4gIHN0YXRpYyBhcnRpY2xlTmFtZSA9IFwiaG9tZVwiO1xufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyB1c2VFZmZlY3RzIH0gZnJvbSBcIi4uLy4uLy4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXJ0aWNsZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHVwZGF0ZUhhbmRsZXIgPSAodXBkYXRlKSA9PiB7XG4gICAgY29uc3QgeyBuYW1lIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIHsgYXJ0aWNsZU5hbWUgfSA9IHVwZGF0ZTtcblxuICAgIChuYW1lID09PSBhcnRpY2xlTmFtZSkgP1xuICAgICAgdGhpcy5zaG93KCkgOlxuICAgICAgICB0aGlzLmhpZGUoKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuZGlzY2FyZEVmZmVjdHMgPSB1c2VFZmZlY3RzKHRoaXMudXBkYXRlSGFuZGxlciwgXCJhcnRpY2xlTmFtZVwiKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuZGlzY2FyZEVmZmVjdHMoKTtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQXJ0aWNsZSBmcm9tIFwiLi4vYXJ0aWNsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lQXJ0aWNsZSBleHRlbmRzIEFydGljbGUge1xuICBzdGF0aWMgbmFtZSA9IFwiaG9tZVwiO1xuXG4gIHJlbmRlcih1cGRhdGUpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJob21lXCI+XG4gICAgICAgIDxoMT5cbiAgICAgICAgICBIb21lXG4gICAgICAgIDwvaDE+XG4gICAgICA8L2FydGljbGU+XG5cbiAgICApO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBBcnRpY2xlIGZyb20gXCIuLi9hcnRpY2xlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNldHRpbmdzQXJ0aWNsZSBleHRlbmRzIEFydGljbGUge1xuICBzdGF0aWMgbmFtZSA9IFwic2V0dGluZ3NcIjtcblxuICByZW5kZXIodXBkYXRlKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwic2V0dGluZ3NcIiA+XG4gICAgICAgIDxoMT5cbiAgICAgICAgICBTZXR0aW5nc1xuICAgICAgICA8L2gxPlxuICAgICAgPC9hcnRpY2xlPlxuXG4gICAgKTtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgSG9tZUFydGljbGUgZnJvbSBcIi4uL2FydGljbGUvaG9tZVwiO1xuaW1wb3J0IFNldHRpbmdzQXJ0aWNsZSBmcm9tIFwiLi4vYXJ0aWNsZS9zZXR0aW5nc1wiO1xuXG5jb25zdCBBcnRpY2xlc1NlY3Rpb24gPSAocHJvcHMpID0+XG5cbiAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYXJ0aWNsZXNcIj5cbiAgICA8SG9tZUFydGljbGUvPlxuICAgIDxTZXR0aW5nc0FydGljbGUvPlxuICA8L3NlY3Rpb24+XG5cbjtcblxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZXNTZWN0aW9uO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9idXR0b25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2V0dGluZ3NCdXR0b24gZXh0ZW5kcyBCdXR0b24ge1xuICBzdGF0aWMgdGV4dCA9IFwiU2V0dGluZ3NcIjtcblxuICBzdGF0aWMgYXJ0aWNsZU5hbWUgPSBcInNldHRpbmdzXCI7XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBIb21lQnV0dG9uIGZyb20gXCIuLi9idXR0b24vaG9tZVwiO1xuaW1wb3J0IFNldHRpbmdzQnV0dG9uIGZyb20gXCIuLi9idXR0b24vc2V0dGluZ3NcIjtcblxuY29uc3QgUHJpbWFyeU5hdmlnYXRpb24gPSAocHJvcHMpID0+XG5cbiAgPG5hdiBjbGFzc05hbWU9XCJwcmltYXJ5XCI+XG4gICAgPEhvbWVCdXR0b24vPlxuICAgIDxTZXR0aW5nc0J1dHRvbi8+XG4gIDwvbmF2PlxuXG47XG5cbmV4cG9ydCBkZWZhdWx0IFByaW1hcnlOYXZpZ2F0aW9uO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyB1c2VFZmZlY3RzIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2luZGV4XCI7ICAvLy9cblxuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi4vY29tcG9uZW50XCI7XG5pbXBvcnQgSG9tZUJ1dHRvbiBmcm9tIFwiLi4vYnV0dG9uL2hvbWVcIjtcbmltcG9ydCBBcnRpY2xlc1NlY3Rpb24gZnJvbSBcIi4uL3NlY3Rpb24vYXJ0aWNsZXNcIjtcbmltcG9ydCBQcmltYXJ5TmF2aWdhdGlvbiBmcm9tIFwiLi4vbmF2aWdhdGlvbi9wcmltYXJ5XCI7XG5cbmNvbnN0IHsgZW1pdEVmZmVjdCB9ID0gdXNlRWZmZWN0cztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpblNlY3Rpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGFydGljbGVOYW1lIH0gPSBIb21lQnV0dG9uO1xuXG4gICAgZW1pdEVmZmVjdChcImFydGljbGVOYW1lXCIsIGFydGljbGVOYW1lKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIC8vL1xuICB9XG5cbiAgcmVuZGVyKHVwZGF0ZSkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgICAgPFByaW1hcnlOYXZpZ2F0aW9uLz5cbiAgICAgICAgPEFydGljbGVzU2VjdGlvbi8+XG4gICAgICA8L3NlY3Rpb24+XG5cbiAgICApO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBjb25zdCBOT05FID0gXCJub25lXCI7XG5leHBvcnQgY29uc3QgQkxPQ0sgPSBcImJsb2NrXCI7XG5leHBvcnQgY29uc3QgRElTUExBWSA9IFwiZGlzcGxheVwiO1xuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCB7IENvbXBvbmVudCB9ID0gUmVhY3Q7XG5cbmltcG9ydCB7IE5PTkUsIEJMT0NLLCBESVNQTEFZIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc2hvdyhkaXNwbGF5U3R5bGUgPSBCTE9DSykge1xuICAgIHRoaXMuc2V0U3R5bGUoRElTUExBWSwgZGlzcGxheVN0eWxlKTtcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgdGhpcy5zZXRTdHlsZShESVNQTEFZLCBOT05FKTtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL2luZGV4XCI7ICAvLy9cblxuY29uc3QgeyBDb21wb25lbnQgfSA9IFJlYWN0O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbG9zZUxpbmtCdXR0b24gZXh0ZW5kcyBDb21wb25lbnQge1xuICBnZXRDaGlsZENvbnRleHQoY29udGV4dCkge1xuICAgIHVzZUNvbnRleHQodGhpcywgY29udGV4dCwgW1xuICAgICAgXCJjbG9zZUxpbmtCdXR0b25DbGlja0hhbmRsZXJcIlxuICAgIF0pO1xuICB9XG5cbiAgcmVuZGVyKHVwZGF0ZSkge1xuICAgIGNvbnN0IGNsaWNrSGFuZGxlciA9IHRoaXMuY2xvc2VMaW5rQnV0dG9uQ2xpY2tIYW5kbGVyOyAgLy8vXG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNsb3NlIGxpbmtcIiBvbkNsaWNrPXtjbGlja0hhbmRsZXJ9PlxuICAgICAgICBHb3QgaXRcbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgKTtcbiAgfVxufVxuIiwgIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQ2xvc2VMaW5rQnV0dG9uIGZyb20gXCIuLi9idXR0b24vbGluay9jbG9zZVwiO1xuXG5jb25zdCBHb3RJdFNwYW4gPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcblxuICAgIDxzcGFuIGNsYXNzTmFtZT1cImdvdC1pdFwiPlxuICAgICAgW1xuICAgICAgPENsb3NlTGlua0J1dHRvbi8+XG4gICAgICBdXG4gICAgPC9zcGFuPlxuXG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdvdEl0U3BhbjtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi4vY29tcG9uZW50XCJcbmltcG9ydCBHb3RJdFNwYW4gZnJvbSBcIi4uL3NwYW4vZ290SXRcIjtcblxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi8uLi9pbmRleFwiOyAvLy9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR290SXREaXYgZXh0ZW5kcyBDb21wb25lbnQge1xuICBnZXRDaGlsZENvbnRleHQoY29udGV4dCkge1xuICAgIGNvbnN0IHNob3dHb3RJdERpdiA9IHRoaXMuc2hvdy5iaW5kKHRoaXMpLCAgLy8vXG4gICAgICAgICAgaGlkZUdvdEl0RGl2ID0gdGhpcy5oaWRlLmJpbmQodGhpcyk7ICAvLy9cblxuICAgIHVzZUNvbnRleHQodGhpcywgY29udGV4dCwge1xuICAgICAgc2hvd0dvdEl0RGl2LFxuICAgICAgaGlkZUdvdEl0RGl2XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY29udGV4dDtcbiAgfVxuXG4gIHJlbmRlcih1cGRhdGUpIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJnb3QtaXRcIj5cbiAgICAgICAgPEdvdEl0U3Bhbi8+XG4gICAgICAgIDxwPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG5cbiAgICApO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vaW5kZXhcIjsgIC8vL1xuXG5jb25zdCB7IENvbXBvbmVudCB9ID0gUmVhY3Q7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9wZW5MaW5rQnV0dG9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgZ2V0Q2hpbGRDb250ZXh0KGNvbnRleHQpIHtcbiAgICB1c2VDb250ZXh0KHRoaXMsIGNvbnRleHQsIFtcbiAgICAgIFwib3BlbkxpbmtCdXR0b25DbGlja0hhbmRsZXJcIlxuICAgIF0pO1xuICB9XG5cbiAgcmVuZGVyKHVwZGF0ZSkge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY2xpY2tIYW5kbGVyID0gdGhpcy5vcGVuTGlua0J1dHRvbkNsaWNrSGFuZGxlcjsgIC8vL1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJvcGVuIGxpbmtcIiBvbkNsaWNrPXtjbGlja0hhbmRsZXJ9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2J1dHRvbj5cblxuICAgICk7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi4vY29tcG9uZW50XCI7XG5pbXBvcnQgT3BlbkxpbmtCdXR0b24gZnJvbSBcIi4uL2J1dHRvbi9saW5rL29wZW5cIjtcblxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi8uLi9pbmRleFwiOyAvLy9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR290SXRIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBnZXRDaGlsZENvbnRleHQoY29udGV4dCkge1xuICAgIGNvbnN0IHNob3dHb3RJdEhlYWRlciA9IHRoaXMuc2hvdy5iaW5kKHRoaXMpLCAvLy9cbiAgICAgICAgICBoaWRlR290SXRIZWFkZXIgPSB0aGlzLmhpZGUuYmluZCh0aGlzKTsgLy8vXG5cbiAgICB1c2VDb250ZXh0KHRoaXMsIGNvbnRleHQsIHtcbiAgICAgIHNob3dHb3RJdEhlYWRlcixcbiAgICAgIGhpZGVHb3RJdEhlYWRlclxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvbnRleHQ7XG4gIH1cblxuICByZW5kZXIodXBkYXRlKSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiZ290LWl0XCI+XG4gICAgICAgIFtcbiAgICAgICAgPE9wZW5MaW5rQnV0dG9uPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9PcGVuTGlua0J1dHRvbj5cbiAgICAgICAgXVxuICAgICAgPC9oZWFkZXI+XG5cbiAgICApO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBHb3RJdERpdiBmcm9tIFwiLi4vZGl2L2dvdEl0XCI7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuLi9jb21wb25lbnRcIjtcbmltcG9ydCBHb3RJdEhlYWRlciBmcm9tIFwiLi4vaGVhZGVyL2dvdEl0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdvdEl0U2VjdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNsb3NlTGlua0J1dHRvbkNsaWNrSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgIHRoaXMuY2xvc2UoKTtcbiAgfVxuXG4gIG9wZW5MaW5rQnV0dG9uQ2xpY2tIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgdGhpcy5vcGVuKCk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLmhpZGVHb3RJdERpdigpO1xuICAgIHRoaXMuc2hvd0dvdEl0SGVhZGVyKCk7XG4gIH1cblxuICBvcGVuKCkge1xuICAgIHRoaXMuc2hvd0dvdEl0RGl2KCk7XG4gICAgdGhpcy5oaWRlR290SXRIZWFkZXIoKTtcbiAgfVxuXG4gIGdldENoaWxkQ29udGV4dChjb250ZXh0KSB7XG4gICAgY29uc3Qgb3BlbkxpbmtCdXR0b25DbGlja0hhbmRsZXIgPSB0aGlzLm9wZW5MaW5rQnV0dG9uQ2xpY2tIYW5kbGVyLFxuICAgICAgICAgIGNsb3NlTGlua0J1dHRvbkNsaWNrSGFuZGxlciA9IHRoaXMuY2xvc2VMaW5rQnV0dG9uQ2xpY2tIYW5kbGVyO1xuXG4gICAgcmV0dXJuKHtcbiAgICAgIG9wZW5MaW5rQnV0dG9uQ2xpY2tIYW5kbGVyLFxuICAgICAgY2xvc2VMaW5rQnV0dG9uQ2xpY2tIYW5kbGVyXG4gICAgfSk7XG4gIH1cblxuICBjaGlsZENvbnRleHRTZXQoY2hpbGRDb250ZXh0KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjaGlsZENvbnRleHQpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5jbG9zZSgpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgLy8vXG4gIH1cblxuICByZW5kZXIodXBkYXRlKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZ290LWl0XCI+XG4gICAgICAgIDxHb3RJdEhlYWRlcj5cbiAgICAgICAgICBBbiBleGFtcGxlIG9mIGEgbW9yZSBjb21wbGV4IHZpZXcgZWxlbWVudFxuICAgICAgICA8L0dvdEl0SGVhZGVyPlxuICAgICAgICA8R290SXREaXY+XG4gICAgICAgICAgVGhpcyBpcyBhbiBleGFtcGxlIG9mIGEgbW9yZSBjb21wbGV4IHZpZXcgZWxlbWVudCwgd2hlcmUgZGVzY2VuZGFudCBlbGVtZW50cyBuZWVkIHRvIGludGVyYWN0IHdpdGggdGhlaXIgYXNjZW5kYW50IGVsZW1lbnRzIGFuZCB2aWNlLXZlcnNhLlxuICAgICAgICA8L0dvdEl0RGl2PlxuICAgICAgPC9zZWN0aW9uPlxuXG4gICAgKVxuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcIi4uLy4uLy4uL2luZGV4XCI7ICAvLy9cblxuY29uc3QgaW5pdGlhbENvdW50ID0gMDtcblxuY29uc3QgRnVuY3Rpb25Vc2VTdGF0ZVBhcmFncmFwaCA9IChwcm9wcywgY29udGV4dCwgdXBkYXRlLCBlbGVtZW50KSA9PiB7XG4gIGNvbnN0IFsgY291bnQsIHNldENvdW50IF0gPSB1c2VTdGF0ZShlbGVtZW50LCBpbml0aWFsQ291bnQpO1xuXG4gIHJldHVybiAoXG5cbiAgICA8cCBvbkNsaWNrPXsoZXZlbnQpID0+IHNldENvdW50KGNvdW50ICsgMSl9PlxuICAgICAgRnVuY3Rpb24gc3RhdGU6IHtgJHtjb3VudH1gfVxuICAgIDwvcD5cblxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRnVuY3Rpb25Vc2VTdGF0ZVBhcmFncmFwaDtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwiLi4vLi4vLi4vaW5kZXhcIjsgIC8vL1xuXG5jb25zdCB7IENvbXBvbmVudCB9ID0gUmVhY3Q7XG5cbmxldCBpbml0aWFsQ291bnQgPSAwO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wb25lbnRVc2VTdGF0ZVBhcmFncmFwaCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcih1cGRhdGUsIGVsZW1lbnQpIHtcbiAgICBjb25zdCBbIGNvdW50LCBzZXRDb3VudCBdID0gdXNlU3RhdGUoZWxlbWVudCwgaW5pdGlhbENvdW50KTtcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDxwIG9uQ2xpY2s9eyhldmVudCkgPT4gc2V0Q291bnQoY291bnQgKyAxKX0+XG4gICAgICAgIENvbXBvbmVudCBzdGF0ZToge2Ake2NvdW50fWB9XG4gICAgICA8L3A+XG5cbiAgICApO1xuICB9XG59XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcIi4uLy4uLy4uL2luZGV4XCI7ICAvLy9cblxuY29uc3QgeyBjcmVhdGVDbGFzcyB9ID0gUmVhY3Q7XG5cbmxldCBpbml0aWFsQ291bnQgPSAwO1xuXG5jb25zdCBDcmVhdGVDbGFzc1VzZVN0YXRlUGFyYWdyYXBoID0gY3JlYXRlQ2xhc3Moe1xuICByZW5kZXI6IGZ1bmN0aW9uKHVwZGF0ZSkge1xuICAgIGNvbnN0IFsgY291bnQsIHNldENvdW50IF0gPSB1c2VTdGF0ZSh0aGlzLCBpbml0aWFsQ291bnQpO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPHAgb25DbGljaz17KGV2ZW50KSA9PiBzZXRDb3VudChjb3VudCArIDEpfT5cbiAgICAgICAgY3JlYXRlQ2xhc3Mgc3RhdGU6IHtgJHtjb3VudH1gfVxuICAgICAgPC9wPlxuXG4gICAgKTtcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IENyZWF0ZUNsYXNzVXNlU3RhdGVQYXJhZ3JhcGg7XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNvbnN0IHsgQ29tcG9uZW50IH0gPSBSZWFjdDtcblxuaW1wb3J0IE1haW5TZWN0aW9uIGZyb20gXCIuL3VzZUVmZmVjdHMvc2VjdGlvbi9tYWluXCI7XG5pbXBvcnQgR290SXRTZWN0aW9uIGZyb20gXCIuL3VzZUNvbnRleHQvc2VjdGlvbi9nb3RJdFwiO1xuaW1wb3J0IEZ1bmN0aW9uVXNlU3RhdGVQYXJhZ3JhcGggZnJvbSBcIi4vdXNlU3RhdGUvZnVuY3Rpb25cIjtcbmltcG9ydCBDb21wb25lbnRVc2VTdGF0ZVBhcmFncmFwaCBmcm9tIFwiLi91c2VTdGF0ZS9jb21wb25lbnRcIjtcbmltcG9ydCBDcmVhdGVDbGFzc1VzZVN0YXRlUGFyYWdyYXBoIGZyb20gXCIuL3VzZVN0YXRlL2NyZWF0ZUNsYXNzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZXcgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIodXBkYXRlKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWV3XCI+XG4gICAgICAgIDxoMj5cbiAgICAgICAgICB1c2VTdGF0ZVxuICAgICAgICA8L2gyPlxuICAgICAgICA8RnVuY3Rpb25Vc2VTdGF0ZVBhcmFncmFwaC8+XG4gICAgICAgIDxici8+XG4gICAgICAgIDxDcmVhdGVDbGFzc1VzZVN0YXRlUGFyYWdyYXBoLz5cbiAgICAgICAgPGJyLz5cbiAgICAgICAgPENvbXBvbmVudFVzZVN0YXRlUGFyYWdyYXBoLz5cbiAgICAgICAgPGgyPlxuICAgICAgICAgIHVzZUNvbnRleHRcbiAgICAgICAgPC9oMj5cbiAgICAgICAgPEdvdEl0U2VjdGlvbi8+XG4gICAgICAgIDxoMj5cbiAgICAgICAgICB1c2VFZmZlY3RzXG4gICAgICAgIDwvaDI+XG4gICAgICAgIDxNYWluU2VjdGlvbi8+XG4gICAgICA8L2Rpdj5cblxuICAgICk7XG4gIH1cbn1cbiIsICJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGNvbnN0IFJPT1QgPSBcInJvb3RcIjtcbiIsICJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUmVhY3RET00gfSBmcm9tIFwicmVhY3Rpb25cIjtcblxuaW1wb3J0IFwiLi9ob29rc0FwcC9wcmVhbWJsZVwiO1xuXG5pbXBvcnQgVmlldyBmcm9tIFwiLi9ob29rc0FwcC92aWV3XCI7XG5cbmltcG9ydCB7IFJPT1QgfSBmcm9tIFwiLi9ob29rc0FwcC9jb25zdGFudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaG9va3NBcHAoKSB7XG4gIGNvbnN0IHJvb3RET01FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoUk9PVCk7XG5cbiAgUmVhY3RET00ucmVuZGVyKFxuXG4gICAgICA8Vmlldy8+XG5cbiAgICAsXG4gICAgcm9vdERPTUVsZW1lbnRcbiAgKTtcbn07XG4iLCAiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBob29rc0FwcCBmcm9tIFwiLi9leGFtcGxlL2hvb2tzQXBwXCI7XG5cbk9iamVjdC5hc3NpZ24od2luZG93LCB7XG4gIGhvb2tzQXBwXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7bUNBRUEsV0FBQTs7O2VBQXFCOzs7QUFBTiwyQkFBTTtNQUNuQixZQUFZLFFBQVEsaUJBQWlCLGlCQUFpQixtQkFBbUIsc0JBQXNCLFFBQVE7QUFDckcsYUFBSyxTQUFTO0FBRWQsWUFBSSxpQkFBaUI7QUFBRSxlQUFLLGtCQUFrQjs7QUFDOUMsWUFBSSxpQkFBaUI7QUFBRSxlQUFLLGtCQUFrQjs7QUFDOUMsWUFBSSxtQkFBbUI7QUFBRSxlQUFLLG9CQUFvQjs7QUFDbEQsWUFBSSxzQkFB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
