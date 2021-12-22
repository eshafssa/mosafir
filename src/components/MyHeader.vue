<template>
    <div>
        <div>
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
        </div>
    </div>
</template>
<script>
export default {
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