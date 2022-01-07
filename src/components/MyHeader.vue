<template>
    <div style="background-image: url('img/Bus.png'); background-repeat: no-repeat;background-size: cover;height: 100vh" class="h-fit">
        <div class="flex items-center justify-between px-28  py-10  text-white ">
            <div class="flex items-center justify-between  w-1/2 ">
                    <img src="img/logo.png" alt="" class="w-32 h-5 cursor-pointer">
                    <ul class="flex justify-between">
                        <div v-for="item in menu" :key="item.id">
                            <li class="mx-6 text-white opacity-75 hover:opacity-100"><a href="#">{{item.name}}</a></li>
                        </div>
                    </ul>
            </div>
            <img src="img/PlayStore.png" alt="" class="cursor-pointer">
        </div>
        <div class="w-3/5">
            <div class="pt-20 pb-20 px-28 text-white text-7xl font-thin" >
                 <!-- style="width:750px;font-size: 450%;" -->
                Your Travel Start from here<span class="text-Green">.</span>
            </div>
            <div  class="pt-21 pb-16 px-28 text-white opacity-75 text-4xl" >
                <!-- style="width:645px;font-size:170%;" -->
                Find your Destination over <span class="text-Green">16000+</span> Trips & Explore amazing Cities for a perfect day
            </div>
        </div>
        <div class="w-full md:w-2/3 lg:w-1/2  pb-32">
            <destination/>
        </div>
        


    </div>
</template>
<script>
import Myicons from '@/components/Myicons.vue'
import Destination from '@/components/Destination.vue'
export default {
    components:{
    Myicons,
    Destination
    },
 data(){
     return{
         menu:[
             { id:1,name:'Home'},
             { id:1,name:'Trips'},
             { id:1,name:'About'},
             { id:1,name:'Contact'},
             ]
     }
 }
}
</script>