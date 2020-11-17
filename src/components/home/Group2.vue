<template>
  <div class="group">
    <div class="group2">
    <div class="group2-text">
      <h2>LET' S GO</h2>
      <p>Lorem ipsum dolor sit rit, perferendis ad hic autem?</p>
      <p>voluptatibus! A nihil quae ad hic autem?</p>
    </div>

    <div class="group2-content">
      <div class="group2-content__1">
        <div class="group2-content__img">
          <img src="@/assets/place.png" />
        </div>

        <div class="group2-content__text">
          <span class="ip"> Lorem ipsum</span>
          <p class="lore">
            Lorem ispum dolor sit amet,consectur adipisicing...
          </p>
        </div>
      </div>

      <div class="group2-content__1">
        <div class="group2-content__img">
          <img src="@/assets/place.png" />
        </div>

        <div class="group2-content__text">
          <span class="ip"> Lorem ipsum</span>
          <p class="lore">
            Lorem ispum dolor sit amet,consectur adipisicing...
          </p>
        </div>
      </div>
      <div class="group2-content__1">
        <div class="group-content__img">
          <img src="@/assets/place.png" />
        </div>

        <div class="group2-content__text">
          <span class="ip"> Lorem ipsum</span>
          <p class="lore">
            Lorem ispum dolor sit amet,consectur adipisicing...
          </p>
        </div>
      </div>
    </div>
    <div class="group2-content__button">
        <button class="show">SHOW MORE</button>
      </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
};
</script>

<style>
.group{
  max-width: 1440px;
  height: auto;
  margin: 0 auto;
}
.group2-content__img{
  max-width: 100%;
}
/* .group2-content__img img{
  max-width: 100%;
} */
.shapee {
  margin-top: -60px;
  width: 1483px;
  margin-left: -15px;
}
.group2-text h2 {
  text-align: center;
  font-size: 63px;
  color: #e2a355;
  font-weight: 800;
  font-family: 'Open Sans', sans-serif;
  margin: 100px 0 0 0;
  margin-bottom: 30px;
}

.group2-text p {
  margin: 0;
  font-size: 27px;
  color: #7f7770;
  font-weight: 400;
  font-family: "Open Sans";
  text-align: center;
}
.group2-content {
  margin-top: 40px;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  
}

.ip {
  font-weight: 700;
  font-size: 30px;
  margin-left: 10px;
  padding-top: 30px;
}
.group2-content__1 {
  width: 339px;
  height: 530px;
  color: white;
  background-color: #7f7770;
  margin: 30px 13px;
}

.lore {
  font-size: 25px;

  margin-left: 10px;
  color: #ffffff;
}

.group2-content__text {
  margin-top: 30px;
  font-family: 'Open Sans', sans-serif;
}
.show {
  font-size: 23px;
  width: 330px;
  height: 75px;
  background-color: #7f7770;
  letter-spacing: 5px;
  line-height: 21px;
  color: #ffffff;
  font-weight: 800;
  font-family: "Open Sans";
  border: none;
  border-radius: 40px;
  margin-top: 50px;
  padding: 0;
  cursor: pointer;
}
.group2-content__button {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  margin-left: 0;
}
</style>