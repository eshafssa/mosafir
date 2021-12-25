<template>
  <div class="" >
    <div style="background-image: url('img/Bus.png'); background-size:cover; height:849px">
      <my-header/>
      <div class="pt-20 pb-20 px-28 text-white text-9xl font-thin" style="width:750px;font-size: 450%;">
        Your Travel Start from here<span class="text-myGreen">.</span>
      </div>
      <div  class="pt-21 pb-16 px-28 text-white opacity-75 " style="width:645px;font-size:170%;">
        Find your Destination over <span class="text-myGreen">16000+</span> Trips & Explore amazing Cities for a perfect day
      </div>
      <div class="flex items-center px-5 mx-28 py-5  mt-10  bg-white border rounded-2xl  h-20" style="width:35.5%">
        <div>
          Depart
          <div class="flex items-center text-gray-400 text-base font-semibold mt-1">
            <myicons name='localisation' class="px-1 cursor-pointer"></myicons>
            <input type="text" name="" id="" value="Tetouan" class="w-20 outline-none">
            <myicons name='down' class="px-4 cursor-pointer"></myicons>
          </div>
        </div>
        <div class="ml-4 mr-10 w-0.5 h-11 bg-gray-400">  </div>
        <div>
          Destination
          <div  class="flex items-center text-gray-400 text-base font-semibold mr-5 mt-1">
            <myicons name='localisation' class="px-1 cursor-pointer"></myicons> 
            <input type="text" name="" id="" value="Casablanca" class="w-20 outline-none">
            <myicons name='down' class="px-4 cursor-pointer "></myicons>
          </div>
        </div>
        <div class="p-7 bg-myGreen w-12 rounded-2xl h-12 flex items-center justify-center cursor-pointer">
          <myicons name='search' class="text-white"/>
        </div>
      </div>
    </div>
    <div  class="px-28">
      <h1 class="text-myBlue text-5xl mt-28 mb-14">Explore Morocco<span class="text-myGreen">.</span></h1>
      <div class="flex items-center justify-between mb-14">
        <div class="text-gray-500 font-semibold text-lg  w-5/12">
          Many categories are presented, each containing trip relevant to the main category and ready for you to explore.
        </div>
        <div class="flex ">
          <div class="bg-gray-200 w-12  rounded-2xl h-12 flex items-center justify-center cursor-pointer mr-4">
            <myicons name='left' class="text-white"/>
          </div>
          <div class="bg-myGreen w-12 rounded-2xl h-12 flex items-center justify-center cursor-pointer">
            <myicons name='right' class="text-white"/>
          </div>
        </div>
      </div>
      <div>
        <my-slider/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MyHeader from '@/components/MyHeader.vue'
import Myicons from '@/components/Myicons.vue'
import MySlider from '@/components/MySlider.vue'
export default {
  name: 'Home',
  components: {
    Myicons,
    MyHeader,
    MySlider,
    
    
  }
}
</script>
