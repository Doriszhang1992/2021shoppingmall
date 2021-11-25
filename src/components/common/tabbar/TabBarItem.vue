<template>
  <div class="tab-bar-item" @click='itemClick'>
  <div v-if="!isActive"> <slot name="item-icon"></slot></div>
   <div v-else> <slot name="item-icon-active"></slot></div>
  <div :style="activeStyle"> <slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      // isActive:true
    }
  },
  props:{
   path:String,
   activeColor:{
     type:String,
     default:'#ff5777'
   }
  },
  computed:{
    isActive(){
      return this.$route.path.includes(this.path)==1
    },
    activeStyle(){
      return this.isActive ? {color:this.activeColor}:{}
    }
  },
  methods:{
    itemClick(){
      return this.$router.replace(this.path)
    },
  }
}
</script>

<style>
.tab-bar-item{
  flex:1;
  text-align: center;
  height:49px;

}

.tab-bar-item img{
  width:24px;
  height:24px;
  vertical-align: middle;
  margin-top:3px;
  margin-bottom: 1px;

}
</style>