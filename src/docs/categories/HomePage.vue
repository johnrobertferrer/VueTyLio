<template>
    <div v-show="loadChecker">
        <!--Navbar-->
        <mdb-navbar position="top" transparent dark color="elegant" name="Your Logo" scrolling class="z-9999">
            <mdb-navbar-toggler>
                <mdb-navbar-nav center>
                    <mdb-nav-item to="/" active>HOME</mdb-nav-item>
                    <mdb-nav-item to="/about">ABOUT</mdb-nav-item>
                    <mdb-nav-item to="/work">WORK</mdb-nav-item>
                    <mdb-nav-item to="/contact">CONTACT</mdb-nav-item>
                    <mdb-nav-item to="/blog">BLOG</mdb-nav-item>
                </mdb-navbar-nav>
                <mdb-navbar-nav>
                    <!-- <a href="https://drive.google.com/uc?export=download&id=1SJXkatzMgFnAI70XlpasslxT5skPGw2O" style="position: inline-block"> -->
                    <a href="https://drive.google.com/open?id=1zZkG-AluEYcjs8V07w0cyf9g-_HuqMWE" target="_blank" style="position: inline-block">
                        <mdb-nav-item class="mr-3 font-weight-bold">
                            <span class="font-weight-bold">RESUME</span>
                        </mdb-nav-item>
                    </a>
                </mdb-navbar-nav>
            </mdb-navbar-toggler>
        </mdb-navbar>
        <!--/.Navbar-->

        <div class="h-screen">
            <div class="view intro-2">
                <img ref="background_header" src="../../assets/background.svg" class="view">
                <div class="full-bg-img">
                    <div class="mask rgba-black-strong flex-center">
                        <div class="container">
                            <div class="text-center white-text">
                                <h1 class="font-weight-bold" style="font-size: 3rem">
                                    <span>Hey, I'm Jobs</span>
                                    <br>
                                    <vue-typer
                                        :text='["Software Engineer","Web Developer", "Web Developer Consultant","Github Contributor","Freelancer"]'
                                        class="pl-2 pr-2 pb-1 vue-typer-font"
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
                        <div @click="enableProceed()" style="position: absolute; bottom: 12vh; width: 7vh; cursor: pointer;" >
                            <img ref="arrow_down_background_header" 
                                src="../../assets/arrow-down.svg" 
                                width="100%" 
                                class="mt-3 animated pulse infinite" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-show="proceed">
            <section>
                <mdb-row class="m-0 primary-blue">
                    <div class="skill-icon yellow lighten-3 col-12 col-sm-12 col-md-6 col-lg-3 pt-3 pb-3" data-aos="zoom-in-up" data-aos-anchor-placement="center-bottom" data-aos-duration="400">
                        <center>
                            <img ref="skill_web" src="../../assets/illustrations/software-engineer.svg" class="w-70 m-3">
                            <h3 class="text-center mt-2 mb-4">Software Engineer</h3>
                        </center>
                    </div>
                    <div class="skill-icon amber lighten-3 col-12 col-sm-12 col-md-6 col-lg-3 pt-3 pb-3" data-aos="flip-right" data-aos-anchor-placement="center-bottom" data-aos-duration="500">
                        <center>
                            <img ref="skill_mobile" src="../../assets/illustrations/web-developer.svg" class="w-52 m-3">
                            <h3 class="text-center mt-2 mb-4">Web Developer</h3>
                        </center>
                    </div>
                    <div class="skill-icon orange lighten-3 col-12 col-sm-12 col-md-6 col-lg-3 pt-3 pb-3" data-aos="flip-left" data-aos-anchor-placement="center-bottom" data-aos-duration="600">
                        <center>
                            <img ref="skill_arduino" src="../../assets/illustrations/github-contributor.svg" class="w-55 m-3">
                            <h3 class="text-center mt-2 mb-4">Github Contributor</h3>
                        </center>
                    </div>
                    <div class="skill-icon deep-orange lighten-3 col-12 col-sm-12 col-md-6 col-lg-3 pt-3 pb-3" data-aos="zoom-in-down" data-aos-anchor-placement="center-bottom" data-aos-duration="300">
                        <center>
                            <img ref="skill_editing" src="../../assets/illustrations/freelancer.svg" class="w-43 m-3">
                            <h3 class="text-center mt-2 mb-4">Freelancer</h3>
                        </center>
                    </div>
                </mdb-row>
            </section>

            <!-- SEMINARS AND MEETUP -->
            <section id="current-projects" class="primary-red pt-4 pb-4">
                <mdb-container fluid>
                    <mdb-row class="pt-2 pb-2">
                        <div class="col-12 col sm-12 col-lg-6">
                            <center style="height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; ">
                                <img src="../../assets/illustrations/ongoing-project.svg" class="w-75 mb-5 mt-5">
                                <label class="w-100 mb-4 white-text text-center" style="font-size: 2rem; line-height: 1.75;"> ONGOING PROJECTS </label>
                            </center>
                        </div>
                        <div class="col-12 col-sm-12 col-md-12 col-lg-6 p-5">
                            <mdb-row class="h-100">
                                <div class="project-card col-lg-6 col-md-6 col-12 p-5 c-grey-lighten-1" data-aos="flip-left" data-aos-duration="250" data-aos-anchor-placement="center-bottom">
                                    <div>
                                        <mdb-card-title class="text-center">C.I.R.M.S.</mdb-card-title>
                                        <center>
                                            <a href="https://demo.cirms.ph" target="_blank">
                                                <mdb-btn color="elegant">Demo <i class="ml-1 fas fa-external-link-square-alt"></i></mdb-btn>
                                            </a>
                                        </center>
                                    </div>
                                </div>
                                <div class="project-card col-lg-6 col-md-6 col-12 p-5 c-violet-lighten-1" data-aos="flip-left" data-aos-duration="700" data-aos-anchor-placement="center-bottom">
                                    <div>
                                        <mdb-card-title class="text-center text-white">My Assignment</mdb-card-title>
                                        <center>
                                            <a href="https://myassignmentcalculator.com" target="_blank">
                                                <mdb-btn color="light">Demo <i class="ml-1 fas fa-external-link-square-alt"></i> </mdb-btn>
                                            </a>
                                        </center>
                                    </div>
                                </div>
                                <div class="project-card col-lg-6 col-md-6 col-12 p-5 c-grey-lighten-2" data-aos="flip-down" data-aos-duration="200" data-aos-anchor-placement="center-bottom">
                                    <div>
                                        <mdb-card-title class="text-center">Text2Sign</mdb-card-title>
                                        <center>
                                            <a href="https://text2sign.johnferrer.xyz" target="_blank">
                                                <mdb-btn color="elegant">Demo <i class="ml-1 fas fa-external-link-square-alt"></i></mdb-btn>
                                            </a>
                                        </center>
                                    </div>
                                </div>
                                <div class="project-card col-lg-6 col-md-6 col-12 p-5 c-violet-darken-1" data-aos="flip-down" data-aos-duration="600" data-aos-anchor-placement="center-bottom">
                                    <div>
                                        <mdb-card-title class="text-center text-white">Quotetests</mdb-card-title>
                                        <center>
                                            <a href="https://quotetests.com" target="_blank">
                                                <mdb-btn color="light">Demo <i class="ml-1 fas fa-external-link-square-alt"></i></mdb-btn>
                                            </a>
                                        </center>
                                    </div>
                                </div>
                                <div class="project-card col-lg-6 col-md-6 col-12 p-5 c-grey-lighten-3" data-aos="flip-left" data-aos-duration="200" data-aos-anchor-placement="center-bottom">
                                    <div>
                                        <mdb-card-title class="text-center">Tackling NCOV</mdb-card-title>
                                        <center>
                                            <a href="https://tackling-ncov.johnferrer.xyz" target="_blank">
                                                <mdb-btn color="elegant">Demo <i class="ml-1 fas fa-external-link-square-alt"></i></mdb-btn>
                                            </a>
                                        </center>
                                    </div>
                                </div>
                                <div class="project-card col-lg-6 col-md-6 col-12 p-5 c-violet-darken-2" data-aos="flip-left" data-aos-duration="600" data-aos-anchor-placement="center-bottom">
                                    <div>
                                        <mdb-card-title class="text-center text-white">Zip Info</mdb-card-title>
                                        <center>
                                            <a href="https://infozip.johnferrer.xyz/" target="_blank">
                                                <mdb-btn color="light">Demo <i class="ml-1 fas fa-external-link-square-alt"></i> </mdb-btn>
                                            </a>
                                        </center>
                                    </div>
                                </div>
                            </mdb-row>
                        </div>
                        <!-- </mdb-container> -->
                    </mdb-row>
                </mdb-container>
            </section>

            <!-- PARALLAX -->
            <div class="section">
                <div class="parallax">
                    <h1 class="text-center mb-0 pl-5 pr-5 white-text" style="padding: 150px 0">
                        <span style="background: rgba(235, 173, 4, 0.5); font-size: 2rem;" class="pl-3 pr-3">
                            “Everything visible has a flip side, like a coin.” <br> ― Sunday Adelaja
                        </span>
                    </h1>
                </div>
            </div>

            <!-- achievements -->
            <!-- <section id="current-projects" class="primary-yellow pt-6 pb-6">
                <mdb-container>
                    <mdb-row>
                        <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                            <mdb-jumbotron fluid class="mb-5 pt-4 pb-4">
                                <mdb-container>
                                    <h2 class="display-4 text-center" style="font-size: 1.5rem;">Experiences</h2>
                                </mdb-container>
                            </mdb-jumbotron>

                            <experience></experience>
                        </div>
                    </mdb-row>
                </mdb-container>
            </section> -->

            <!-- achievements -->
            <section id="current-projects" class="primary-blue pt-6 pb-6">
                <mdb-container>
                    <mdb-row>
                        <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                            <mdb-jumbotron fluid class="mb-5 pt-4 pb-4">
                                <mdb-container>
                                    <h2 class="display-4 text-center" style="font-size: 1.5rem;">Achievements</h2>
                                </mdb-container>
                            </mdb-jumbotron>

                            <achievement></achievement>
                        </div>
                    </mdb-row>
                </mdb-container>
            </section>

            <!-- Attended seminars -->
            <section id="current-projects" class="primary-yellow pt-6 pb-6">
                <mdb-container>
                    <mdb-row>
                        <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                            <mdb-jumbotron fluid class="mb-5 pt-4 pb-4">
                                <mdb-container>
                                    <h2 class="display-4 text-center" style="font-size: 1.5rem;">Attended Seminars & Workshop</h2>
                                </mdb-container>
                            </mdb-jumbotron>

                            <timeline></timeline>
                        </div>
                    </mdb-row>
                </mdb-container>
            </section>

            <section class="primary-blue pt-6 pb-6">
                <mdb-container>
                    <mdb-row>
                        <div class="col-12 col-sm-12 col-lg-4" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="200" data-aos-delay="100">
                            <img ref="client_luljettas" src="../../assets/client-luljettas.svg" class="p-3 pt-4 w-100" style="display: inline-block">
                        </div>
                        <div class="col-6 col-sm-6 col-lg-2" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="200" data-aos-delay="250">
                            <img ref="client_plm" src="../../assets/client-plm.svg" class="p-3 w-100" style="display: inline-block">
                        </div>
                        <div class="col-6 col-sm-6 col-lg-2" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="200" data-aos-delay="400">
                            <img ref="client_marikina" src="../../assets/client-marikina.svg" class="p-3 w-100" style="display: inline-block">
                        </div>
                        <div class="col-12 col-sm-12 col-lg-4" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-duration="250" data-aos-delay="500">
                            <img ref="client_fiverr" src="../../assets/client-fiverr.svg" class="p-3 pt-4 w-100" style="display: inline-block">
                        </div>
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

            <!-- achievements -->
            <!-- <section id="current-projects" class="primary-blue p-5">
                <mdb-container>
                    <mdb-row>
                        <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                            <mdb-jumbotron fluid class="mb-5 pt-4 pb-4">
                                <mdb-container>
                                    <h2 class="display-4 text-center" style="font-size: 1.5rem;">Achievements</h2>
                                </mdb-container>
                            </mdb-jumbotron>

                            <achievement></achievement>
                        </div>
                    </mdb-row>
                </mdb-container>
            </section> -->

            <!-- Attended seminars -->
            <!-- <section id="current-projects" class="primary-yellow p-5">
                <mdb-container>
                    <mdb-row>
                        <div class="col-12 col-sm-12 col-md-12 col-lg-12">
                            <mdb-jumbotron fluid class="mb-5 pt-4 pb-4">
                                <mdb-container>
                                    <h2 class="display-4 text-center" style="font-size: 1.5rem;">Attended Seminars & Workshop</h2>
                                </mdb-container>
                            </mdb-jumbotron>

                            <timeline></timeline>
                        </div>
                    </mdb-row>
                </mdb-container>
            </section> -->
        </div>

        <mdb-footer color="elegant-color" v-show="proceed" style="margin-top: 0 !important;">
            <p class="footer-copyright mb-0 py-4 text-center">
                &copy; {{new Date().getFullYear()}} Copyright | John Robert Ferrer
            </p>
        </mdb-footer>
    </div>
</template>

<script>
    import {
        mdbNavbar,
        mdbNavItem,
        mdbNavbarNav,
        mdbNavbarToggler,
        mdbFooter,
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
    import Achievement from '../Components/Achievement.vue';
    import Experience from '../Components/Experience.vue';

    import AOS from 'aos';
    import 'aos/dist/aos.css';

    export default {
        name: 'HomePage',
        components: {
            mdbNavbar,
            mdbNavItem,
            mdbNavbarNav,
            mdbNavbarToggler,
            mdbFooter,
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
            Timeline,
            Achievement,
            Experience
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
                },
                session: false,
                proceed: false,
                window: {
                    width: 0,
                    height: 0
                }
            };
        },
        created() {
            AOS.init();
            window.addEventListener('resize', this.handleResize);
            this.handleResize();
        },
        mounted() {
            this.setSession();
            this.startLoading();
            this.loading_status.mounted_component = true;
            this.setImageChecker();
            this.handleResize();
        },
        methods: {
            refreshHard() {
                window.scrollTo(0,0);
                AOS.refresh();
                AOS.refreshHard();
            },

            setSession() {
                if(typeof sessionStorage.getItem("hasSessionStorage") == "object") {
                    sessionStorage.setItem("hasSessionStorage", true);
                } else {
                    this.session = true;
                }
            },

            setImageChecker() {
                let that = this;
                let ms = that.session ? 300 : 3250;

                setTimeout(function() {
                    if(that.checkImageChecker()) {
                        that.refreshHard();
                    } else {
                        that.setImageChecker();
                    }
                }, ms);

                setTimeout(() => { that.refreshHard(); }, 700);
            },

            startLoading() {
                this.$store.commit('startProcessing');
            },

            endLoading() {
                this.$store.commit('endProcessing');
            },

            validateIfAllAreLoaded() {
                return Object.keys(this.loading_status.photo).every(element => this.loading_status.photo[element]) && this.loading_status.mounted_component;
            },

            checkImageChecker() {
                let that = this;

                Object.keys(this.loading_status.photo).forEach(function(element) {
                    if(that.$refs[element] != null) {
                        that.loading_status.photo[element] = true;
                    }
                });

                return that.validateIfAllAreLoaded();
            },

            handleResize() {
                this.window.width = window.innerWidth;
                this.window.height = window.innerHeight;

                let children = document.getElementsByClassName('h-screen');

                for (let i = 0; i < children.length; i++) {
                    children[i].style.height = this.window.height + 'px';
                }
            },

            enableProceed() {
                this.proceed = true;
                let that = this;

                setTimeout(() => {
                    VueScrollTo.scrollTo('#current-projects', 1200, { easing: [0.9, .40, .70, 2.0] });
                    that.refreshHard();
                }, 200);
            }
        },
        watch: {
            loadChecker(value) {
                let that = this;

                if(value) {
                    this.endLoading();
                    setTimeout(() => { that.refreshHard(); }, 500);
                } else {
                    this.startLoading();
                }
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

    .pt-6 {
        padding-top: 4rem !important;
    }

    .pb-6 {
        padding-bottom: 4rem !important;
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
        font-family: 'Montserrat', 'Segoe UI', 'Roboto Light';
        font-size: 1.8rem;
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

    .c-violet-darken-1 {
        background-color: #434175;
    }

    .c-violet-darken-2 {
        background-color: #333364;
    }

    .c-violet-lighten-1 {
        background-color: #565387;
    }

    .c-grey-lighten-1 {
        background-color: #E3E8F4;
    }

    .c-grey-lighten-2 {
        background-color: #AFC0E0;
    }

    .c-grey-lighten-3 {
        background-color: rgb(129, 150, 189);
    }

    .skill-icon:hover {
        box-shadow: inset 0 0 0 1vw #0c8b91;
        transition: 0.2s;
    }

    .skill-icon h3 {
        font-size: 1.5rem;
    }

    .project-card {
        flex: 0 1 100%;
        align-items: center;
        justify-content: center;
        display: flex;
    }

    .project-card:hover {
        box-shadow: inset 0 0 0 1vw #2e2e2e;
        transition: 0.2s;
    }

    .project-card h4 {
        font-size: 1.2rem;
    }

    .project-card a {
        font-size: 1rem;
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

    img {
        pointer-events: none;
    }

    * { 
        -webkit-touch-callout: none; /* iOS Safari */
            -webkit-user-select: none; /* Safari */
            -khtml-user-select: none; /* Konqueror HTML */
                -moz-user-select: none; /* Old versions of Firefox */
                -ms-user-select: none; /* Internet Explorer/Edge */
                    user-select: none; /* Non-prefixed version, currently
                                        supported by Chrome, Opera and Firefox */
    }

    .bg-pattern {
        /* e25247 */
        background: linear-gradient(90deg, #e25247 20px, transparent 10%) center, linear-gradient(#e25247 20px, transparent 10%) center, #ebad04;
        background-size: 3vh 3vh;
    }

    .badge {
        white-space: pre-wrap;
    }

    .w-43 {
        width: 43% !important;
    }

    .w-52 {
        width: 52% !important;
    }

    .w-55 {
        width: 55% !important;
    }

    .w-70 {
        width: 70% !important;
    }

    .display-4 {
        word-break: break-word;
        font-size: 2rem;
        font-weight: bold;
    }

    .delay-1s {
        animation-delay: 1s;
    }

    .duration-0pt5s {
        animation-duration: 0.5s;
    }

    .z-9999 {
        z-index: 9999 !important;
    }

    .h-screen {
        height: 100vh;
    }
</style>