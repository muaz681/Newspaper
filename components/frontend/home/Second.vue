<template>
    <div class="grid grid-cols-12 gap-4 lg:px-9 px-0 py-9">
			<!-- Left Section -->
			<div class="lg:col-span-9 col-span-12">
				<div class="grid grid-cols-12 gap-3">
					<div v-for="n in 12"
        				:key="n" class="col-span-12 lg:col-span-4">
						<SinglePost/>
					</div>
				</div>
			</div>
			<!-- Right Section -->
			<div class="lg:col-span-3 col-span-12">
				<div class="grid grid-cols-12 gap-1">
					<!-- Tab Section -->
					<div class="col-span-12">
						<div class="grid grid-cols-12" id="accordion-collapse" data-accordion="collapse">
							<!-- Tab -->
							<div class="col-span-12">
								<div class="border-solid border-2 border-red-600">
									<div class="bg-red-600 py-1">
										<h5 class="text-2xl font-medium tracking-tight text-white font-sans text-center font-sans">
											সর্বশেষ
										</h5>
									</div>
									<div class="grid grid-cols-12 bg-violet-200 p-2 divide-y divide-zinc-300 max-h-96 overflow-y-scroll">
										<div v-for="n in 10"
        									:key="n" 
											class="col-span-12 lg:col-span-12 py-2 lg:px-0 px-1"
										>
											<SingleListImage/>
										</div>
										
									</div>
									
								</div>
								
							</div>
							<!-- <div class="col-span-6">
								
							</div> -->
							<!-- Archive Section -->
							<div class="col-span-12">
								<div class="bg-red-600 py-1">
										<h5 class="text-2xl font-medium tracking-tight text-white font-sans text-center">
											<a href="#" class="font-sans">
												আর্কাইভ
											</a>
										</h5>
									</div>
							</div>
						</div>
					</div>
					<!-- Add section -->
					<div class="col-span-1 py-4">
						<!-- Ad Section -->
						<SquareAdd/>
					</div>
				</div>
			</div>
		</div>
</template>
<script>
import SinglePost from "../widgets/SinglePost.vue";
import SingleListImage from "../widgets/SingleListImage.vue";
import SquareAdd from "../widgets/SquareAdd.vue";
	export default {
    components: { SinglePost, SingleListImage, SquareAdd }
}
</script>