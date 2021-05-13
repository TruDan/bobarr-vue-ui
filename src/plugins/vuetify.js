import Vue from 'vue';
import Vuetify from 'vuetify';
import colors from 'vuetify/lib/util/colors'

import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      light: {
        primary: colors.cyan,
        secondary: colors.blue,
        accent: colors.teal,
        error: colors.red,
        warning: colors.orange,
        info: colors.lightBlue,
        success: colors.lightGreen
      },
      dark: {
        primary: colors.cyan,
        secondary: colors.blue,
        accent: colors.teal,
        error: colors.red,
        warning: colors.orange,
        info: colors.lightBlue,
        success: colors.lightGreen
      },
    },
  },
});
