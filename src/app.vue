<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
<template>
  <div id="app">
    <img src="./assets/img/logo.png">
    <router-view></router-view>
    <!-- <h2>JPG 902K</h2>
          <img src="./assets/img/life.jpg"
               alt="">
          <h2>PNG 2M</h2>
          <img src="./assets/img/life.png"
               alt=""> -->
    <button @click="changeTest">点我</button>
    {{test}}
    <temp1 :pt='test'></temp1>
  </div>
</template>
<script>
  import temp1 from './components/temp1/main.vue';

  export default {
    methods: {
      changeTest() {
        this.test = { a: 1 };
        console.log(this.test);
      }
    },
    watch: {},
    computed: {},
    data() {
      return {
        test: null,
        test1: 1,
        test2: {}
      };
    },
    mounted() {
      const resData = { orgDid: 13, campaignDid: 1, id: 1 };
      this.__ajax(this.__campListOpt,resData);
//      this.__ajax(this.__campViewOpt,resData);
      this.__ajaxAll([this.__ajax(this.__campListOpt,resData), this.__ajax(this.__campViewOpt,resData)], (resList) => {
        console.log(resList);
        const a = Array.isArray(resList);
        console.log(a);
      });
//      console.log(this.test);
//      console.log(this.test1);
//      console.log(this.test2);
    },
    created() {
      this.test = { a: 1 };
      setTimeout(() => {
        this.test = { a: 2 };
      }, 0);
      // this.test=1
    },
    beforeCreate() {
    },
    components: {
      temp1
    },
    props: {},
    name: ''
  };
</script>
