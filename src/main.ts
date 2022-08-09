import { createApp } from "vue";
import { createPinia } from "pinia";

import "bootstrap/dist/css/bootstrap.min.css";
import './assets/styles/style.css';
import './assets/styles/header.css';
import App from "./App.vue";
import router from "./router/router";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, fab);
const app = createApp(App).component('fa', FontAwesomeIcon);

app.use(createPinia());
app.use(router);

app.mount("#app");
