<template>

    <div class="border border-gray-200 shadow-md">
        <nav class="flex items-center justify-between w-[92%] px-3 py-2 md:px-6 md:py-4 mx-auto">
            <div class="flex items-center gap-2">
                <router-link to="/"><img src="../assets/logo.svg" class="h-10 w-10" alt="Logo"></router-link>
                <router-link to="/">
                    <h1 class="font-bold text-xl md:text-2xl">Invoicely</h1>
                </router-link>
            </div>

            <!-- Center Menu Items -->
            <div class="hidden md:flex space-x-8 justify-center flex-1">
                <router-link to="/"
                    class="text-gray-700 hover:text-gray-400 transition duration-200 font-medium">Home</router-link>
                <router-link to="/create"
                    class="text-gray-700 hover:text-gray-400 transition duration-200 font-medium">Create</router-link>
                <router-link to="/history"
                    class="text-gray-700 hover:text-gray-400 transition duration-200 font-medium">History</router-link>
            </div>

            <div class="hidden md:flex items-center justify-center gap-4">
                <button type="button"
                    class="border rounded-md h-10 border-gray-200 hover:bg-gray-100 transition duration-200 hover:cursor-pointer px-4 min-w-[90px] max-w-[120px] text-sm md:text-base">Sign
                    In</button>
                <button type="button"
                    class="rounded-md h-10 bg-blue-600 text-white hover:bg-blue-700 transition duration-200 hover:cursor-pointer px-4 min-w-[90px] max-w-[120px] text-sm md:text-base">Sign
                    Up</button>
            </div>
            <div class="md:hidden flex items-center">
                <button @click="toggleMenu" class="text-gray-600 focus:outline-none">
                    <RiMenuFill class="w-6 h-6" />
                </button>
            </div>
        </nav>
        <div v-if="isMenu"
            class="md:hidden flex flex-col items-center bg-white border-b border-gray-400 w-full px-4 pb-4 gap-3 transition-all duration-300 ease-in-out">

            <router-link to="/"
                class="w-full py-2 text-center text-gray-700 hover:bg-gray-100 rounded-md">Home</router-link>
            <router-link to="/create"
                class="w-full py-2 text-center text-gray-700 hover:bg-gray-100 rounded-md">Create</router-link>
            <router-link to="/history"
                class="w-full py-2 text-center text-gray-700 hover:bg-gray-100 rounded-md">History</router-link>
            <button type="button"
                class="border rounded-md h-10 border-gray-200 mb-2 w-full max-w-xs px-4 pb-4 flex flex-col items-center gap-3">Sign
                In</button>
            <button type="button" class="rounded-md h-10 bg-blue-600 text-white w-full max-w-xs">Sign Up</button>
        </div>
    </div>

</template>

<script>
import { RiMenuFill } from '@remixicon/vue';
export default {
    name: 'Navbar',

    data() {
        return {
            isMenu: false,
        }
    },

    methods: {
        toggleMenu() {
            this.isMenu = !this.isMenu
        }
    },
    components: {
        RiMenuFill,
    },

}
</script>