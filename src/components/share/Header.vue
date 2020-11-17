<template>
  <header>
    <div class="container">
      <div class="header">
        <div class="logo">
          <img src="@/assets/logoo.png" alt="#" />
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
            <li>
              <a :href="contactUs">{{ contactUs }}</a>
            </li>
            <li>
              <span class="input__search"><input type="text" />
              <i class="fas fa-search"></i>
              </span>
              
            </li>
          </ul>
        </div>
      </div>
      
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
  height: auto;
  display: flex;
  justify-content: space-between;
  padding: 30px  0;
  
  
 
}
.toolbar {
  padding: 20px 0;
  height: auto;
}
.header a {
  color: black;
  text-decoration: none;
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  font-size: 17px;
  padding: 25px;
}

.links {
  display: flex;
  justify-content: flex-end;
  list-style: none;
  padding: 0;
  margin: 0;
  line-height: 50px;
}
.links input {
  border-radius: 50px;
  border: 0;
  background: #c3bfbc;
  width: 185px;
  height: 51px;
 
  padding: 0 20px;
  margin-left: 25px;
  
}
.input__search i{
  position: relative;
  top:6px;
  right: 40px;
  font-size: 25px;
  cursor: pointer;
  font-weight: 600;
  
}
</style>