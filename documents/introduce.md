1 创建项目

```javascript
create-react-app practive-react
```



2  添加路由

```javascript
npm i react-router-dom
```



3 按照文档写组件demo

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

【Lifting State Up】we only needed to call it with the changed parts.

Often, several components need to reflect the same changing data. We

recommend lifting the shared state up to their closet common ancestor.

Let's see how it works in action.

