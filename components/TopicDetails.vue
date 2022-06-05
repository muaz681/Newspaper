<template>
<div class="container mx-auto lg:px-16 px-0">
    <!-- Heading section -->
    <div class="grid grid-cols-12 lg:px-9 px-4 py-4">
        <div class="col-span-12">
            <div>
                <!-- breadcrumbs -->
                <nav class="relative w-full flex flex-wrap items-center justify-between py-4 navbar navbar-expand-lg navbar-light">
                    <div class="container-fluid w-full flex flex-wrap items-center justify-between">
                        <nav class="bg-grey-light rounded-md w-full" aria-label="breadcrumb">
                            <ol class="list-reset flex">
                                <li><a href="#" class="text-slate-700 hover:text-gray-600">Home</a></li>
                                <li><span class="text-gray-500 mx-2">/</span></li>
                                <li><a href="#" class="text-slate-700 hover:text-gray-600">Library</a></li>
                                <li><span class="text-gray-500 mx-2">/</span></li>
                                <li><a href="#" class="text-slate-700 hover:text-gray-600">Data</a></li>
                            </ol>
                        </nav>
                    </div>
                </nav>
                <!-- Details Title -->
                <div class="flex">
                    <span class="mt-2 mr-2">
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="30px" height="30px" viewBox="0 0 122.88 105.283" enable-background="new 0 0 122.88 105.283" xml:space="preserve"><g><path fill-rule="evenodd" clip-rule="evenodd" d="M64.534,2.334l7.463,0.472c0.513-0.035,1.034-0.063,1.567-0.082L120.7,54.051 c3.183,3.465,2.819,8.945-0.69,12.076l-41.5,37c-3.037,2.709-7.527,2.838-10.707,0.541l42.466-37.861 c3.74-3.336,4.128-9.18,0.736-12.871L64.534,2.334L64.534,2.334z M53.067,3.185l45.534,49.581 c3.074,3.348,2.723,8.643-0.667,11.666l-40.089,35.744c-3.387,3.02-8.645,2.719-11.666-0.67L3.422,51.541l0.082-1.414L0,0 l51.549,3.264C52.045,3.23,52.551,3.203,53.067,3.185L53.067,3.185z M20.058,9.77c5.104,0.112,9.154,4.345,9.042,9.45 s-4.345,9.155-9.45,9.042c-5.105-0.112-9.154-4.345-9.042-9.45C10.72,13.707,14.953,9.657,20.058,9.77L20.058,9.77z M28.251,44.743 l29.426,32.062l-5.865,5.385L22.386,50.125L28.251,44.743L28.251,44.743z M41.265,33.13l29.429,32.061l-5.867,5.383L35.399,38.513 L41.265,33.13L41.265,33.13z M53.091,22.061L82.52,54.125l-5.867,5.383L47.226,27.447L53.091,22.061L53.091,22.061z"/></g></svg>
                    </span>
                    <span class="font-normal text-black text-4xl dark:text-gray-400 font-sans">
                        পর্যটক টানছে দুর্গাপুরের পাহাড়-নদী
                    </span>
                </div>
                
            </div>
        </div>
    </div>
    <!-- content section -->
    <div class="grid grid-cols-12 gap-4 lg:px-9 px-4 py-4">
        <!-- Left Section -->
        <div class="lg:col-span-3 col-span-12">
            <div class="grid grid-cols-12">
                <div class="col-span-12">
                    <!-- Socail share -->
                    <div class="py-4">
                        <button type="button" class="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-3 py-1 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2">
                            <svg class="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"></path></svg>
                            Share
                        </button>
                        <button type="button" class="text-white bg-[#1da1f2] rounded-lg text-sm px-3 py-1 text-center mr-2 mb-2">
                            <svg class="w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M459.4 151.7c.325 4.548 .325 9.097 .325 13.65 0 138.7-105.6 298.6-298.6 298.6-59.45 0-114.7-17.22-161.1-47.11 8.447 .974 16.57 1.299 25.34 1.299 49.06 0 94.21-16.57 130.3-44.83-46.13-.975-84.79-31.19-98.11-72.77 6.498 .974 12.99 1.624 19.82 1.624 9.421 0 18.84-1.3 27.61-3.573-48.08-9.747-84.14-51.98-84.14-102.1v-1.299c13.97 7.797 30.21 12.67 47.43 13.32-28.26-18.84-46.78-51.01-46.78-87.39 0-19.49 5.197-37.36 14.29-52.95 51.65 63.67 129.3 105.3 216.4 109.8-1.624-7.797-2.599-15.92-2.599-24.04 0-57.83 46.78-104.9 104.9-104.9 30.21 0 57.5 12.67 76.67 33.14 23.72-4.548 46.46-13.32 66.6-25.34-7.798 24.37-24.37 44.83-46.13 57.83 21.12-2.273 41.58-8.122 60.43-16.24-14.29 20.79-32.16 39.31-52.63 54.25z"></path></svg>
                            
                        </button>
                        <button type="button" class="text-white bg-slate-50 rounded-lg text-sm px-3 py-1 text-center items-center mr-2 mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            width="18" height="18"
                            viewBox="0 0 48 48"
                            style=" fill:#000000;"><path fill="#fff" d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"></path><path fill="#fff" d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"></path><path fill="#cfd8dc" d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"></path><path fill="#40c351" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"></path><path fill="#fff" fill-rule="evenodd" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z" clip-rule="evenodd"></path></svg>
                        </button>
                        <button type="button" class="text-white bg-slate-50 rounded-lg text-sm px-3 py-1 text-center items-center mr-2 mb-2">
                            <svg height="18" viewBox="0 0 1792 1792" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M1664 1632v-1088q0-13-9.5-22.5t-22.5-9.5h-1088q-13 0-22.5 9.5t-9.5 22.5v1088q0 13 9.5 22.5t22.5 9.5h1088q13 0 22.5-9.5t9.5-22.5zm128-1088v1088q0 66-47 113t-113 47h-1088q-66 0-113-47t-47-113v-1088q0-66 47-113t113-47h1088q66 0 113 47t47 113zm-384-384v160h-128v-160q0-13-9.5-22.5t-22.5-9.5h-1088q-13 0-22.5 9.5t-9.5 22.5v1088q0 13 9.5 22.5t22.5 9.5h160v128h-160q-66 0-113-47t-47-113v-1088q0-66 47-113t113-47h1088q66 0 113 47t47 113z"/></svg>
                        </button>
                        <!-- <button type="button" class="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 mr-2 mb-2">
                            <svg class="w-5 h-5 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
                            Sign in with Apple
                        </button> -->

                    </div>
                </div>
                <div class="col-span-12">
                    <!-- Ad Section -->
				    <SquareAdd/>
                </div>
            </div>
        </div>
        <!-- Middle section -->
        <div class="lg:col-span-9 col-span-12">
            <div class="grid grid-cols-12 gap-2 lg:divide-y lg:divide-zinc-300 divide-transparent">
                <div v-for="n in 20" :key="n" class="col-span-12 py-2">
                    <SingleListImage/>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import SingleListImage from "./frontend/widgets/SingleListImage.vue";
import SinglePost from "./frontend/widgets/SinglePost.vue";
import SquareAdd from "./frontend/widgets/SquareAdd.vue";
    export default{
        components: { SingleListImage, SinglePost, SquareAdd },
    }
</script>