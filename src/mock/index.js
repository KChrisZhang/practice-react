import data from './data'

const Mock = require('mockjs')

data.forEach(item => {
  Mock.mock(item['path'], item['data'])
})
