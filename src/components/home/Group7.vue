<template>
  <div class="group7">
    <div class="group7-content">
      <div class="group7-content__1">
        <span class="ipsum">Lorem ipsum</span>
        <p class="p">Lorem ipsum dolor Velit vero architecto</p>
        <p>Velit vero architecto vero vero</p>
        <p>Quasi corporis quaerat,</p>
      </div>
      <div class="group7-content__1">
        <span class="ipsum">Lorem ipsum</span>
        <p class="p">Lorem ipsum dolor Velit vero architecto</p>
        <p>Velit vero architecto vero vero</p>
        <p>Quasi corporis quaerat,</p>
      </div>
      <div class="group7-content__1">
        <span class="ipsum">Lorem ipsum</span>
        <p class="p">Lorem ipsum dolor Velit vero architecto</p>
        <p>Velit vero architecto vero vero</p>
        <p>Quasi corporis quaerat,</p>
      </div>
    </div>
    <div class="group7-content__2">
      <img src="@/assets/hi.png" />
      <p>
        lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do ei-
      </p>
      <p>usmod tempor incididunt ut labore et dolore magna aliqua. Ut</p>
      <p>enim ad minim veniam quis</p>
      <span>Lorem Ipsum</span>
    </div>
    <img class="image4" src="@/assets/image4.png">
  </div>
</template>

<script>
export default {};
</script>

<style>
.group7 {
  margin: 0 auto;
  max-width: 1440px;
  height: 600px;
  background-color: white;
}
.group7-content {
  display: flex;
  width: 1135px;
  margin: 0 auto;
  justify-content: space-between;
  height: auto;
  margin-top: 185px;
}
.ipsum {
  font-size: 33px;
  line-height: 33px;
  color: #deb37e;
  font-weight: 700;
  font-family: "Open Sans";
}
.group7-content__1 p {
  font-size: 19px;
  line-height: 25px;
  color: #333d42;
  font-weight: 400;
  font-family: "Open Sans";
  margin: 0;
}
.p {
  padding-top: 35px;
}
.group7-content__2 {
  text-align: center;
  margin-top: 10%;
  line-height: 15%;
}
.group7-content__2 p {
  font-size: 25px;
  color: #3f3f3f;
  font-weight: 550;
  font-family: "Open Sans";
  text-align: center;
}
.group7-content__2 span {
  font-size: 21px;
  line-height: 33px;
  color: #3f3f3f;
  font-weight: 800;
  font-family: "Open Sans";
  text-align: center;
 
}
</style>