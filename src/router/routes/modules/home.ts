import type { AppRouteModule } from "/@/router/types";
import TabLay from "/@/layouts/TabHome/index.vue";

// { title: "首页", to: "/home", icon: "home-o" },
//   { title: "分类", to: "/home", icon: "label-o" },
//   { title: "购物车", to: "/cart", icon: "cart-o" },
//   { title: "我", to: "/my", icon: "user-o" },

const home: AppRouteModule = {
  path: "/",
  name: "Home",
  component: TabLay,
  redirect: "/home",
  meta: {
    title: "首页",
    icon: "",
  },
  children: [
    {
      path: "home",
      name: "Index",
      component: () => import("/@/views/home/index.vue"),
      meta: {
        title: "首页",
        icon: "home-o",
      },
    },
    {
      path: "home",
      name: "Index",
      component: () => import("/@/views/home/index.vue"),
      meta: {
        title: "分类",
        icon: "label-o",
      },
    },
    {
      path: "cart",
      name: "Cart",
      component: () => import("/@/views/cart/index.vue"),
      meta: {
        title: "购物车",
        icon: "cart-o",
      },
    },
    {
      path: "my",
      name: "MY",
      component: () => import("/@/views/my/index.vue"),
      meta: {
        title: "我的",
        icon: "user-o",
      },
    },
  ],
};

export default home;