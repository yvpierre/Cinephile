<script setup lang="ts">
import HelloWorld from "@/components/HelloWorld.vue";
import Card from "@/components/MovieCard.vue";
import WelcomeItem from "@/components/WelcomeItem.vue";



</script>

<template>
  <body>
  <div class="body--test">
    <Card v-for="n in 20" :key="n"/>
  </div>
  </body>
</template>

<style>
@import '@/assets/base.css';

.body--test {
  align-items: flex-start;
  justify-content: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border: 2px solid red;
  padding: 40px 30px;
  justify-content: space-around;
}

.body--test > Card {
  border: 2px solid blue;
}

</style>
