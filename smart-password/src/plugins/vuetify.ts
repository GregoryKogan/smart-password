/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: "light",
    themes: {
      light: {
        colors: {
          background: "#d6f3ff",
          primary: "#1d1bd4",
          secondary: "#2990fe",
          surface: "#ffffff",
          error: "#f41f00",
          info: "#00b9d8",
          success: "#00ad65",
          warning: "#e4ce00",
          "on-background": "#110d67",
          "on-surface": "#110d67",
        },
      },
      dark: {
        colors: {
          background: "#110d67",
          primary: "#1d1bd4",
          secondary: "#2990fe",
          surface: "#110d67",
          error: "#f41f00",
          info: "#00b9d8",
          success: "#00ad65",
          warning: "#e4ce00",
          "on-background": "#ffffff",
          "on-surface": "#ffffff",
        },
      },
    },
  },
});
