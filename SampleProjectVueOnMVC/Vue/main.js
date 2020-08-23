// Import babel-polyfill first so everything gets it
import 'babel-polyfill'

// Vue
import Vue from "vue"

// Bootstrap Vue
import BootstrapVue from "bootstrap-vue"
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Vue Multiselect
import VueMultiselect from "vue-multiselect/src/Multiselect.vue"
Vue.component('MultiSelect', VueMultiselect);

// Vue Moment (filter)
import VueMoment from "vue-moment"
Vue.use(VueMoment)

// Project Api
Vue.prototype.$nav = window.Nav
Vue.Nav = window.Nav

import App from "./App.vue"
import router from "./router"

window.app = new Vue({
    router,
    el: '#app',
    //data: this.InitialModel,
    render: h => h(App),
});