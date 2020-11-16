<template>
  <div class="group5">
      <div class="group5-text">
          <img src="@/assets/group5-image.png">
          <h5>Hiking in the mountains</h5>
            <p>lorem ipsum dolor sit amet, consectetur 
            adipisicing elit, sed do ei-</p>
            <p>usmod tempor incididunt ut labore et dolore
                magna aliqua. Ut
            </p>
            <p>enim ad minim veniam quis</p>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.group5{
    width: 1440px;
    margin: 0 auto;
    height: 760px;
    background-color:#99928c;
    display: flex;
    align-items: center;
    justify-content: center;
}
.group5-text img{
    margin-top: -20%;
}
.group5-text h5{
    text-align: center; 
    font-size: 58px;
color: #ffffff;
font-weight: 600;
font-family: "Open Sans";
margin: 50px;
}
.group5-text p{
    text-align: center;
    font-size: 29px;
color: #dbdbdb;
font-weight: 400;
font-family: "Open Sans";
text-align: center;
margin: 0;
}
 /* .group5-text p{
    position: absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
}  */
</style>