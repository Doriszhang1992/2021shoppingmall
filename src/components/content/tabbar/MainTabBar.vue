<template>
  <div>
      <tab-bar>
      <tab-bar-item path='/home'>
        <img src="~assets/img/tabbar/home.png" alt="" slot="item-icon">
         <img src="~assets/img/tabbar/homep.png" alt="" slot="item-icon-active">
        <div slot="item-text">首页</div>
      </tab-bar-item>
       <tab-bar-item path='/category'>
        <img src="~assets/img/tabbar/category.png" alt="" slot="item-icon">
         <img src="~assets/img/tabbar/categoryp.png" alt="" slot="item-icon-active">
        <div slot="item-text">分类</div>
      </tab-bar-item>
       <tab-bar-item path='/shoppingcart'>
        <img src="~assets/img/tabbar/shoppingcart.png" alt="" slot="item-icon">
         <img src="~assets/img/tabbar/shoppingcartp.png" alt="" slot="item-icon-active">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
       <tab-bar-item path='profile'>
        <img src="~assets/img/tabbar/profile.png" alt="x" slot="item-icon">
         <img src="~assets/img/tabbar/profilep.png" alt="" slot="item-icon-active">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar.vue'
import TabBarItem from 'components/common/tabbar/TabBarItem.vue'
export default {
name:'MainTabBar',
components:{
   TabBar,
   TabBarItem,
}
}
</script>

<style>

</style>