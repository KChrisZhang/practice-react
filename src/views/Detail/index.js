import React from 'react'
import { createBrowserHistory } from 'history'
// import { useRouteMatch, useParams } from 'react-router-dom'

const history = createBrowserHistory()

export default class Detail extends React.Component {
  componentDidMount() {
    console.log(this.props.match.params.id, 'Detail[id]')
  }
  render() {
    console.log(this.props, 'match[props]')

    return (
      <div>
        <h3>详情页</h3>
        <p>{this.props.match.params.id} 号数据</p>
        <button onClick={() => history.go(-1)}>返回</button>
      </div>
    )
  }
}

// export default function Detail(props) {
//   console.log(useRouteMatch(), 'match[props]')

//   const title = props.title
//   const { id } = useParams()

//   return (
//     <div>
//       <h3>{title}</h3>
//       <p>{id} 号数据</p>
//       <button onClick={() => history.go(-1)}>返回</button>
//     </div>
//   )
// }
