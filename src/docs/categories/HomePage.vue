<template>
    <div>
        <!--Navbar-->
        <mdb-navbar position="top" transparent dark color="elegant" name="Your Logo" href="#" scrolling>
            <mdb-navbar-toggler>
                <mdb-navbar-nav center>
                    <!-- <mdb-nav-item v-show="!navigation.visible" v-on:mouseenter="openNavigation()" v-on:mouseleave="closeNavigation()">
                        <mdb-icon icon="star" size="2x" class="mt-3 mr-6" v-on:mouseenter="openNavigation()" v-on:mouseleave="closeNavigation()" />
                    </mdb-nav-item> -->
                    <mdb-nav-item to="/navigation/navigation-v1" active v-show="navigation.visible">HOME</mdb-nav-item>
                    <mdb-nav-item to="/navigation/navigation-v2" v-show="navigation.visible">PROJECTS</mdb-nav-item>
                    <a href="https://drive.google.com/uc?export=download&id=1SJXkatzMgFnAI70XlpasslxT5skPGw2O" v-show="navigation.visible"><mdb-nav-item>RESUME</mdb-nav-item></a>
                    <mdb-nav-item to="/navigation/navigation-v4" v-show="navigation.visible">CONTACT</mdb-nav-item>
                </mdb-navbar-nav>
            </mdb-navbar-toggler>
        </mdb-navbar>
        <!--/.Navbar-->

        <div style="height: 100vh;">
            <div class="view intro-2">
                <div class="full-bg-img">
                    <div class="mask rgba-black-strong flex-center">
                        <div class="container">
                            <div class="white-text text-center">
                                <!-- <h1 class="font-weight-bold animated infinite pulse fast" style="font-size: 4em">Hai</h1> -->
                                <h1 class="font-weight-bold animated infinite heartBeat" style="font-size: 3.5em">I am Star</h1>
                                <mdb-icon icon="angle-double-down" size="2x" class="mt-3 mr-6 animated infinite bounce slower" style="position: absolute; bottom: 50px;" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- CURRENT PROJECTS -->
        <section class="red accent-2" style="padding: 100px 0;">
            <mdb-container>
                <mdb-row>
                    <div class="col-12 col sm-12 col-lg-12">
                        <h2 class="jumbotron text-center font-weight-bold">Current Projects</h2>
                    </div>
                    <mdb-container>
                        <mdb-row>
                            <mdb-card-group deck class="pl-3 pr-3">
                                <mdb-card 
                                    data-aos="fade-up"
                                    data-aos-delay="0"
                                    data-aos-anchor-placement="top-bottom"
                                >
                                    <mdb-view hover>
                                        <a href="/#/components">
                                            <mdb-card-image src="https://mdbootstrap.com/img/Photos/Others/images/16.jpg" alt="Card image cap"></mdb-card-image>
                                            <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
                                        </a>
                                    </mdb-view>
                                    <mdb-card-body>
                                        <mdb-card-title class="text-center">Card title</mdb-card-title>
                                        <mdb-card-text class="text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
                                        <center><mdb-btn color="primary">Read more</mdb-btn></center>
                                    </mdb-card-body>
                                </mdb-card>
                                <mdb-card 
                                    data-aos="fade-up"
                                    data-aos-delay="150"
                                    data-aos-anchor-placement="top-bottom"
                                >
                                    <mdb-view hover>
                                        <a href="#!">
                                            <mdb-card-image src="https://mdbootstrap.com/img/Photos/Others/images/14.jpg" alt="Card image cap"></mdb-card-image>
                                            <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
                                        </a>
                                    </mdb-view>
                                    <mdb-card-body>
                                        <mdb-card-title class="text-center">Card title</mdb-card-title>
                                        <mdb-card-text class="text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
                                        <center><mdb-btn color="primary">Read more</mdb-btn></center>
                                    </mdb-card-body>
                                </mdb-card>
                                <mdb-card 
                                    data-aos="fade-up"
                                    data-aos-delay="300"
                                    data-aos-anchor-placement="top-bottom"
                                >
                                    <mdb-view hover>
                                        <a href="#!">
                                            <mdb-card-image src="https://mdbootstrap.com/img/Photos/Others/images/11.jpg" alt="Card image cap"></mdb-card-image>
                                            <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
                                        </a>
                                    </mdb-view>
                                    <mdb-card-body>
                                        <mdb-card-title class="text-center">Card title</mdb-card-title>
                                        <mdb-card-text class="text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
                                        <center><mdb-btn color="primary">Read more</mdb-btn></center>
                                    </mdb-card-body>
                                </mdb-card>
                            </mdb-card-group>
                        </mdb-row>
                    </mdb-container>
                </mdb-row>
            </mdb-container>
        </section>
        <div class="section">
            <div class="parallax">
                <h1 class="text-center mb-0 white-text" style="padding: 150px 0">“Be as smart as you can, but remember that it is always better to be wise than to be smart.” – Alan Alda</h1>
            </div>
        </div>
        <!-- WHO AM I -->
        <section class="grey darken-4" style="padding: 100px 0;">
            <mdb-container>
                <mdb-row>
                    <!-- LEFT -->
                    <div class="col-12 col-sm-12 col-lg-4 mb-5" data-aos="zoom-in-down"
                                data-aos-anchor-placement="top-bottom" data-aos-delay="200">
                        <img src="../../assets/gradpic.jpg" width="100%">
                    </div>

                    <!-- RIGHT -->
                    <div class="col-12 col-sm-12 col-lg-8 white-text" data-aos="zoom-in-down" data-aos-anchor-placement="top-bottom" data-aos-delay="200">
                        <h2 class="text-center font-weight-bold">Who am I</h2>
                        <div class="text-body text-justify white-text">
                            <p>
                                Hi, my name is John Robert S. Ferrer and way back on 2018, I am a full-stack Web Developer in Captivate Solutions during my On-the-job Training (OJT) days. Currently, I am working as Software Engineer mainly as PHP, Laravel Developer at V5 of Nelsoft Systems Inc.
                            </p>
                            <p>
                                I have a Bachelor of Science in Computer Studies - Major in Information Technology from Pamantasan ng Lungsod ng Maynila, and my primary focus and inspiration for my studies is Web Development.
                            </p>
                            <p>
                                I love also the sides on both Hybrid Mobile Application Development and the innovations of Internet Of Things (IOT) Projects.
                            </p>
                            <p>
                                For me, I believe, I can almost develop any platform using these web technologies. In my free time, I study any crash course in web development or any topic that looks cool on Youtube. Traversy Media, Dev Tips, CodeEmporium, The Net Ninja are the channels in Youtube that I subscribed because of their Passion in Programming and also their life as a Programmer/Developer.
                            </p>
                            <p>
                                I am constantly developing projects, experimenting with new technologies and techniques. And I am very passionate about Web Development, and strive to better myself as a developer, and the development community as a whole.
                            </p>
                        </div>
                    </div>
                </mdb-row>
            </mdb-container>
        </section>
    </div>
</template>

<script>
import {
  mdbNavbar,
  mdbNavItem,
  mdbNavbarNav,
  mdbNavbarToggler,
  mdbBtn,
  mdbIcon,
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbCard,
  mdbCardImage,
  mdbCardHeader,
  mdbCardBody,
  mdbCardTitle,
  mdbCardText,
  mdbView,
  mdbMask,
  mdbCardGroup
} from 'mdbvue';

export default {
  name: 'HomePage',
  components: {
    mdbNavbar,
    mdbNavItem,
    mdbNavbarNav,
    mdbNavbarToggler,
    mdbBtn,
    mdbIcon,
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardImage,
    mdbCardHeader,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbView,
    mdbMask,
    mdbCardGroup
  },
  data(){
    return {
      navigation: {
        visible: true
      }
    };
  },
  methods: {
    openNavigation() {
      this.navigation.visible = true;
    },

    closeNavigation() {
      this.navigation.visible = false;
    }
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

    .parallax {
        /* The image used */
        background-image: url("https://images.unsplash.com/photo-1502685904007-66914fdd9118?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80");

        /* Set a specific height */
        min-height: 400px; 

        /* Create the parallax scrolling effect */
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>