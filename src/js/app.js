// Import Vue
import Vue from 'vue';

// Import Framework-CN-Vue Plugin
import Framework7CnVue from 'framework7-cn-vue/framework7-vue.esm.bundle.js';
import Framework7Cn, { Device } from './framework7-custom';

import '../css/framework7-custom.less';
import 'framework7-icons/css/framework7-icons.css';
import '../css/app.less';

// Import App Component
import App from '../components/app.vue';

// Init Framework7-Cn-Vue Plugin
Framework7Cn.use(Framework7CnVue);

// Init App
new Vue({
  el: '#app',
  render: (h) => h(App),

  // Register App Component
  components: {
    app: App
  },
});