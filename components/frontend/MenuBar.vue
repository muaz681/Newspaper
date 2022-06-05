<template>
  <div class="flex flex-wrap">
    <div class="w-full">
      <nav class="relative flex flex-wrap items-center justify-between py-1 bg-red-700">
        <div class="container mx-auto flex flex-wrap items-center justify-between overflow-x-hidden">
          <div class="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
            <a class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase lg:hidden text-white" href="#pablo">
              NewsPaper
            </a>
            <button class="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" v-on:click="toggleNavbar()">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="30" height="30"
                viewBox="0 0 30 30"
                style=" fill:#fff;"><path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path></svg>
            </button>
          </div>
          <div v-bind:class="{'hidden': !menuShow, 'flex': menuShow}" class="lg:flex lg:flex-grow items-center">
            <ul class="flex flex-col lg:flex-row list-none lg:m-auto">
              <li class="nav-item">
                <NuxtLink to="/" class="font-sans px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 hover:bg-red-700 hover:text-white">
					<span>Home</span>
				</NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/category" class="font-sans px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 hover:bg-red-700 hover:text-white">
					<span>National</span>
				</NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/category" class="font-sans px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 hover:bg-red-700 hover:text-white">
					<span>National</span>
				</NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/category" class="font-sans px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 hover:bg-red-700 hover:text-white">
					<span>National</span>
				</NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/category" class="font-sans px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 hover:bg-red-700 hover:text-white">
					<span>National</span>
				</NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/category" class="font-sans px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 hover:bg-red-700 hover:text-white">
					<span>National</span>
				</NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/category" class="font-sans px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 hover:bg-red-700 hover:text-white">
					<span>National</span>
				</NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/category" class="font-sans px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 hover:bg-red-700 hover:text-white">
					<span>National</span>
				</NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/category" class="font-sans px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 hover:bg-red-700 hover:text-white">
					<span>National</span>
				</NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/category" class="font-sans px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 hover:bg-red-700 hover:text-white">
					<span>National</span>
				</NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/category" class="font-sans px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 hover:bg-red-700 hover:text-white">
					<span>National</span>
				</NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/category" class="font-sans px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 hover:bg-red-700 hover:text-white">
					<span>National</span>
				</NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/category" class="font-sans px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 hover:bg-red-700 hover:text-white">
					<span>National</span>
				</NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/category" class="font-sans px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 hover:bg-red-700 hover:text-white">
					<span>National</span>
				</NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/category" class="font-sans px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 hover:bg-red-700 hover:text-white">
					<span>National</span>
				</NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/category" class="font-sans px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 hover:bg-red-700 hover:text-white">
					<span>National</span>
				</NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/category" class="font-sans px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 hover:bg-red-700 hover:text-white">
					<span>National</span>
				</NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/category" class="font-sans px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 hover:bg-red-700 hover:text-white">
					<span>National</span>
				</NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink to="/category" class="font-sans px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 hover:bg-red-700 hover:text-white">
					<span>National</span>
				</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "pink-menu",
  data() {
    return {
      menuShow: false
    }
  },
  methods: {
    toggleNavbar: function(){
      this.menuShow = !this.menuShow;
    }
  }
}
</script>