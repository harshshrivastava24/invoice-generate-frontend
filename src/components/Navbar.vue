<template>

    <div class="border b border-gray-200 shadow shadow-gray-100">
        <nav class="flex items-center justify-between w-[92%] px-3 py-2 md:px-6 md:py-4 mx-auto">
            <div class="flex items-center gap-2">
                <img src="../assets/logo.svg" class="h-10 w-10" alt="">
                <h1 class="font-bold text-xl md:text-2xl">Invoicely</h1>
            </div>
            <div class="hidden md:flex items-center justify-center gap-4">
                <button type="button"
                    class="border rounded-md h-10 border-gray-200 hover:cursor-pointer px-4 min-w-[90px] max-w-[120px] text-sm md:text-base">Sign
                    In</button>
                <button type="button"
                    class="rounded-md h-10 bg-blue-600 text-white hover:cursor-pointer px-4 min-w-[90px] max-w-[120px] text-sm md:text-base">Sign
                    Up</button>
            </div>
            <div class="md:hidden flex items-center">
                <button @click="toggleMenu" class="text-gray-600 focus:outline-none">
                    <RiMenuFill class="w-6 h-6" />
                </button>
            </div>
        </nav>
        <div v-if="isMenu"
            class="md:hidden flex flex-col items-center bg-white border-b border-gray-400 w-full px-4 pb-4 gap-3">
            <button type="button"
                class="border rounded-md h-10 border-gray-200 hover:cursor-pointer mb-2 w-full px-4 pb-4 flex flex-col items-center gap-3">Sign
                In</button>
            <button type="button" class="rounded-md h-10 bg-blue-600 text-white w-full max-w-xs">Sign Up</button>
        </div>
    </div>

</template>

<script>
import { RiMenuFill } from 'vue-remix-icons';
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
    }

}
</script>