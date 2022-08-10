// // 使用 require 引入json文件，可以直接访问数据
// const appData = require('./json/data.json')

// const proxy = {
//   'GET /api/login': {
//       success: appData.login.success,
//       message: appData.login.message
//   },
//   'GET /api/list': [{
//           id: 1,
//           username: 'kenny',
//           sex: 6
//       },
//       {
//           id: 2,
//           username: 'kenny',
//           sex: 6
//       }
//   ],
//   'POST /api/post': (req, res) => {
//       res.send({
//           status: 'error',
//           code: 403
//       });
//   },
//   'DELETE /api/remove': (req, res) => {
//       res.send({
//           status: 'ok',
//           message: '删除成功！'
//       });
//   }
// }
// module.exports = proxy
