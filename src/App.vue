<template>
    <div class="flex flex-col min-h-screen">
        <Navbar />

        <main class="flex-grow container mx-auto">
            <router-view />
        </main>

        <footer class="bg-gray-100 text-center py-4 text-gray-700 text-sm">
            &copy; 2024 Invoice Generator. All rights reserved.
        </footer>
    </div>
</template>

<script>

import Navbar from './components/Navbar.vue';


export default {
    components: {
        Navbar,

    }
}
</script>
