/*
与后台交互模块，ajax请求接口模块
*/
import ajax from './ajax'
// const BASE_URL = "http://localhost:4000"
const BASE_URL = "./api"
// 根据经纬度获取地址信息
export const reqAddress = geohash => ajax(`${BASE_URL}/position/${geohash}`)
// 获取msite页面食品分类列表
export const reqFoodCategorys = () => ajax(BASE_URL + '/index_category')
// 根据经纬度获取msite商铺列表
export const reqShops = (longitude, latitude) => ajax(BASE_URL + '/shops', {longitude, latitude})
