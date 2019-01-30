/*
 * @Author: bowen.xu
 * @Date: 2019-01-29 17:25:16
 * @Last Modified by: bowen.xu
 * @Last Modified time: 2019-01-30 17:42:59
 */

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// 假定我们有一个可以返回 Promise 的
// 通用 API（请忽略此 API 具体实现细节）
import { fetchItem } from "./api";
//console.log('fetchItem',fetchItem);
export default function createStore() {
  return new Vuex.Store({
    state: {
      items: {
         
      }
    },
    actions: {
      fetchItem({ commit }, id) {
        // `store.dispatch()` 会返回 Promise，
        // 以便我们能够知道数据在何时更新
        return fetchItem(id).then(item => {
          commit("setItem", { id, item });
        });
      }
    },
    mutations: {
      setItem(state, { id, item }) {
       Vue.set(state.items, id, item);
       }
    }
  });
}
