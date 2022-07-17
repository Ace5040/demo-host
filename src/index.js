import { createApp } from 'vue';
import Application from './Application.vue';
import './index.css';

window.addEventListener('load', function() {
    createApp(Application).mount('#app');
});