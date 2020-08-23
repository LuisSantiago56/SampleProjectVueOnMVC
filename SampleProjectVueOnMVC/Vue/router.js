import Router from "vue-router";
import Vue from "vue";

import Home from './Views/Home.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "*",
            component: Home
        },
        {
            path: "/Home",
            name: "Home",
            component: Home
        }

    ]
});