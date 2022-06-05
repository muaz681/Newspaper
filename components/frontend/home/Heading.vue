<template>
    <div class="grid grid-cols-12 lg:gap-4 gap-2 lg:px-9 px-0">
		<!-- 1st section -->
			<div class="col-span-12 lg:col-span-3 order-2 lg:order-1">
				<div class="grid grid-cols-12 lg:bg-violet-200 bg-transparent lg:p-2 p-0 lg:divide-y lg:divide-zinc-300 divide-transparent">
					<div v-for="n in 3"
        				:key="n"
						class="col-span-12 lg:px-0 px-1 py-2"
					>
						<SingleListImage/>
					</div>
				</div>
				<!-- Ad Section -->
				<SquareAdd/>
			</div>
			<!-- 2nd section -->
			<div class="col-span-12 lg:col-span-6 order-1 lg:order-2">
				<div class="grid grid-cols-12 lg:pt-0 pt-2">
					<div class="col-span-12">
							<SinglePostWithSub/>
					</div>
				</div>
				<div class="grid grid-cols-12 gap-2">
					<div v-for="n in 2"
        				:key="n" class="col-span-12 lg:col-span-6">
						<SingleListImage/>
					</div>
				</div> 
			</div>
			<!-- 3rd section -->
			<div class="col-span-12 lg:col-span-3 order-3 lg:order-3">
				<div class="grid grid-cols-1 gap-1">
					<div class="col-span-1">
						<div class="mb-4">
							<a href="#" class="block max-w-sm">
								<img src="https://cdn.dhakapost.com/media/imgAll/BG/2022March/ramadan-banner-20220329132724.png" class="object-cover w-full" alt="">
							</a>
							<a href="#" class="block max-w-sm text-center py-3 bg-slate-50">
								<p class="font-normal text-xs text-gray-700 dark:text-gray-400 font-sans">ঢাকা ও তার পার্শ্ববর্তী এলাকার জন্য প্রযোজ্য</p>
								<p class="font-normal text-lg text-gray-700 dark:text-gray-400 font-sans">সেহরির শেষ সময় - ০৪:০৫ মিনিট</p>
							</a>
							<a href="#" class="block max-w-sm">
								<img src="https://cdn.dhakapost.com/media/imgAll/BG/2022March/maxpro-banner-20220329132717.png" class="object-cover w-full" alt="">
							</a>
						</div>
						
					</div>
					<div class="col-span-1 border-y-2 border-zinc-600">
						<div class="grid grid-cols-6 gap-4 py-2">
							<div class="col-start-1 col-end-3">
								<a href="#" class="font-normal text-black text-2xl dark:text-gray-400 font-sans">
								মতামত
								</a>
							</div>
							<div class="col-end-8 col-span-3 lg:block hidden">
								<a href="#" class="text-gray-800 text-sm font-medium inline-flex items-center rounded mr-2 dark:bg-gray-700 dark:text-gray-300">
									<span class="pr-2 font-sans">
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
					</div>
					<div class="col-span-1">
						<a href="#" class="flex items-center space-x-4">
							<div class="flex-shrink-0">
								<img class="w-20 h-20 rounded-full" src="https://cdn.dhakapost.com/media/setup/author/anowar-khasru-parvez-20210815130950.jpg" alt="Neil image">
							</div>
							<div class="flex-1 min-w-0">
								<p class="font-normal text-black text-base dark:text-gray-400 line-clamp-2 font-sans">
									বৈশ্বিক উষ্ণায়ন ও তাপমাত্রা বৃদ্ধির কারণ কী?
								</p>
								<p class="text-sm text-gray-500 truncate dark:text-gray-400 font-sans">
									ড. আনোয়ার খসরু পারভেজ
								</p>
							</div>
						</a>
					</div>
					<div class="col-span-1">
						<!-- Ad Section -->
						<SquareAdd/>
					</div>
				</div>
			</div>
		</div>
</template>
<script>
import SingleListImage from "../widgets/SingleListImage.vue";
import SinglePostWithSub from "../widgets/SinglePostWithSub.vue";
import SquareAdd from "../widgets/SquareAdd.vue";
	export default{
    components: { SingleListImage, SinglePostWithSub, SquareAdd }
}
</script>