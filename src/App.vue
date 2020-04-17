<template>
	<div id="app">
		<NavHeader></NavHeader>

		<router-view></router-view>

		<NavFooter></NavFooter>
	</div>
</template>

<script>

import NavHeader from './views/common/Header.vue'
import NavFooter from './views/common/Footer.vue'
export default {

  name: 'App',

  data () {
    return {

    }
  },

  components: { NavHeader, NavFooter}
}
</script>

<style>
    @import "assets/css/common.css";
    #app {
        padding-top: 47px;
        max-width: 650px;
        background: #fff;
        margin: 0 auto;
        overflow-x: hidden;
        overflow-y: hidden;
    }
</style>
