<template>
  <div id="home">
   <nav-bar class="nav-bar">
    <div slot="center">购物街</div>
   </nav-bar>
  <home-swiper :banner='banner' ></home-swiper>
  <home-recommend :recommend="recommend"/>
  <home-feature/>
  <tab-control :title="['流行','新款','精选']" />
  <ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/common/tabcontrol/TabControl'


import {getHomeMultidata} from 'network/home'

import HomeSwiper from'./HomeSwiper.vue'
import HomeRecommend from'./HomeRecommend.vue'
import HomeFeature from'./HomeFeature.vue'


export default {
  data(){
return {
  banner:[],
  recommend:[],
}
  },
components:{
  NavBar,
  TabControl,

 HomeSwiper,
 HomeRecommend,
 HomeFeature
},
created(){

getHomeMultidata().then(res=>{
  
   this.banner=res.data.banner.list
   this.recommend=res.data.recommend.list
})
}
}


</script>

<style>

#home{
  padding-top:44px;
}
.nav-bar{
  position:fixed;
  left:0;
  right:0;
  top:0;
  background-color:var(--color-tint);
  color:#fff;
  font-weight: bold;
}

</style>