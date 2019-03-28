//通过mutations间接更新state多个状态的对象
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  RECEIVE_GOODS,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT
} from './mutation-types'
import {
  reqAddress,
  reqFoodCategorys,
  reqShops,
  reqUserInfo,
  reqLogout,
  reqShopInfo,
  reqShopRatings,
  reqShopGoods
} from '../api'

export default {
  async getAddress({commit, state}) {
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqAddress(geohash)
    if(result.code === 0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, {address})
    }
  },

  async getCategorys({commit}) {
    const result = await reqFoodCategorys()
    if(result.code === 0) {
      const categorys = result.data
      commit(RECEIVE_CATEGORYS, {categorys})
    }
  },

  async getShops({commit, state}) {
    const {longitude, latitude} = state
    const result = await reqShops(longitude, latitude)
    if(result.code === 0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, {shops})
    }
  },
  //同步记录用户信息
  recordUser({commit}, userInfo) {
    commit(RECEIVE_USER_INFO, {userInfo})
  },
  //异步获取用户信息
  async getUserInfo({commit}) {
    const result = await reqUserInfo()
    if(result.code === 0) {
      const user = result.data
      commit(RECEIVE_USER_INFO, {shops})
    }
  },
  //退出登陆
  async logout ({commit}) {
    const result = await reqLogout()
    if(result.code === 0) {
      commit(RESET_USER_INFO)
    }
  },
  //异步获取商家数据
  async getShopInfo({commit}) {
    const result = await reqShopInfo()
    if(result.code === 0) {
      const info = result.data
      commit(RECEIVE_INFO, {info})
    }
  },
  async getShopGoods({commit}, callback) {
    const result = await reqShopGoods()
    if(result.code === 0) {
      const goods = result.data
      commit(RECEIVE_GOODS, {goods})
      callback && callback()
    }
  },
  async getShopRatings({commit}) {
    const result = await reqShopRatings()
    if(result.code === 0) {
      const ratings = result.data
      commit(RECEIVE_RATINGS, {ratings})
    }
  },

  //同步更新food中的count，不需要和后台交互
  updateFoodCount({commit}, {isAdd, food}) {
    if(isAdd) {
      commit(INCREMENT_FOOD_COUNT, {food})
    } else {
      commit(DECREMENT_FOOD_COUNT, {food})
    }
  }
}
