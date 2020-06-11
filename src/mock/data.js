export default [
  {
    path: '/account/list',
    data: {
      code: 200,
      data: {
        accountName: '1221212',
      },
      message: 'ok',
    },
  },
  {
    path: '/user/info',
    data: {
      code: 200,
      data: { 'username|3': 'ka', 'sex|1': true },
      message: 'ok',
    },
  },
  {
    path: '/list',
    data: {
      code: 200,
      data: {
        'list|10': [
          {
            // 属性 id 是一个自增数，起始值为 1，每次增 1
            'id|+1': 1,
          },
        ],
        count: 10,
      },
      message: 'ok',
    },
  },
]
