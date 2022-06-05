<template>
  <div class="grid grid-cols-12 gap-4">
    <div class="col-span-12">
      <div class="slider">
        <div class="slide-track">
          <div v-for="n in 10" :key="n" class="slide">
            <NuxtLink to="" class="flex flex-row items-center md:flex-row md:max-w-xl">
              <div
                class="flex flex-col justify-between leading-normal border-2 border-r-indigo-500"
              >
                <p
                  class="font-normal text-sm text-black dark:text-gray-400 line-clamp-2 font-sans"
                >
                  মিরপুরে বকেয়া বেতনের দাবিতে গার্মেন্টস শ্রমিকদের বিক্ষোভ
                </p>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
      <!--  -->
      <!-- <div
        class="p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg text-center dark:bg-blue-200 dark:text-blue-800"
        role="alert"
      >
        <span class="font-medium">Info alert!</span> Change a few things up and try
        submitting again.
      </div> -->
      <!--  -->
    </div>
  </div>
</template>
<script>
export default {};
</script>
