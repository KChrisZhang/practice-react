import React from 'react'

export default class Detail extends React.Component {
  componentDidMount() {
    console.log(this.props.match.params.id, 'id')
  }
  render() {
    return (
      <div>
        <h2>详情页</h2>
        <p>{this.props.match.params.id} 号数据</p>
      </div>
    )
  }
}
