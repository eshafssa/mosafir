<template>
<div>
      <!-- <div class="flex ">
          <div class="bg-gray-200 w-12  rounded-2xl h-12 flex items-center justify-center cursor-pointer mr-4">
          </div>
          <div @click="next" class="bg-Green w-12 rounded-2xl h-12 flex items-center justify-center cursor-pointer">
          </div>
        </div> -->
        <div class="flex mb-36 overflow-hidden " style="height:340px; width: 1311px;" :style="{transform:`translateX(${index}px)`}">
            <div v-for="(item,index) in sources" :key='index' class="bg-Blue mr-6 p-6 rounded-xl" >

                    <img  :src="item.source" alt="" class="rounded-xl w-96 h-60">
                    <div class="flex items-center justify-evently my-3">
                        <button v-for="item in cities" :key='item.id' class="text-white bg-lightBleu hover:bg-Blue rounded-lg mr-3  py-2 px-4">{{item.city}}</button>
                    </div>
            </div>
        </div>
</div>
</template>
<script>
export default {
    name:'MySlider',
    data(){
       return{
           index:0,
            cities:[
                {id:1, city:'Casablanca'},
                {id:2, city:'Rabat'},
                {id:3, city:'Tanger'},
               
            ],
            sources:[
                {source:'img/casa.jpg'},
                {source:'img/alhoceima.jpeg'},
                {source:'img/casti.jpg'},
                {source:'img/fes.jpg'},
                {source:'img/marakesh.jpg'},
            ]
       }
    },
    methods:{
        next(){
            console.log(this.index)
            if(this.index === -1311){
                this.index=0;
            }
            else{
                this.index-= 655.5;
            }
        }
    }
}
</script>