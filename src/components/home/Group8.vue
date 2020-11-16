<template>
  <div class="group8">
    <span>Title here</span><br />
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>

    <p>Lorem ipsum dolor sit amet consectetur</p>
    <div class="group8-input">
      <input type="text" placeholder="Your Email" />
      <button>SUBSCRIBE</button>
       <img src="@/assets/footer-image.png">
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
  width: 1440px;
  height: 526px;
  background-color: #deb37e;
  position: relative;
}
.group8-input img{
  position: absolute;
  top:250%;
  left: 58px;
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
}
.group8 button {
  width: 230px;
  height: 65px;
  border: none;
  border-radius: 30px;
  position: absolute;
  left: 63%;
  font-size: 25px;
  color: #ffffff;
  font-weight: 700;
  font-family: "Open Sans";
  background-color: #54524f;
  cursor: pointer;
}
.group8-input {
  position: relative;
  margin-top: 85px;
  right:  4%;
}
</style>