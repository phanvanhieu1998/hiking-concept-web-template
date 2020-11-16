<template>
  <div class="group3">
    <div class="group3-image">
        <img src="@/assets/group3-image.png">
    </div>
    <div class="group3-text">
      <span>Discount up to 50% All Excursitons</span>
      <p>Lorem ipsum, dolor sit amet consectetur 
        veritatis culpa ipsa, adipisci porro? Animi laborum rem 
        cupiditate molestiae nemus adipisci porro? Animi laborum
        !</p>
      <button>READ MORE</button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.group3{
    display: flex;
    width: 1440px;
    margin: 0 auto;
    height: 778px;
    background-color:#7f7770;
    margin-top: 180px;
}
.group3-text{
  margin: 200px 100px 20px;
}
.group3-text span{
  width: 100%;
  height: auto;
  font-size: 58px;
color: #ffffff;
font-weight: 700;
font-family: "Open Sans";
}
.group3-text p{

height: 175px;
font-size: 29px;
color: #ffffff;
font-weight: 400;
font-family: "Open Sans";
}
.group3-text button{
  width: 338px;
  height: 73px;
  background-color: #e2a355;
  font-size: 29px;
letter-spacing: 6px;
line-height: 21px;
color: #ffffff;
font-weight: 700;
font-family: "Open Sans";
border: none;
border-radius:30px ;
cursor: pointer;
}
</style>