<template>
    <mdb-container>
        <h1 class="mt-5 text-center">WORK ON PROGRESS!</h1>
        <center>
            <a href="/">Return Home</a>
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
        mounted() {
            this.startLoading();
            this.endLoading();
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