import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mixins from './api'
import i18nPlugin from './plugins/i18n'

const i18nStrings = {
    en: {
        hi: 'Hello!'
    },
    ko: {
        hi: '안녕하세요!'
    }
}

const app = createApp(App)
app.use(router)
app.use(i18nPlugin, i18nStrings)
app.mixin(mixins);
app.mount("#app")
