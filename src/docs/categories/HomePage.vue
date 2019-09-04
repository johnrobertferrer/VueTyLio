<template>
    <div v-show="!loadingStatus" >
        <!--Navbar-->
        <mdb-navbar position="top" transparent dark color="elegant" name="Your Logo" href="/about" scrolling>
            <mdb-navbar-toggler>
                <mdb-navbar-nav center>
                    <mdb-nav-item to="/" active>HOME</mdb-nav-item>
                    <mdb-nav-item to="/about">ABOUT</mdb-nav-item>
                    <mdb-nav-item to="/work">WORK</mdb-nav-item>
                    <mdb-nav-item to="/contact">CONTACT</mdb-nav-item>
                    <mdb-nav-item to="/blog">BLOG</mdb-nav-item>
                </mdb-navbar-nav>
                <mdb-navbar-nav>
                    <a href="https://drive.google.com/uc?export=download&id=1SJXkatzMgFnAI70XlpasslxT5skPGw2O" style="position: inline-block">
                        <mdb-nav-item class="mr-3 font-weight-bold">
                            <span class="font-weight-bold">RESUME</span>
                        </mdb-nav-item>
                    </a>
                </mdb-navbar-nav>
            </mdb-navbar-toggler>
        </mdb-navbar>
        <!--/.Navbar-->


        <div style="height: 100vh;">
            <div class="view intro-2">
                <img @load="loadedBackgroundHeader()" src="../../assets/background.svg" class="view" loading="lazy">
                <div class="full-bg-img">
                    <div class="mask rgba-black-strong flex-center">
                        <div class="container">
                            <div class="text-center white-text">
                                <h1 class="font-weight-bold" style="font-size: 3.5em">
                                    <span class="mb-5">ATTRACTED ON</span>
                                    <br>
                                    <vue-typer
                                        :text='["Web Development","Hybrid Mobile Development","Arduino Projects","Photo & Video Editing"]'
                                        class="mt-5 pl-2 pr-2 pb-1"
                                        :repeat='Infinity'
                                        :shuffle='true'
                                        initial-action='erasing'
                                        :pre-type-delay='0'
                                        :type-delay='100'
                                        :pre-erase-delay='2000'
                                        :erase-delay='10'
                                        erase-style='backspace'
                                        :erase-on-complete='true'
                                        caret-animation='expand'
                                        text-color='#fff'
                                    ></vue-typer>
                                </h1>
                            </div>
                        </div>
                        <img @load="loadedIconArrowDownBackgroundHeader()" v-scroll-to="{ el: '#current-projects', easing: [0.9, .40, .70, 2.0], duration: 1200 }" src="../../assets/arrow-down.svg" width="100%" class="mt-3 animated infinite bounce slower" style="position: absolute; bottom: 6vh; width: 6vh;" />
                    </div>
                </div>
            </div>
        </div>

        <section>
            <mdb-row class="m-0">
                <div data-sal="fade" class="skill-icon yellow lighten-3 col-12 col-sm-12 col-md-6 col-lg-3 pt-3 pb-3">
                    <center>
                        <img @load="loadedSkillWeb()" loading="lazy" src="../../assets/web.svg" class="w-25 m-3">
                        <h3 class="text-center mt-2 mb-4">Web Development</h3>
                    </center>
                </div>
                <div class="skill-icon amber lighten-3 col-12 col-sm-12 col-md-6 col-lg-3 pt-3 pb-3">
                    <center>
                        <img @load="loadedSkillMobile()" loading="lazy" src="../../assets/mobile.svg" class="w-25 m-3">
                        <h3 class="text-center mt-2 mb-4">Mobile Development</h3>
                    </center>
                </div>
                <div class="skill-icon orange lighten-3 col-12 col-sm-12 col-md-6 col-lg-3 pt-3 pb-3">
                    <center>
                        <img @load="loadedSkillArduino()" loading="lazy" src="../../assets/arduino.svg" class="w-25 m-3">
                        <h3 class="text-center mt-2 mb-4">Arduino Projects</h3>
                    </center>
                </div>
                <div class="skill-icon deep-orange lighten-3 col-12 col-sm-12 col-md-6 col-lg-3 pt-3 pb-3">
                    <center>
                        <img @load="loadedSkillEditing()" loading="lazy" src="../../assets/editing.svg" class="w-25 m-3">
                        <h3 class="text-center mt-2 mb-4">Photo & Video Editing</h3>
                    </center>
                </div>
            </mdb-row>
        </section>

        <!-- SEMINARS AND MEETUP -->
        <section id="current-projects" class="primary-red" style="padding: 100px 0;">
            <mdb-container>
                <mdb-row>
                    <div class="col-12 col sm-12 col-lg-4 white-text p-2 text-center" style="word-wrap: break-word; font-size: 500%; margin-top: 6%; line-height: 1.75;">
                        RECENT PROJECT
                        <!-- <h1 class="text-center font-weight-bold white-text">Recent Projects</h1> -->
                    </div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-8">
                    <!-- <mdb-container> -->
                        <mdb-row>
                            <mdb-card-group deck class="pl-5 pr-5">
                                <mdb-card class="animated infinite shake slow">
                                    <mdb-view hover>
                                        <a href="/#/components">
                                            <mdb-card-image src="https://mdbootstrap.com/img/Photos/Others/images/16.jpg" alt="Card image cap"></mdb-card-image>
                                            <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
                                        </a>
                                    </mdb-view>
                                    <mdb-card-body>
                                        <mdb-card-title class="text-center">DEAF Ed</mdb-card-title>
                                        <mdb-card-text class="text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
                                        <center>
                                            <mdb-btn class="primary-red">Read more</mdb-btn>
                                        </center>
                                    </mdb-card-body>
                                </mdb-card>
                                <mdb-card class="animated infinite shake slower">
                                    <mdb-view hover>
                                        <a href="#!">
                                            <mdb-card-image src="https://mdbootstrap.com/img/Photos/Others/images/14.jpg" alt="Card image cap"></mdb-card-image>
                                            <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
                                        </a>
                                    </mdb-view>
                                    <mdb-card-body>
                                        <mdb-card-title class="text-center">Ms. Marikina 2018</mdb-card-title>
                                        <mdb-card-text class="text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
                                        <center>
                                            <mdb-btn color="primary">Read more</mdb-btn>
                                        </center>
                                    </mdb-card-body>
                                </mdb-card>
                            </mdb-card-group>
                        </mdb-row>
                    </div>
                    <!-- </mdb-container> -->
                </mdb-row>
            </mdb-container>
        </section>

        <!-- PARALLAX -->
        <div class="section">
            <div class="parallax">
                <h1 class="text-center mb-0 pl-5 pr-5 white-text" style="padding: 150px 0">“Be as smart as you can, but remember that it is always better to be wise than to be smart.” – Alan Alda</h1>
            </div>
        </div>

        <!-- CURRENT PROJECTS -->
        <section id="current-projects" class="primary-blue" style="padding: 100px 0;">
            <mdb-container>
                <mdb-row>
                    <div class="col-12 col sm-12 col-lg-4 p-2 white-text text-center" style="word-wrap: break-word; font-size: 500%; margin-top: 6%; line-height: 1.75;">
                        RECENT PROJECT
                        <!-- <h1 class="text-center font-weight-bold white-text">Recent Projects</h1> -->
                    </div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-8">
                    <!-- <mdb-container> -->
                        <mdb-row>
                            <mdb-card-group deck class="pl-5 pr-5">
                                <mdb-card class="animated infinite delay-4s shake slow project-card">
                                    <mdb-view hover>
                                        <a href="/#/components">
                                            <mdb-card-image src="https://mdbootstrap.com/img/Photos/Others/images/16.jpg" alt="Card image cap"></mdb-card-image>
                                            <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
                                        </a>
                                    </mdb-view>
                                    <mdb-card-body>
                                        <mdb-card-title class="text-center">DEAF Ed</mdb-card-title>
                                        <mdb-card-text class="text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
                                        <center>
                                            <mdb-btn color="primary">Read more</mdb-btn>
                                        </center>
                                    </mdb-card-body>
                                </mdb-card>
                                <mdb-card class="animated infinite shake slower project-card">
                                    <mdb-view hover>
                                        <a href="#!">
                                            <mdb-card-image src="https://mdbootstrap.com/img/Photos/Others/images/14.jpg" alt="Card image cap"></mdb-card-image>
                                            <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
                                        </a>
                                    </mdb-view>
                                    <mdb-card-body>
                                        <mdb-card-title class="text-center">Ms. Marikina 2018</mdb-card-title>
                                        <mdb-card-text class="text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</mdb-card-text>
                                        <center>
                                            <mdb-btn color="primary">Read more</mdb-btn>
                                        </center>
                                    </mdb-card-body>
                                </mdb-card>
                            </mdb-card-group>
                        </mdb-row>
                    </div>
                    <!-- </mdb-container> -->
                </mdb-row>
            </mdb-container>
        </section>

        <section class="teal darken-4" style="padding: 100px 0;">
            <mdb-container>
                <mdb-row>
                    <div class="col-12 col-sm-12 col-lg-6" data-sal="slide-up"
  data-sal-delay="300"
  data-sal-easing="ease-out-bounce">
                        <img loading="lazy" src="../../assets/client-luljettas.svg" class="w-100 p-3 pt-4">
                    </div>
                    <div class="col-12 col-sm-6 col-lg-3">
                        <img loading="lazy" src="../../assets/client-plm.svg" class="w-100 p-3">
                    </div>
                    <div class="col-12 col-sm-6 col-lg-3">
                        <img loading="lazy" src="../../assets/client-marikina.svg" class="w-100 p-3">
                    </div>
                    <!-- <div data-sal="zoom-in"
                        data-sal-duration="2000"
                        data-sal-delay="500"
                        data-sal-easing="ease-out-bounce">
                        Element To Animate
                    </div>

                    <h1
                    data-sal="slide-up"
                    data-sal-delay="300"
                    data-sal-duration="800"
                    data-sal-easing="ease-out-bounce"
                    >Lorem</h1> -->
                </mdb-row>
            </mdb-container>
        </section>


        <!-- WHO AM I -->
        <!-- <section class="primary-blue" style="padding: 100px 0;">
            <mdb-container>
                <mdb-row>
                    <div class="col-12 col-sm-12 col-lg-4 mb-5" data-aos="zoom-in-down" data-aos-anchor-placement="top-center" data-aos-delay="200">
                        <img src="../../assets/gradpicture.jpg" width="100%">
                    </div>

                    <div class="col-12 col-sm-12 col-lg-8 white-text" data-aos="zoom-in-down" data-aos-anchor-placement="top-center" data-aos-delay="200">
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
        </section> -->
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
    }
    from 'mdbvue';

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
        data() {
            return {
                loading_status: {
                    photo: {
                        background_header: false,
                        skill_web: false,
                        skill_mobile: false,
                        skill_arduino: false,
                        skill_editing: false
                    },
                    icon: {
                        arrow_down_background_header: false
                    },
                    mounted_component: false
                },
                status: false,
                scroll_y: 0
            };
        },
        mounted() {
            this.startLoading();
            this.loading_status.mounted_component = true;
        },
        methods: {
            startLoading() {
                this.$store.commit('startProcessing');
            },

            endLoading() {
                this.$store.commit('endProcessing');
            },

            loadedIconArrowDownBackgroundHeader() {
                this.loading_status.icon.arrow_down_background_header = true;
                console.log("LOADED ARROW DOWN ICON");
            },

            loadedBackgroundHeader() {
                this.loading_status.photo.background_header = true;
            },

            loadedSkillWeb() {
                this.loading_status.photo.skill_web = true;
            },

            loadedSkillMobile() {
                this.loading_status.photo.skill_mobile = true;
            },

            loadedSkillArduino() {
                this.loading_status.photo.skill_arduino = true;
            },

            loadedSkillEditing() {
                this.loading_status.photo.skill_editing = true;
            },

            loadingChecker() {
                let validated = true;

                if (!this.loading_status.photo.background_header) {
                    validated = false;
                } else if (!this.loading_status.photo.skill_web) {
                    validated = false;
                } else if (!this.loading_status.photo.skill_mobile) {
                    validated = false;
                } else if (!this.loading_status.photo.skill_arduino) {
                    validated = false;
                } else if (!this.loading_status.photo.skill_editing) {
                    validated = false;
                } else if (!this.loading_status.icon.arrow_down_background_header) {
                    validated = false;
                } else if (!this.loading_status.mounted_component) {
                    validated = false;
                }

                return validated;
            },

            loadChecker() {
                if (this.loadingChecker()) {
                    this.endLoading();
                } else {
                    this.startLoading();
                }
            }
        },
        watch: {
            'loading_status.photo.background_header': function (newValue) {
                this.loadChecker();
            },

            'loading_status.photo.skill_web': function (newValue) {
                this.loadChecker();
            },

            'loading_status.photo.skill_mobile': function (newValue) {
                this.loadChecker();
            },

            'loading_status.photo.skill_arduino': function (newValue) {
                this.loadChecker();
            },

            'loading_status.photo.skill_editing': function (newValue) {
                this.loadChecker();
            },

            'loading_status.icon.arrow_down_background_header': function (newValue) {
                this.loadChecker();
            },

            'loading_status.mounted_component': function (newValue) {
                this.loadChecker();
            }
        },
        computed: {
            isLoading() {
                return this.$store.state.processing;
            },

            loadingStatus: {
                get: function() {
                    return this.$store.state.processing;
                },
                set: function() {
                    this.endLoading();
                }
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .view {
        height: 100%;
        width: 100%;
    }

    .view img {
        object-fit: cover;
    }

    .parallax {
        background-image: url("../../assets/background.svg");
        
        min-height: 400px;
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .vue-typer {
        font-family: 'Century Gothic', 'Segoe UI', 'Roboto Light';
        background: #fff;
    }

    .elegant-color {
        background-color: #0c8b91 !important;
    }

    .primary-red {
        background-color: #e25247;
    }

    .primary-blue {
        background-color: #0c8b91;
    }

    .primary-yellow {
        background-color: #ebad04;
    }
    
    .project-card {
        animation-duration: 5s;
    }

    .skill-icon:hover {
        box-shadow: inset 0 0 0 1vw #0c8b91;
        transition: 0.2s;
    }
</style>