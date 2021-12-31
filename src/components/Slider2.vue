<template>
    <div>
        <div class="flex my-16 text-center ">
            <div v-for="customer in customers" :key="customer.id" class="w-96 h-56 my-3 bg-white mx-4 rounded-3xl shadow-2xl ">
                                                                                                       <!-- style="box-shadow: 5px 5px 10px 10px #EDEDED;" -->
            <h1 class="mt-12 text-base font-medium">{{customer.title}}</h1>
            <div class="flex items-center justify-center ">
                <myicons name="star" class="text-yellow-400"></myicons>
                <myicons name="star" class="text-yellow-400"></myicons>
                <myicons name="star" class="text-yellow-400"></myicons>
                <myicons name="star" class="text-yellow-400"></myicons>
                <myicons name="star" class="text-yellow-400"></myicons>
            </div>
            
            <p class="text-gray-400 font-medium text-base mt-4 px-10">{{customer.text}}</p>
        </div>
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
            customers :[
                {   id:1,
                    title:'Mehdi Muzabi',
                    text:'The objects visited are very interesting and complete. Truly an unforgettable experience trip with Lungo.'
                },
                 {   id:2,
                    title:'Mehdi Muzabi',
                    text:'The objects visited are very interesting and complete. Truly an unforgettable experience trip with Lungo.'
                },
                 {   id:3,
                    title:'Mehdi Muzabi',
                    text:'The objects visited are very interesting and complete. Truly an unforgettable experience trip with Lungo.'
                },
                //  {   id:4,
                //     title:'Mehdi Muzabi',
                //     text:'The objects visited are very interesting and complete. Truly an unforgettable experience trip with Lungo.'
                // },
                //  {   id:5,
                //     title:'Mehdi Muzabi',
                //     text:'The objects visited are very interesting and complete. Truly an unforgettable experience trip with Lungo.'
                // },
            ]
        }
    }
}
</script>