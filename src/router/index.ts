import type { RouteRecordRaw } from "vue-router"; // 引入vue-router中的类型
import { createRouter, createWebHashHistory } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/main",
  },
  {
    path: "/main",
    name: "main",
    component: () => import("@/views/Index"),
    children: [
      {
        path: "",
        name: "home",
        component: () => import("@/views/Home"),
      },
      {
        path: "/template/:id",
        name: "template",
        component: () => import("@/views/TemplateDetail"),
      },
    ],
  },

  {
    path: "/editor",
    name: "editor",
    component: () => import("@/views/Editor"),
    children: [],
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
