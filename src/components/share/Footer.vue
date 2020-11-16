<template>
  <footer>
   
    <div class="footer-left">
      <span>TItle here</span>
      <div class="footer-left__text">
        <p>
          Lorem ipsum dolor sit amet facere, ipsam quisquam impedit deleniti
          culpaesse rem necessitatibus deleniti culpa esse rem necessitatibus
          culpa esse rem culpa esse rem necessitatibus
        </p> 
        <i class="fab fa-facebook "></i>
        <i class="fab fa-facebook icon"></i>
        <i class="fab fa-facebook icon"></i>
        <i class="fab fa-facebook icon"></i>
      </div>
    </div>
    <div class="footer-right">
      <div class="footer-right__text">
        <div class="footer-right__text-col1">
          <ul>
            <li><a class="other" href="">About </a></li>
            <li><a href="">History</a></li>
            <li><a href="">Our Team</a></li>
            <li><a href="">Brand Guidelines</a></li>
            <li><a href="">Terms&Condition</a></li>
            <li><a href="">Privacy Policy</a></li>
          </ul>
        </div>
        <div class="footer-right__text-col2">
          <ul>
            <li><a class="other" href="">Services</a></li>
            <li><a href="">How to Order</a></li>
            <li><a href="">Our Product</a></li>
            <li><a href="">Order Status</a></li>
            <li><a href="">Promo</a></li>
            <li><a href="">Payment Method</a></li>
          </ul>
        </div>
        <div class="footer-right__text-col3">
          <ul>
            <li><a class="other" href="">Other</a></li>
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
footer {
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 1440px;
  height: 700px;
  background-color: #7f7770;
}

.footer-left {
  width: 50%;
  margin-top: 15%;
}
.footer-right {
  width: 50%;
  margin-top: 15%;
}
.footer-left__text {
  width: 500px;
  height: 130px;
  margin-left:150px ;
}
.footer-left__text p {
  font-size: 24px;
  color: #ffffff;
  font-weight: 100;
  font-family: "Montserrat";
}
.footer-left span {
  font-size: 32px;
  color: #ffffff;
  font-weight: 100;
  font-family: "Montserrat";
   margin-left:149px ;
}
.footer-right__text {
  display: flex;
}
.footer-left__text i{
 
 color: white;
 font-size: 30px;
}
.icon{
  margin-left: 30px ;
  
}
.footer-right__text a {
  text-decoration: none;
  font-size: 24px;
  line-height: 42px;
  color: #ffffff;
  font-weight: 400;
  font-family: "Montserrat";
}
.footer-right__text ul {
  list-style: none;
}

</style>