import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'

import App from './App'
import store from './store'
import './mock'

import 'antd/dist/antd.css'
import './index.css'

/**
 * Router一定要把App组件包起来，这样其他组件才可以使用路由
 */
ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback={<div></div>}>
      <Router>
        <App />
      </Router>
    </Suspense>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
