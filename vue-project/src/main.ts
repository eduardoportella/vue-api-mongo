import './assets/main.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import { createApp } from "vue";
import App from "./App.vue";

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaTrash, LaEdit, GiConfirmed } from "oh-vue-icons/icons";

addIcons(FaTrash, LaEdit, GiConfirmed);

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.mount("#app");
