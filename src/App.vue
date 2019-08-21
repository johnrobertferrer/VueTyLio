<template>
  <div id="app" class="flyout">
    <main>
      <transition name="fade" mode="out-in">
        <section class="red accent-2" v-show="processing" style="width: 100vw; height: 100vh;">
          <center>
            <div class="lds-hourglass" style="margin-top: 45vh;"></div>
          </center>
        </section>
      </transition>
      <transition v-show="!processing" name="fade" mode="out-in">
        <router-view @processingEmit="loading"></router-view>
      </transition>
    </main>
    <mdb-footer color="elegant-color-dark" v-show="!processing" style="margin-top: 0 !important;">
      <p class="footer-copyright mb-0 py-4 text-center">
        &copy; {{new Date().getFullYear()}} Copyright | John Robert Ferrer
      </p>
    </mdb-footer>
  </div>
</template>

<script>
import { mdbNavbar, mdbNavItem, mdbNavbarNav, mdbNavbarToggler, mdbNavbarBrand, mdbFooter } from 'mdbvue';

export default {
  name: 'app',
  components: {
    mdbNavbar,
    mdbNavItem,
    mdbNavbarNav,
    mdbNavbarToggler,
    mdbNavbarBrand,
    mdbFooter
  },
  data() {
    return {
      processing: true
    };
  },
  methods: {
    loading (data) {
      this.processing = data;
    }
  }
};

</script>

<style>
.flyout {
	display:flex;
	flex-direction: column;
	min-height:100vh;
	justify-content: space-between;
}
.active{
  background-color: rgba(255, 255, 255, 0.1);
}
.demo-section {
  padding: 20px 0;
}
.demo-section > section {
  border: 1px solid #e0e0e0;
  padding: 15px;
}
.demo-section > h4 {
  font-weight: bold;
  margin-bottom: 20px;
}
.demo-title {
  color: #9e9e9e;
  font-weight: 700;
  margin-bottom: 0;
  padding-left: 15px;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease-out;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.lds-hourglass {
  display: inline-block;
  position: relative;
  width: 100px;
  height: 100px;
}
.lds-hourglass:after {
  content: " ";
  display: block;
  border-radius: 50%;
  width: 0;
  height: 0;
  margin: 6px;
  box-sizing: border-box;
  border: 50px solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: lds-hourglass 1.2s infinite;
}
@keyframes lds-hourglass {
  0% {
    transform: rotate(0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  50% {
    transform: rotate(900deg);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  100% {
    transform: rotate(1800deg);
  }
}

</style>
