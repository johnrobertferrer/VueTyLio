<template>
    <div id="app" class="flyout">
        <main>
            <transition name="fade" mode="out-in">
                <section class="primary-yellow" v-show="isLoading" style="width: 100vw; height: 100vh;">
                    <center>
                        <div class="lds-hourglass" style="margin-top: 35vh;"></div>
                    </center>
                </section>
            </transition>

            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </main>
        <mdb-footer color="elegant-color" v-show="!isLoading" style="margin-top: 0 !important;">
            <p class="footer-copyright mb-0 py-4 text-center">
                &copy; {{new Date().getFullYear()}} Copyright | John Robert Ferrer
            </p>
        </mdb-footer>
    </div>
</template>

<script>
    import {
        mdbNavbar, mdbNavItem, mdbNavbarNav, mdbNavbarToggler, mdbNavbarBrand, mdbFooter
    }
    from 'mdbvue';

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

        computed: {
            isLoading() {
                return this.$store.state.processing;
            }
        }
    };
</script>

<style>
    body {
        font-family: 'Montserrat' !important;
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

    .flyout {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        justify-content: space-between;
    }
    .active {
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
        width: 25vh;
        height: 25vh;
    }
    .lds-hourglass:after {
        content: " ";
        display: block;
        border-radius: 50%;
        width: 0;
        height: 0;
        margin: 6px;
        box-sizing: border-box;
        border: 12.5vh solid #fff;
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