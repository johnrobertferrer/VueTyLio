<template>
    <div>
        <!--Navbar-->
        <mdb-navbar position="top" transparent dark color="elegant" name="Your Logo" href="#" scrolling>
            <mdb-navbar-toggler>
                <mdb-navbar-nav center>
                    <mdb-nav-item to="/navigation/navigation-v1" active>HOME</mdb-nav-item>
                    <mdb-nav-item to="/navigation/navigation-v2">PROJECTS</mdb-nav-item>
                    <a href="https://drive.google.com/uc?export=download&id=1SJXkatzMgFnAI70XlpasslxT5skPGw2O">
                        <mdb-nav-item>RESUME</mdb-nav-item>
                    </a>
                    <mdb-nav-item to="/navigation/navigation-v4">CONTACT</mdb-nav-item>
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
                                <h1 class="font-weight-bold">Hello, I'm John Ferrer</h1>

                                <mdb-icon icon="angle-double-down" size="2x" class="mt-3 mr-6" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- body -->
        <section style="background-color: #212121; padding: 100px 0;">
            <mdb-container>
                <mdb-row>
                    <!-- LEFT -->
                    <div class="col-12 col-sm-12 col-lg-4">
                        <img src="../../assets/gradpic.jpg" width="100%">
                    </div>

                    <!-- RIGHT -->
                    <div class="col-12 col-sm-12 col-lg-8 white-text">
                        <h2 class="text-center font-weight-bold">Who Am I?</h2>
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
                                I am constantly developing projects, experimenting with new technologies and techniques. And I am very passionate about Web Development, and strive to better myself as a developer, and the development community as a whole.</p>
                            </p>
                        </div>
                    </div>
                </mdb-row>
            </mdb-container>
        </section>
        <!--  -->
        <section style="background-color: #66ccff; padding: 100px 0;">
            <div class="container">
                <div class="row">
                    <div class="col-12 col sm-12 col-lg-12">
                        <h2 class="jumbotron text-center">Current Project</h2>
                    </div>

                    <mdb-row>
                        <mdb-card-group deck>
                            <mdb-card>
                                <mdb-view hover>
                                    <a href="/components">
                                        <mdb-card-image src="https://mdbootstrap.com/img/Photos/Others/images/16.jpg" alt="Card image cap"></mdb-card-image>
                                        <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
                                    </a>
                                </mdb-view>
                                <mdb-card-body>
                                    <mdb-card-title>Card title</mdb-card-title>
                                    <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
                                    <mdb-btn color="primary">Read more</mdb-btn>
                                </mdb-card-body>
                            </mdb-card>
                            <mdb-card>
                                <mdb-view hover>
                                    <a href="#!">
                                        <mdb-card-image src="https://mdbootstrap.com/img/Photos/Others/images/14.jpg" alt="Card image cap"></mdb-card-image>
                                        <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
                                    </a>
                                </mdb-view>
                                <mdb-card-body>
                                    <mdb-card-title>Card title</mdb-card-title>
                                    <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
                                    <mdb-btn color="primary">Read more</mdb-btn>
                                </mdb-card-body>
                            </mdb-card>
                            <mdb-card>
                                <mdb-view hover>
                                    <a href="#!">
                                        <mdb-card-image src="https://mdbootstrap.com/img/Photos/Others/images/15.jpg" alt="Card image cap"></mdb-card-image>
                                        <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
                                    </a>
                                </mdb-view>
                                <mdb-card-body>
                                    <mdb-card-title>Card title</mdb-card-title>
                                    <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
                                    <mdb-btn color="primary">Read more</mdb-btn>
                                </mdb-card-body>
                            </mdb-card>
                            <mdb-card>
                                <mdb-view hover>
                                    <a href="#!">
                                        <mdb-card-image src="https://mdbootstrap.com/img/Photos/Others/images/15.jpg" alt="Card image cap"></mdb-card-image>
                                        <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
                                    </a>
                                </mdb-view>
                                <mdb-card-body>
                                    <mdb-card-title>Card title</mdb-card-title>
                                    <mdb-card-text>Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
                                    <mdb-btn color="primary">Read more</mdb-btn>
                                </mdb-card-body>
                            </mdb-card>
                        </mdb-card-group>
                    </mdb-row>
                </div>
            </div>
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