<template>
  <NavBar></NavBar>
  <div class="container is-max-desktop px-2 py-4">

    <RouterView></RouterView>

  </div>
</template>

<script setup>

//imports
import NavBar from "@/components/Layout/NavBar.vue";


</script>
