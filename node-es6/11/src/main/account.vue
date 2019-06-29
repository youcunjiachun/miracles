<template>
    <div>
        <h1>
            这是account组件
            <router-link to="/account/login">登录</router-link>
            <router-link to="/account/register">注册</router-link>
            <router-view></router-view>
        </h1>
    </div>
</template>