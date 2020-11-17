<template>
  <div class="group8">
    <div class="group8__image">
      <img src="@/assets/group8-image1.png" />
    </div>
    <div class="here">
      <span>Title here</span><br />
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>

      <p>Lorem ipsum dolor sit amet consectetur</p>
      <div class="group8-input">
        <div class="sub">
           <input type="text" placeholder="Your Email" /> 
          <button>SUBSCRIBE</button>
        </div>
      </div>
    </div>
    <div class="group8__image2">
      <img src="@/assets/group8-image2.png" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.group8 {
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1440px;
  height: 600px;
  background-color: #deb37e;
  position: relative;
}
.here{
  margin-top: -30px;
}
.group8__image2 {
  max-width: 100%;
  position: absolute;
  top: 88%;
}
.sub{
 margin-left: 20px;
}

.group8__image {
  max-width: 100%;
  margin-top: -10px;
  position: absolute;
  top: 10px;
}
.group8__image img {
  max-width: 100%;
}
.group8__image2 img {
  max-width: 100%;
}

.group8-input img {
  position: absolute;
  top: 263%;
  left: 51px;
  max-width: 100%;
}

.group8 span {
  font-size: 75px;
  color: #ffffff;
  font-weight: 700;
  font-family: "Open Sans";
}

.group8 p {
  font-size: 30px;
  color: #54524f;
  font-weight: 400;
  font-family: "Open Sans";
  margin: 0;
}
.group8 input {
  width: 570px;
  height: 63px;
  border: none;
  border-radius: 30px;
  font-size: 25px;
  color: #54524f;
  font-weight: 400;
  font-family: "Open Sans";
  padding-left: 30px;
  position: relative;
  left: 30px;
 
}
.group8 button {
  width: 230px;
  height: 65px;
  border: none;
  border-radius: 30px;
  
  font-size: 25px;
  color: #ffffff;
  font-weight: 700;
  font-family: "Open Sans";
  background-color: #54524f;
  cursor: pointer;
  position: relative;
  right: 60px;
}
.group8-input {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}
</style>