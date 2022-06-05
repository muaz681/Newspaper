<template>
    <div class="grid grid-cols-12 gap-4">
		<div class="col-span-12">
			<!-- Heading Section -->
			<div class="grid grid-cols-9 gap-4 my-4 py-2 px-2 border-y-2 border-zinc-600">
				<div class="col-start-1 col-end-3">
					<a href="#" class="font-normal text-black text-2xl dark:text-gray-400 font-sans">
					বিনোদন
					</a>
				</div>
				<div class="col-start-3 col-end-9 lg:block hidden">
					<ul class="flex flex-wrap -mb-px text-sm font-medium text-center leading-8 justify-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
						<li class="mr-2" role="presentation">
							<button class="inline-block px-2 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 font-sans text-sm" v-on:click="toggleTabs(1)" v-bind:class="{'text-gray-600 bg-transparent': openTab !== 1, 'text-gray-600 bg-white': openTab === 1}">সকল</button>
						</li>
						<li class="mr-2" role="presentation">
							<button class="inline-block px-2 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 font-sans text-sm" v-on:click="toggleTabs(2)" v-bind:class="{'text-gray-600 bg-transparent': openTab !== 2, 'text-gray-600 bg-white': openTab === 2}">হলিউড</button>
						</li>
						<li class="mr-2" role="presentation">
							<button class="inline-block px-2 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 font-sans text-sm" v-on:click="toggleTabs(3)" v-bind:class="{'text-gray-600 bg-transparent': openTab !== 3, 'text-gray-600 bg-white': openTab === 3}">বলিউড</button>
						</li>
						<li class="mr-2" role="presentation">
							<button class="inline-block px-2 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 font-sans text-sm" v-on:click="toggleTabs(4)" v-bind:class="{'text-gray-600 bg-transparent': openTab !== 4, 'text-gray-600 bg-white': openTab === 4}">ঢালিউড</button>
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
			<div v-bind:class="{'hidden': openTab !== 1, 'block': openTab === 1}">
				<div class="grid grid-cols-12 gap-2 py-4">
					<!-- 1st part -->
					<div class="lg:col-span-3 col-span-12 lg:order-1 order-2">
						<!-- Content Section -->
						<div class="grid grid-cols-1 gap-1 divide-y divide-zinc-300 py-4">
							<div class="col-span-1">
								<SinglePost/>
							</div>
							<div v-for="n in 4" :key="n" class="col-span-1 py-2">
								<SingleListImage/>
							</div>
						</div>
					</div>
					<!-- 2nd Part -->
					<div class="lg:col-span-6 col-span-12 lg:order-2 order-1">
						<div class="grid grid-cols-2 gap-1 py-4">
							<div class="col-span-2">
								<SinglePostOverlyTitle/>
							</div>
							<div v-for="n in 2" :key="n" class="lg:col-span-1 col-span-2">
								<SinglePostOverlyTitle/>
							</div>
						</div>
					</div>
					<!-- 3rd part -->
					<div class="lg:col-span-3 col-span-12 lg:order-3 order-3">
						<!-- Content Section -->
						<div class="grid grid-cols-1 gap-1 divide-y divide-zinc-300 py-4">
							<div class="col-span-1">
								<SinglePost/>
							</div>
							<div v-for="n in 4" :key="n" class="col-span-1 py-2">
								<SingleListImage/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div v-bind:class="{'hidden': openTab !== 2, 'block': openTab === 2}">
				<div class="grid grid-cols-12 gap-2 py-4">
					<!-- 1st part -->
					<div class="lg:col-span-3 col-span-12 lg:order-1 order-2">
						<!-- Content Section -->
						<div class="grid grid-cols-1 gap-1 divide-y divide-zinc-300 py-4">
							<div class="col-span-1">
								<SinglePost/>
							</div>
							<div v-for="n in 4" :key="n" class="col-span-1 py-2">
								<SingleListImage/>
							</div>
						</div>
					</div>
					<!-- 2nd Part -->
					<div class="lg:col-span-6 col-span-12 lg:order-2 order-1">
						<div class="grid grid-cols-2 gap-1 py-4">
							<div class="col-span-2">
								<SinglePostOverlyTitle/>
							</div>
							<div v-for="n in 2" :key="n" class="lg:col-span-1 col-span-2">
								<SinglePostOverlyTitle/>
							</div>
						</div>
					</div>
					<!-- 3rd part -->
					<div class="lg:col-span-3 col-span-12 lg:order-3 order-3">
						<!-- Content Section -->
						<div class="grid grid-cols-1 gap-1 divide-y divide-zinc-300 py-4">
							<div class="col-span-1">
								<SinglePost/>
							</div>
							<div v-for="n in 4" :key="n" class="col-span-1 py-2">
								<SingleListImage/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div v-bind:class="{'hidden': openTab !== 3, 'block': openTab === 3}">
				<div class="grid grid-cols-12 gap-2 py-4">
					<!-- 1st part -->
					<div class="lg:col-span-3 col-span-12 lg:order-1 order-2">
						<!-- Content Section -->
						<div class="grid grid-cols-1 gap-1 divide-y divide-zinc-300 py-4">
							<div class="col-span-1">
								<SinglePost/>
							</div>
							<div v-for="n in 4" :key="n" class="col-span-1 py-2">
								<SingleListImage/>
							</div>
						</div>
					</div>
					<!-- 2nd Part -->
					<div class="lg:col-span-6 col-span-12 lg:order-2 order-1">
						<div class="grid grid-cols-2 gap-1 py-4">
							<div class="col-span-2">
								<SinglePostOverlyTitle/>
							</div>
							<div v-for="n in 2" :key="n" class="lg:col-span-1 col-span-2">
								<SinglePostOverlyTitle/>
							</div>
						</div>
					</div>
					<!-- 3rd part -->
					<div class="lg:col-span-3 col-span-12 lg:order-3 order-3">
						<!-- Content Section -->
						<div class="grid grid-cols-1 gap-1 divide-y divide-zinc-300 py-4">
							<div class="col-span-1">
								<SinglePost/>
							</div>
							<div v-for="n in 4" :key="n" class="col-span-1 py-2">
								<SingleListImage/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div v-bind:class="{'hidden': openTab !== 4, 'block': openTab === 4}">
				<div class="grid grid-cols-12 gap-2 py-4">
					<!-- 1st part -->
					<div class="lg:col-span-3 col-span-12 lg:order-1 order-2">
						<!-- Content Section -->
						<div class="grid grid-cols-1 gap-1 divide-y divide-zinc-300 py-4">
							<div class="col-span-1">
								<SinglePost/>
							</div>
							<div v-for="n in 4" :key="n" class="col-span-1 py-2">
								<SingleListImage/>
							</div>
						</div>
					</div>
					<!-- 2nd Part -->
					<div class="lg:col-span-6 col-span-12 lg:order-2 order-1">
						<div class="grid grid-cols-2 gap-1 py-4">
							<div class="col-span-2">
								<SinglePostOverlyTitle/>
							</div>
							<div v-for="n in 2" :key="n" class="lg:col-span-1 col-span-2">
								<SinglePostOverlyTitle/>
							</div>
						</div>
					</div>
					<!-- 3rd part -->
					<div class="lg:col-span-3 col-span-12 lg:order-3 order-3">
						<!-- Content Section -->
						<div class="grid grid-cols-1 gap-1 divide-y divide-zinc-300 py-4">
							<div class="col-span-1">
								<SinglePost/>
							</div>
							<div v-for="n in 4" :key="n" class="col-span-1 py-2">
								<SingleListImage/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import SinglePostOverlyTitle from "../widgets/SinglePostOverlyTitle.vue";
import ListItem from "../widgets/ListItem.vue";
import SingleListImage from "../widgets/SingleListImage.vue";
import SinglePost from "../widgets/SinglePost.vue";
export default {
	components: { SinglePostOverlyTitle, ListItem, SingleListImage, SinglePost },
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