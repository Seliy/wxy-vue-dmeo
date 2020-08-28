import Vue from "vue";
import App from "./App.vue";
import router from "./router";

//引入基础库
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

Vue.use(Antd);

Vue.config.productionTip = true; //设置为false以阻止Vue在启动时生成生产提示
Vue.config.devtools = true; //配置是否允许vue-devtools检查代码。
Vue.config.errorHandler = function(err, vm, info) {
  console.log("info错误信息", info);
};
Vue.config.keyCodes = {
  A: 10,
}; //自定义键位别名
// 注册一个全局自定义指令v-focus
// Vue.directive("focus", {
// 当被绑定的元素插入到DOM中时
// inserted: function(el) {
// 聚焦元素
// el.focus();
// },
// });
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
