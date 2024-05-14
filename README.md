# React

### Installation
- VS Code
- Node
- CRA (Create React App) extension
- React Dev Tools extension or in <a href="https://chromewebstore.google.com/detail/fmkadmapgofadopljbjfkapdkoienihi">Chrome</a>

Creating react app: `npx create-react-app <app_name>` <br/>
(npx replaces npm -g from npm version 6)

Earlier:
```
npm i create-react-app -g
create-react-app <app_name>
```

---
- Two-way data binding in Angular means changes in the model (data) automatically reflect in the view (UI), and vice versa. In React, it's typically one-way binding, where changes in the model update the view, but changes in the view don't automatically update the model; they usually require explicit handling.
---

### Notes
- Angular is framework, React is a lib. Angular relies on two-way data binding, whereas React relies on one-way data binding. Angular relies on zones but React relies on virtual DOM
- Components in React are just like HTML tags 
- Virtual DOM : Traditionally, all records are updated (even unchanged ones, as can be seen from Dev Console -> Elements -> highlighting blink). So in React, clone is created with latest values and then only diff is rendered (reconciliation). And clone is created only once and then incrementally changed. E.g. applying filters on Amazon will result in some results already on UI

#### Using React Dev Tools
<img src="assets/images/react_dev_tool.png"/>
In production build, src code gets minified.
