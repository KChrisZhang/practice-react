1 Creating the project

```javascript
create-react-app practive-react
```



2  Adding the router

```javascript
npm i react-router-dom
```



3 Demo introduction

- state
- render
- handling events
- lifecycle
  - componentDidMount
  - componentWillUnmount
- conditional rendering
- lists and keys
- form-controlled component
- Lifting State Up
- 



【Form】Since setState() automatically merges a partial state into the current state,

【Lifting State Up】we only needed to call it with the changed parts. Often, several components need to reflect the same changing data. We recommend lifting the shared state up to their closet common ancestor. Let's see how it works in action.

Now, no matter which input you edit, this.state.temperature and this.state.scale in the Calculator get updated. One of the inputs gets the value as is, so any user input is preserved, and the other input is always recalculated based on it.

Let's recap what happens when you edit an input.

- React calls the function specified as onChange on the DOM <input>. In our case, this is the handleChange method in the TemperatureInput component.
- The handleChange method in the TemperatureInput component calls this.props.onTemperatureChange() with the new disired value. Its props, including onTemperatureChange, were provided by its parent component, the Calculator.



Router

react-router-dom

