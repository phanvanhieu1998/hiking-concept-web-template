<template>
  <div class="group6">
    <div class="group6-image">
      <img src="@/assets/image8.png">
    </div>
    <div class="image9">
      <img class="imgg" src="@/assets/image9.png" />
      <img class="imgg" src="@/assets/image10.png" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.group6 {
  margin: 0 auto;
  max-width: 1440px;
  height: auto;
}
.group6-image {
  max-width: 100%;
  position: relative;
}
.group6-image img {
  max-width: 100%;
  position: absolute;
  z-index: 1;
  top: -85px;
}
.imgg {
  margin-top: -50px;
}
.image9 img {
  max-width: 100%;

  z-index: 1;
}
</style>