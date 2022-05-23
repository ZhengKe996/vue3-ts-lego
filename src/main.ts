import { createApp } from "vue";
import App from "./App.vue";
import "normalize.css";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

import router from "./router";
import stroe from "./store";

const app = createApp(App);
app.use(router);
app.use(Antd);
app.use(stroe);
app.mount("#app");
