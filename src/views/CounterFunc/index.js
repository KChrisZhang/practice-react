import React, { useState } from 'react'

/**
 * Hook: useState
 * 在函数组件中存储内部state
 */

export default function CounterFunc() {
  /**
   * 声明多个state变量
   * 声明一个叫 count 的 state变量，初始值为 0; setCount 更新当前的 count
   * 传递一个新的值给 setCount，React会重新渲染CountFunc组件，并把最新的count传给它
   */
  const { count, setCount } = useState(0)
  const { age, setAge } = useState(12)

  return (
    <div>
      <p>You clicked {count} times.</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p>His age is {age}</p>
      <button onClick={() => setAge(count + 1)}>Click me</button>
    </div>
  )
}
