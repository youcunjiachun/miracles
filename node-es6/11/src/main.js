import Vue from "vue";
import app from "./app.vue"
import vueRouter from "vue-router"
import router from "./routers.js"
// import MintUI from "mint-ui";
import "mint-ui/lib/style.css"
import "bootstrap/dist/css/bootstrap.css"
import "./css/app.css"
import {Button} from "mint-ui"
// Vue.use(MintUI);
Vue.component(Button.name,Button);
Vue.use(vueRouter);


var vm = new Vue({
    el: "#app",
    data: {
        msg: "123"
    },
    render: c => c(app),
    router
});
