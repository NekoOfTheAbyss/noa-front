<script>
import Navigation from '@/data/Navigation'
import Constants from '@/data/Constants'
export default {
  props: {
    title: {
      type: String,
      default: null,
    },
  },
  data() {
    const toggled = Navigation.map((x) => x.key)
    const toggled2 = toggled.reduce((acc, curr) => {
      acc[curr] = false
      return acc
    }, {})
    return {
      toggleNav: false,
      Navigation,
      toggled: toggled2,
      toggled2,
      Constants,
    }
  },
  methods: {
    toggleOff() {
      this.toggleNav = false
    },
    toggleBoth() {
      this.toggleNav = !this.toggleNav
    },
    toggleOn() {
      this.toggleNav = true
    },
    setState(ref) {
      this.resetState()
      this.toggled[ref] = !this.toggled[ref]
    },
    anyState() {
      if (Object.values(this.toggled).includes(true)) return true
      return false
    },
    resetState() {
      this.toggled = this.Navigation.map((x) => x.key).reduce((acc, curr) => {
        acc[curr] = false
        return acc
      }, {})
    },
  },
}
</script>
<template>
  <div
    class="
      dark:bg-zinc-900 border-nett-maid border-b
      bg-black
      md:bg-white md:dark:bg-zinc-900 border-nett-maid border-b
      shadow-md
      max-w-full
      block
      w-full
      top-0
      fixed
      z-50
    "
  >
    <div class="max-w-7xl mx-auto px-2 md:px-6 lg:px-8 md:mt-4">
      <div class="relative flex items-center justify-between h-16">
        <div class="relative inset-y-0 left-0 flex items-center md:hidden">
          <button
            :class="`
              inline-flex
              items-center
              ${toggleNav ? 'hidden' : 'block'}
              justify-center
              p-2
              rounded-md
              text-white md:text-zinc-700 dark:text-white
              hover:text-zinc-700 dark:text-white
              focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white
            `"
            @click="toggleOn"
          >
            <span class="sr-only">Open menu</span>

            <svg
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>

            <svg
              class="hidden h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div
          class="
            flex-1 flex
            fixed
            md:static
            items-center
            md:items-stretch md:justify-start
          "
        >
          <div class="flex-shrink-0 flex items-center">
            <NuxtLink to="/">
              <img
                class="h-8 w-auto hidden lg:block"
                :src="$icon(512)"
                alt="Placeholder"
              />
            </NuxtLink>
          </div>
          <div
            :class="`z-40 block h-full top-0 left-0 bg-white dark:bg-zinc-900 md:bg-transparent fixed md:static transform transition duration-500 ease-in-out md:translate-x-0 p-8 md:p-0 md:block ${
              toggleNav ? 'translate-x-0' : '-translate-x-110 md:ml-6'
            }`"
          >
            <NuxtLink to="/">
              <div
                class="
                  flex-shrink-0 flex
                  block
                  md:hidden
                  items-center
                  bg-black
                  md:bg-white
                  dark:bg-zinc-900 border-nett-maid border-b
                  md:dark:bg-zinc-900 border-nett-maid border-b
                  shadow-md
                  top-0
                  left-0
                  absolute
                  w-full
                  h-16
                "
              >
                <img
                  class="h-12 w-auto p-2"
                  :src="$icon(512)"
                  alt="Placeholder"
                />
                <span class="text-white font-bold">{{ Constants.Name }}</span>
              </div>
            </NuxtLink>

            <div
              class="flex flex-col md:flex-row justify-between space-x-1 w-full"
            >
              <div
                class="
                  flex
                  md:space-x-4
                  flex-col
                  md:flex-row md:justify-between md:w-full md:pt-0
                  pt-10
                "
              >
                <div
                  v-for="{ name, route, key, icon } in Navigation"
                  :key="key"
                >
                  <NuxtLink
                    v-if="typeof route === 'string' && route.startsWith('/')"
                    :to="typeof route == 'string' ? route : '#'"
                    :class="
                      (title === key
                        ? 'text-zinc-700 dark:text-white '
                        : 'text-black dark:text-white border-transparent ') +
                      (Array.isArray(route) ? 'group ' : '') +
                      'transition duration-500 ease-in-out tracking-wide px-3 flex flex-row space-x-4 md:uppercase py-4 text-xs md:text-md hover:dark:text-nett-maid hover:text-zinc-800 block'
                    "
                  >
                    <span><SVGWrapper :name="icon" /></span>
                    <span class="py-1">{{ name }}</span>
                    <div
                      v-if="Array.isArray(route)"
                      class="
                        absolute
                        flex
                        bg-zinc-quote
                        text-sm
                        p-2
                        rounded-md
                        flex-col
                        invisible
                        md:top-10
                        transform
                        transition
                        duration-300
                        ease-in-out
                        group-focus:translate-y-10 group-focus:visible
                      "
                    >
                      <a
                        v-for="{ name2, route2, key2 } in route"
                        :key="key2"
                        class="
                          p-2
                          flex flex-nowrap
                          text-zinc-800
                          hover:text-black
                        "
                        :href="route2"
                        >{{ name2 }}</a
                      >
                    </div>
                  </NuxtLink>
                  <a
                    v-else-if="Array.isArray(route)"
                    :href="'javascript:void(0)'"
                    @click="(x) => setState(key)"
                    :class="
                      (title === key
                        ? 'text-zinc-700 dark:text-white '
                        : 'dark:text-white text-black ') +
                      (Array.isArray(route) ? 'group ' : '') +
                      'transition duration-500 ease-in-out tracking-wide px-3 flex flex-row space-x-4 md:uppercase py-4 text-xs md:text-md hover:dark:text-nett-maid hover:text-zinc-800 block'
                    "
                  >
                    <span><SVGWrapper :name="icon" /></span>
                    <span class="py-1">{{ name }}</span>
                    <span><SVGDown /></span>

                    <div
                      :class="`
                        absolute
                        flex
                        bg-white
                        border-t
                        w-48
                        border-zinc-400
                        shadow-md
                        text-xs
                        p-2
                        flex-col
                        ${toggled[key] ? 'vivible translate-y-9' : 'invisible'}
                        md:top-10
                        transform
                        transition
                        duration-300
                        ease-in-out
`"
                    >
                      <NuxtLink
                        v-for="{ name2, route2, key2 } in route"
                        :key="key2"
                        class="
                          p-2
                          flex flex-nowrap
                          text-zinc-800
                          hover:bg-zinc-100 hover:text-black
                        "
                        :to="route2"
                        >{{ name2 }}</NuxtLink
                      >
                    </div>
                  </a>
                  <a
                    v-else
                    :href="typeof route == 'string' ? route : '#'"
                    :class="
                      (title === key
                        ? 'text-zinc-700 dark:text-white '
                        : 'dark:text-white text-black ') +
                      (Array.isArray(route) ? 'group ' : '') +
                      'transition duration-500 ease-in-out tracking-wide px-3 flex flex-row space-x-4 md:uppercase py-4 text-xs md:text-md hover:dark:text-nett-maid hover:text-zinc-800 block'
                    "
                  >
                    <span><SVGWrapper :name="icon" /></span>
                    <span class="py-1">{{ name }}</span>
                    <div
                      v-if="Array.isArray(route)"
                      class="
                        absolute
                        flex
                        bg-zinc-quote
                        text-sm
                        p-2
                        rounded-md
                        flex-col
                        invisible
                        md:top-10
                        transform
                        transition
                        duration-300
                        ease-in-out
                        group-focus:translate-y-10 group-focus:visible
                      "
                    >
                      <a
                        v-for="{ name2, route2, key2 } in route"
                        :key="key2"
                        class="
                          p-2
                          flex flex-nowrap
                          text-zinc-800
                          hover:text-black
                        "
                        :href="route2"
                        >{{ name2 }}</a
                      >
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            :class="`inset-0 w-full fixed h-full z-30 block ${
              toggleNav || anyState()
                ? 'visible bg-zinc-100 bg-opacity-10'
                : 'invisible'
            }`"
            @click="
              (x) => {
                toggleOff()
                resetState()
              }
            "
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>