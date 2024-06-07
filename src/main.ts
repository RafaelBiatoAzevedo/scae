import { createApp } from "vue";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";

import App from "./App.vue";
import "./main.css";
import { router } from "./router";

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
  },
});

const app = createApp(App);
app.use(vuetify);
app.use(router);

app.mount("#app");
