<template>
  <div class="group8">
    
    <span>Title here</span><br />
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>

    <p>Lorem ipsum dolor sit amet consectetur</p>
    <div class="group8-input">
      <input type="text" placeholder="Your Email" />
      <button>SUBSCRIBE</button>
       <img class="image3" src="@/assets/image3.png">
      
       
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
.group8-input img{
  position: absolute;
  top:263%;
  left: 51px;
  max-width: 100%;
}
.image5{
  width: 1285px;
}

.group8 span {
  font-size: 75px;
  color: #ffffff;
  font-weight: 700;
  font-family: "Open Sans";
}
.image4{
  margin-top:70px ;
  width: 1285px;
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
  margin-top: 60px;
  right:  4%;
}
</style>