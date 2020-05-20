import React from 'react'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()

export default class Detail extends React.Component {
  componentDidMount() {
    console.log(this.props.match.params.id, 'id')
  }
  render() {
    return (
      <div>
        <h2>详情页</h2>
        <p>{this.props.match.params.id} 号数据</p>
        <button onClick={() => history.go(-1)}>返回</button>
      </div>
    )
  }
}
