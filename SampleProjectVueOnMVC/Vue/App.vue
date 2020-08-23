<template>
    <div>
        <GlobalNav></GlobalNav>
        <!--<div style="background-image: url(oilwells.jpg); background-repeat:no-repeat; background-size:cover">-->
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
        <!--</div>-->
    </div>
</template>

<script>
    import GlobalNav from "./components/GlobalNav.vue"

    export default {
        components: {
            GlobalNav,
        },
        data: function () {
            return {

            }
        },
    }
</script>

<style>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .25s;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>