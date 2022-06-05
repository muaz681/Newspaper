<template>
    <div class="container mx-auto lg:px-16 px-0">
        <div class="grid grid-cols-12 gap-4 lg:px-9 px-4 py-9">
            <!-- Left Section -->
            <div class="lg:col-span-9 col-span-12">
                <!-- Heading Section -->
                <div class="grid grid-cols-12">
                    <div class="col-span-12">
                        <a href="#" class="font-normal text-black text-4xl dark:text-gray-400 font-sans">
                            জাতীয়
                        </a>
                    </div>
                    <div class="col-span-12 lg:py-2 pb-2 border-y-2 border-zinc-600">
                        <div class="lg:flex sm:inline overflow-auto whitespace-nowrap tag-scroll flex-row items-center py-3">
                            <a href="" class="mr-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-red-700 text-white">
                                নিউ মার্কেটে সংঘর্ষ
                            </a>
                            <a href="" class="mr-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-red-700 text-white">
                                বাজার দর
                            </a>
                            <a href="" class="mr-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-red-700 text-white">
                                যানজট
                            </a>
                            <a href="" class="mr-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-red-700 text-white">
                                মাহে রমজান 
                            </a>
                            <a href="" class="mr-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-red-700 text-white">
                                চাকরির-খবর
                            </a>
                        </div>
                    </div>
                </div>
                    
                <!-- Content Section -->
                <!-- Top -->
                <div class="grid grid-cols-12 gap-4 py-4 border-b-2 border-neutral-300">
                    <!-- Left section -->
                    <div class="lg:col-span-8 col-span-12">
                        <SinglePost/>
                    </div>
                    <!-- Right Section -->
                    <div class="lg:col-span-4 col-span-12">
                        <div class="grid grid-cols-12">
                            <div v-for="n in 2" :key="n" class="col-span-12">
                                <SinglePost/>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Bottom -->
                <div class="grid grid-cols-12 gap-3 py-4">
                    <div v-for="n in 12" :key="n" class="lg:col-span-4 col-span-12">
                        <SinglePost/>
                    </div>
                </div>
            </div>
            <!-- Right Section -->
            <div class="lg:col-span-3 col-span-12">
                <div class="grid grid-cols-12 gap-2">
                    <div class="col-span-12">
                        <!-- Ad Section -->
                        <div class="hidden lg:block">
                            <img src="https://tpc.googlesyndication.com/simgad/5460716425569058327" class="object-cover w-full h-auto" alt="..." />
                        </div>
                    </div>
                    <div class="col-span-12">
                        <!-- Heading section -->
                        <div class="py-2 border-y-2 border-neutral-300">
                            <span class="font-normal text-gray-600 text-4xl dark:text-gray-400 font-sans">
                                এই সপ্তাহের পাঠকপ্রিয়
                            </span>
                        </div>
                        <!-- Content Section -->
                        <div class="grid grid-cols-1 p-2 divide-y divide-zinc-300">
                            <div v-for="n in 5" :key="n" class="col-span-1 py-2">
                                <SingleListImage/>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-1">
            <div class="col-span-1">
                
            </div>
        </div>
    </div>
</template>
<script>
import SingleListImage from "./frontend/widgets/SingleListImage.vue";
import SinglePost from "./frontend/widgets/SinglePost.vue";
    export default{
        components: { SingleListImage, SinglePost },
    }
</script>