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
module.exports = (middlewares, devServer) => {
  if (!devServer) {
    throw new Error("webpack-dev-server is not defined");
    }
  if (process.env.MOCK == "true") { 
    // middlewares.unshift({
    //     //`name`是可选的
    //     name: "user-classPlan",
    //     path: "/user/classPlan",
    //     middleware: (req, res) => {
    //     // mock 数据模拟接口数据
    //     let json = getJsonFile("./classPlan.json5")
    //     res.json(Mock.mock(json));
    //     },
    // });
    // middlewares.unshift({
    //   path: "/user/userCart",
    //   middleware: (req, res) => {
    //     // mock 数据模拟接口数据
    //     let json = getJsonFile("./userCart.json5")
    //     res.json(Mock.mock(json));
    //   },
    // });
    return middlewares;
  }
};
