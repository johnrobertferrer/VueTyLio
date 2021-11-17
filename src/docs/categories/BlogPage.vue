<template>
    <mdb-container v-show="!isLoading">
        <h1 class="mt-5 text-center">WORK ON PROGRESS!</h1>
        <center>
            <router-link to="/">Return Home</router-link>
        </center>
    </mdb-container>
</template>
<script>
    import {
        mdbContainer
    }
    from 'mdbvue';

    export default {
        name: 'BlogPage',
        components: {
            mdbContainer,
        },
        data() {
            return {
                processing: true
            };
        },
        created() {
            this.startLoading();
        },
        mounted() {
            setTimeout(() => { this.endLoading(); }, 600);
        },
        computed: {
            isLoading() {
                return this.$store.state.processing;
            }
        },
        methods: {
            startLoading() {
				this.$store.commit('startProcessing');
			},
			endLoading() {
				this.$store.commit('endProcessing');
			},
			loadingChecker() {
                let validated = true;

                // if (!this.loading_status.photo.background_header) {
                //     validated = false;
                // }

                return validated;
            }
        }
    };
</script>
<style></style>