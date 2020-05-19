LOG

Here is my learning process. Hope sincerely that I can finish the initial plan.

2020/3/18

![](D:\examples\practice-react\documents\react-router-dom.png)

2020/4/26

项目要素：路由，views，components，redux

2020/5/11

Redux
状态管理
只有一个单一的 store 和一个根级的 reduce 函数（reducer）
随着应用的不断变大，应该把根级的 reducer 拆成多个小的 reducers，分别独立地操作 state 树的不同部分，而不是添加新的 store

1 store：以对象树的形式存放所有的 state
2 action：改变 state 的唯一途径，action = {type: 'INCREMENT}
3 reducers：描述 action，专门的函数决定每个 action 如何改变 state

1. redux-actions: {createAction, handleAction}
2. react-router-redux: {routerReducer}
3. redux: {combineReducer}
