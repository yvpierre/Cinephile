<script setup lang="ts">
</script>


<template>
  <div class="navbar">
    <div class="navbar--title">Cinéphiles</div>
    <div class="navbar--options">
      <div class="">Explorer</div>
      <div class="">Classements</div>
      <div class="">Communauté</div>
    </div>
    <div class="navbar--buttons">
      <div class="navbar--btn">Se connecter</div>
      <div class="navbar--btn">S'inscrire</div>
    </div>
  </div>
</template>


<style>

.navbar {
  position: absolute;
  display: flex;
  flex-direction: row;
  border-bottom: 2px solid green;
  width: 100%;
  height: 60px;
  top: 0;
  justify-content: space-between;
  align-items: center;
  color: white;

  background: linear-gradient(90deg, #264653, #276467, #28807a, #2A9D8F);
  background-size: 400% 400%;
  animation: gradient 5s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.navbar--title {
  padding: 0 50px;
  font-size: 24px;
}

.navbar--options {
  display: flex;
  align-items: center;
  border: 2px solid blue;
  height: 100%;
  width: 100%;
  max-width: 500px;
  justify-content: space-evenly;

}

.navbar--buttons {
  width: 400px;
  display: flex;
  flex-direction: row;
  border: 2px solid pink;
  height: 100%;
  align-items: center;
  justify-content: center;

}

.navbar--buttons .navbar--btn {
  margin: 0 10px 0 10px;
  border: 2px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 125px;
  height: 30px;
  border-radius: 5px;
}

</style>