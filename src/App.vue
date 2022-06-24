<script setup lang="ts">
import HelloWorld from "@/components/HelloWorld.vue";
import WelcomeItem from "@/components/WelcomeItem.vue";
import Card from "@/components/MovieCard.vue";
import NavbarComponent from "@/components/NavbarComponent.vue";
import HeroComponent from "@/components/HeroComponent.vue";

</script>

<template>
  <body class="body">
    <NavbarComponent />
    <HeroComponent />
    <div class="main--cards">
      <Card v-for="n in 10" :key="n"/>
    </div>
  </body>
</template>

<style>
@import '@/assets/base.css';

body {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.main--cards {
  align-items: flex-start;
  justify-content: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 40px 30px;
  justify-content: space-around;
}


</style>
