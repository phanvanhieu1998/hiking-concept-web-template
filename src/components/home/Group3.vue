<template>
  <div class="h3">
    <div class="group3">
      <div class="group3-image">
        <img  src="@/assets/group3-image.png" />
      </div>
      <div class="group3-text">
        <span>Discount up to 50% All Excursitons</span>
        <p>
          Lorem ipsum, dolor sit amet cupiditate molestiae nemus adipisci porro?
          porro? Animi laborum rem 
          Animi laborum !
        </p>
        <button>READ MORE</button>
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
  
  height: 780px;
  background-color: #7f7770;
  margin-top: 180px;
}
.group3-text {
  margin: 200px 66px 20px;
}
.group3-text span {
  width: 100%;
  height: auto;
  font-size: 58px;
  color: #ffffff;
  font-weight: 700;
  font-family: 'Open Sans', sans-serif;
}
.group3-image {
  max-width: 50%;
}
.group3-image img{
  max-width: 642.5px;
  position: relative;
  height: 784px;
  z-index: 1;
}
.group3-text p {
  height: 175px;
  font-size: 29px;
  color: #ffffff;
  font-weight: 400;
  font-family: 'Open Sans', sans-serif;
}
.group3-text button {
  max-width: 338px;
  height: 73px;
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
}
</style>