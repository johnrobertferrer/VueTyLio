<template>
  <mdb-container>
    <h1 class="mt-5 text-center">WORK ON PROGRESS!</h1>
    <center><a href="/">Return Home</a></center>
  </mdb-container>
</template>

<script>
import {
  mdbContainer
} from 'mdbvue';

export default {
  name: 'AboutPage',
  components: {
    mdbContainer,
  },
  data(){
    return {
      processing: true
    };
  },
  mounted() {
    this.processing = false;
    this.$emit('processingEmit', this.processing);
  },
};
</script>

<style>

</style>