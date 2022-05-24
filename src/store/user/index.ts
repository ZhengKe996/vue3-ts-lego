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
      state = { ...state, isLogin: true, userName: "张三" };
    },
    logout(state) {
      state = { isLogin: false };
    },
  },
};

export default user;
