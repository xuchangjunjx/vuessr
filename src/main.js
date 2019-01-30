import Vue from "vue";
import createRouter from "./router.js";
import createStore from "./store";
import App from "./App.vue";
import { sync } from 'vuex-router-sync'

// 导出一个工厂函数，用于创建新的vue实例
export function createApp() {
  const router = createRouter();
  const store = createStore();
  sync(store, router);
  const app = new Vue({
    router,
    store,
    render: h => h(App)
  });

  return { app, router,store };
}
