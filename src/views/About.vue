<template>
  <div class="slider">
    <button @click="prev()" type="button" class="btn btn-left">
      <myicons name="left"  class="text-white  icone"></myicons>
    </button>
    <div class="container-slides" :style="{transform:`translateX(${index}px)`}">
      <img src="img/alhoceima.jpeg" alt="" class="img-slider">
      <img src="img/casa.jpg" alt="" class="img-slider">
      <img src="img/casti.jpg" alt="" class="img-slider">
      <img src="img/fes.jpg" alt="" class="img-slider">
    </div>
     <button @click="next()" type="button"  class="btn btn-right">
      <myicons name="right" class="text-white icone"></myicons>
    </button>
  </div>
</template>
<script>
import Myicons from '@/components/Myicons.vue'

export default {
  components:{
    Myicons
  },
  data(){
    return{
      index:0
    }
  },
  methods:{
    next(){
      console.log(this.index)
      if(this.index === -1500){
        this.index= 0
      }
      else{
        this.index -= 500;
      }
    },
    prev(){
      console.log(this.index)

      if(this.index === 0){
        this.index = -1500
      }
      else{
        this.index += 500
      }
    }
  }

  
}
</script>
<style scoped>
  .slider{
    width: 500px;
    height: 300px;
    margin: 100px auto 0;
    overflow: hidden;
    position: relative;
  }
  .container-slides{
    display: flex;
  }
  .img-slider{
    width: 100%;
    height: auto;
  }
  .btn{
    background-color: aqua;
    outline: none;
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: block;
    position: absolute;
    z-index: 1000;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items:center ;
  }
  .icone{
    width:15px;
    
  }
  .btn-left{
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
  }
   .btn-right{
    top: 50%;
    right: 5px;
    transform: translateY(-50%);
  }
  
</style>

