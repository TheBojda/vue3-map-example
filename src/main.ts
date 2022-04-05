import { createApp } from 'vue'
import VueGoogleMaps from '@fawmi/vue-google-maps'

import App from './App.vue'

const app = createApp(App);
app.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyAllK8G0cYz4d596TCHCEiGWbDbF6HUJ-I',
    },
}).mount('#app')
