<template>
  <header>
    <div class="container">
      <div class="header">
        <div class="logo">
          
          <img src="@/assets/logoo.png" alt="#">
        </div>
        <div class="toolbar">
          <ul class="links">
            <li>
              <a href="#">{{ home }}</a>
            </li>
            <li>
              <a :href="menu">{{ menu }}</a>
            </li>
            <li>
              <a :href="ourStory">{{ ourStory }}</a>
            </li>
            <li >
              <a :href="contactUs">{{ contactUs }}</a>
            </li>
            <input  type="text" ><i class="fas fa-search"></i>
          </ul>
        </div>
      </div>
      <img class="shape" src="@/assets/shape.png" />
      
    </div>
  </header>
</template>

<script>
export default {
  name: "comp-header",
  data() {
    return {
     
      menu: "MENU",
      home: "HOME",
      ourStory: "OUR STORY",
      contactUs: "CONTACT US",
    };
  },

};
</script>

<style>
.container {
  margin: 0 auto;
  max-width: 1440px;
  height: auto;
  background-color: white;
}
.header {
  width: 100%;
  height: 190px;
  display: flex;
  justify-content: space-between;
  
}
.logo {
  margin: 55px 0 0 70px;
}
.header a {
  color: black;
  text-decoration: none;
  
  font-weight: bold;
  font-size: 17px;
}
.links i{
  font-size: 30px;
  position: absolute;
  top:10%;
  right: 14%;
  z-index: 1;
  color:#68635e ;
  cursor: pointer;
}
.links {
  display: flex;
  justify-content: flex-end;
  list-style: none;
  margin: 0 60px 0 0;
 
}
.shape{
  width: 100%;
  position: relative;
  z-index: 1;
}
.links li{
  margin: 85px 80px 0 0;
  
}
.links input {
  border-radius: 50px;
  border: 0;
  background: #c3bfbc;
  width: 185px;
  height: 50px;
  margin-top: 68px;
  z-index: 1;
  padding: 0;
}
</style>