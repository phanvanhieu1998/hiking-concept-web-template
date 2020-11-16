<template>
  <div>
    <Header></Header>
    <Group1></Group1>
    <Group2></Group2>
    <Group3></Group3>
    <Group4></Group4>
    <Group5></Group5>
    <Group6></Group6>
    <Group7></Group7>
    <Group8></Group8>
    <Footer></Footer>
   
  </div>
</template>

<script>
import Header from "@/components/share/Header.vue";
import Group1 from "@/components/home/Group1.vue";
import Group2 from "@/components/home/Group2.vue";

import Group3 from "@/components/home/Group3.vue";
import Group4 from "@/components/home/Group4.vue";
import Group5 from "@/components/home/Group5.vue";
import Group6 from "@/components/home/Group6.vue";
import Group7 from "@/components/home/Group7.vue";
import Group8 from "@/components/home/Group8.vue";

import Footer from "@/components/share/Footer.vue";


export default {
  data() {
    return {};
  },
  components: {
    Header,
    Footer,
    Group1,
    Group2,
    Group3,
    Group4,
    Group5,
    Group6,
    Group7,
    Group8
  },
};
</script>