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
//4、根据经纬度和关键字搜索商铺列表
export const reqSearchShops = (geohash, keyword) => ajax(BASE_URL + '/search_shops', {geohash, keyword})
//6、用户名密码登陆
export const reqPwdLogin = ({phone, name, captcha}) => ajax(BASE_URL + '/login_pwd', {phone, name, captcha}, 'POST')
//7、发送短信验证码
export const reqSendCode = (phone) => ajax(BASE_URL + '/sendcode', phone)
//8、手机号验证码登陆
export const reqSmsLogin = (phone, code) => ajax(BASE_URL + '/login_sms', {phone, name}, 'POST')
//9、根据会话获取用户信息
export const reqUserInfo = () => ajax(BASE_URL + '/userinfo')
//10、用户登出
export const reqLogout = () => ajax(BASE_URL + '/logout')

//获取商家信息
export const reqShopInfo = () => ajax('/info')
//获取商家评论信息
export const reqShopRatings = () => ajax('/ratings')
//获取商品信息
export const reqShopGoods = () => ajax('/goods')
