<template>
  <div class='tab-control' >
<div v-for="(item,index) in title" :key='item' class="item-tab" @click='itemClick(index)' :class="{active:currentIndex===index}">
  <span>{{item}}</span>
</div>
  </div>
</template>

<script>
export default {
props:{
  title:{
    type:Array,
    default(){
      return []
    }
  }
},
data(){
 return{
   currentIndex:0
 }
},
methods:{
   itemClick(index){
     this.currentIndex=index
   }
}
}
</script>

<style>
.tab-control{
  display: flex;
  height:40px;
  line-height: 40px;
  margin-top:3px;
  background-color:#fff;
  position: sticky;
  top:44px;
}
.item-tab{
  flex:1;
  text-align: center;

}
.item-tab span{
  padding:5px;
}
.active{
  color:var(--color-high-text);
}

.active span{
  border-bottom:3px solid  var(--color-tint)
}
</style>