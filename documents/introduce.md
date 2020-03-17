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

1. BrowserRouter, special server configuration
2. HashRouter, stores the current location in the hash portion of the URL

Route Matchers: Switch and Route

1. Switch, when a <Switch> is rendered, it searches through its children <Route> elements to find one whose path matches the current URL, When it finds one, it renders that <Route> and ignores all others. This means that you should put <Route> with more specific (typically longer) paths before less-specific ones. If no <Route> matches, the <Switch> renders nothing(null).
2. If none of the previous routes render anything, this route acts as a fallback. Important: A route with path="/" will always match the URL because all URLs begin with a /. So that's why we put this one last of all.



