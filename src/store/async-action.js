/**
 * 同一个type，为了区分三种不同的action
 * 在action里添加一个专门的status字段作为标记位
 */
export const FETCH_POSTS = {
  type: 'FETCH_POSTS',
}

export const FETCH_POSTS_ERROR = {
  type: 'FETCH_POSTS',
  status: 'error',
  error: {
    message: 'Oops',
  },
}

export const FETCH_POSTS_SUCCESS = {
  type: 'FETCH_POSTS',
  status: 'success',
  response: {
    code: 200,
  },
}

/**
 * 定义不同的type，分别表示三种不同的action
 */
export const POSTS_REQUEST = {
  type: 'FETCH_POSTS_REQUEST',
}

export const POSTS_FAILURE = {
  type: 'FETCH_POSTS_FAILURE',
  error: 'Oops',
}

export const POSTS_SUCCESS = {
  type: 'FETCH_POSTS_SUCCESS',
  response: {
    code: 200,
  },
}

/**
 * 以上是异步action两种使用方式，具体使用哪一种都可以
 * 使用 redux-actions 这类辅助库来生成 action创建函数和reducer
 */

// 用户可以选择要显示的 subreddit
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'
export function selectSubreddit(subreddit) {
  return {
    type: SELECT_SUBREDDIT,
    subreddit,
  }
}

// 也可以按刷新按钮来更新它
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'
export function invalidateSubreddit(subreddit) {
  return {
    type: INVALIDATE_SUBREDDIT,
    subreddit,
  }
}

// 网络请求获取
export const REQUEST_POSTS = 'REQUEST_POSTS'
export function requestPosts(subreddit) {
  return {
    type: REQUEST_POSTS,
    subreddit,
  }
}

// 网络请求获取
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export function receivePosts(subreddit, json) {
  return {
    type: RECEIVE_POSTS,
    subreddit,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now(),
  }
}
