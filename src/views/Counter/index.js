import React from 'react'
// import store from '../../store'
import * as actions from '../../store/actions'
import { connect } from 'react-redux'

class Counter extends React.Component {
  // constructor(props) {
  // super(props)
  // this.state = { count: store.getState() }
  // this.onIncrement = this.onIncrement.bind(this)
  // this.onDecrement = this.onDecrement.bind(this)
  // }
  // onIncrement() {
  //   this.props.dispatch(actions.increment())
  // }
  // onDecrement() {
  //   this.props.dispatch(actions.decrement())
  // }
  // componentDidMount() {
  //   store.subscribe(() => {
  //     console.log(`Store is changed: ${store.getState()}`)

  //     this.setState({
  //       count: store.getState(),
  //     })
  //   })
  // }
  render() {
    // 页面上的数据没有变化，是因为没有重新渲染新的render
    // 结合setState，这个方法同时重新渲染新的render

    const { increment, decrement } = this.props

    return (
      <div>
        <h3>计数器</h3>
        <p>
          {this.props.hello} {this.props.count}
        </p>
        <div>
          <button onClick={() => increment()} style={{ marginRight: 15 + 'px' }}>
            INCRESE
          </button>
          <button onClick={() => decrement()} style={{ marginLeft: 15 + 'px' }}>
            DECRESE
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  count: state.count,
  hello: state.hello,
})

export default connect(mapStateToProps, actions)(Counter)
