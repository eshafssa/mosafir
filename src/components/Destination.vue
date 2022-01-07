<template>
    <div class="flex flex-col  lg:flex-row items-center px-5 mx-28 py-5  mt-10  bg-white border rounded-2xl h-64 md:h-64  lg:h-20 " >
        <div class="flex w-full  lg:w-5/6  flex-col lg:flex-row items-center">
            <div class="flex flex-1 flex-col mb-8 lg:mb-0 " >
                Depart
                <div class="flex items-center text-gray-400 text-base font-semibold mt-1">
                    <myicons name='localisation' class="px-1 cursor-pointer"></myicons>
                    <input type="text" name="" id="" value="Tetouan" class="w-full outline-none">
                    <myicons name='down' class="px-4 cursor-pointer"></myicons>
                </div>
            </div>
            <div class="hidden lg:block mx-8 w-0.5 h-11 bg-gray-400">  </div>
            <div class="flex flex-1 flex-col mb-8 lg:mb-0  "> 
                Destination
                <div  class="flex items-center text-gray-400 text-base font-semibold mt-1">
                    <myicons name='localisation' class="px-1 cursor-pointer"></myicons> 
                    <input type="text" name="" id="" value="Casablanca" class="w-full outline-none">
                    <myicons name='down' class="px-4 cursor-pointer "></myicons>
                </div>
            </div>
        </div>
        <!-- button search -->
        <div class="p-7 bg-Green w-full rounded-2xl h-12 flex flex-1 items-center justify-center cursor-pointer">
            <myicons name='search' class="text-white"/>
        </div>
    </div>
</template>
<script>
import Myicons from '@/components/Myicons.vue' 
export default {
    components:{
    Myicons,

    },
}
</script>