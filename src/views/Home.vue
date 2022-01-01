<template>
  <div class="" >
    <div style="background-image: url('img/Bus.png'); background-size:cover; height:849px">
      <my-header/>
      <div class="pt-20 pb-20 px-28 text-white text-9xl font-thin" style="width:750px;font-size: 450%;">
        Your Travel Start from here<span class="text-Green">.</span>
      </div>
      <div  class="pt-21 pb-16 px-28 text-white opacity-75 " style="width:645px;font-size:170%;">
        Find your Destination over <span class="text-Green">16000+</span> Trips & Explore amazing Cities for a perfect day
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
        <div class="p-7 bg-Green w-12 rounded-2xl h-12 flex items-center justify-center cursor-pointer">
          <myicons name='search' class="text-white"/>
        </div>
      </div>
    </div>
    <div  class="px-28">
      <h1 class="text-Blue text-5xl mt-28 mb-14">Explore Morocco<span class="text-Green">.</span></h1>
      <div class="flex items-center justify-between mb-14">
        <div class="text-gray-500 font-semibold text-lg  w-5/12">
          Many categories are presented, each containing trip relevant to the main category and ready for you to explore.
        </div>
        <div class="flex ">
          <div class="bg-gray-200 w-12  rounded-2xl h-12 flex items-center justify-center cursor-pointer mr-4">
            <myicons name='left' class="text-white"/>
          </div>
          <div class="bg-Green w-12 rounded-2xl h-12 flex items-center justify-center cursor-pointer">
            <myicons name='right' class="text-white"/>
          </div>
        </div>
      </div>
      <div>
        <my-slider/>
      </div>
      <div class="flex my-36">  
        <div class="relative rounded-lg bg-black" style="width:450px; height:350px">
          <img src="img/Bus.png" alt="" class="rounded-lg" style="width:450px; height:350px">
          <div class="absolute top-52  w-52 h-56 " style="right: 300px;z-index: -1;">
            <img src="img/Bus.png" class="w-52 h-56 " alt="">
          </div>
        </div>
        <div>
          <h2 class="pt-5 pb-12 px-28 text-Blue text-9xl font-thin" style="width:750px;font-size: 300%;">Find details about your Trip in no time<span class="text-Green">.</span></h2>
          <p class="px-28 pb-14 text-gray-500 text-lg" style="width:645px">Start by exploring trips or destinations. Check details, Choose your trip. You can also have favorites trips. Its all for free </p>
          <div class="flex px-28">
            <my-button class="w-40 text-white  bg-Green mr-1" text="Watch Video"></my-button>
            <my-button class="w-40 text-Green bg-white border-2 border-Green  ml-1" text="Our Featues"></my-button>
          </div>
        </div>
      </div>
      <div class="my-16">
        <h1 class="text-center text-Blue text-6xl  font-thin my-8 ">Features</h1>
        <p class="text-center text-gray-600 text-xl font-normal  ">Isn't just features, we give all the best for you</p>
      </div>
      <div  class="flex items-center justify-center  my-3">
        <div v-for="item in features" :key="item.id" class="w-96 h-56  bg-Blue mx-4 rounded-3xl">
          <h1 class="text-white text-center  pt-9 pb-5 text-2xl">{{item.title}}</h1>
          <p class="text-white text-center px-4 pb-5  text-xl">{{item.text}}</p>
          <div v-if="item.button" class="flex  items-center justify-center "> 
            <my-button class=" w-32  h-auto p-1 text-white  bg-Green" text="Coming soon"></my-button>
          </div>
       </div>
      </div>
      <div class="text-Blue text-center text-5xl font-normale my-20"><a href="#">Mosafir.ma</a> in the News</div>
      <div class="flex items-center justify-center  mb-20">
        <div v-for="(image,index) in imges" :key="index" class="mx-8">
          <img :src="image.src" alt="">
        </div>
      </div>  
      <div class="flex items-center justify-center">
        <my-button class="w-36  h-auto px-4 py-3 text-white bg-Green" text="See all Articales"></my-button>
      </div>
       <div class="text-center ">
        <h1 class="text-Blue text-5xl  font-thin my-8 ">What Our Customers Say ?</h1>
        <p class="text-gray-400 text-2xl font-normal mx-auto" style="width:670px">Let's see what those who are already using our services say and enjoy their experience.</p>
      </div>
      <slider-2/>
      <div class="flex items-center  mb-10">
        <div class="h-1 bg-gray-300 mr-12" style="width:1100px;">
          <div class="h-1 bg-Green mr-12 w-2/5 " style=""></div>
        </div>
         <div class="flex ">
          <div class="bg-gray-200 w-12  rounded-2xl h-12 flex items-center justify-center cursor-pointer mr-4">
            <myicons name='left' class="text-white"/>
          </div>
          <div class="bg-Green w-12 rounded-2xl h-12 flex items-center justify-center cursor-pointer">
            <myicons name='right' class="text-white"/>
          </div>
        </div>
      </div>
      <div class="my-32 rounded-2xl  " style="background-image: url('img/Image.png'); background-size:cover;height:430px">
        <div></div>
        <h1 class="py-16 px-24 text-white text-5xl leading-50 " style="width:600px; ">Subscribe Our Best Newsletters<span>.</span></h1>
        <div class="rounded-2xl bg-white mx-24 w-100" >
          <div class="flex items-center justify-between p-3">
            <input type="text" class="text-base font-semibold outline-none px-6 text-gray-400" name="" id="" placeholder="youremail@mail.com">
            <my-button class="bg-Green p-4 text-white  w-40 font-semibold" text="Subscribe Now" ></my-button>
          </div>
        </div>
      </div>
    </div>
    <div>
      <Footer/>
    </div>
   <myicons name="facebook2"  class="flex items-center justify-center text-Green  rounded-full"/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import MyHeader from '@/components/MyHeader.vue'
import Myicons from '@/components/Myicons.vue'
import MySlider from '@/components/MySlider.vue'
import MyButton from '@/components/MyButton.vue'
import Slider2 from '@/components/Slider2.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'Home',
  components: {
    Myicons,
    MyHeader,
    MySlider,
    MyButton,
    Slider2,
    Footer
    
    
    

  },
  data(){
    return{
      features:[
        {id:1, title:'Explore Places', text:'Know more about all the exciting Morocco Cities and touristic attractions.',button:false},
        {id:2, title:'Find Trips', text:'Find & track your destination details over 1600+.',button:false},
        {id:3, title:'Book Trips', text:'Easy, fast and secure booking! New deals listed every day.',button:true}
        ],
      imges:[
        {src:'img/akhbarona.png'},
        {src:'img/Hespress.png'},
        {src:'img/pressT.png'},
        {src:'img/CNN.png'},
        {src:'img/maghress.png'},
        {src:'img/2M.png'}
      ]
      
    }
  },
//   methods:{
//     matrix(){
//       for(var i=0; i<9; i++) {
//         console.log(".")
//       for(var j=0; j<9; j++) {
//           console.log(".")

//       }
// }
//     }
//   }
}
</script>
