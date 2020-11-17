<template>
  <footer class="footerr">
    <div class="footer-left">
      <span>Title Here</span>
      <div class="footer-left__text">
        <p>
          Lorem ipsum dolor sit 
          culpaesse rem necessitatibus deleniti 
          culpa esse rem culpa esse rem necessitatibus
          culpaesse rem necessitatibus deleniti 
        </p>
        <i class="fab fa-facebook"></i>
        <i class="fab fa-facebook icon"></i>
        <i class="fab fa-facebook icon"></i>
        <i class="fab fa-facebook icon"></i>
      </div>
    </div>
    <div class="footer-right">
      <div class="footer-right__text">
        <div class="footer-right__text-col1">
          <ul>
            <h3>About</h3>
            <li><a href="">History</a></li>
            <li><a href="">Our Team</a></li>
            <li><a href="">Brand Guidelines</a></li>
            <li><a href="">Terms&Condition</a></li>
            <li><a href="">Privacy Policy</a></li>
          </ul>
        </div>
        <div class="footer-right__text-col2">
          <ul>
            <h3>Services</h3>
            <li><a href="">How to Order</a></li>
            <li><a href="">Our Product</a></li>
            <li><a href="">Order Status</a></li>
            <li><a href="">Promo</a></li>
            <li><a href="">Payment Method</a></li>
          </ul>
        </div>
        <div class="footer-right__text-col3">
          <ul>
            <h3>Other</h3>
            <li><a href="">Contact Us</a></li>
            <li><a href="">Help</a></li>
            <li><a href="">Privacy</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
.footerr {
  max-width: 1440px;
}
footer {
  display: flex;
  align-items: center;
  margin: 0 auto;
  
  width: 100%;
  height: 700px;
  background-color: #7f7770;
}

.footer-left {
  width: 50%;
  margin-top:7% ;
}
.footer-right__text h3{
  font-size: 32px;
color: #ffffff;
font-weight: 100;
 font-family: "Montserrt", sans-serif;
cursor: pointer;
margin-bottom:35px;
}
.footer-right {
  width: 50%;
  margin-top: 10%;
  margin-right: 90px;
}
.footer-left__text {
  width: 500px;
  height: 130px;
  margin-left: 90px;
}
.footer-left__text p {
  font-size: 20px;
  color: #ffffff;
  font-weight: 600;
  font-family: "Montserrat", sans-serif;
  margin-right: 100px;
  line-height: 120%;
}

.footer-left span {
  font-size: 32px;
  color: #ffffff;
  font-weight: 800;
  font-family: "Montserrat", sans-serif;
  margin-left: 90px;
}
.footer-right__text {
  display: flex;
  height: auto
}
.footer-left__text i {
  color: white;
  font-size: 30px;
}
.icon {
  margin-left: 10px;
}
.footer-right__text a {
  text-decoration: none;
  font-size: 20px;
  line-height:37px;
  color: #ffffff;
  font-weight: 800;
  font-family: "Montserrat", sans-serif;

}
.footer-right__text ul {
  list-style: none;
}

</style>