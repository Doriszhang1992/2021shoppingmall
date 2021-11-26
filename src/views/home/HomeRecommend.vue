<template>
  <div class="recommend">
    <div v-for="item in recommend" :key='item.index'>
     <a :href="item.link"> <img :src="item.image" alt=""></a>
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
 props:{
    recommend:{
      type:Array,
      default(){
        return []
      }
    }
}
}
</script>

<style>
.recommend{
  display:flex;
  font-size:12px;
  text-align: center;
  border-bottom: 8px solid #eee;
}
.recommend div{
 flex:1;
 margin:15px 0 15px 0;
}
.recommend img{
  width:65px;
  height:65px;
 

}
</style>