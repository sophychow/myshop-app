/*
与后台交互模块，ajax请求接口模块
*/
import ajax from './ajax'

// 根据经纬度获取地址信息
export const reqAddress = geohash => ajax('/api/position/' + geohash)
// 获取msite页面食品分类列表
export const reqCategorys = () => ajax('/api/index_category')
// 根据经纬度获取msite商铺列表
export const reqShops = (latitude, longitude) => ajax('/api/shops', {latitude, longitude})
