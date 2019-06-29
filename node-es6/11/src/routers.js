import vueRouter from "vue-router";
import account from "./main/account.vue";
import login from "./subcom/login.vue";
import goodslist from "./main/goodslist.vue";
import register from "./subcom/register.vue";


var router = new vueRouter({
    routes: [
        {   path: "/account",
            component: account,
            children:[//子路由前面不能加/
                {path:"login",component:login},
                {path:"register",component:register}
            ]
        },
        {path: "/goodslist", component: goodslist},
    ]
});
export default router