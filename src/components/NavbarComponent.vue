<script setup lang="ts">
</script>


<template>
  <div class="navbar">
    <div class="navbar--title">Cinéphiles</div>
    <div class="navbar--options">
      <div class="navbar--choice">Explorer</div>
      <div class="navbar--choice">Classements</div>
      <div class="navbar--choice">Communauté</div>
    </div>
    <div class="navbar--buttons">
      <div class="navbar--btn btn--sec">Se connecter</div>
      <div class="navbar--btn btn--pri">S'inscrire</div>
    </div>
  </div>
</template>


<style>

.navbar {
  position: absolute;
  display: flex;
  flex-direction: row;
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
  height: 100%;
  display: flex;
  align-items: center;
  font-family: Captain Meredith Regular;
  letter-spacing: 2px;
  font-weight: 200;
  padding: 5px 50px 0 50px;
  font-size: 32px;
}

.navbar--options {
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  max-width: 500px;
  justify-content: space-evenly;
  color: #d9d9d9;
}

.navbar--choice:hover {
  color: white;
  text-decoration: underline;
  text-underline-offset: 5px;
}

.navbar--buttons {
  width: 400px;
  display: flex;
  flex-direction: row;
  height: 100%;
  align-items: center;
  justify-content: center;

}

.navbar--buttons .navbar--btn {
  margin: 0 5px 0 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 125px;
  height: 35px;
  border-radius: 5px;
  font-weight: 600;
}

.btn--pri {
  background: linear-gradient(45deg, #ee542e, #e87352, #ef8e5b, #f0af64);
  background-size: 400% 400%;
  animation: gradient 2.5s ease infinite;
}

.btn--pri:hover, .btn--sec:hover {
  animation: none;
}

.btn--sec {
  background: linear-gradient(45deg, #264653, #276467, #28807a, #2A9D8F);
  background-size: 400% 400%;
  animation: gradient 2.5s ease infinite;
}

.btn--sec:hover {
  color: white;
}

</style>