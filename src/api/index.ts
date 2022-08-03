import axios from "@/api/request/config";

// https://service-36x18f42-1253747424.gz.apigw.tencentcs.com/release/ceshi

export const ceshi = () => {
  return axios.request({
      url: '/testApi/release/ceshi',
      method: 'get'
  })
}