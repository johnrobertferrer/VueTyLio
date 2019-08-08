<template>
  <div>
    <!--Navbar-->
    <mdb-navbar position="top" transparent dark color="primary" name="Your Logo" href="#" scrolling>
      <mdb-navbar-toggler>
        <mdb-navbar-nav>
          <mdb-nav-item to="/navigation/navigation-v1" active>Home</mdb-nav-item>
          <mdb-nav-item to="/navigation/navigation-v2">About Me</mdb-nav-item>
          <mdb-nav-item to="/navigation/navigation-v3">My Projects</mdb-nav-item>
          <mdb-nav-item to="/navigation/navigation-v4">Contact Me</mdb-nav-item>
        </mdb-navbar-nav>
      </mdb-navbar-toggler>
    </mdb-navbar>
    <!--/.Navbar-->
    <div style="height: 100vh; margin-bottom: -25px">
      <div class="view intro-2">
        <div class="full-bg-img">
          <div class="mask rgba-black-strong flex-center">
            <div class="container">
              <div class="white-text text-center">
                <h2 class="font-weight-bold">Hi I'm John Ferer</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>



    
  </div>
</template>

<script>
import { mdbNavbar, mdbNavItem, mdbNavbarNav, mdbNavbarToggler} from 'mdbvue';

export default {
  name: 'HomePage',
  components: {
    mdbNavbar,
    mdbNavItem,
    mdbNavbarNav,
    mdbNavbarToggler
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.view {
  background: url("../../assets/2.png")no-repeat center center;
  background-size: cover;
  height: 100%;
}
</style>

