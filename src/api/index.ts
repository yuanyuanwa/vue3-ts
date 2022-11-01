import axios from "@/api/request/config";

// https://service-36x18f42-1253747424.gz.apigw.tencentcs.com/release/ceshi

export const ceshi = () => {
  return axios.request({
      url: '/testApi/release/ceshi',
      method: 'get',
      // params: data,
  })
}
export const addData = (data:any) => {
  return axios.request({
      url: 'http://localhost:3001/api/add',
      method: 'post',
      data: data,
  })
}
export const searchData = (id:any) => {
  return axios.request({
      url:`http://localhost:3001/api/get?id=${id}`,
      method: 'get',
  })
}
export const deleteData = (id:any) => {
  return axios.request({
      url: `http://localhost:3001/api/delete/${id}`,
      method: 'delete',
  })
}
export const updateData = (data:any) => {
  return axios.request({
      url: 'http://localhost:3001/api/update',
      method: 'post',
      data: data,
  })
}