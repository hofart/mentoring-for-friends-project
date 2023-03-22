import { createApp } from "vue";
import "./assets/css/style.css";
import App from "./App.vue";
import router from "./App.router";

createApp(App).use(router).mount("#app");
