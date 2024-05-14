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
- `ReactDOM` is virtual DOM in React and it builds by finding element with ID `root` (see `index.js`). So as soon as we change outside virtual DOM, React cannot help
- We can write HTML in React code and hence called JSX

#### Using React Dev Tools
<img src="assets/images/react_dev_tool.png"/>
In production build, src code gets minified.

## Components
###### Conventions
1. One compoenent in one file
2. Name of file should be same as name of component
3. Name of component should be in PascalCase
4. Every component returns, and rendered on UI
5. `App` contains everything

#### Creating custom component:
Adjacent HTML tags must have one wrapper parent tag (here `<>`)
```
import React from 'react';

function MyCustomComp() {
    return (
        <>
            <h1>Gaurav Kabra</h1>
            <h6>This is a custom component</h6>
        </>
    )
}

export default MyCustomComp;
```

And in `App.js`:
```
import MyCustomComp from './MyCustomComp/MyCustomComp';

// some code

return (
    <div className="App">
        <MyCustomComp/>
    </div>
);
```
