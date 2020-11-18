<template>
  <div class="h3">
    <div class="group3">
      <div class="group3-image">
        <img src="@/assets/image3.png" />
      </div>
      <div class="group3-text">
        <div class="up">
          <span>Discount up to 50% All Excursitons </span>
        </div>

        <p>
          Lorem ipsum, dolor sit amet cupiditate 
          porro? Animi laborum rem Animi laborum !
        </p>
        <div class="more">
          <button>READ MORE</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.h3 {
  max-width: 1440px;
  margin: 0 auto;
}
.group3 {
  display: flex;
  max-width: 100%;

  height: 775px;
  background-color: #7f7770;
  margin-top: 180px;
}
.group3-text {
  width: 50%;
  height: auto;
  font-size: 58px;
  color: #ffffff;
  font-weight: 700;
  font-family: "Open Sans", sans-serif;
  
  
  display: block;
}
.more{
  margin-top: -30px;
}
.up{
 margin: 150px 70px 60px 60px;
}
.group3-text span {
  width: 100%;
  height: auto;
  font-size: 58px;
  color: #ffffff;
  font-weight: 700;
  font-family: "Open Sans", sans-serif;
}
.group3-image {
  max-width: 50%;
}
.group3-image img {
  max-width: 100%;
  position: relative;
  height: 775px;
  z-index: 1;
}
.group3-text p {
  height: 175px;
  font-size: 29px;
  color: #ffffff;
  font-weight: 400;
  font-family: "Open Sans", sans-serif;
  margin-left: 60px;
  margin-right: 100px;
  
 
}

.group3-text button {
  width: 300px;
  height: 70px;
  background-color: #e2a355;
  font-size: 29px;
  letter-spacing: 6px;
  line-height: 21px;
  color: #ffffff;
  font-weight: 700;
  font-family: "Open Sans";
  border: none;
  border-radius: 30px;
  cursor: pointer;
  margin-left: 60px;
  margin-right: 60px;
}
</style>