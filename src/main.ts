import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {defineCustomElements, applyPolyfills} from "@telekom/scale-components/loader"
import '@telekom/scale-components/dist/scale-components/scale-components.css';

applyPolyfills().then(() => {
    defineCustomElements(window);
});

createApp(App).mount('#app')
