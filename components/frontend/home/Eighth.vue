<template>
    <div class="grid grid-cols-12 gap-4">
        <!-- left section -->
        <div class="lg:col-span-3 col-span-12">
            <!-- Heading Section -->
            <div class="grid grid-cols-6 gap-4 my-4 py-2 px-2 border-y-2 border-zinc-600">
                <div class="col-start-1 col-end-3">
                    <a href="#" class="font-normal text-black text-2xl dark:text-gray-400 font-sans">
                    স্বাস্থ্য
                    </a>
                </div>
                <div class="col-end-10 col-span-3 lg:block hidden">
                    <a href="#" class="text-gray-800 text-sm font-medium inline-flex items-center rounded mr-2 dark:bg-gray-700 dark:text-gray-300">
                        <span class="pr-2">
                            আরও পড়ুন
                        </span>
                        
                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            width="18px" height="18px" viewBox="0 0 93.934 93.934" style="enable-background:new 0 0 93.934 93.934;"
                            xml:space="preserve">
                        <g>
                            <path d="M46.967,0C21.029,0,0,21.028,0,46.967c0,25.939,21.029,46.967,46.967,46.967c25.939,0,46.967-21.027,46.967-46.967
                                C93.934,21.027,72.906,0,46.967,0z M55.953,66.295V54.301H18.652V39.633h37.303V27.639l19.326,19.328L55.953,66.295z"/>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        </svg>

                    </a>
                </div>
            </div>
            <!-- Content Section -->
            <div class="grid grid-cols-1 gap-1 divide-y divide-zinc-300 py-4">
                <div class="col-span-1">
                    <SinglePost/>
                </div>
                <div v-for="n in 2" :key="n" class="col-span-1 py-2">
                    <SingleListImage/>
                </div>
            </div>
        </div>
        <!-- Middle Section -->
        <div class="lg:col-span-6 col-span-12">
            <!-- Heading Section -->
            <div class="grid grid-cols-9 gap-4 my-4 py-2 px-2 border-y-2 border-zinc-600">
                <div class="col-start-1 col-end-3">
                    <a href="#" class="font-normal text-black text-2xl dark:text-gray-400 font-sans">
                    প্রবাস
                    </a>
                </div>
                <div class="col-start-3 col-end-9 lg:block hidden">
                    <ul class="menu-scroll overflow-auto whitespace-nowrap flex-wrap -mb-px text-sm font-medium text-center leading-8 justify-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                        <li class="mr-2 inline-block" role="presentation">
                            <button class="inline-block px-2 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 font-sans text-sm" v-on:click="toggleTabs(1)" v-bind:class="{'text-gray-600 bg-transparent': openTab !== 1, 'text-gray-600 bg-white': openTab === 1}">সকল</button>
                        </li>
                        <li class="mr-2 inline-block" role="presentation">
                            <button class="inline-block px-2 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 font-sans text-sm" v-on:click="toggleTabs(2)" v-bind:class="{'text-gray-600 bg-transparent': openTab !== 2, 'text-gray-600 bg-white': openTab === 2}">কুয়েত</button>
                        </li>
                        <li class="mr-2 inline-block" role="presentation">
                            <button class="inline-block px-2 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 font-sans text-sm" v-on:click="toggleTabs(3)" v-bind:class="{'text-gray-600 bg-transparent': openTab !== 3, 'text-gray-600 bg-white': openTab === 3}">ওমান</button>
                        </li>
                        <li class="mr-2 inline-block" role="presentation">
                            <button class="inline-block px-2 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 font-sans text-sm" v-on:click="toggleTabs(4)" v-bind:class="{'text-gray-600 bg-transparent': openTab !== 4, 'text-gray-600 bg-white': openTab === 4}">কাতার</button>
                        </li>
                        <li class="mr-2 inline-block" role="presentation">
                            <button class="inline-block px-2 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 font-sans text-sm" v-on:click="toggleTabs(5)" v-bind:class="{'text-gray-600 bg-transparent': openTab !== 5, 'text-gray-600 bg-white': openTab === 5}">মালয়েশিয়া</button>
                        </li>
                        <li class="mr-2 inline-block" role="presentation">
                            <button class="inline-block px-2 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 font-sans text-sm" v-on:click="toggleTabs(6)" v-bind:class="{'text-gray-600 bg-transparent': openTab !== 6, 'text-gray-600 bg-white': openTab === 6}">ইতালি</button>
                        </li>
                        <li class="mr-2 inline-block" role="presentation">
                            <button class="inline-block px-2 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 font-sans text-sm" v-on:click="toggleTabs(7)" v-bind:class="{'text-gray-600 bg-transparent': openTab !== 7, 'text-gray-600 bg-white': openTab === 7}">পর্তুগাল</button>
                        </li>
                        <li class="mr-2 inline-block" role="presentation">
                            <button class="inline-block px-2 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 font-sans text-sm" v-on:click="toggleTabs(8)" v-bind:class="{'text-gray-600 bg-transparent': openTab !== 8, 'text-gray-600 bg-white': openTab === 8}">স্পেন</button>
                        </li>
                        <li class="mr-2 inline-block" role="presentation">
                            <button class="inline-block px-2 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 font-sans text-sm" v-on:click="toggleTabs(9)" v-bind:class="{'text-gray-600 bg-transparent': openTab !== 9, 'text-gray-600 bg-white': openTab === 9}">সংযুক্ত আরব আমিরাত</button>
                        </li>
                        <li class="mr-2 inline-block" role="presentation">
                            <button class="inline-block px-2 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 font-sans text-sm" v-on:click="toggleTabs(10)" v-bind:class="{'text-gray-600 bg-transparent': openTab !== 10, 'text-gray-600 bg-white': openTab === 10}">যুক্তরাজ্য</button>
                        </li>
                        <li class="mr-2 inline-block" role="presentation">
                            <button class="inline-block px-2 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 font-sans text-sm" v-on:click="toggleTabs(11)" v-bind:class="{'text-gray-600 bg-transparent': openTab !== 11, 'text-gray-600 bg-white': openTab === 11}">কানাডা</button>
                        </li>
                        <li class="mr-2 inline-block" role="presentation">
                            <button class="inline-block px-2 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 font-sans text-sm" v-on:click="toggleTabs(12)" v-bind:class="{'text-gray-600 bg-transparent': openTab !== 12, 'text-gray-600 bg-white': openTab === 12}">যুক্তরাষ্ট্র</button>
                        </li>
                    </ul>
                </div>
                <div class="col-end-13 col-span-3 lg:block hidden">
                    <a href="#" class="text-gray-800 text-sm font-medium inline-flex items-center rounded mr-2 dark:bg-gray-700 dark:text-gray-300">
                        <span class="pr-2">
                            আরও পড়ুন
                        </span>
                        
                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            width="18px" height="18px" viewBox="0 0 93.934 93.934" style="enable-background:new 0 0 93.934 93.934;"
                            xml:space="preserve">
                        <g>
                            <path d="M46.967,0C21.029,0,0,21.028,0,46.967c0,25.939,21.029,46.967,46.967,46.967c25.939,0,46.967-21.027,46.967-46.967
                                C93.934,21.027,72.906,0,46.967,0z M55.953,66.295V54.301H18.652V39.633h37.303V27.639l19.326,19.328L55.953,66.295z"/>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        </svg>

                    </a>
                </div>
            </div>
            <!-- Content Section -->
            <!-- All -->
            <div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">
                <div class="grid grid-cols-2 gap-2">
                    <div v-for="n in 10" :key="n" class="lg:col-span-1 col-span-2 py-2 border-b-2 border-zinc-300">
                        <SingleListImage/>
                    </div>
                </div>
            </div>
            <!-- Kuwait -->
            <div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">
                <div class="grid grid-cols-2 gap-2">
                    <div v-for="n in 10" :key="n" class="lg:col-span-1 col-span-2 py-2 border-b-2 border-zinc-300">
                        <SingleListImage/>
                    </div>
                </div>
            </div>
            <!-- Oman -->
            <div v-bind:class="{'hidden': openTab !== 3, 'block': openTab === 3}">
                <div class="grid grid-cols-2 gap-2">
                    <div v-for="n in 10" :key="n" class="lg:col-span-1 col-span-2 py-2 border-b-2 border-zinc-300">
                        <SingleListImage/>
                    </div>
                </div>
            </div>
            <!-- Qatar -->
            <div v-bind:class="{'hidden': openTab !== 4, 'block': openTab === 4}">
                <div class="grid grid-cols-2 gap-2">
                    <div v-for="n in 10" :key="n" class="lg:col-span-1 col-span-2 py-2 border-b-2 border-zinc-300">
                        <SingleListImage/>
                    </div>
                </div>
            </div>
            <!-- Malaysia -->
            <div v-bind:class="{'hidden': openTab !== 5, 'block': openTab === 5}">
                <div class="grid grid-cols-2 gap-2">
                    <div v-for="n in 10" :key="n" class="lg:col-span-1 col-span-2 py-2 border-b-2 border-zinc-300">
                        <SingleListImage/>
                    </div>
                </div>
            </div>
            <!-- Itali -->
            <div v-bind:class="{'hidden': openTab !== 6, 'block': openTab === 6}">
                <div class="grid grid-cols-2 gap-2">
                    <div v-for="n in 10" :key="n" class="lg:col-span-1 col-span-2 py-2 border-b-2 border-zinc-300">
                        <SingleListImage/>
                    </div>
                </div>
            </div>
            <!-- Partigul -->
            <div v-bind:class="{'hidden': openTab !== 7, 'block': openTab === 7}">
                <div class="grid grid-cols-2 gap-2">
                    <div v-for="n in 10" :key="n" class="lg:col-span-1 col-span-2 py-2 border-b-2 border-zinc-300">
                        <SingleListImage/>
                    </div>
                </div>
            </div>
            <!-- Spain -->
            <div v-bind:class="{'hidden': openTab !== 8, 'block': openTab === 8}">
                <div class="grid grid-cols-2 gap-2">
                    <div v-for="n in 10" :key="n" class="lg:col-span-1 col-span-2 py-2 border-b-2 border-zinc-300">
                        <SingleListImage/>
                    </div>
                </div>
            </div>
            <!-- UAE -->
            <div v-bind:class="{'hidden': openTab !== 9, 'block': openTab === 9}">
                <div class="grid grid-cols-2 gap-2">
                    <div v-for="n in 10" :key="n" class="lg:col-span-1 col-span-2 py-2 border-b-2 border-zinc-300">
                        <SingleListImage/>
                    </div>
                </div>
            </div>
            <!-- UK -->
            <div v-bind:class="{'hidden': openTab !== 10, 'block': openTab === 10}">
                <div class="grid grid-cols-2 gap-2">
                    <div v-for="n in 10" :key="n" class="lg:col-span-1 col-span-2 py-2 border-b-2 border-zinc-300">
                        <SingleListImage/>
                    </div>
                </div>
            </div>
            <!-- Canada -->
            <div v-bind:class="{'hidden': openTab !== 11, 'block': openTab === 11}">
                <div class="grid grid-cols-2 gap-2">
                    <div v-for="n in 10" :key="n" class="lg:col-span-1 col-span-2 py-2 border-b-2 border-zinc-300">
                        <SingleListImage/>
                    </div>
                </div>
            </div>
            <!-- USA -->
            <div v-bind:class="{'hidden': openTab !== 12, 'block': openTab === 12}">
                <div class="grid grid-cols-2 gap-2">
                    <div v-for="n in 10" :key="n" class="lg:col-span-1 col-span-2 py-2 border-b-2 border-zinc-300">
                        <SingleListImage/>
                    </div>
                </div>
            </div>
            <!-- Country end -->
        
        </div>
        <!-- Right Section -->
        <div class="lg:col-span-3 col-span-12">
            <!-- Heading Section -->
            <div class="grid grid-cols-6 gap-4 my-4 py-2 px-2 border-y-2 border-zinc-600">
                <div class="col-start-1 col-end-6">
                    <a href="#" class="font-normal text-black text-2xl dark:text-gray-400 font-sans">
                    আইন-আদালত
                    </a>
                </div>
                <div class="col-end-10 col-span-3 lg:block hidden">
                    <a href="#" class="text-gray-800 text-sm font-medium inline-flex items-center rounded mr-2 dark:bg-gray-700 dark:text-gray-300">
                        <span class="pr-2">
                            আরও পড়ুন
                        </span>
                        
                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            width="18px" height="18px" viewBox="0 0 93.934 93.934" style="enable-background:new 0 0 93.934 93.934;"
                            xml:space="preserve">
                        <g>
                            <path d="M46.967,0C21.029,0,0,21.028,0,46.967c0,25.939,21.029,46.967,46.967,46.967c25.939,0,46.967-21.027,46.967-46.967
                                C93.934,21.027,72.906,0,46.967,0z M55.953,66.295V54.301H18.652V39.633h37.303V27.639l19.326,19.328L55.953,66.295z"/>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        </svg>

                    </a>
                </div>
            </div>
            <!-- Content Section -->
            <div class="grid grid-cols-1 gap-1 divide-y divide-zinc-300 py-4">
                <div class="col-span-1">
                    <SinglePost/>
                </div>
                <div v-for="n in 2" :key="n" class="col-span-1 py-2">
                    <SingleListImage/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ListItem from "../widgets/ListItem.vue";
import SingleListImage from "../widgets/SingleListImage.vue";
import SinglePost from "../widgets/SinglePost.vue";
export default {
    components: { ListItem, SingleListImage, SinglePost },
	name: "pink-tabs",
    data() {
        return {
			openTab: 1
		};
    },
	methods: {
    toggleTabs: function(tabNumber){
      this.openTab = tabNumber
    }
  }
};
</script>