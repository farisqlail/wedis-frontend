<template>
    <Navbar />



    <Footer />
</template>

<script>
import Footer from "@/components/Footer.vue";
import Navbar from "@/components/Navbar.vue";
export default {
    name: "Artikel",
    components: {
        Footer,
        Navbar
    },
    mounted(){
        document.title = "Artikel | Wedis";
    }    
}
</script>