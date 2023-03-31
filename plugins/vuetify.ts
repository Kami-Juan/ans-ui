import 'vuetify/styles';

import { createVuetify } from 'vuetify';
import { mdi, aliases } from 'vuetify/iconsets/mdi-svg';

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: { mdi },
    },
  });

  nuxtApp.vueApp.use(vuetify);

  if (!process.server) console.log('❤️ Initialized Vuetify 3', vuetify);
});
