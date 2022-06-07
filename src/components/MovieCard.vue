<script setup lang="ts">
</script>

<template>
  <div class="card">
    <div class="desc--short">
      <div class="desc--short--1">
        <div class="bloc-titre">
          <div class="titre">Goodfellas</div>
          <div class="annee">(1990)</div>
        </div>
        <div class="note">9.9/10</div>
      </div>
      <div class="desc--short--2">
        <div class="real">by <u>Martin Scorsese</u></div>
        <div class="btn-add btn--pri">Add</div>
      </div>
    </div>
    <div class="desc--long">
      <div class="desc--long--1">
        <div class="bloc-titre">
          <div class="titre">Goodfellas</div>
          <div class="annee">(1990)</div>
        </div>
        <div class="note">9.9/10</div>
      </div>
      <div class="desc--longRest">
        <div class="desc--long--2">
          <div class="desc--note">Your note (241)</div>
          <div class="note--info">?</div>
          <div class="note--user">9&nbsp;/&nbsp;10</div>
        </div>
        <div class="long--director">Director&nbsp;:&nbsp;Martin Scorsese</div>
        <div class="long--cast">
          Cast&nbsp;:&nbsp;Robert de Niro, Ray Liotta, Joe Pesci, more..
        </div>
        <div class="long--plot">
          Synopsis&nbsp;:&nbsp;Young Henry Hill, with his friends Jimmy and
          Tommy, begins the climb from being a petty criminal to a gangster on
          the mean streets of New York.
        </div>
        <div class="long--btns">
          <div class="long--btnInfo">+&nbsp;Infos</div>
          <div class="long--btnAdd">Add</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.card {
  width: 270px;
  height: 400px;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-radius: 15px 15px 0 0;
  margin: 10px 0 10px 0;
  border: 5px solid var(--color--45);
  color: #f5f5f5;
  filter: drop-shadow(0px 5px 10px rgba(18, 103, 93, 0.75));
}

.desc--short {
  min-height: 70px;
  background: linear-gradient(
      269.19deg,
      rgba(42, 157, 143, 0.9) 0.7%,
      rgba(38, 70, 83, 0.9) 99.3%
  );
  display: flex;
  flex-direction: column;
}

.desc--short--1 {
  display: flex;
  height: 50%;
  border-top: 4px solid var(--color--35);
  justify-content: space-between;
  align-items: center;
  padding: 5px 15px 0 15px;
}

.desc--short--2 {
  height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px 5px 15px;
}

.titre {
  font-size: 24px;
}

.annee {
  margin-top: 5px;
  margin-left: 5px;
  font-weight: 200;
}

.bloc-titre {
  display: flex;
  flex-direction: row;
}

.btn-add {
  font-weight: 600;
  padding: 6px 12px 6px 12px;
  border-radius: 5px;
}

.btn--pri {
  background-color: var(--color--45);
  color: #f5f5f5;
}

.btn--pri:hover {
  background-color: var(--color--55);
}

.desc--long {
  height: 100%;
  display: none;
  background: linear-gradient(335.55deg, rgba(42, 157, 143, 0.9) 0%, rgba(38, 70, 83, 0.9) 100%);
  border-radius: 10px 10px 0 0;
}

.desc--long--1 {
  display: flex;
  height: 10%;
  border-bottom: 4px solid var(--color--35);
  justify-content: space-between;
  align-items: center;
  padding: 5px 15px 0 15px;
}


.desc--long--2 {
  display: flex;
  height: 9%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.note--info {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  margin: 0 7px;
  width: 15px;
  height: 15px;
  font-size: 12px;
  background-color: var(--color--55);
  border: 1px solid white;
}

.desc--longRest {
  height: 85%;
  display: flex;
  flex-direction: column;
  padding: 0 15px;
  justify-content: space-around;
  line-height: 1.3;
}

.long--btns {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.long--btnInfo, .long--btnAdd {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  width: 110px;
  height: 35px;
}

.long--btnInfo {
  background-color: var(--color--55);
}
.long--btnInfo:hover {
  background-color: var(--color--65);
}

.long--btnAdd {
  background-color: var(--color--35);
}
.long--btnAdd:hover {
  background-color: var(--color--25);
}

</style>