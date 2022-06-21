<template>
  <div id="page-top">
    <!-- Navigation-->
    <!--    bootstrap : m(margin), l(left), r(right), t(top), b(bottom) -1,2,3,4,5 -->
    <a class="menu-toggle rounded mt-5 " href="#" id="sidemenu">
      <i class="fas fa-bars"></i>
    </a>

    <nav id="sidebar-wrapper">
      <ul class="sidebar-nav">
        <li class="sidebar-brand"><a href="#page-top">Start Bootstrap</a></li>
        <li class="nav-item"><a class="nav-link" href="#services">Services</a></li>
        <li class="nav-item"><a class="nav-link" href="#portfolio">Portfolio</a></li>
        <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
        <li class="nav-item"><a class="nav-link" href="#team">Team</a></li>
        <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
      </ul>
    </nav>


    <!-- HeaderCom -->
    <HeaderCom/>

    <!-- SectionCom -->
    <SectionCom/>

    <!-- Footer -->
    <FooterCom/>

    <!--  Portfolio  -->
    <PortCom/>
  </div>
</template>

<script>
// Todo: bootstrap 테마 js 적용
import start from "@/assets/js/scripts2"
import loadWin from "@/assets/js/scripts"
import HeaderCom from "@/components/home/HeaderCom";
import FooterCom from "@/components/home/FooterCom";
import SectionCom from "@/components/home/SectionCom";
import PortCom from "@/components/home/PortCom";

export default {
  name: 'HomeView',
  components: {
    PortCom,
    SectionCom,
    FooterCom,
    HeaderCom
  },
  mounted() {
    loadWin();
    start();
  }
}
</script>

<style>

</style>
