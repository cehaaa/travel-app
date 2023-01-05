import { createApp } from "vue";
import "./scss/index.scss";
import App from "./App.vue";

import router from "./router/router";

createApp(App).use(router).mount("#app");
