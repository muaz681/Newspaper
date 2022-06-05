<template>
    <div class="grid grid-cols-12 gap-4">
			<!-- 1 -->
			<div class="lg:col-span-3 col-span-12">
				<!-- Heading Section -->
				<div class="grid grid-cols-6 gap-4 my-4 py-2 px-2 border-y-2 border-zinc-600">
					<div class="col-start-1 col-end-3">
						<a href="#" class="font-normal text-black text-2xl dark:text-gray-400 font-sans">
						লাইফস্টাইল
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
			<!-- 2 -->
			<div class="lg:col-span-3 col-span-12">
				<!-- Heading Section -->
				<div class="grid grid-cols-6 gap-4 my-4 py-2 px-2 border-y-2 border-zinc-600">
					<div class="col-start-1 col-end-3">
						<a href="#" class="font-normal text-black text-2xl dark:text-gray-400 font-sans">
						তথ্যপ্রযুক্তি
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
			<!-- 3 -->
			<div class="lg:col-span-3 col-span-12">
				<!-- Heading Section -->
				<div class="grid grid-cols-6 gap-4 my-4 py-2 px-2 border-y-2 border-zinc-600">
					<div class="col-start-1 col-end-3">
						<a href="#" class="font-normal text-black text-2xl dark:text-gray-400 font-sans">
						ধর্ম
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
			<!-- 4 -->
			<div class="lg:col-span-3 col-span-12">
				<!-- Heading Section -->
				<div class="grid grid-cols-6 gap-4 my-4 py-2 px-2 border-y-2 border-zinc-600">
					<div class="col-start-1 col-end-3">
						<a href="#" class="font-normal text-black text-2xl dark:text-gray-400 font-sans">
						জবস
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
import SingleListImage from "../widgets/SingleListImage.vue";
import SinglePost from "../widgets/SinglePost.vue";
	export default {
		components: { SingleListImage, SinglePost },
	}
</script>