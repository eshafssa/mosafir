<template>
    <div class="bg-Blue h-96">
        <div class="flex items-center  justify-around p-16 ">
            <div>
                <a href="#"><img src="img/logo.png" alt="" class="w-32 h-5 cursor-pointer"></a>
                <div class="flex items-center justify-center my-4 ">
                    <div v-for="(icon,index) in icons" :key="index" class="my-1 mr-4 cursor-pointer">
                        <myicons :name="icon.name"  class="text-white flex items-center justify-center bg-Green w-9 h-9 p-3 rounded-full"/>
                    </div>
                </div>
            </div>
            <div class="text-white text-base">
                <div v-for="(item,index) in homeItems" :key="index" class="">
                   <a href="#"><p class="text-white text-base p-2 opacity-80 hover:opacity-100">{{item.name}}</p></a> 
                </div>
            </div>
            <div>
                <div v-for="(item,index) in tripsItems" :key="index" class="">
                   <a href="#"><p class="text-white text-base p-2 opacity-80 hover:opacity-100">{{item.name}}</p></a> 
                </div>
            </div>
            <div>
                <div v-for="(item,index) in contactItems" :key="index" class="">
                   <a href="#"><p class="text-white text-base p-2 opacity-80 hover:opacity-100">{{item.name}}</p></a> 
                </div>
            </div>
        </div> 
        <div class="h-0.5 mx-40 opacity-70   bg-gray-400"></div>
        <div class="flex items-center justify-center text-white my-8 opacity-80 font-thin text-lg">
            <myicons name='copyright' class=" w-4 h-4"/>
            <p> 2021 <a href="#"> Mosafir.ma.</a> All rights reserved</p>
        </div>
        
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
            icons:[{name:'facebook'},{name:'twitter'},{name:'instagram'}],

            homeItems:[{name:'Home'},{name:'Trips'},{name:'About'},{name:'Features'}],
            tripsItems:[{name:'Trips'},{name:'Cities guide'},{name:'Book trips'},{name:'FAQs'}],
            contactItems:[{name:'Contact'},{name:'+212 6 99 86 92 94'},{name:'contact@mosafir.ma'}],
        }
    }
}
</script>