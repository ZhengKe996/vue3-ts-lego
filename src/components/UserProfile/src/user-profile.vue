<template>
  <a-button
    v-if="!user.isLogin"
    @click="login"
    type="primary"
    class="user-profile-component"
  >
    登录
  </a-button>

  <div v-else>
    <a-dropdown-button class="user-profile-component">
      <router-link to="/">{{ user.userName }}</router-link>
      <template v-slot:overlay>
        <a-menu class="user-profile-dropdown">
          <a-menu-item key="0" @click="createDesign">创建作品</a-menu-item>
          <a-menu-item key="1"
            ><router-link to="/">我的作品</router-link></a-menu-item
          >
          <a-menu-item key="2" @click="logout">登出</a-menu-item>
        </a-menu>
      </template>
    </a-dropdown-button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { message } from "ant-design-vue";

import { UserProps } from "@/store/user";
const store = useStore();
const router = useRouter();
const props = defineProps<{ user: UserProps }>();
const login = () => {
  store.commit("login");
  message.success("登录成功");
};
const logout = () => {
  store.commit("logout");
  message.success("退出登录成功，2秒后跳转到首页", 2);

  setTimeout(() => {
    router.push({ path: "/" });
  }, 2000);
};
const createDesign = () => {};
</script>

<style scoped>
.user-profile-dropdown {
  border-radius: 2px !important;
}
.user-operation > * {
  margin-left: 30px !important;
}
</style>
