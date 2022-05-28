import { Module } from "vuex";
import { GlobalDataProps } from "../index";

export interface UserProps {
  isLogin: boolean;
  userName?: string;
}

const user: Module<UserProps, GlobalDataProps> = {
  state: {
    isLogin: false,
  },
  mutations: {
    login(state) {
      state.isLogin = true;
      state.userName = "张三";
    },
    logout(state) {
      state.userName = "";
      state.isLogin = false;
    },
  },
};

export default user;
