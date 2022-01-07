<template>
    <div class="rounded-2xl h-12 flex items-center justify-center cursor-pointer">
       <span v-if="iconsName"><myicons :name="iconsName" class="text-white"></myicons></span> 
       <span>{{text}}</span>
        
    </div>
</template>
<script>
import Myicons from '@/components/Myicons.vue'
export default {
    name:'MyButton',
    components:Myicons,
    props:{
        text:      {type:String,required: false},
        iconsName: {type: String,required: false}

    }

}
</script>