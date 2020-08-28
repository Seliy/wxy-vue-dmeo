import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/",
    name: "Index",
    component: () => import("@/views/index.vue"),
  },
  {
    path: "/test",
    name: "Test",
    component: () => import("@/views/testWork.vue"),
  },
  {
    path: "/insertValue",
    name: "insertValue",
    component: () => import("@/views/insertValue.vue"),
  },
  {
    path: "/directives",
    name: "Directives",
    component: () => import("@/views/directives.vue"),
  },
  {
    path: "/computed",
    name: "Computed",
    component: () => import("@/views/computed.vue"),
  },
  {
    path: "/testComp",
    name: "testComp",
    component: () => import("@/views/testComp.vue"),
  },
  {
    path: "/classOrStyle",
    name: "classOrStyle",
    component: () => import("@/views/classOrStyle.vue"),
  },
  {
    path: "/vIf",
    name: "vIf",
    component: () => import("@/views/v-if.vue"),
  },
  {
    path: "/vShow",
    name: "vShow",
    component: () => import("@/views/v-show.vue"),
  },
  {
    path: "/vFor",
    name: "vFor",
    component: () => import("@/views/v-for.vue"),
  },
  {
    path: "/method",
    name: "Method",
    component: () => import("@/views/method.vue"),
  },
  {
    path: "/model",
    name: "FormModel",
    component: () => import("@/views/FormModel.vue"),
  },
  {
    path: "/component",
    name: "component",
    component: () => import("@/views/component.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("@/views/ComponentRegister.vue"),
  },
  {
    path: "/prop",
    name: "Prop",
    component: () => import("@/views/Prop.vue"),
  },
  {
    path: "/our",
    name: "Our",
    component: () => import("@/views/methodOur.vue"),
  },
  {
    path: "/slot",
    name: "Slot",
    component: () => import("@/views/slot.vue"),
  },
  {
    path: "/is",
    name: "Is",
    component: () => import("@/views/is.vue"),
  },
  {
    path: "/edge",
    name: "ComponentsEdgeCases",
    component: () => import("@/views/ComponentsEdgeCases.vue"),
  },
  {
    path: "/left",
    name: "Left",
    component: () => import("@/views/left.vue"),
  },
  {
    path: "/test1",
    name: "Test1",
    component: () => import("@/views/test.vue"),
  },
  {
    path: "/directive",
    name: "Directive",
    component: () => import("@/views/directive.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
