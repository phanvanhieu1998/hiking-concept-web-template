<template>
  <div class="h1">
    <div class="body">
      <div class="body-image">
        <img src="@/assets/image.png" />
      </div>
      <div class="text">
        <h2>IT'S TIME</h2>
        <h2>FOR HIKING</h2>
        <span class="dolor">LOREMIPSUM DOLOR</span>
        <div class="more">
          <button class="read">READ MORE</button>
        </div>
        <p class="lorem">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio sequi
          rem consectetur,adipisicing elit
        </p>
      </div>
    </div>
   
  </div>
</template>
<script>
export default {
  name: "image1",
  data() {
    return {};
  },
};
</script>

<style>
.h1 {
  margin: 0 auto;
  max-width: 1440px;
}
.body {
  margin: 0 auto;

  width: 100%;
  height: auto;
}
.body-image img {
  width: 100%;
  margin-top: -60px;
  margin-left: -5px;
}
.shapee{
  width: 300px;
}
.body h2 {
  margin: 0;
  font-size: 92px;
  color: #deb37e;
  font-weight: 800;
  line-height: 100%;
  filter: drop-shadow(2.575px -4.286px 2.5px rgba(84, 82, 79, 0.22));
}

.dolor {
  width: 469px;
  height: 65px;
  font-size: 25px;
  letter-spacing: 5px;
  color: #54524f;
  font-weight: 700;
  font-style: italic;
  font-family: "Open Sans", sans-serif;
  text-align: center;
}
.text {
  position: absolute;
  top: 60%;
  margin-left: 50px;
}
.read {
  width: 220px;
  height: 45px;
  font-size: 25px;
  color: #776c64;
  font-weight: 800;
  color: black;
  font-family: "Open Sans", sans-serif;
  text-align: center;
  background-color: white;
  border: 2px;
  border-radius: 20px;
  cursor: pointer;
  margin-top: 60px;
}
.lorem {
  width: 452px;
  height: 130px;
  font-size: 21px;
  letter-spacing: 1px;
  color: #54524f;
  font-weight: 400;
  padding-top: 10px;
  font-family: "Open Sans", sans-serif;
  line-height: 100%;
}
</style>