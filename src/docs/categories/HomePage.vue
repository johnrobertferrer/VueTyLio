<template>
    <div v-show="!loadingStatus" >
        <!--Navbar-->
        <mdb-navbar position="top" transparent dark color="elegant" name="Your Logo" scrolling>
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
                <img @load="loadedPhoto($event)" id="background_header" src="../../assets/background.svg" class="view">
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
                        <img @load="loadedPhoto($event)" id="arrow_down_background_header" v-scroll-to="{ el: '#current-projects', easing: [0.9, .40, .70, 2.0], duration: 1200 }" src="../../assets/arrow-down.svg" width="100%" class="mt-3 animated infinite bounce slower" style="position: absolute; bottom: 6vh; width: 6vh;" />
                    </div>
                </div>
            </div>
        </div>

        <section>
            <mdb-row class="m-0">
                <div class="skill-icon yellow lighten-3 col-12 col-sm-12 col-md-6 col-lg-3 pt-3 pb-3">
                    <center>
                        <img @load="loadedPhoto($event)" id="skill_web" src="../../assets/web.svg" class="w-25 m-3">
                        <h3 class="text-center mt-2 mb-4">Web Development</h3>
                    </center>
                </div>
                <div class="skill-icon amber lighten-3 col-12 col-sm-12 col-md-6 col-lg-3 pt-3 pb-3">
                    <center>
                        <img @load="loadedPhoto($event)" id="skill_mobile" src="../../assets/mobile.svg" class="w-25 m-3">
                        <h3 class="text-center mt-2 mb-4">Mobile Development</h3>
                    </center>
                </div>
                <div class="skill-icon orange lighten-3 col-12 col-sm-12 col-md-6 col-lg-3 pt-3 pb-3">
                    <center>
                        <img @load="loadedPhoto($event)" id="skill_arduino" src="../../assets/arduino.svg" class="w-25 m-3">
                        <h3 class="text-center mt-2 mb-4">Arduino Projects</h3>
                    </center>
                </div>
                <div class="skill-icon deep-orange lighten-3 col-12 col-sm-12 col-md-6 col-lg-3 pt-3 pb-3">
                    <center>
                        <img @load="loadedPhoto($event)" id="skill_editing" src="../../assets/editing.svg" class="w-25 m-3">
                        <h3 class="text-center mt-2 mb-4">Photo & Video Editing</h3>
                    </center>
                </div>
            </mdb-row>
        </section>

        <!-- SEMINARS AND MEETUP -->
        <section id="current-projects" class="primary-red p-5">
            <mdb-container>
                <mdb-row>
                    <div class="col-12 col sm-12 col-lg-4 pt-5 white-text text-center" style="word-wrap: break-word; font-size: 500%; line-height: 1.75;">
                        RECENT PROJECT
                    </div>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-8">
                        <mdb-row>
                            <mdb-card-group deck class="pl-5 pr-5">
                                <mdb-card class="project-card">
                                    <mdb-view hover>
                                        <a href="https://myassignmentcalculator.com" target="_blank">
                                            <img class="card-img-top p-1 pt-4"
                                                src="../../assets/book.svg" 
                                                alt="Card image cap">
                                            <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
                                        </a>
                                    </mdb-view>
                                    <mdb-card-body>
                                        <mdb-card-title class="text-center">My Assignment</mdb-card-title>
                                        <center>
                                            <a href="https://myassignmentcalculator.com" target="_blank">
                                                <mdb-btn color="elegant">Demo</mdb-btn>
                                            </a>
                                        </center>
                                    </mdb-card-body>
                                </mdb-card>
                                <mdb-card class="project-card">
                                    <mdb-view hover>
                                        <a href="https://quotetests.com" target="_blank">
                                            <img class="card-img-top p-1 pt-4"
                                                src="../../assets/quote-request.svg" 
                                                alt="Card image cap">
                                            <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
                                        </a>
                                    </mdb-view>
                                    <mdb-card-body>
                                        <mdb-card-title class="text-center">Quotetests</mdb-card-title>
                                        <center>
                                            <a href="https://quotetests.com" target="_blank">
                                                <mdb-btn color="elegant">Demo</mdb-btn>
                                            </a>
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
        <section id="current-projects" class="primary-blue p-5">
            <mdb-container>
                <mdb-row>
                    <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                        <mdb-jumbotron fluid class="mb-5 pt-4 pb-4">
                            <mdb-container>
                                <h2 class="display-4 text-center">ATTENDED SEMINARS</h2>
                            </mdb-container>
                        </mdb-jumbotron>

                        <timeline></timeline>
                    </div>
                </mdb-row>
            </mdb-container>
        </section>

        <section class="default-color-dark p-5">
            <mdb-container>
                
                <!-- <mdb-row class="wrapper">
                    <div class="scrolls"> -->
                <mdb-row>
                    <div class="col-12 col-sm-12 col-lg-6">
                        <img @load="loadedPhoto($event)" id="client_luljettas" src="../../assets/client-luljettas.svg" class="p-3 pt-4 w-100" style="display: inline-block">
                    </div>
                    <div class="col-12 col-sm-6 col-lg-3">
                        <img @load="loadedPhoto($event)" id="client_plm" src="../../assets/client-plm.svg" class="p-3 w-100" style="display: inline-block">
                    </div>
                    <div class="col-12 col-sm-6 col-lg-3">
                        <img @load="loadedPhoto($event)" id="client_marikina" src="../../assets/client-marikina.svg" class="p-3 w-100" style="display: inline-block">
                    </div>
                </mdb-row>
                    <!-- <div class="col-12 col-sm-12 col-lg-6"> -->
                        <!-- <img @load="loadedPhoto($event)" id="client_luljettas" src="../../assets/client-luljettas.svg" class="p-3 pt-4"> -->
                    <!-- </div> -->
                    <!-- <div class="col-12 col-sm-6 col-lg-3"> -->
                        <!-- <img @load="loadedPhoto($event)" id="client_plm" src="../../assets/client-plm.svg" class="p-3"> -->
                    <!-- </div> -->
                    <!-- <div class="col-12 col-sm-6 col-lg-3"> -->
                        <!-- <img @load="loadedPhoto($event)" id="client_marikina" src="../../assets/client-marikina.svg" class="p-3"> -->
                    <!-- </div> -->
                    <!-- </div> -->
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
                <!-- </mdb-row> -->
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
        mdbCardFooter,
        mdbCardTitle,
        mdbCardText,
        mdbView,
        mdbMask,
        mdbCardGroup,
        mdbTooltip,
        mdbBadge,
        mdbJumbotron
    }
    from 'mdbvue';

    import Timeline from '../Components/Timeline.vue';

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
            mdbCardFooter,
            mdbCardTitle,
            mdbCardText,
            mdbView,
            mdbMask,
            mdbCardGroup,
            mdbTooltip,
            mdbBadge,
            mdbJumbotron,
            Timeline
        },
        data() {
            return {
                loading_status: {
                    photo: {
                        background_header: false,
                        skill_web: false,
                        skill_mobile: false,
                        skill_arduino: false,
                        skill_editing: false,
                        arrow_down_background_header: false,
                        client_luljettas: false,
                        client_plm: false,
                        client_marikina: false,
                    },
                    mounted_component: false
                }
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

            loadedPhoto(event) {
                let id = event.path[0].id;

                this.loading_status.photo[id] = true;
            },

            validateIfAllAreLoaded() {
                return Object.keys(this.loading_status.photo).every(element => this.loading_status.photo[element]) && this.loading_status.mounted_component;
            }
        },
        watch: {
            loadChecker(value) {
                value ? this.endLoading() : this.startLoading();
            }
        },
        computed: {
            isLoading() {
                return this.$store.state.processing;
            },

            loadChecker() {
                return this.validateIfAllAreLoaded();
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

    .wrapper { 
        /* background:#EFEFEF;  */
        /* box-shadow: 1px 1px 10px #999;  */
        margin: auto; 
        text-align: center; 
        position: relative;
        /* -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px; */
        /* margin-bottom: 20px !important; */
        width: 100%;
        padding-top: 5px;
    }
    .scrolls { 
        overflow-x: scroll;
        overflow-y: hidden;
        /* height: 0px; */
        white-space:nowrap
    } 
    .wrapper .scrolls img { 
        /* box-shadow: 1px 1px 10px #999;  */
        margin: 2px;
        max-height: 200px;
        cursor: pointer;
        display:inline-block;
        *display:inline;
        *zoom:1;
        vertical-align:top;
    }

    .bg-pattern {
        /* e25247 */
        background: linear-gradient(90deg, #e25247 20px, transparent 10%) center, linear-gradient(#e25247 20px, transparent 10%) center, #ebad04;
        background-size: 3vh 3vh;
    }

    .badge {
        white-space: pre-wrap;
    }
</style>